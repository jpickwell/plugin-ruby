# prettier-ruby

This is a work in progress plugin for prettier that supports the Ruby programming language. Under the hood it uses the [`ripperjs`](https://github.com/kddeisz/ripperjs) package (which in turn uses Ruby's own `ripper` library) which allows this package to maintain parity with the existing Ruby parser.

## Status

There are a lot of node types to support still, as well as tests to write for each. Below is the list of types and their current status.

- [ ] BEGIN
- [ ] END
- [x] alias
- [ ] alias_error
- [x] aref
- [ ] aref_field
- [ ] arg_ambiguous
- [x] arg_paren
- [ ] args_add
- [x] args_add_block
- [ ] args_add_star
- [ ] args_new
- [x] array
- [x] assign
- [ ] assign_error
- [ ] assoc_new
- [ ] assoc_splat
- [ ] assoclist_from_args
- [ ] bare_assoc_hash
- [x] begin
- [x] binary
- [x] block_var
- [ ] blockarg
- [x] bodystmt
- [x] brace_block
- [x] break
- [x] call
- [ ] case
- [x] class
- [ ] class_name_error
- [x] command
- [ ] command_call
- [ ] const_path_field
- [x] const_path_ref
- [x] const_ref
- [x] def
- [x] defined
- [ ] defs
- [x] do_block
- [x] dot2
- [x] dot3
- [ ] dyna_symbol
- [x] else
- [ ] elsif
- [x] ensure
- [ ] excessed_comma
- [x] fcall
- [ ] field
- [ ] for
- [ ] hash
- [ ] heredoc_dedent
- [ ] if
- [ ] if_mod
- [ ] ifop
- [ ] kwrest_param
- [ ] lambda
- [ ] magic_comment
- [x] massign
- [x] method_add_arg
- [x] method_add_block
- [ ] mlhs_add
- [ ] mlhs_add_post
- [ ] mlhs_add_star
- [ ] mlhs_new
- [ ] mlhs_paren
- [x] module
- [ ] mrhs_add
- [ ] mrhs_add_star
- [ ] mrhs_new
- [ ] mrhs_new_from_args
- [x] next
- [ ] opassign
- [ ] operator_ambiguous
- [ ] param_error
- [x] params
- [x] paren
- [ ] parse_error
- [x] program
- [ ] qsymbols_add
- [ ] qsymbols_new
- [ ] qwords_add
- [ ] qwords_new
- [ ] redo
- [ ] regexp_add
- [ ] regexp_literal
- [ ] regexp_new
- [x] rescue
- [ ] rescue_mod
- [ ] rest_param
- [x] retry
- [x] return
- [x] return0
- [x] sclass
- [ ] stmts_add
- [ ] stmts_new
- [ ] string_add
- [ ] string_concat
- [x] string_content
- [ ] string_dvar
- [x] string_embexpr
- [x] string_literal
- [x] super
- [x] symbol
- [x] symbol_literal
- [ ] symbols_add
- [ ] symbols_new
- [ ] top_const_field
- [ ] top_const_ref
- [x] unary
- [x] undef
- [x] unless
- [ ] unless_mod
- [ ] until
- [ ] until_mod
- [ ] var_alias
- [x] var_field
- [x] var_ref
- [x] vcall
- [x] void_stmt
- [ ] when
- [ ] while
- [ ] while_mod
- [ ] word_add
- [ ] word_new
- [ ] words_add
- [ ] words_new
- [ ] xstring_add
- [ ] xstring_literal
- [ ] xstring_new
- [x] yield
- [x] yield0
- [x] zsuper
