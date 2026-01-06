'use client'

import CodeBlock from '@/components/CodeBlock'
import BackButton from '@/components/BackButton'
import Link from 'next/link'

export default function GitGuidePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      <h1 className="text-4xl font-bold mb-6">📚 Git & GitHub Complete Guide</h1>
      
      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
        <p className="text-gray-700">
          <strong>Master Git & GitHub from basics to advanced workflows</strong> - A comprehensive step-by-step guide for version control, collaboration, branching strategies, and GitHub best practices.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">What is Git?</h2>
        <p className="text-gray-700 mb-4">
          Git is a distributed version control system that tracks changes in source code during software development. It allows multiple developers to work on the same project simultaneously, maintain a complete history of changes, and collaborate efficiently.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">Key Benefits:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>✅ Track changes and history of your code</li>
            <li>✅ Collaborate with multiple developers</li>
            <li>✅ Branch and merge code safely</li>
            <li>✅ Rollback to previous versions</li>
            <li>✅ Work offline with local repositories</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">What is GitHub?</h2>
        <p className="text-gray-700 mb-4">
          GitHub is a web-based platform that provides Git repository hosting, collaboration features, issue tracking, and project management tools. It's the largest host of source code in the world and serves as a central hub for open-source projects.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">Key Features:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>✅ Cloud-based Git repository hosting</li>
            <li>✅ Pull requests and code reviews</li>
            <li>✅ Issue tracking and project management</li>
            <li>✅ GitHub Actions for CI/CD</li>
            <li>✅ Collaboration and team management</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Git Workflow Overview</h2>
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg mb-4">
          <div className="flex items-center justify-center space-x-4 text-lg font-semibold">
            <span>📝 Clone/Init</span>
            <span>→</span>
            <span>✏️ Edit</span>
            <span>→</span>
            <span>➕ Add</span>
            <span>→</span>
            <span>💾 Commit</span>
            <span>→</span>
            <span>📤 Push</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Windows</h3>
          <CodeBlock
            code={`# Download Git for Windows from:
# https://git-scm.com/download/win

# After installation, verify Git is installed
user@machine$ git --version
git version 2.42.0.windows.2

# Configure Git
user@machine$ git config --global user.name "Your Name"
user@machine$ git config --global user.email "your.email@example.com"`}
            language="bash"
            title="Windows Git Installation"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Linux</h3>
          <CodeBlock
            code={`# Install Git
user@machine$ sudo apt-get update
user@machine$ sudo apt-get install git

# Verify installation
user@machine$ git --version

# Configure Git
user@machine$ git config --global user.name "Your Name"
user@machine$ git config --global user.email "your.email@example.com"`}
            language="bash"
            title="Linux Git Installation"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">macOS</h3>
          <CodeBlock
            code={`# Install Git using Homebrew
user@machine$ brew install git

# Or download from:
# https://git-scm.com/download/mac

# Verify installation
user@machine$ git --version

# Configure Git
user@machine$ git config --global user.name "Your Name"
user@machine$ git config --global user.email "your.email@example.com"`}
            language="bash"
            title="macOS Git Installation"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Step 1: Repository Setup</h2>
        <p className="text-gray-700 mb-4">
          Setting up a Git repository is the first step in version controlling your project. You can either initialize a new repository or clone an existing one.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Initialize New Repository</h3>
          <CodeBlock
            code={`# Initialize a new Git repository
user@machine$ git init

# Initialize with a specific branch name
user@machine$ git init -b main

# Check repository status
user@machine$ git status`}
            language="bash"
            title="Initialize Repository"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Clone Existing Repository</h3>
          <CodeBlock
            code={`# Clone a repository
user@machine$ git clone https://github.com/user/repo.git

# Clone to a specific directory
user@machine$ git clone https://github.com/user/repo.git my-project

# Clone a specific branch
user@machine$ git clone -b branch-name https://github.com/user/repo.git

# Clone with SSH
user@machine$ git clone git@github.com:user/repo.git`}
            language="bash"
            title="Clone Repository"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Configure Remote</h3>
          <CodeBlock
            code={`# Add remote repository
user@machine$ git remote add origin https://github.com/user/repo.git

# View remotes
user@machine$ git remote -v

# Change remote URL
user@machine$ git remote set-url origin https://github.com/user/new-repo.git

# Remove remote
user@machine$ git remote remove origin`}
            language="bash"
            title="Remote Configuration"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Step 2: Basic Workflow</h2>
        <p className="text-gray-700 mb-4">
          The basic Git workflow involves checking status, staging changes, committing, and pushing to remote repositories.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Check Status</h3>
          <CodeBlock
            code={`# Check repository status
user@machine$ git status

# Short status format
user@machine$ git status -s

# Show ignored files
user@machine$ git status --ignored`}
            language="bash"
            title="Check Status"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Stage Changes</h3>
          <CodeBlock
            code={`# Add specific file
user@machine$ git add file.txt

# Add all files
user@machine$ git add .

# Add all changes including deletions
user@machine$ git add -A

# Add only tracked files
user@machine$ git add -u

# Interactive staging
user@machine$ git add -p`}
            language="bash"
            title="Stage Changes"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Commit Changes</h3>
          <CodeBlock
            code={`# Commit with message
user@machine$ git commit -m "Add new feature"

# Add and commit tracked files
user@machine$ git commit -am "Update feature"

# Modify last commit
user@machine$ git commit --amend

# Commit with detailed message
user@machine$ git commit -m "Title" -m "Detailed description"`}
            language="bash"
            title="Commit Changes"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Step 3: Branching & Merging</h2>
        <p className="text-gray-700 mb-4">
          Branching allows you to work on different features or versions of your code simultaneously. Merging combines changes from different branches.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Branch Operations</h3>
          <CodeBlock
            code={`# List branches
user@machine$ git branch

# Create new branch
user@machine$ git branch feature-branch

# Switch to branch
user@machine$ git checkout feature-branch

# Create and switch to branch
user@machine$ git checkout -b feature-branch

# Delete branch
user@machine$ git branch -d feature-branch

# Force delete branch
user@machine$ git branch -D feature-branch`}
            language="bash"
            title="Branch Operations"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Merge Branches</h3>
          <CodeBlock
            code={`# Merge branch into current branch
user@machine$ git merge feature-branch

# Merge with no fast-forward
user@machine$ git merge --no-ff feature-branch

# Abort merge
user@machine$ git merge --abort

# View merge conflicts
user@machine$ git status`}
            language="bash"
            title="Merge Branches"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Step 4: Push to GitHub</h2>
        <p className="text-gray-700 mb-4">
          Pushing your code to GitHub makes it available for collaboration, backup, and sharing with others.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Push Commands</h3>
          <CodeBlock
            code={`# Push to remote
user@machine$ git push origin main

# Push branch for first time
user@machine$ git push -u origin feature-branch

# Push all branches
user@machine$ git push --all origin

# Force push (use with caution)
user@machine$ git push --force origin main

# Push tags
user@machine$ git push --tags origin`}
            language="bash"
            title="Push to GitHub"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Step 5: Collaboration Workflows</h2>
        <p className="text-gray-700 mb-4">
          GitHub collaboration involves pull requests, code reviews, and managing contributions from multiple developers.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Pull Requests Workflow</h3>
          <CodeBlock
            code={`# Fork a repository (on GitHub)
# Clone your fork
user@machine$ git clone https://github.com/your-username/repo.git

# Add upstream remote
user@machine$ git remote add upstream https://github.com/original-owner/repo.git

# Create feature branch
user@machine$ git checkout -b feature-branch

# Make changes and commit
user@machine$ git add .
user@machine$ git commit -m "Add feature"

# Push to your fork
user@machine$ git push origin feature-branch

# Create Pull Request on GitHub`}
            language="bash"
            title="Pull Request Workflow"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Sync with Upstream</h3>
          <CodeBlock
            code={`# Fetch upstream changes
user@machine$ git fetch upstream

# Merge upstream changes
user@machine$ git merge upstream/main

# Push to your fork
user@machine$ git push origin main`}
            language="bash"
            title="Sync Fork"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">1. Commit Messages</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Write clear, descriptive commit messages</li>
            <li>Use imperative mood: "Add feature" not "Added feature"</li>
            <li>Keep first line under 50 characters</li>
            <li>Add detailed description for complex changes</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">2. Branching Strategy</h3>
          <CodeBlock
            code={`# Main branches
main/master    # Production-ready code
develop        # Integration branch

# Feature branches
feature/user-auth
feature/payment

# Hotfix branches
hotfix/critical-bug`}
            language="text"
            title="Branch Naming"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">3. .gitignore Best Practices</h3>
          <CodeBlock
            code={`# Dependencies
node_modules/
vendor/

# Environment files
.env
.env.local

# IDE files
.vscode/
.idea/
*.swp

# OS files
.DS_Store
Thumbs.db

# Build outputs
dist/
build/
*.log`}
            language="text"
            title=".gitignore Example"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Common Mistakes & Solutions</h2>
        
        <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4">
          <h3 className="text-xl font-medium mb-2">Mistake 1: Committing Sensitive Data</h3>
          <p className="text-gray-700 mb-2"><strong>Solution:</strong></p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Use <code>.gitignore</code> to exclude sensitive files</li>
            <li>Never commit passwords, API keys, or tokens</li>
            <li>Use environment variables or secrets management</li>
            <li>If committed, use <code>git filter-branch</code> or BFG Repo-Cleaner</li>
          </ul>
        </div>

        <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4">
          <h3 className="text-xl font-medium mb-2">Mistake 2: Large Files in Repository</h3>
          <p className="text-gray-700 mb-2"><strong>Solution:</strong></p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Use Git LFS (Large File Storage) for large files</li>
            <li>Add large files to <code>.gitignore</code></li>
            <li>Use external storage for binaries and assets</li>
          </ul>
        </div>

        <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4">
          <h3 className="text-xl font-medium mb-2">Mistake 3: Poor Commit Messages</h3>
          <CodeBlock
            code={`# ❌ Bad commit messages
git commit -m "fix"
git commit -m "update"
git commit -m "changes"

# ✅ Good commit messages
git commit -m "Fix authentication bug in login flow"
git commit -m "Add user profile page with avatar upload"
git commit -m "Update API endpoint to handle pagination"`}
            language="bash"
            title="Commit Message Examples"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Quick Reference</h2>
        <CodeBlock
          code={`# Repository
git init                    # Initialize repository
git clone <url>             # Clone repository
git remote -v              # View remotes

# Basic Workflow
git status                 # Check status
git add <file>             # Stage file
git commit -m "message"    # Commit changes
git push origin main       # Push to remote
git pull origin main       # Pull from remote

# Branches
git branch                 # List branches
git checkout -b branch     # Create and switch branch
git merge branch           # Merge branch
git branch -d branch       # Delete branch

# History
git log                    # View commit history
git log --oneline          # Compact log
git diff                   # View changes
git show <commit>          # Show commit details`}
          language="bash"
          title="Essential Commands"
        />
      </div>

      <div className="mt-8 pt-6 border-t">
        <Link 
          href="/topics/git"
          className="text-orange-600 hover:text-orange-800 font-medium"
        >
          ← Back to Git & GitHub Topics
        </Link>
      </div>
    </div>
  )
}

