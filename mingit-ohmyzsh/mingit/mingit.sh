# custom git completions 
_git_a ()
{
    _git_add
}
_git_b ()
{
    _git_branch
}
_git_c ()
{
    _git_commit
}
_git_co () 
{
    _git_checkout 
}
_git_d ()
{
    _git_diff
}
_git_f ()
{
	_git_fetch
}
_git_i ()
{
    _git_init
}
_git_m ()
{
    _git_merge
}
_git_pll ()
{
    _git_pull
}
_git_psh ()
{
    _git_push
}

# git alias land
g ()
{
	arg1=$1
	shift
	if [[ $arg1 == "b" ]]; then
		arg2=$1
		if [[  $arg2 == "which" ]]; then
			git branch --show-current
		else
			git branch $@
		fi
	else
		case "$arg1" in
			a)
				git add $@;;
			c)
				git commit "$@";;
			co)
				git checkout $@;;
			d)
				git diff $@;;
			f)
				git fetch $@;;
			i)
				git init $@;;
			m)
				git merge $@;;
			pll)
				git pull $@;;
			psh)
				git push $@;;
			rst)
				git reset $@;;
			rsto)
				git restore $@;;
			s)
				git status $@;;
			*)
				git $arg1 $@;;
		esac
	fi
}
