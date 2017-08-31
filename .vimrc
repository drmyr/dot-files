filetype plugin indent on
syntax on
au FileType xml setlocal equalprg=xmllint\ --format\ --recover\ -\ 2>/dev/null
autocmd BufNewFile,BufRead *.json set ft=javascript
