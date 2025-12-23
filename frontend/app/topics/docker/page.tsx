import CodeBlock from '@/components/CodeBlock'
import BackButton from '@/components/BackButton'

export default function DockerPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      <h1 className="text-4xl font-bold mb-6">Docker Guide</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Docker Basics</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Basic Commands</h3>
          <CodeBlock
            code={`# Pull an image
docker pull nginx:latest

# List images
docker images

# Run a container
docker run -d -p 8080:80 --name my-nginx nginx

# List running containers
docker ps

# List all containers
docker ps -a

# Stop a container
docker stop my-nginx

# Start a stopped container
docker start my-nginx

# Remove a container
docker rm my-nginx

# Remove an image
docker rmi nginx`}
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

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild and start
docker-compose up -d --build

# Execute command in service
docker-compose exec web npm test`}
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

# Run container in network
docker run -d --network mynetwork --name app nginx

# Connect container to network
docker network connect mynetwork container_name

# Inspect network
docker network inspect mynetwork`}
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

# Bind mount
docker run -v /host/path:/container/path nginx

# List volumes
docker volume ls

# Inspect volume
docker volume inspect myvolume`}
            language="bash"
            title="Volume management"
          />
        </div>
      </section>
    </div>
  )
}

