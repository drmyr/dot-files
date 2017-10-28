export PATH=$PATH:/c/Users/meyerd/AppData/Roaming/npm/node_modules/http-server/bin
export PS1="\[\033[1;37m\]\u@\h\[\033[1;34m\]\w\[\033[1;36m\]\$(parse_git_branch)\[\033[1;33m\]\n\[\033[1;31m\]$ \[\033[1;32m\]"
#function emacs() { ~/EmacsApp/bin/emacs.exe $1; }
alias ll='ls -alh'
function dots() { cd ~/Git/dot-files && ll; }
function notes() { cd ~/Git/notes && ll; }
function dwn() { cd ~/Downloads && ll; }
alias sb='source ~/.bashrc'
alias gs='git status'
alias gd='git diff'
alias gc='git checkout'
alias grso='git remote show origin'
alias wth='curl http://wttr.in/cleveland'

function parse_git_branch() {
	git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/[\1]/'
}

function atompacs() {
	apm list --installed --pure
}

function getclip {
	xclip -selection c -o
}

function uNgTwoCli() {
	sudo npm uninstall -g angular-cli
	sudo npm cache clean
	sudo npm install -g @angular/cli@latest
}

function grs() {
	find ~/Git -type d -iname '.git' | sed 's|/.git||;s|^.*/Git/||' | nl
	read selection
	cd $(find ~/Git -type d -iname '.git' | sed 's|/.git||' | awk "NR==$selection")
}

function gacp() {
	git add .
	git commit -m "$1"
	git push
}

function trim() {
    mv "$1" $(echo "$1" | sed 's/ //g')
}

function cbs() {
	case "$OSTYPE" in 
	  darwin*)	fuzzy $(pbpaste) ;;
	  linux*)	fuzzy $(getclip) ;;
  	  msys*)	fuzzy $(cat /dev/clipboard) ;;
	esac
}

function fuzzy() {
	case "$OSTYPE" in
	   darwin*) egrep -Rni ".*$1.*" . ;;
   	   *)	    egrep -Rni ".*$1.*" ;;	
	esac
}

function gsa() {
	gitlooper 'git status'
}

function fetchall() {
	gitlooper 'git fetch'
}

function gitlooper() {
	currdir=$(pwd)
	cd ~/Git && dirs=( $(ls) )
	for i in "${dirs[@]}"
	do
		echo ~/Git/"$i"
		cd ~/Git/"$i"
		$1
		echo "------------------------------------------"
	done
	cd $currdir
}
