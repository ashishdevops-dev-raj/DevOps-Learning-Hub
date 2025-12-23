import CodeBlock from '@/components/CodeBlock'
import BackButton from '@/components/BackButton'

export default function GitPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      <h1 className="text-4xl font-bold mb-6">Git & GitHub</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Git Commands</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Repository Setup</h3>
          <CodeBlock
            code={`# Initialize repository
git init

# Clone repository
git clone https://github.com/user/repo.git

# Add remote
git remote add origin https://github.com/user/repo.git

# Check remote
git remote -v`}
            language="bash"
            title="Repository setup"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Basic Workflow</h3>
          <CodeBlock
            code={`# Check status
git status
git status -s  # Short format
git status --ignored  # Show ignored files

# Add files
git add file.txt
git add .  # Add all files
git add -A  # Add all changes (including deletions)
git add -u  # Add only tracked files
git add -p  # Interactive staging

# Commit changes
git commit -m "Add new feature"
git commit -am "Add and commit tracked files"  # Skip staging
git commit --amend  # Modify last commit
git commit --amend -m "New message"  # Change message

# Push to remote
git push origin main
git push -u origin branch-name  # Set upstream
git push --force  # Force push (use carefully!)

# Pull latest changes
git pull origin main
git pull --rebase origin main  # Pull with rebase
git fetch origin  # Fetch without merge
git merge origin/main  # Merge after fetch`}
            language="bash"
            title="Basic workflow"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Branching</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Branch Operations</h3>
          <CodeBlock
            code={`# List branches
git branch
git branch -a  # All branches (local and remote)
git branch -r  # Remote branches only
git branch -v  # With last commit

# Create branch
git branch feature-branch
git branch feature-branch commit-hash  # From specific commit

# Switch branch
git checkout feature-branch
git switch feature-branch  # Newer syntax

# Create and switch
git checkout -b feature-branch
git switch -c feature-branch  # Newer syntax

# Merge branch
git checkout main
git merge feature-branch
git merge --no-ff feature-branch  # No fast-forward

# Delete branch
git branch -d feature-branch
git branch -D feature-branch  # Force delete
git push origin --delete branch-name  # Delete remote branch

# Rename branch
git branch -m old-name new-name

# Track remote branch
git checkout -b local-branch origin/remote-branch
git branch --set-upstream-to=origin/remote-branch local-branch

# Compare branches
git diff branch1..branch2
git log branch1..branch2  # Commits in branch2 not in branch1`}
            language="bash"
            title="Branch management"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">GitHub Workflows</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Pull Request Workflow</h3>
          <CodeBlock
            code={`# 1. Create feature branch
git checkout -b feature/new-feature

# 2. Make changes and commit
git add .
git commit -m "Implement new feature"

# 3. Push branch to GitHub
git push origin feature/new-feature

# 4. Create Pull Request on GitHub
# 5. After PR is merged, update local main
git checkout main
git pull origin main

# 6. Delete local feature branch
git branch -d feature/new-feature`}
            language="bash"
            title="PR workflow"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Fork and Contribute</h3>
          <CodeBlock
            code={`# 1. Fork repository on GitHub
# 2. Clone your fork
git clone https://github.com/yourusername/repo.git

# 3. Add upstream remote
git remote add upstream https://github.com/original/repo.git

# 4. Create branch for contribution
git checkout -b fix-bug

# 5. Make changes and push
git add .
git commit -m "Fix bug"
git push origin fix-bug

# 6. Create PR from your fork
# 7. Keep fork updated
git fetch upstream
git merge upstream/main`}
            language="bash"
            title="Contributing workflow"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advanced Git</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Undoing Changes</h3>
          <CodeBlock
            code={`# Unstage file
git reset HEAD file.txt
git restore --staged file.txt  # Newer syntax

# Discard changes in working directory
git checkout -- file.txt
git restore file.txt  # Newer syntax
git checkout HEAD -- file.txt  # From last commit

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (keep changes in working directory)
git reset --mixed HEAD~1  # Default

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert a commit (creates new commit)
git revert HEAD
git revert commit-hash
git revert HEAD~3..HEAD  # Revert range

# View commit history
git log
git log --oneline  # Compact
git log --graph --oneline --all  # Visual graph
git log -5  # Last 5 commits
git log --since="2 weeks ago"
git log --author="John Doe"

# View changes
git diff  # Unstaged changes
git diff --staged  # Staged changes
git diff HEAD  # All changes
git diff commit1 commit2  # Between commits`}
            language="bash"
            title="Undoing changes"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Stashing</h3>
          <CodeBlock
            code={`# Save changes temporarily
git stash
git stash push -m "WIP: feature work"  # With message
git stash -u  # Include untracked files

# List stashes
git stash list

# Apply stash
git stash apply  # Keep stash
git stash pop  # Apply and remove
git stash pop stash@{0}  # Specific stash

# Create named stash
git stash save "WIP: working on feature"

# Apply specific stash
git stash apply stash@{0}

# Drop stash
git stash drop stash@{0}
git stash clear  # Remove all stashes

# Create branch from stash
git stash branch new-branch stash@{0}`}
            language="bash"
            title="Stashing"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Remote Operations</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Remote Management</h3>
          <CodeBlock
            code={`# View remotes
git remote -v
git remote show origin

# Add/Remove remote
git remote add upstream https://github.com/user/repo.git
git remote remove upstream
git remote rename old new

# Update remote URL
git remote set-url origin https://new-url.git

# Fetch from remote
git fetch origin
git fetch --all  # All remotes
git fetch origin branch-name  # Specific branch

# Push to remote
git push origin main
git push -u origin branch-name  # Set upstream
git push --tags  # Push all tags

# Pull with rebase
git pull --rebase origin main`}
            language="bash"
            title="Remote operations"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tags & Configuration</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Tags</h3>
          <CodeBlock
            code={`# Create tag
git tag v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"  # Annotated tag

# List tags
git tag
git tag -l "v1.*"  # Filter tags

# Push tags
git push origin v1.0.0
git push --tags  # Push all tags

# Delete tag
git tag -d v1.0.0
git push origin --delete v1.0.0  # Delete remote tag

# Checkout tag
git checkout v1.0.0`}
            language="bash"
            title="Tag management"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Configuration</h3>
          <CodeBlock
            code={`# Set user info
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# View configuration
git config --list
git config user.name

# Set default branch name
git config --global init.defaultBranch main

# Set default editor
git config --global core.editor "code --wait"

# Create aliases
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'`}
            language="bash"
            title="Git configuration"
          />
        </div>
      </section>
    </div>
  )
}

