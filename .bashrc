if [ -L ~/.bash_aliases ]; then
	source $(readlink ~/.bash_aliases)
fi
