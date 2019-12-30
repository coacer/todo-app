let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/dev/practice/js/React/todo-app
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +11 src/App.tsx
badd +5 src/pages/todos/index.tsx
badd +1 src/pages/todos/new.tsx
badd +7 src/components/layouts/Header.tsx
badd +5 src/components/layouts/Footer.tsx
badd +15 src/interfaces/index.ts
badd +2 src/store/actions/types.ts
badd +67 src/store/actions/todos.ts
badd +6 src/store/reducers/index.ts
badd +7 src/store/index.ts
badd +31 src/store/reducers/todos.ts
badd +3 src/App.css
badd +0 src/App.test.tsx
badd +0 src/components
badd +0 src/components/layouts
badd +0 src/index.css
badd +0 src/index.tsx
badd +0 src/interfaces
badd +0 src/logo.svg
badd +0 src/pages
badd +0 src/pages/todos
badd +0 src/react-app-env.d.ts
badd +0 src/serviceWorker.ts
badd +0 src/setupTests.ts
badd +0 src/store
badd +0 src/store/actions
badd +0 src/store/reducers
argglobal
%argdel
$argadd src/App.css
$argadd src/App.test.tsx
$argadd src/App.tsx
$argadd src/components
$argadd src/components/layouts
$argadd src/components/layouts/Footer.tsx
$argadd src/components/layouts/Header.tsx
$argadd src/index.css
$argadd src/index.tsx
$argadd src/interfaces
$argadd src/interfaces/index.ts
$argadd src/logo.svg
$argadd src/pages
$argadd src/pages/todos
$argadd src/pages/todos/index.tsx
$argadd src/pages/todos/new.tsx
$argadd src/react-app-env.d.ts
$argadd src/serviceWorker.ts
$argadd src/setupTests.ts
$argadd src/store
$argadd src/store/actions
$argadd src/store/actions/todos.ts
$argadd src/store/actions/types.ts
$argadd src/store/index.ts
$argadd src/store/reducers
$argadd src/store/reducers/index.ts
$argadd src/store/reducers/todos.ts
edit src/components/layouts/Footer.tsx
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
if bufexists("src/components/layouts/Footer.tsx") | buffer src/components/layouts/Footer.tsx | else | edit src/components/layouts/Footer.tsx | endif
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
normal! 0
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
