const { breakParent, concat, group, ifBreak, indent, softline } = require("prettier").doc.builders;
const { hasAncestor } = require("../utils");

const printBlock = (path, opts, print) => {
  const [variables, statements] = path.getValue().body;
  const stmts = statements.type === "stmts" ? statements.body : statements.body[0].body;

  let doBlockBody = "";
  if (stmts.length !== 1 || stmts[0].type !== "void_stmt") {
    doBlockBody = indent(concat([softline, path.call(print, "body", 1)]));
  }

  // If this block is nested underneath a command or command_call node, then we
  // can't use `do...end` because that will get associated with the parent node
  // as opposed to the current node (because of the difference in operator
  // precedence). Instead, we still use a multi-line format but switch to using
  // braces instead.
  const useBraces = hasAncestor(path, ["command", "command_call"]);

  const doBlock = concat([
    useBraces ? " {" : " do",
    variables ? concat([" ", path.call(print, "body", 0)]) : "",
    doBlockBody,
    concat([softline, useBraces ? "}" : "end"])
  ]);

  // We can hit this next pattern if within the block the only statement is a
  // comment.
  if (stmts.length > 1 && stmts.filter(stmt => stmt.type !== "@comment").length === 1) {
    return concat([breakParent, doBlock]);
  }

  // If the parent node is a command node, then there are no parentheses around
  // the arguments to that command, so we need to break the block
  if (["command", "command_call"].includes(path.getParentNode().body[0].type)) {
    return concat([breakParent, doBlock]);
  }

  const hasBody = stmts.some(({ type }) => type !== "void_stmt");
  const braceBlock = concat([
    " {",
    (hasBody || variables) ? " " : "",
    variables ? path.call(print, "body", 0) : "",
    path.call(print, "body", 1),
    hasBody ? " " : "",
    "}"
  ]);

  return group(ifBreak(doBlock, braceBlock));
};

module.exports = {
  brace_block: printBlock,
  do_block: printBlock
};
