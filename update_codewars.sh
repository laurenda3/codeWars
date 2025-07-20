#!/bin/bash

# My Repo
cd /home/laurenda/codeWars || exit

# Add all new or changed files
git add .

# Commit with timestamp
commit_message="Codewars Update: $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$Update kata file"

# Push to github
git push origin main

# Only commit and push if there are changes.
if ! git diff-index --quiet HEAD --; then
    git commit -m "$Push if changes are made"
git push origin main

else
    echo "No changes to commit"
fi

