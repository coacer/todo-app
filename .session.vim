let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/dev/practice/js/React/todo-app
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +44 src/components/todos/TodoItem/__test__/index.spec.tsx
badd +29 src/components/todos/TodoItem/index.tsx
badd +19 src/components/todos/TodoList/index.tsx
badd +23 src/components/todos/TodoList/__test__/index.spec.tsx
badd +399 node_modules/@types/enzyme/index.d.ts
badd +6 src/components/todos/SelectFilterBox/index.tsx
badd +10 src/components/todos/SelectFilterBox/__test__/index.spec.tsx
badd +41 src/pages/todos/index.tsx
badd +1 src/components/layouts/Header/index.tsx
badd +15 src/App.tsx
badd +15 src/components/layouts/Header/__test__/index.spec.tsx
badd +14 ~/dev/practice/js/React/todo-app/src/store/actions/todos/index.ts
badd +1 src/store/actions/actionTypes.spec.ts
argglobal
%argdel
edit src/store/actions/actionTypes.spec.ts
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 102 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 101 + 102) / 204)
exe '3resize ' . ((&lines * 2 + 20) / 40)
exe 'vert 3resize ' . ((&columns * 80 + 102) / 204)
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
let s:l = 1 - ((0 * winheight(0) + 18) / 36)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
wincmd w
argglobal
if bufexists("src/components/layouts/Header/__test__/index.spec.tsx") | buffer src/components/layouts/Header/__test__/index.spec.tsx | else | edit src/components/layouts/Header/__test__/index.spec.tsx | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 9 - ((8 * winheight(0) + 18) / 36)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
9
normal! 018|
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
exe 'vert 1resize ' . ((&columns * 102 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 101 + 102) / 204)
exe '3resize ' . ((&lines * 2 + 20) / 40)
exe 'vert 3resize ' . ((&columns * 80 + 102) / 204)
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
