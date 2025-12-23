import CodeBlock from '@/components/CodeBlock'
import BackButton from '@/components/BackButton'

export default function CICDPage() {
  const githubActionsCode = `name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Run linter
      run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Build Docker image
      run: docker build -t myapp:\${{ github.sha }} .

    - name: Push to registry
      run: |
        echo "\${{ secrets.DOCKER_PASSWORD }}" | docker login -u "\${{ secrets.DOCKER_USERNAME }}" --password-stdin
        docker push myapp:\${{ github.sha }}

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - name: Deploy to production
      run: |
        echo "Deploying to production..."
        # Add your deployment commands here`

  const jenkinsCode = `pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'registry.example.com'
        IMAGE_NAME = 'myapp'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                always {
                    junit 'test-results.xml'
                }
            }
        }
        
        stage('Docker Build') {
            steps {
                script {
                    def image = docker.build("\${IMAGE_NAME}:\${env.BUILD_NUMBER}")
                    image.push()
                }
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh 'kubectl set image deployment/myapp myapp=\${IMAGE_NAME}:\${env.BUILD_NUMBER}'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}`

  const gitlabCode = `stages:
  - build
  - test
  - deploy

variables:
  DOCKER_IMAGE: registry.gitlab.com/mygroup/myapp

build:
  stage: build
  script:
    - docker build -t \$DOCKER_IMAGE:\$CI_COMMIT_SHA .
    - docker push \$DOCKER_IMAGE:\$CI_COMMIT_SHA
  only:
    - main
    - develop

test:
  stage: test
  image: node:18
  script:
    - npm install
    - npm test
    - npm run lint
  coverage: '/Coverage: \\\\d+%/'

deploy_staging:
  stage: deploy
  script:
    - kubectl set image deployment/myapp myapp=\$DOCKER_IMAGE:\$CI_COMMIT_SHA -n staging
  environment:
    name: staging
    url: https://staging.example.com
  only:
    - develop

deploy_production:
  stage: deploy
  script:
    - kubectl set image deployment/myapp myapp=\$DOCKER_IMAGE:\$CI_COMMIT_SHA -n production
  environment:
    name: production
    url: https://example.com
  only:
    - main
  when: manual`

  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      <h1 className="text-4xl font-bold mb-6">CI/CD Pipelines</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">GitHub Actions</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Basic Workflow</h3>
          <CodeBlock
            code={githubActionsCode}
            language="yaml"
            title=".github/workflows/ci-cd.yml"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Jenkins Pipeline</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Jenkinsfile (Declarative)</h3>
          <CodeBlock
            code={jenkinsCode}
            language="groovy"
            title="Jenkinsfile"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">GitLab CI/CD</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">GitLab CI Configuration</h3>
          <CodeBlock
            code={gitlabCode}
            language="yaml"
            title=".gitlab-ci.yml"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">CI/CD Best Practices</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Run tests in parallel to speed up pipelines</li>
            <li>Use caching for dependencies (npm, pip, etc.)</li>
            <li>Implement proper secret management</li>
            <li>Use multi-stage Docker builds</li>
            <li>Tag Docker images with commit SHA or version</li>
            <li>Implement rollback strategies</li>
            <li>Use feature flags for gradual rollouts</li>
            <li>Monitor pipeline performance and optimize</li>
            <li>Keep pipelines idempotent</li>
            <li>Use infrastructure as code for environments</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
