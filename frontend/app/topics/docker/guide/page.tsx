'use client'

import CodeBlock from '@/components/CodeBlock'
import BackButton from '@/components/BackButton'
import Link from 'next/link'

export default function DockerGuidePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      <h1 className="text-4xl font-bold mb-6">📚 Docker Complete Guide</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-gray-700">
          <strong>Master Docker from basics to deployment</strong> - A comprehensive step-by-step guide for building, running, testing, pushing, and deploying containerized applications.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">What is Docker?</h2>
        <p className="text-gray-700 mb-4">
          Docker is a platform that enables developers to package applications and their dependencies into lightweight, portable containers. Containers run consistently across different environments, solving the &quot;it works on my machine&quot; problem.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">Key Benefits:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>✅ Consistent environments (dev, staging, production)</li>
            <li>✅ Isolation from host system</li>
            <li>✅ Easy scaling and deployment</li>
            <li>✅ Resource efficiency compared to VMs</li>
            <li>✅ Version control for application environments</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Docker Workflow Overview</h2>
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-lg mb-4">
          <div className="flex items-center justify-center space-x-4 text-lg font-semibold">
            <span>📦 Build</span>
            <span>→</span>
            <span>▶️ Run</span>
            <span>→</span>
            <span>🧪 Test</span>
            <span>→</span>
            <span>📤 Push</span>
            <span>→</span>
            <span>🚀 Deploy</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Windows/Mac (Docker Desktop)</h3>
          <CodeBlock
            code={`# Download Docker Desktop from:
# https://www.docker.com/products/docker-desktop

# After installation, verify Docker is running
user@machine$ docker --version
Docker version 24.0.0, build abc1234

user@machine$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES`}
            language="bash"
            title="Docker Desktop Installation"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Linux (Docker Engine)</h3>
          <CodeBlock
            code={`# Update package index
user@machine$ sudo apt-get update

# Install Docker
user@machine$ sudo apt-get install -y docker.io

# Start Docker service
user@machine$ sudo systemctl start docker
user@machine$ sudo systemctl enable docker

# Add user to docker group (optional, to avoid sudo)
user@machine$ sudo usermod -aG docker $USER

# Verify installation
user@machine$ docker --version`}
            language="bash"
            title="Linux Docker Installation"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Step 1: Build Docker Image</h2>
        <p className="text-gray-700 mb-4">
          Building a Docker image creates a snapshot of your application with all its dependencies. The build process reads instructions from a <code className="bg-gray-100 px-2 py-1 rounded">Dockerfile</code>.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Create a Dockerfile</h3>
          <CodeBlock
            code={`# Example Dockerfile for a Node.js application
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Define startup command
CMD ["node", "server.js"]`}
            language="dockerfile"
            title="Example Dockerfile"
          />
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
            <p className="text-sm text-gray-700"><strong>Dockerfile Best Practices:</strong></p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
              <li>Use specific version tags (e.g., <code>node:18-alpine</code> not <code>node:latest</code>)</li>
              <li>Order commands from least to most frequently changing</li>
              <li>Use multi-stage builds for smaller images</li>
              <li>Leverage layer caching</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Build the Image</h3>
          <CodeBlock
            code={`# Basic build command
user@machine$ docker build -t myapp:latest .

# Build with specific Dockerfile
user@machine$ docker build -f Dockerfile.prod -t myapp:prod .

# Build without cache (fresh build)
user@machine$ docker build --no-cache -t myapp:latest .

# Build with build arguments
user@machine$ docker build --build-arg NODE_ENV=production -t myapp:prod .

# Verify build
user@machine$ docker images
user@machine$ docker inspect myapp:latest
user@machine$ docker history myapp:latest`}
            language="bash"
            title="Build Commands"
          />
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
            <p className="text-sm text-gray-700"><strong>💡 Tips:</strong></p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
              <li>Use <code>.dockerignore</code> to exclude files from build context</li>
              <li>Tag images with version numbers: <code>myapp:v1.0.0</code></li>
              <li>Use multi-stage builds to reduce final image size</li>
              <li>Build for specific platforms: <code>docker build --platform linux/amd64</code></li>
            </ul>
          </div>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
            <p className="text-sm text-gray-700"><strong>⚠️ Common Mistakes:</strong></p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
              <li>❌ Using <code>latest</code> tag in production (use version tags)</li>
              <li>❌ Copying unnecessary files (use <code>.dockerignore</code>)</li>
              <li>❌ Running as root user (create non-root user)</li>
              <li>❌ Not optimizing layer order (slower builds)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Step 2: Run Docker Container</h2>
        <p className="text-gray-700 mb-4">
          Running a container creates an instance of your image. Containers are isolated environments that run your application.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Basic Run Commands</h3>
          <CodeBlock
            code={`# Run container in foreground
user@machine$ docker run myapp:latest

# Run container in detached mode (background)
user@machine$ docker run -d myapp:latest

# Run with custom name
user@machine$ docker run -d --name my-app-container myapp:latest

# Run with port mapping
user@machine$ docker run -d -p 3000:3000 myapp:latest

# Run with environment variables
user@machine$ docker run -d -e NODE_ENV=production -e PORT=3000 myapp:latest

# Run with volume mounting (persistent data)
user@machine$ docker run -d -v /host/path:/container/path myapp:latest

# Run with network
user@machine$ docker run -d --network mynetwork myapp:latest

# Run with resource limits
user@machine$ docker run -d --memory="512m" --cpus="1.0" myapp:latest

# Run with restart policy
user@machine$ docker run -d --restart=always myapp:latest

# Run with multiple options combined
user@machine$ docker run -d \\
  --name my-app \\
  -p 3000:3000 \\
  -e NODE_ENV=production \\
  -v $(pwd)/data:/app/data \\
  --restart=unless-stopped \\
  myapp:latest`}
            language="bash"
            title="Run Container Commands"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Container Management</h3>
          <CodeBlock
            code={`# List running containers
user@machine$ docker ps

# List all containers (including stopped)
user@machine$ docker ps -a

# View container logs
user@machine$ docker logs my-app-container

# Follow logs in real-time
user@machine$ docker logs -f my-app-container

# Stop container
user@machine$ docker stop my-app-container

# Start stopped container
user@machine$ docker start my-app-container

# Restart container
user@machine$ docker restart my-app-container

# Remove container
user@machine$ docker rm my-app-container

# Remove running container (force)
user@machine$ docker rm -f my-app-container`}
            language="bash"
            title="Container Management"
          />
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
          <p className="text-sm text-gray-700"><strong>💡 Tips:</strong></p>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
            <li>Use <code>--restart=unless-stopped</code> for production containers</li>
            <li>Map ports explicitly: <code>-p 8080:3000</code> (host:container)</li>
            <li>Use named volumes for persistent data</li>
            <li>Set memory and CPU limits to prevent resource exhaustion</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Step 3: Test Docker Container</h2>
        <p className="text-gray-700 mb-4">
          Testing ensures your containerized application works correctly. Test functionality, performance, and integration.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Functional Testing</h3>
          <CodeBlock
            code={`# Test if container is running
user@machine$ docker ps | grep my-app-container

# Test application endpoint
user@machine$ curl http://localhost:3000

# Test with HTTP status code
user@machine$ curl -I http://localhost:3000

# Execute command inside running container
user@machine$ docker exec my-app-container ls -la

# Run interactive shell in container
user@machine$ docker exec -it my-app-container sh

# Check container logs for errors
user@machine$ docker logs my-app-container | grep -i error

# Monitor container resource usage
user@machine$ docker stats my-app-container

# Monitor all containers
user@machine$ docker stats`}
            language="bash"
            title="Testing Commands"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Health Checks</h3>
          <CodeBlock
            code={`# Add health check to Dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

# Check container health status
user@machine$ docker inspect --format='{{.State.Health.Status}}' my-app-container

# View health check logs
user@machine$ docker inspect --format='{{json .State.Health}}' my-app-container | jq`}
            language="dockerfile"
            title="Health Check Example"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Step 4: Push to Registry</h2>
        <p className="text-gray-700 mb-4">
          Pushing images to a registry (like Docker Hub) makes them available for deployment and sharing. This is essential for CI/CD pipelines.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Login and Push</h3>
          <CodeBlock
            code={`# Login to Docker Hub
user@machine$ docker login

# Login with username
user@machine$ docker login -u your-username

# Login with access token (recommended)
user@machine$ echo $DOCKER_PASSWORD | docker login -u your-username --password-stdin

# Tag image with registry prefix
user@machine$ docker tag myapp:latest your-username/myapp:latest

# Tag with version number
user@machine$ docker tag myapp:latest your-username/myapp:v1.0.0

# Tag multiple versions
user@machine$ docker tag myapp:latest your-username/myapp:latest
user@machine$ docker tag myapp:latest your-username/myapp:v1.0.0
user@machine$ docker tag myapp:latest your-username/myapp:stable

# Push to Docker Hub
user@machine$ docker push your-username/myapp:latest

# Push specific version
user@machine$ docker push your-username/myapp:v1.0.0

# Push all tags
user@machine$ docker push your-username/myapp --all-tags

# Verify push
user@machine$ docker pull your-username/myapp:latest`}
            language="bash"
            title="Push to Registry"
          />
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
          <p className="text-sm text-gray-700"><strong>💡 Tips:</strong></p>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
            <li>Use access tokens instead of passwords for authentication</li>
            <li>Tag images before pushing (don&apos;t push <code>latest</code> only)</li>
            <li>Use private registries for production images</li>
            <li>Enable image scanning for security vulnerabilities</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Step 5: Deploy Docker Container</h2>
        <p className="text-gray-700 mb-4">
          Deployment involves running containers in production environments. This can be done on various platforms: local servers, cloud VMs, container orchestration platforms, or serverless.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Deploy on Local Server</h3>
          <CodeBlock
            code={`# SSH into production server
user@machine$ ssh user@production-server

# Pull latest image
user@production-server$ docker pull your-username/myapp:latest

# Stop old container
user@production-server$ docker stop my-app-container
user@production-server$ docker rm my-app-container

# Run new container
user@production-server$ docker run -d \\
  --name my-app-container \\
  -p 3000:3000 \\
  --restart=unless-stopped \\
  your-username/myapp:latest

# Verify deployment
user@production-server$ docker ps
user@production-server$ curl http://localhost:3000/health`}
            language="bash"
            title="Local Server Deployment"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Deploy with Docker Compose</h3>
          <CodeBlock
            code={`# docker-compose.yml
version: '3.8'

services:
  app:
    image: your-username/myapp:latest
    container_name: my-app
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    volumes:
      - ./data:/app/data
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

# Deploy commands
user@machine$ docker-compose pull
user@machine$ docker-compose up -d
user@machine$ docker-compose logs -f
user@machine$ docker-compose up -d --scale app=3`}
            language="yaml"
            title="Docker Compose Deployment"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">1. Dockerfile Optimization</h3>
          <CodeBlock
            code={`# ✅ Good: Multi-stage build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
RUN addgroup -g 1001 -S nodejs && \\
    adduser -S nodejs -u 1001
USER nodejs
EXPOSE 3000
CMD ["node", "server.js"]`}
            language="dockerfile"
            title="Optimized Dockerfile"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">2. Security Best Practices</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Run containers as non-root user</li>
            <li>Use minimal base images (Alpine Linux)</li>
            <li>Scan images for vulnerabilities: <code className="bg-gray-100 px-2 py-1 rounded">docker scan myapp:latest</code></li>
            <li>Don&apos;t store secrets in images - use secrets management</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">3. Resource Management</h3>
          <CodeBlock
            code={`# Set memory limits
user@machine$ docker run -d --memory="512m" myapp:latest

# Set CPU limits
user@machine$ docker run -d --cpus="1.0" myapp:latest`}
            language="bash"
            title="Resource Limits"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Common Mistakes & Solutions</h2>
        
        <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4">
          <h3 className="text-xl font-medium mb-2">Mistake 1: Large Image Sizes</h3>
          <p className="text-gray-700 mb-2"><strong>Solution:</strong></p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Use multi-stage builds</li>
            <li>Use <code>.dockerignore</code> to exclude unnecessary files</li>
            <li>Use Alpine Linux base images</li>
            <li>Remove package managers after installation</li>
          </ul>
        </div>

        <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4">
          <h3 className="text-xl font-medium mb-2">Mistake 2: Running as Root</h3>
          <CodeBlock
            code={`# ❌ Bad: Running as root
FROM node:18
CMD ["node", "server.js"]

# ✅ Good: Non-root user
FROM node:18-alpine
RUN addgroup -g 1001 -S nodejs && \\
    adduser -S nodejs -u 1001
USER nodejs
CMD ["node", "server.js"]`}
            language="dockerfile"
            title="Security Fix"
          />
        </div>

        <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4">
          <h3 className="text-xl font-medium mb-2">Mistake 3: Not Using .dockerignore</h3>
          <p className="text-gray-700 mb-2">Create <code>.dockerignore</code> file:</p>
          <CodeBlock
            code={`node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.nyc_output
coverage
.DS_Store`}
            language="text"
            title=".dockerignore"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Quick Reference</h2>
        <CodeBlock
          code={`# Images
docker build -t name:tag .          # Build image
docker images                        # List images
docker rmi image:tag                # Remove image
docker pull image:tag               # Pull image

# Containers
docker run -d -p 3000:3000 image    # Run container
docker ps                            # List running containers
docker ps -a                         # List all containers
docker stop container               # Stop container
docker start container              # Start container
docker rm container                 # Remove container
docker logs container               # View logs
docker exec -it container sh        # Execute command

# System
docker system df                    # Disk usage
docker system prune                 # Clean up
docker info                         # System information
docker version                      # Version info`}
          language="bash"
          title="Essential Commands"
        />
      </div>

      <div className="mt-8 pt-6 border-t">
        <Link 
          href="/topics/docker"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Docker Topics
        </Link>
      </div>
    </div>
  )
}

