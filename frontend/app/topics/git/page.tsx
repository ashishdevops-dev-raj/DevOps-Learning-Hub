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

# Add files
git add file.txt
git add .  # Add all files

# Commit changes
git commit -m "Add new feature"

# Push to remote
git push origin main

# Pull latest changes
git pull origin main`}
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

# Create branch
git branch feature-branch

# Switch branch
git checkout feature-branch
git switch feature-branch  # Newer syntax

# Create and switch
git checkout -b feature-branch

# Merge branch
git checkout main
git merge feature-branch

# Delete branch
git branch -d feature-branch
git branch -D feature-branch  # Force delete`}
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

# Discard changes in working directory
git checkout -- file.txt
git restore file.txt  # Newer syntax

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert a commit (creates new commit)
git revert HEAD`}
            language="bash"
            title="Undoing changes"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Stashing</h3>
          <CodeBlock
            code={`# Save changes temporarily
git stash

# List stashes
git stash list

# Apply stash
git stash apply
git stash pop  # Apply and remove

# Create named stash
git stash save "WIP: working on feature"

# Apply specific stash
git stash apply stash@{0}`}
            language="bash"
            title="Stashing"
          />
        </div>
      </section>
    </div>
  )
}

