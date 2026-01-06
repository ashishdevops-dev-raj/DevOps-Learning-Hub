# 🐳 Docker Complete Tutorial

> **Master Docker from basics to deployment** - A comprehensive step-by-step guide for building, running, testing, pushing, and deploying containerized applications.

![Docker Logo](./images/docker-logo.png)

---

## 📋 Table of Contents

- [What is Docker?](#what-is-docker)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Docker Workflow Overview](#docker-workflow-overview)
- [Step 1: Build Docker Image](#step-1-build-docker-image)
- [Step 2: Run Docker Container](#step-2-run-docker-container)
- [Step 3: Test Docker Container](#step-3-test-docker-container)
- [Step 4: Push to Registry](#step-4-push-to-registry)
- [Step 5: Deploy Docker Container](#step-5-deploy-docker-container)
- [Best Practices](#best-practices)
- [Common Mistakes & Solutions](#common-mistakes--solutions)
- [Advanced Topics](#advanced-topics)
- [Quick Reference](#quick-reference)

---

## What is Docker?

Docker is a platform that enables developers to package applications and their dependencies into lightweight, portable containers. Containers run consistently across different environments, solving the "it works on my machine" problem.

**Key Benefits:**
- ✅ Consistent environments (dev, staging, production)
- ✅ Isolation from host system
- ✅ Easy scaling and deployment
- ✅ Resource efficiency compared to VMs
- ✅ Version control for application environments

![Docker Architecture](./images/docker-architecture.png)

---

## Prerequisites

Before starting, ensure you have:

- [ ] Basic Linux command-line knowledge
- [ ] Understanding of application development
- [ ] Docker Desktop installed (for Windows/Mac) or Docker Engine (for Linux)
- [ ] A Docker Hub account (free) for pushing images

---

## Installation

### Windows/Mac (Docker Desktop)

```bash
# Download Docker Desktop from:
# https://www.docker.com/products/docker-desktop

# After installation, verify Docker is running
user@machine$ docker --version
Docker version 24.0.0, build abc1234

user@machine$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

![Docker Installation](./images/docker-installation.png)

### Linux (Docker Engine)

```bash
# Update package index
user@machine$ sudo apt-get update

# Install Docker
user@machine$ sudo apt-get install -y docker.io

# Start Docker service
user@machine$ sudo systemctl start docker
user@machine$ sudo systemctl enable docker

# Add user to docker group (optional, to avoid sudo)
user@machine$ sudo usermod -aG docker $USER

# Verify installation
user@machine$ docker --version
```

---

## Docker Workflow Overview

The complete Docker workflow follows these steps:

```
📦 Build → ▶️ Run → 🧪 Test → 📤 Push → 🚀 Deploy
```

**Visual Workflow:**

```
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│  Build  │ --> │   Run   │ --> │  Test   │ --> │  Push   │ --> │ Deploy  │
│  Image  │     │Container│     │Container│     │  Image  │     │Container│
└─────────┘     └─────────┘     └─────────┘     └─────────┘     └─────────┘
```

---

## Step 1: Build Docker Image

### Overview

Building a Docker image creates a snapshot of your application with all its dependencies. The build process reads instructions from a `Dockerfile`.

![Docker Build Process](./images/docker-build-process.png)

### Create a Dockerfile

First, create a `Dockerfile` in your project directory:

```dockerfile
# Example Dockerfile for a Node.js application
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
CMD ["node", "server.js"]
```

**Dockerfile Best Practices:**
- Use specific version tags (e.g., `node:18-alpine` not `node:latest`)
- Order commands from least to most frequently changing
- Use multi-stage builds for smaller images
- Leverage layer caching

### Build the Image

```bash
# Basic build command
user@machine$ docker build -t myapp:latest .

# Build with specific Dockerfile
user@machine$ docker build -f Dockerfile.prod -t myapp:prod .

# Build without cache (fresh build)
user@machine$ docker build --no-cache -t myapp:latest .

# Build with build arguments
user@machine$ docker build --build-arg NODE_ENV=production -t myapp:prod .
```

**Command Breakdown:**
- `docker build` - Builds an image from Dockerfile
- `-t myapp:latest` - Tags the image with name `myapp` and tag `latest`
- `.` - Build context (current directory)

![Docker Build Output](./images/docker-build-output.png)

### Verify Build

```bash
# List all images
user@machine$ docker images

# Output:
# REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
# myapp        latest    abc123def456   2 minutes ago   150MB
# node         18-alpine 789xyz012345   1 week ago      50MB

# Inspect image details
user@machine$ docker inspect myapp:latest

# Check image layers
user@machine$ docker history myapp:latest
```

**💡 Tips:**
- Use `.dockerignore` to exclude files from build context
- Tag images with version numbers: `myapp:v1.0.0`
- Use multi-stage builds to reduce final image size
- Build for specific platforms: `docker build --platform linux/amd64`

**⚠️ Common Mistakes:**
- ❌ Using `latest` tag in production (use version tags)
- ❌ Copying unnecessary files (use `.dockerignore`)
- ❌ Running as root user (create non-root user)
- ❌ Not optimizing layer order (slower builds)

---

## Step 2: Run Docker Container

### Overview

Running a container creates an instance of your image. Containers are isolated environments that run your application.

![Docker Run Process](./images/docker-run-process.png)

### Basic Run Command

```bash
# Run container in foreground
user@machine$ docker run myapp:latest

# Run container in detached mode (background)
user@machine$ docker run -d myapp:latest

# Run with custom name
user@machine$ docker run -d --name my-app-container myapp:latest

# Run with port mapping
user@machine$ docker run -d -p 3000:3000 myapp:latest

# Run with environment variables
user@machine$ docker run -d -e NODE_ENV=production -e PORT=3000 myapp:latest
```

**Command Breakdown:**
- `docker run` - Creates and starts a container
- `-d` - Detached mode (runs in background)
- `--name` - Assigns a custom name to container
- `-p 3000:3000` - Maps host port 3000 to container port 3000
- `-e` - Sets environment variables

### Advanced Run Options

```bash
# Run with volume mounting (persistent data)
user@machine$ docker run -d -v /host/path:/container/path myapp:latest

# Run with network
user@machine$ docker run -d --network mynetwork myapp:latest

# Run with resource limits
user@machine$ docker run -d --memory="512m" --cpus="1.0" myapp:latest

# Run with restart policy
user@machine$ docker run -d --restart=always myapp:latest

# Run with multiple options combined
user@machine$ docker run -d \
  --name my-app \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -v $(pwd)/data:/app/data \
  --restart=unless-stopped \
  myapp:latest
```

![Docker Run Output](./images/docker-run-output.png)

### Container Management

```bash
# List running containers
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
user@machine$ docker rm -f my-app-container
```

**💡 Tips:**
- Use `--restart=unless-stopped` for production containers
- Map ports explicitly: `-p 8080:3000` (host:container)
- Use named volumes for persistent data
- Set memory and CPU limits to prevent resource exhaustion

**⚠️ Common Mistakes:**
- ❌ Running containers without resource limits
- ❌ Not mapping ports correctly
- ❌ Forgetting to use `-d` flag (blocks terminal)
- ❌ Not setting restart policies for production

---

## Step 3: Test Docker Container

### Overview

Testing ensures your containerized application works correctly. Test functionality, performance, and integration.

![Docker Testing](./images/docker-testing.png)

### Functional Testing

```bash
# Test if container is running
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
```

### Health Checks

```bash
# Check container health status
user@machine$ docker inspect --format='{{.State.Health.Status}}' my-app-container

# View health check logs
user@machine$ docker inspect --format='{{json .State.Health}}' my-app-container | jq
```

**Add Health Check to Dockerfile:**

```dockerfile
# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1
```

### Integration Testing

```bash
# Test container networking
user@machine$ docker network ls
user@machine$ docker network inspect bridge

# Test container communication
user@machine$ docker run -d --name test-container --network bridge alpine sleep 3600
user@machine$ docker exec test-container ping my-app-container

# Test with docker-compose
user@machine$ docker-compose up -d
user@machine$ docker-compose ps
user@machine$ docker-compose logs
```

### Performance Testing

```bash
# Monitor container resource usage
user@machine$ docker stats my-app-container

# Monitor all containers
user@machine$ docker stats

# Check container resource limits
user@machine$ docker inspect my-app-container | grep -i memory
```

![Docker Testing Results](./images/docker-test-results.png)

**💡 Tips:**
- Always test containers before pushing to registry
- Use health checks in production Dockerfiles
- Test with production-like data volumes
- Monitor resource usage during testing

**⚠️ Common Mistakes:**
- ❌ Not testing before pushing to production
- ❌ Skipping health checks
- ❌ Not testing with production-like configurations
- ❌ Ignoring container logs during testing

---

## Step 4: Push to Registry

### Overview

Pushing images to a registry (like Docker Hub) makes them available for deployment and sharing. This is essential for CI/CD pipelines.

![Docker Registry](./images/docker-registry.png)

### Login to Docker Hub

```bash
# Login to Docker Hub
user@machine$ docker login

# Login with username
user@machine$ docker login -u your-username

# Login with access token (recommended)
user@machine$ echo $DOCKER_PASSWORD | docker login -u your-username --password-stdin
```

![Docker Login](./images/docker-login.png)

### Tag Image for Registry

```bash
# Tag image with registry prefix
user@machine$ docker tag myapp:latest your-username/myapp:latest

# Tag with version number
user@machine$ docker tag myapp:latest your-username/myapp:v1.0.0

# Tag multiple versions
user@machine$ docker tag myapp:latest your-username/myapp:latest
user@machine$ docker tag myapp:latest your-username/myapp:v1.0.0
user@machine$ docker tag myapp:latest your-username/myapp:stable
```

**Tagging Best Practices:**
- Use semantic versioning: `v1.0.0`, `v1.0.1`
- Always tag with `latest` for convenience
- Use descriptive tags: `production`, `staging`, `dev`

### Push Image to Registry

```bash
# Push to Docker Hub
user@machine$ docker push your-username/myapp:latest

# Push specific version
user@machine$ docker push your-username/myapp:v1.0.0

# Push all tags
user@machine$ docker push your-username/myapp --all-tags

# Push to private registry
user@machine$ docker push registry.example.com/myapp:latest
```

![Docker Push Output](./images/docker-push-output.png)

### Verify Push

```bash
# Pull image to verify it was pushed correctly
user@machine$ docker pull your-username/myapp:latest

# List images to confirm
user@machine$ docker images | grep your-username/myapp
```

### Push to Other Registries

```bash
# Push to AWS ECR
user@machine$ aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789012.dkr.ecr.us-east-1.amazonaws.com
user@machine$ docker tag myapp:latest 123456789012.dkr.ecr.us-east-1.amazonaws.com/myapp:latest
user@machine$ docker push 123456789012.dkr.ecr.us-east-1.amazonaws.com/myapp:latest

# Push to Google Container Registry
user@machine$ docker tag myapp:latest gcr.io/my-project/myapp:latest
user@machine$ docker push gcr.io/my-project/myapp:latest

# Push to Azure Container Registry
user@machine$ az acr login --name myregistry
user@machine$ docker tag myapp:latest myregistry.azurecr.io/myapp:latest
user@machine$ docker push myregistry.azurecr.io/myapp:latest
```

**💡 Tips:**
- Use access tokens instead of passwords for authentication
- Tag images before pushing (don't push `latest` only)
- Use private registries for production images
- Enable image scanning for security vulnerabilities

**⚠️ Common Mistakes:**
- ❌ Pushing images without proper tags
- ❌ Using default credentials in CI/CD
- ❌ Not scanning images for vulnerabilities
- ❌ Pushing large images (optimize first)

---

## Step 5: Deploy Docker Container

### Overview

Deployment involves running containers in production environments. This can be done on various platforms: local servers, cloud VMs, container orchestration platforms, or serverless.

![Docker Deployment](./images/docker-deployment.png)

### Deploy on Local Server

```bash
# SSH into production server
user@machine$ ssh user@production-server

# Pull latest image
user@production-server$ docker pull your-username/myapp:latest

# Stop old container
user@production-server$ docker stop my-app-container
user@production-server$ docker rm my-app-container

# Run new container
user@production-server$ docker run -d \
  --name my-app-container \
  -p 3000:3000 \
  --restart=unless-stopped \
  your-username/myapp:latest

# Verify deployment
user@production-server$ docker ps
user@production-server$ curl http://localhost:3000/health
```

### Deploy with Docker Compose

**Create `docker-compose.yml`:**

```yaml
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
```

**Deploy with Compose:**

```bash
# Pull latest images
user@machine$ docker-compose pull

# Start services
user@machine$ docker-compose up -d

# View logs
user@machine$ docker-compose logs -f

# Scale services
user@machine$ docker-compose up -d --scale app=3

# Stop services
user@machine$ docker-compose down
```

![Docker Compose Deployment](./images/docker-compose-deploy.png)

### Deploy to Kubernetes

**Create `deployment.yaml`:**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: your-username/myapp:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
```

**Deploy to Kubernetes:**

```bash
# Apply deployment
user@machine$ kubectl apply -f deployment.yaml

# Check deployment status
user@machine$ kubectl get deployments
user@machine$ kubectl get pods

# View logs
user@machine$ kubectl logs -l app=my-app

# Scale deployment
user@machine$ kubectl scale deployment my-app --replicas=5

# Update image
user@machine$ kubectl set image deployment/my-app my-app=your-username/myapp:v1.1.0
```

### Deploy to Cloud Platforms

**AWS ECS:**

```bash
# Create ECS task definition and deploy
user@machine$ aws ecs register-task-definition --cli-input-json file://task-definition.json
user@machine$ aws ecs update-service --cluster my-cluster --service my-service --force-new-deployment
```

**Google Cloud Run:**

```bash
# Deploy to Cloud Run
user@machine$ gcloud run deploy my-app \
  --image gcr.io/my-project/myapp:latest \
  --platform managed \
  --region us-central1
```

**Azure Container Instances:**

```bash
# Deploy to ACI
user@machine$ az container create \
  --resource-group my-resource-group \
  --name my-app \
  --image myregistry.azurecr.io/myapp:latest \
  --dns-name-label my-app \
  --ports 3000
```

![Cloud Deployment](./images/cloud-deployment.png)

**💡 Tips:**
- Use orchestration platforms (Kubernetes, Docker Swarm) for production
- Implement rolling updates for zero-downtime deployments
- Use health checks and readiness probes
- Monitor deployments with logging and metrics

**⚠️ Common Mistakes:**
- ❌ Deploying without testing in staging first
- ❌ Not using health checks
- ❌ Single container deployments (no redundancy)
- ❌ Not monitoring deployments

---

## Best Practices

### 1. Dockerfile Optimization

```dockerfile
# ✅ Good: Multi-stage build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001
USER nodejs
EXPOSE 3000
CMD ["node", "server.js"]
```

### 2. Security Best Practices

```bash
# Run containers as non-root user
# Use minimal base images (Alpine Linux)
# Scan images for vulnerabilities
user@machine$ docker scan myapp:latest

# Don't store secrets in images
# Use secrets management (Docker secrets, Kubernetes secrets)
```

### 3. Resource Management

```bash
# Set memory limits
user@machine$ docker run -d --memory="512m" myapp:latest

# Set CPU limits
user@machine$ docker run -d --cpus="1.0" myapp:latest

# Use resource constraints in docker-compose
```

### 4. Networking

```bash
# Use custom networks
user@machine$ docker network create my-network
user@machine$ docker run -d --network my-network myapp:latest

# Use Docker Compose for multi-container apps
```

### 5. Data Persistence

```bash
# Use named volumes
user@machine$ docker volume create my-data
user@machine$ docker run -d -v my-data:/app/data myapp:latest

# Use bind mounts for development
user@machine$ docker run -d -v $(pwd)/data:/app/data myapp:latest
```

---

## Common Mistakes & Solutions

### Mistake 1: Large Image Sizes

**Problem:**
```bash
user@machine$ docker images
REPOSITORY   TAG       SIZE
myapp        latest   2.5GB  # Too large!
```

**Solution:**
- Use multi-stage builds
- Use `.dockerignore` to exclude unnecessary files
- Use Alpine Linux base images
- Remove package managers after installation

### Mistake 2: Running as Root

**Problem:**
```dockerfile
# ❌ Bad: Running as root
FROM node:18
CMD ["node", "server.js"]
```

**Solution:**
```dockerfile
# ✅ Good: Non-root user
FROM node:18-alpine
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001
USER nodejs
CMD ["node", "server.js"]
```

### Mistake 3: Not Using .dockerignore

**Problem:**
- Build context includes unnecessary files
- Slow builds
- Large image sizes

**Solution:**
Create `.dockerignore`:
```
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.nyc_output
coverage
.DS_Store
```

### Mistake 4: Hardcoding Configuration

**Problem:**
```dockerfile
# ❌ Bad: Hardcoded values
ENV API_URL=http://localhost:3000
```

**Solution:**
```dockerfile
# ✅ Good: Use environment variables
ENV API_URL=${API_URL}
```

### Mistake 5: Not Tagging Images Properly

**Problem:**
```bash
# ❌ Bad: Only using latest
docker push myapp:latest
```

**Solution:**
```bash
# ✅ Good: Version tags
docker tag myapp:latest myapp:v1.0.0
docker tag myapp:latest myapp:latest
docker push myapp:v1.0.0
docker push myapp:latest
```

---

## Advanced Topics

### Docker Compose for Multi-Container Apps

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
      - redis
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/dbname
  
  db:
    image: postgres:15-alpine
    volumes:
      - postgres-data:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=secret
  
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres-data:
```

### Docker Networking

```bash
# Create custom network
user@machine$ docker network create --driver bridge my-network

# Connect container to network
user@machine$ docker run -d --network my-network myapp:latest

# Inspect network
user@machine$ docker network inspect my-network
```

### Docker Volumes

```bash
# Create named volume
user@machine$ docker volume create my-volume

# List volumes
user@machine$ docker volume ls

# Inspect volume
user@machine$ docker volume inspect my-volume

# Remove volume
user@machine$ docker volume rm my-volume
```

### Multi-Stage Builds

```dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
EXPOSE 3000
CMD ["node", "dist/index.js"]
```

---

## Quick Reference

### Essential Commands

```bash
# Images
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
docker version                      # Version info
```

### Dockerfile Instructions

```dockerfile
FROM          # Base image
WORKDIR        # Set working directory
COPY          # Copy files
ADD           # Copy files (with URL support)
RUN           # Execute command
CMD           # Default command
ENTRYPOINT    # Entry point command
ENV           # Environment variable
ARG           # Build argument
EXPOSE        # Expose port
VOLUME        # Create volume
USER          # Set user
HEALTHCHECK   # Health check
```

---

## 🎓 Learning Path

### Beginner
- ✅ Understand Docker concepts
- ✅ Create simple Dockerfile
- ✅ Build and run containers
- ✅ Basic Docker commands

### Intermediate
- ✅ Multi-stage builds
- ✅ Docker Compose
- ✅ Networking and volumes
- ✅ Image optimization

### Advanced
- ✅ Container orchestration (Kubernetes)
- ✅ CI/CD integration
- ✅ Security best practices
- ✅ Production deployment strategies

---

## 📚 Additional Resources

- [Docker Official Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Docker Security](https://docs.docker.com/engine/security/)

---

## ✅ Checklist: Docker Workflow

Before deploying to production, ensure:

- [ ] Dockerfile follows best practices
- [ ] Image is optimized (small size)
- [ ] Container runs as non-root user
- [ ] Health checks are implemented
- [ ] Environment variables are properly configured
- [ ] Image is tagged with version numbers
- [ ] Image is pushed to registry
- [ ] Container is tested thoroughly
- [ ] Resource limits are set
- [ ] Logging is configured
- [ ] Security scanning is done
- [ ] Documentation is updated

---

**Happy Containerizing! 🐳**

*Last Updated: 2024*

