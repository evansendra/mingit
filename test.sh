echo $ZSH_CUSTOM
if [[ -z "$ZSH_CUSTOM" ]]; then
  echo "Please check ohmyzsh install; \$ZSH_CUSTOM not set"
  exit 1
else
  echo "\$ZSH_CUSTOM is $ZSH_CUSTOM"
  exit 0
fi
