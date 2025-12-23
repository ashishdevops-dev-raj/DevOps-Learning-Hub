// Git & GitHub Interview Questions - 100 Questions
// Easy Level (1-35), Medium Level (36-70), Hard Level (71-100)

export const gitQuestions = [
  // Easy Level (Questions 1-35)
  {
    topic: 'Git',
    question: 'What is Git?',
    answer: 'Git is a distributed version control system that tracks changes in source code during software development. It allows multiple developers to work on the same project simultaneously.',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'What is the difference between Git and GitHub?',
    answer: '- **Git**: Version control system (software)\n- **GitHub**: Cloud-based hosting service for Git repositories with additional features like pull requests, issues, and project management',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'What is a repository?',
    answer: 'A repository (repo) is a directory that contains your project files and the entire history of changes. It\'s tracked by Git.',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you initialize a Git repository?',
    answer: 'Use `git init`:\n```bash\ngit init\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you clone a repository?',
    answer: 'Use `git clone`:\n```bash\ngit clone <url>\ngit clone <url> <directory>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'Explain the three states of a file in Git.',
    answer: 'Three states:\n1. **Modified**: File has been changed but not staged\n2. **Staged**: File is marked to be included in the next commit\n3. **Committed**: File is safely stored in the local database',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you check the status of your repository?',
    answer: 'Use `git status`:\n```bash\ngit status\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you stage files?',
    answer: 'Use `git add`:\n```bash\ngit add <file>\ngit add .\ngit add -A\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'What is the difference between `git add .` and `git add -A`?',
    answer: '- `git add .`: Stages files in current directory and subdirectories\n- `git add -A`: Stages all changes in the entire repository (including deletions)',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you commit changes?',
    answer: 'Use `git commit`:\n```bash\ngit commit -m "message"\ngit commit -am "message"  # Stage and commit (modified files only)\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'What is a commit?',
    answer: 'A commit is a snapshot of your repository at a specific point in time. It includes:\n- A unique hash (SHA-1)\n- Author information\n- Commit message\n- Reference to parent commit(s)',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you view commit history?',
    answer: 'Use `git log`:\n```bash\ngit log\ngit log --oneline\ngit log --graph --oneline --all\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you see what changed in a commit?',
    answer: 'Use these commands:\n```bash\ngit show <commit>\ngit diff\ngit diff --staged\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'What is a branch?',
    answer: 'A branch is a movable pointer to a commit. It allows you to work on different features or versions of your code independently.',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you create a branch?',
    answer: 'Use these commands:\n```bash\ngit branch <name>\ngit checkout -b <name>\ngit switch -c <name>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you switch branches?',
    answer: 'Use these commands:\n```bash\ngit checkout <branch>\ngit switch <branch>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you list branches?',
    answer: 'Use `git branch`:\n```bash\ngit branch\ngit branch -a  # All branches including remote\ngit branch -r  # Remote branches only\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you delete a branch?',
    answer: 'Use these commands:\n```bash\ngit branch -d <name>  # Safe delete\ngit branch -D <name>  # Force delete\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'What is a remote?',
    answer: 'A remote is a reference to another repository, typically on a server like GitHub. Common remote name is "origin".',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you add a remote?',
    answer: 'Use `git remote add`:\n```bash\ngit remote add origin <url>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you view remotes?',
    answer: 'Use `git remote`:\n```bash\ngit remote -v\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you push to remote?',
    answer: 'Use `git push`:\n```bash\ngit push\ngit push -u origin <branch>  # Push and set upstream\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you pull from remote?',
    answer: 'Use these commands:\n```bash\ngit pull\ngit fetch\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'What is the difference between `git pull` and `git fetch`?',
    answer: '- `git fetch`: Downloads changes from remote but doesn\'t merge them\n- `git pull`: Downloads changes and automatically merges them into current branch (fetch + merge)',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'What is `.gitignore`?',
    answer: '`.gitignore` is a file that specifies which files Git should ignore (not track). Common entries:\n```\n*.log\nnode_modules/\n.env\n.DS_Store\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'What is a merge?',
    answer: 'A merge combines changes from different branches into one branch.',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you merge branches?',
    answer: 'Use `git merge`:\n```bash\ngit merge <branch>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'What is a merge conflict?',
    answer: 'A merge conflict occurs when Git cannot automatically merge changes. Happens when:\n- Same lines changed in different branches\n- One branch deleted a file, other modified it',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you resolve a merge conflict?',
    answer: 'Steps to resolve:\n1. Identify conflicted files (`git status`)\n2. Open files and look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)\n3. Edit to resolve conflicts\n4. Stage resolved files (`git add`)\n5. Complete merge (`git commit`)',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'What is a Pull Request (PR)?',
    answer: 'A Pull Request is a GitHub feature that proposes changes to a repository. It allows code review and discussion before merging.',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'What is a fork?',
    answer: 'A fork is a copy of a repository that you own. Allows you to make changes without affecting the original repository.',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'Explain the difference between fork and clone.',
    answer: '- **Fork**: Creates a copy on GitHub (server-side)\n- **Clone**: Downloads repository to local machine',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'What is the difference between `main` and `master`?',
    answer: 'Both are default branch names. `master` was traditional, `main` is now preferred for inclusivity.',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you rename a branch?',
    answer: 'Use `git branch -m`:\n```bash\ngit branch -m <old> <new>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Git',
    question: 'How do you see which branch you\'re on?',
    answer: 'Use these commands:\n```bash\ngit branch\ngit status\n```',
    difficulty: 'Easy'
  },

  // Medium Level (Questions 36-70)
  {
    topic: 'Git',
    question: 'Explain the basic Git workflow.',
    answer: 'Basic workflow:\n1. Modify files in working directory\n2. Stage changes (`git add`)\n3. Commit changes (`git commit`)\n4. Push to remote (`git push`)',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'What is the staging area (index)?',
    answer: 'The staging area is an intermediate area where you prepare changes before committing. It allows you to selectively choose what to commit.',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'What is the difference between `git checkout` and `git switch`?',
    answer: '- `git checkout`: Older command that can switch branches or restore files\n- `git switch`: Newer, dedicated command for switching branches (Git 2.23+)',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'Explain the difference between `git merge` and `git rebase`.',
    answer: '- **Merge**: Creates a merge commit combining two branches, preserving history\n- **Rebase**: Moves commits from one branch onto another, creating a linear history',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'What is a fast-forward merge?',
    answer: 'A fast-forward merge occurs when the target branch hasn\'t diverged from the source branch. Git simply moves the pointer forward.',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'How do you perform a rebase?',
    answer: 'Use `git rebase`:\n```bash\ngit rebase <branch>\ngit rebase -i <commit>  # Interactive rebase\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'What is the difference between `git rebase` and `git merge`?',
    answer: '- **Rebase**: Creates linear history, rewrites commit history\n- **Merge**: Preserves branch history, creates merge commit',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'When should you use `git rebase` vs `git merge`?',
    answer: '- **Rebase**: For cleaner history, feature branches (before merging)\n- **Merge**: For shared/public branches, preserving exact history',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'How do you amend a commit?',
    answer: 'Use `git commit --amend`:\n```bash\ngit commit --amend -m "New message"\n```\nThis modifies the last commit. Use with caution if already pushed.',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'How do you add a file to the last commit?',
    answer: 'Use these commands:\n```bash\ngit add forgotten_file\ngit commit --amend --no-edit\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'Explain the difference between `git reset` and `git revert`.',
    answer: '- `git reset`: Moves the branch pointer backward (rewrites history)\n- `git revert`: Creates a new commit that undoes changes (preserves history)',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'What are the three types of `git reset`?',
    answer: 'Three reset types:\n- `--soft`: Moves HEAD, keeps changes staged\n- `--mixed` (default): Moves HEAD, unstages changes, keeps in working directory\n- `--hard`: Moves HEAD, discards all changes',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'How do you discard local changes?',
    answer: 'Use these commands:\n```bash\ngit checkout -- <file>    # Discard changes in file\ngit reset --hard HEAD     # Discard all changes\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'What is `git stash`?',
    answer: '`git stash` temporarily saves uncommitted changes so you can work on something else, then reapply them later.',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'How do you use git stash?',
    answer: 'Use these commands:\n```bash\ngit stash\ngit stash save "message"\ngit stash list\ngit stash apply\ngit stash pop\ngit stash drop\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'What is the difference between `git stash apply` and `git stash pop`?',
    answer: '- `git stash apply`: Applies stash but keeps it in stash list\n- `git stash pop`: Applies stash and removes it from stash list',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'Explain the difference between `git push --force` and `git push --force-with-lease`.',
    answer: '- `--force`: Overwrites remote branch regardless of its state (dangerous)\n- `--force-with-lease`: Only overwrites if remote hasn\'t changed (safer)',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'What is the upstream branch?',
    answer: 'The upstream branch is the remote branch that your local branch tracks. Set with `git push -u origin <branch>`.',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'How do you set upstream branch?',
    answer: 'Use these commands:\n```bash\ngit push -u origin <branch>\ngit branch --set-upstream-to=origin/<branch> <branch>\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'What is a tag?',
    answer: 'A tag is a reference to a specific commit, often used for releases.',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'How do you create a tag?',
    answer: 'Use `git tag`:\n```bash\ngit tag <name>                    # Lightweight tag\ngit tag -a <name> -m "message"    # Annotated tag\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'How do you push tags?',
    answer: 'Use these commands:\n```bash\ngit push origin <tag>\ngit push --tags\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'What is a detached HEAD state?',
    answer: 'When you checkout a specific commit instead of a branch, you\'re in a detached HEAD state. Changes won\'t be associated with any branch.',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'How do you get out of detached HEAD?',
    answer: 'Use these commands:\n```bash\ngit checkout <branch>\ngit checkout -b <new-branch>\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'What is `git cherry-pick`?',
    answer: '`git cherry-pick` applies a specific commit from one branch to another branch.',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'How do you cherry-pick a commit?',
    answer: 'Use `git cherry-pick`:\n```bash\ngit cherry-pick <commit>\ngit cherry-pick <commit1> <commit2>\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'Explain Git rebase interactively.',
    answer: 'Interactive rebase (`git rebase -i`) allows you to:\n- Edit commits\n- Combine commits (squash)\n- Reorder commits\n- Remove commits',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'What is a submodule?',
    answer: 'A submodule is a Git repository inside another Git repository. Useful for including external dependencies.',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'How do you work with submodules?',
    answer: 'Use these commands:\n```bash\ngit submodule add <url> <path>\ngit submodule init\ngit submodule update\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'What makes a good commit message?',
    answer: 'Good commit message:\n- Clear and descriptive\n- Present tense ("Add feature" not "Added feature")\n- First line < 50 characters\n- Body explains what and why',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'What is a good branching strategy?',
    answer: 'Common strategies:\n- **Git Flow**: `main`, `develop`, `feature/*`, `release/*`, `hotfix/*`\n- **GitHub Flow**: `main` and feature branches\n- **Trunk-based**: Single branch with frequent commits',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'How do you view differences between branches?',
    answer: 'Use `git diff`:\n```bash\ngit diff <branch1> <branch2>\ngit diff main..feature\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'How do you find which commit changed a file?',
    answer: 'Use `git log`:\n```bash\ngit log -- <file>\ngit log -p -- <file>\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'How do you see who changed a line?',
    answer: 'Use `git blame`:\n```bash\ngit blame <file>\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Git',
    question: 'What is `git reflog`?',
    answer: '`reflog` shows a log of where your HEAD and branch references have been. Useful for recovering "lost" commits.',
    difficulty: 'Medium'
  },

  // High/Advanced Level (Questions 71-100)
  {
    topic: 'Git',
    question: 'How do you recover a deleted branch?',
    answer: 'Use reflog:\n```bash\ngit reflog            # Find the commit hash\ngit checkout -b <branch> <commit-hash>\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'How do you find which commit introduced a bug?',
    answer: 'Use `git bisect`:\n```bash\ngit bisect start\ngit bisect bad        # Mark current commit as bad\ngit bisect good <commit>  # Mark known good commit\n# Git will help you narrow down the problematic commit\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'What is `git bisect`?',
    answer: '`git bisect` uses binary search to find the commit that introduced a bug.',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'How do you remove a file from Git but keep it locally?',
    answer: 'Use `git rm --cached`:\n```bash\ngit rm --cached <file>\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'How do you remove a file from Git and delete it?',
    answer: 'Use `git rm`:\n```bash\ngit rm <file>\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'What is `git clean`?',
    answer: '`git clean` removes untracked files from the working directory.',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'How do you use git clean?',
    answer: 'Use these commands:\n```bash\ngit clean -n         # Dry run\ngit clean -f         # Remove untracked files\ngit clean -fd        # Remove untracked files and directories\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'What is `git worktree`?',
    answer: '`git worktree` allows you to have multiple working directories for the same repository.',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'How do you create a worktree?',
    answer: 'Use `git worktree add`:\n```bash\ngit worktree add <path> <branch>\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'What is `git filter-branch`?',
    answer: '`git filter-branch` rewrites Git history, useful for removing sensitive data or changing file structure.',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'What is `git filter-repo`?',
    answer: '`git filter-repo` is a modern replacement for `filter-branch`, faster and safer.',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'How do you change the author of commits?',
    answer: 'Use these commands:\n```bash\ngit commit --amend --author="Name <email>"\n# Or for multiple commits\ngit rebase -i <commit> --exec \'git commit --amend --author="Name <email>" --no-edit\'\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'What is `git hooks`?',
    answer: 'Git hooks are scripts that run automatically at certain points in the Git workflow.',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'Where are Git hooks stored?',
    answer: '`.git/hooks/` directory in the repository.',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'What are common Git hooks?',
    answer: 'Common hooks:\n- `pre-commit`: Before commit\n- `post-commit`: After commit\n- `pre-push`: Before push\n- `commit-msg`: Validate commit message',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'What is `git config`?',
    answer: '`git config` sets and reads Git configuration values.',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'How do you configure Git?',
    answer: 'Use `git config`:\n```bash\ngit config --global user.name "Your Name"\ngit config --global user.email "your.email@example.com"\ngit config --list\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'What is `git alias`?',
    answer: 'Git aliases allow you to create shortcuts for Git commands.',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'How do you create a Git alias?',
    answer: 'Use `git config`:\n```bash\ngit config --global alias.st status\ngit config --global alias.co checkout\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'What is `git bundle`?',
    answer: '`git bundle` packages a repository into a single file for transfer.',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'How do you create a bundle?',
    answer: 'Use `git bundle create`:\n```bash\ngit bundle create repo.bundle HEAD master\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'What is `git archive`?',
    answer: '`git archive` creates an archive of files from a named tree.',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'How do you create an archive?',
    answer: 'Use `git archive`:\n```bash\ngit archive --format=tar --output=archive.tar HEAD\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'What is `git notes`?',
    answer: '`git notes` adds notes to commits without modifying the commit itself.',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'How do you add notes to a commit?',
    answer: 'Use `git notes add`:\n```bash\ngit notes add -m "Note text" <commit>\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'What is `git replace`?',
    answer: '`git replace` allows you to replace one object with another without modifying history.',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'What is shallow clone?',
    answer: 'A shallow clone limits the history depth, useful for large repositories.',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'How do you create a shallow clone?',
    answer: 'Use `--depth` flag:\n```bash\ngit clone --depth 1 <url>\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'What is `git sparse-checkout`?',
    answer: '`git sparse-checkout` allows you to work with a subset of files in a large repository.',
    difficulty: 'Hard'
  },
  {
    topic: 'Git',
    question: 'How do you use sparse-checkout?',
    answer: 'Use these commands:\n```bash\ngit sparse-checkout init\ngit sparse-checkout set <dir>\n```',
    difficulty: 'Hard'
  }
]

