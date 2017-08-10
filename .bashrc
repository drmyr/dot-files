export PATH=$PATH:/c/Users/meyerd/AppData/Roaming/npm/node_modules/http-server/bin

function emacs() { ~/EmacsApp/bin/emacs.exe $1; } 
function kui() { cd ~/Git/Kalibrate-UI; }
function kdb() { cd ~/Git/Kalibrate-Database; }
function kweb() { cd ~/Git/Kalibrate-Web-API; }
function dots() { cd ~/Git/dot-files; }

alias gs='git status'
alias gd='git diff'
alias gc='git checkout'
alias wth='curl http://wttr.in/cleveland'

function trim() {
    mv "$1" $(echo "$1" | sed 's/ //g')
}

function cbs() {
	case "$OSTYPE" in 
	  darwin*)	egrep -Rni $(pbpaste) . ;;
	  linux*)	fuzzy $(xclip -o) ;;
  	  *)		fuzzy $(cat /dev/clipboard) ;;
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
	egrep -Rni ".*$1.*"
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
