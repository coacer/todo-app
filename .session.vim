let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/dev/practice/js/React/todo-app
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +49 src/components/todos/TodoItem/__test__/index.spec.tsx
badd +13 src/components/todos/TodoItem/index.tsx
badd +93 src/store/actions/todos.ts
badd +12 src/components/todos/TodoList/index.tsx
badd +4 src/components/todos/TodoList/__test__/index.spec.tsx
badd +399 node_modules/@types/enzyme/index.d.ts
argglobal
%argdel
edit src/components/todos/TodoItem/index.tsx
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 27 + 29) / 58)
exe 'vert 1resize ' . ((&columns * 102 + 102) / 204)
exe '2resize ' . ((&lines * 26 + 29) / 58)
exe 'vert 2resize ' . ((&columns * 102 + 102) / 204)
exe '3resize ' . ((&lines * 27 + 29) / 58)
exe 'vert 3resize ' . ((&columns * 101 + 102) / 204)
exe '4resize ' . ((&lines * 26 + 29) / 58)
exe 'vert 4resize ' . ((&columns * 101 + 102) / 204)
exe '5resize ' . ((&lines * 3 + 29) / 58)
exe 'vert 5resize ' . ((&columns * 80 + 102) / 204)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 12 - ((1 * winheight(0) + 13) / 27)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
12
normal! 010|
wincmd w
argglobal
if bufexists("src/components/todos/TodoItem/__test__/index.spec.tsx") | buffer src/components/todos/TodoItem/__test__/index.spec.tsx | else | edit src/components/todos/TodoItem/__test__/index.spec.tsx | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 69 - ((20 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
69
normal! 05|
wincmd w
argglobal
if bufexists("src/components/todos/TodoList/index.tsx") | buffer src/components/todos/TodoList/index.tsx | else | edit src/components/todos/TodoList/index.tsx | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 9 - ((8 * winheight(0) + 13) / 27)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
9
normal! 0
wincmd w
argglobal
if bufexists("src/components/todos/TodoList/__test__/index.spec.tsx") | buffer src/components/todos/TodoList/__test__/index.spec.tsx | else | edit src/components/todos/TodoList/__test__/index.spec.tsx | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 26 - ((12 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
26
normal! 0
wincmd w
argglobal
enew
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
wincmd w
2wincmd w
exe '1resize ' . ((&lines * 27 + 29) / 58)
exe 'vert 1resize ' . ((&columns * 102 + 102) / 204)
exe '2resize ' . ((&lines * 26 + 29) / 58)
exe 'vert 2resize ' . ((&columns * 102 + 102) / 204)
exe '3resize ' . ((&lines * 27 + 29) / 58)
exe 'vert 3resize ' . ((&columns * 101 + 102) / 204)
exe '4resize ' . ((&lines * 26 + 29) / 58)
exe 'vert 4resize ' . ((&columns * 101 + 102) / 204)
exe '5resize ' . ((&lines * 3 + 29) / 58)
exe 'vert 5resize ' . ((&columns * 80 + 102) / 204)
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
