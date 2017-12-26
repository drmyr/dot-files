export PS1="\[\033[1;37m\]\u@\h\[\033[1;34m\]\w\[\033[1;36m\]\$(parse_git_branch)\[\033[1;33m\]\n\[\033[1;31m\]$ \[\033[1;32m\]"
export HISTTIMEFORMAT="%d/%m/%y %T "
alias ll='ls -alh'
function dots() { cd ~/Git/dot-files && ll; }
function notes() { cd ~/Git/notes && ll; }
function dwn() { cd ~/Downloads && ll; }
alias sb='source ~/.bashrc'
alias gs='git status'
alias gd='git diff'
alias gc='git checkout'
alias grso='git remote show origin'
alias gls='git ls-files'
alias glog='git log --all --oneline --graph --decorate --abbrev-commit --color'
alias wth='curl http://wttr.in/cleveland'

function parse_git_branch() {
	git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/[\1]/'
}

function atompacs() {
	apm list --installed --pure
}

function getclip {
	case "$OSTYPE" in 
	  linux*)  xclip -selection c -o ;;
	  msys*)   cat /dev/clipboard ;;
	esac
}

function uNgTwoCli() {
	sudo npm uninstall -g angular-cli
	sudo npm cache clean
	sudo npm install -g @angular/cli@latest
}

function grs() {
	repos=( $(ls -d ~/Git/*) )
	for i in "${!repos[@]}"; do
		echo "$i...$(basename ${repos[$i]})"
	done
	echo -n "Selection: " && read selection
	cd ${repos[$selection]}
}

function gacp() {
	git add . && git commit -m "$1" && git push
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
	find ~/Git/* -maxdepth 0 -type d -exec sh -c \
	     "(echo {} && cd {} && $1 && echo '-----------------------------------------')" \;
}

function getJvmDefaults() {
	java -XX:+PrintCommandLineFlags
}
