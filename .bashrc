export PATH=$PATH:/c/Users/meyerd/AppData/Roaming/npm/node_modules/http-server/bin
export PS1="\u@\h\[\033[32m\]\w\[\033[33m\]\$(parse_git_branch)\[\033[00m\]$ "
#function emacs() { ~/EmacsApp/bin/emacs.exe $1; } 
function dots() { cd ~/Git/dot-files; }

alias gs='git status'
alias gd='git diff'
alias gc='git checkout'
alias grso='git remote show origin'
alias wth='curl http://wttr.in/cleveland'
alias ll='ls -alh'

function parse_git_branch() {
	git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/[\1]/'
}

function gf() {
	find ~/Git -type d -iname '.git' | sed 's|/.git||' | nl
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
	  linux*)	fuzzy $(xclip -o) ;;
  	  msys*)	fuzzy $(cat /dev/clipboard) ;;
	esac
}

function kuis() {
	echo $1
	currdir=$(pwd)
	kui && cd ./components
	fuzzy $1 | sed '/.*\.min.\js/d;/.*\/libs\/angular.*/d'
	cd $currdir
}

function kwebs() {
	echo $1
	currdir=$(pwd)
	kweb && cd ./WebApi
	fuzzy $1 | sed '/.*\.dll/d;/.*\.pdb/d'
	cd $currdir
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
