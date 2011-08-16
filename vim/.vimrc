" global functioins
function! GetSys()
  if has("win32")
    return "win32"
  elseif has("unix")
    return "unix"
  else
    return "mac"
  endif
endfunction

" generic
set runtimepath=~/cfg/vim,$VIMRUNTIME
set nocompatible
set number
set showcmd
set fileformats=unix,dos,mac
set encoding=utf-8
syntax on

set history=600 "Command history count
set wildmenu "Turn on WiLd menu
set ruler "Always show current positon 
set cmdheight=2 "Command buffer heigh

set smartcase
set ignorecase "Ignore case when searching
set hlsearch "Highlight search things
set incsearch "Make search act like search in modern browsers

set showmatch "Show matching bracets when text indicator is over them
set matchtime=3 "How many tenths of a second to blin

" settings of tab
set expandtab
set tabstop=4
set shiftwidth=4
set softtabstop=4

set autoindent 
set smartindent

set mouse=v "catch mouse TODO set variant from OSs

if has("gui_running")
  set background=dark
  colorscheme peaksea
else
  set background=dark
  colorscheme zellner
endif
