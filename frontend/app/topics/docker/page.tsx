'use client'

import CodeBlock from '@/components/CodeBlock'
import BackButton from '@/components/BackButton'
import { BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function DockerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex gap-8">
        {/* Main Content */}
        <div className="flex-1 max-w-4xl">
          <BackButton />
          <h1 className="text-4xl font-bold mb-6">Docker</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Docker Basics</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Basic Commands</h3>
          <CodeBlock
            code={`# Pull an image
docker pull nginx:latest
docker pull nginx:1.21  # Specific version

# List images
docker images
docker images -a  # All images including intermediate
docker images --filter "dangling=true"  # Dangling images

# Run a container
docker run -d -p 8080:80 --name my-nginx nginx
docker run -it --rm ubuntu bash  # Interactive, remove on exit
docker run -d -p 8080:80 -v /host:/container --name app nginx  # With volume

# List running containers
docker ps
docker ps -a  # All containers
docker ps -q  # Only IDs
docker ps --filter "status=exited"  # Filter by status

# Stop a container
docker stop my-nginx
docker stop $(docker ps -q)  # Stop all running containers

# Start a stopped container
docker start my-nginx
docker restart my-nginx  # Restart container

# Remove a container
docker rm my-nginx
docker rm -f my-nginx  # Force remove running container
docker container prune  # Remove all stopped containers

# Remove an image
docker rmi nginx
docker rmi -f nginx  # Force remove
docker image prune -a  # Remove all unused images

# View container logs
docker logs my-nginx
docker logs -f my-nginx  # Follow logs
docker logs --tail 100 my-nginx  # Last 100 lines
docker logs --since 1h my-nginx  # Last hour

# Execute command in container
docker exec -it my-nginx /bin/bash
docker exec my-nginx ls /app

# View container stats
docker stats
docker stats my-nginx  # Specific container`}
            language="bash"
            title="Basic Docker commands"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dockerfile Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Simple Node.js Application</h3>
          <CodeBlock
            code={`FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]`}
            language="dockerfile"
            title="Dockerfile for Node.js"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Python Flask Application</h3>
          <CodeBlock
            code={`FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]`}
            language="dockerfile"
            title="Dockerfile for Python"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Multi-stage Build</h3>
          <CodeBlock
            code={`# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
EXPOSE 3000
CMD ["node", "dist/server.js"]`}
            language="dockerfile"
            title="Multi-stage Dockerfile"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Docker Compose</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Web Application Stack</h3>
          <CodeBlock
            code={`version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
    depends_on:
      - db
    volumes:
      - ./app:/app

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:`}
            language="yaml"
            title="docker-compose.yml"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Docker Compose Commands</h3>
          <CodeBlock
            code={`# Start services
docker-compose up -d
docker-compose up  # Foreground mode

# View logs
docker-compose logs -f
docker-compose logs -f web  # Specific service
docker-compose logs --tail=100 web  # Last 100 lines

# Stop services
docker-compose down
docker-compose down -v  # Also remove volumes

# Rebuild and start
docker-compose up -d --build
docker-compose build  # Build without starting
docker-compose build --no-cache  # Build without cache

# Execute command in service
docker-compose exec web npm test
docker-compose exec db psql -U user -d mydb

# View running services
docker-compose ps

# Restart specific service
docker-compose restart web

# Scale services
docker-compose up -d --scale web=3

# View service status
docker-compose top

# Pull latest images
docker-compose pull

# Cleanup
docker-compose down --rmi all  # Remove images too`}
            language="bash"
            title="Docker Compose commands"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advanced Topics</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Docker Networks</h3>
          <CodeBlock
            code={`# Create network
docker network create mynetwork
docker network create --driver bridge mynetwork

# List networks
docker network ls

# Run container in network
docker run -d --network mynetwork --name app nginx

# Connect container to network
docker network connect mynetwork container_name
docker network disconnect mynetwork container_name

# Inspect network
docker network inspect mynetwork

# Remove network
docker network rm mynetwork
docker network prune  # Remove unused networks`}
            language="bash"
            title="Network management"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Docker Volumes</h3>
          <CodeBlock
            code={`# Create volume
docker volume create myvolume

# Use volume in container
docker run -v myvolume:/data nginx
docker run --mount source=myvolume,target=/data nginx

# Bind mount
docker run -v /host/path:/container/path nginx
docker run -v $(pwd):/app nginx  # Current directory

# List volumes
docker volume ls

# Inspect volume
docker volume inspect myvolume

# Remove volume
docker volume rm myvolume
docker volume prune  # Remove unused volumes

# Copy files to/from container
docker cp container_name:/path/file.txt ./
docker cp ./file.txt container_name:/path/`}
            language="bash"
            title="Volume management"
          />
        </div>
      </section>
        </div>

        {/* Right Sidebar - Docker Guide */}
        <div className="w-64 flex-shrink-0">
          <div className="sticky top-8">
            <Link href="/topics/docker/guide">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 flex-shrink-0" />
                  <h3 className="text-base font-bold">Docker Guide</h3>
                </div>
                <p className="text-xs text-blue-50 mb-2">
                  Complete step-by-step tutorial
                </p>
                <div className="flex items-center text-xs font-semibold">
                  <span>View Full Guide</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
