// Docker Interview Questions - 100 Questions
// Easy Level (1-35), Medium Level (36-70), Hard Level (71-100)

export const dockerQuestions = [
  // Easy Level (Questions 1-35)
  {
    topic: 'Docker',
    question: 'What is Docker?',
    answer: 'Docker is a platform for developing, shipping, and running applications using containerization. It packages applications and their dependencies into containers that can run consistently across different environments.',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'What is a container?',
    answer: 'A container is a lightweight, standalone, executable package that includes everything needed to run an application: code, runtime, system tools, libraries, and settings.',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'What is the difference between a container and a virtual machine?',
    answer: '- **Container**: Shares host OS kernel, lightweight, fast startup, less isolation\n- **VM**: Has its own OS, heavier, slower startup, more isolation',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'What is a Docker image?',
    answer: 'A Docker image is a read-only template used to create containers. It\'s built from a Dockerfile and contains all dependencies needed to run an application.',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'What is a Dockerfile?',
    answer: 'A Dockerfile is a text file containing instructions to build a Docker image. It defines the base image, dependencies, and commands to set up the container.',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you build a Docker image?',
    answer: 'Use `docker build`:\n```bash\ndocker build -t <tag> .\ndocker build -f <dockerfile> -t <tag> .\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you run a container?',
    answer: 'Use `docker run`:\n```bash\ndocker run <image>\ndocker run -d <image>  # Detached mode\ndocker run -it <image> /bin/bash  # Interactive\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you list running containers?',
    answer: 'Use `docker ps`:\n```bash\ndocker ps\ndocker ps -a  # All containers\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you stop a container?',
    answer: 'Use these commands:\n```bash\ndocker stop <container>\ndocker kill <container>  # Force stop\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you start a stopped container?',
    answer: 'Use `docker start`:\n```bash\ndocker start <container>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you remove a container?',
    answer: 'Use `docker rm`:\n```bash\ndocker rm <container>\ndocker rm -f <container>  # Force remove running container\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you view container logs?',
    answer: 'Use `docker logs`:\n```bash\ndocker logs <container>\ndocker logs -f <container>  # Follow logs\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you execute a command in a running container?',
    answer: 'Use `docker exec`:\n```bash\ndocker exec -it <container> /bin/bash\ndocker exec <container> <command>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'What is the difference between `docker run` and `docker start`?',
    answer: '- `docker run`: Creates and starts a new container\n- `docker start`: Starts an existing stopped container',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'What is the difference between `docker stop` and `docker kill`?',
    answer: '- `docker stop`: Gracefully stops container (SIGTERM, then SIGKILL)\n- `docker kill`: Immediately terminates container (SIGKILL)',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'What is the difference between `docker exec` and `docker attach`?',
    answer: '- `docker exec`: Runs new command in running container (creates new process)\n- `docker attach`: Attaches to main process (if it exits, container stops)',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you list Docker images?',
    answer: 'Use `docker images`:\n```bash\ndocker images\ndocker images -a\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you remove a Docker image?',
    answer: 'Use `docker rmi`:\n```bash\ndocker rmi <image>\ndocker rmi -f <image>  # Force remove\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you pull an image from Docker Hub?',
    answer: 'Use `docker pull`:\n```bash\ndocker pull <image>\ndocker pull <image>:<tag>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you push an image to Docker Hub?',
    answer: 'Use `docker push`:\n```bash\ndocker push <image>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'What is Docker Hub?',
    answer: 'Docker Hub is a cloud-based registry service where you can find and share container images. It\'s the default registry for Docker.',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'What is a Docker volume?',
    answer: 'A Docker volume is a mechanism for persisting data generated by containers. Volumes are managed by Docker and can be shared among containers.',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you create a volume?',
    answer: 'Use `docker volume create`:\n```bash\ndocker volume create <name>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you use a volume?',
    answer: 'Use `-v` or `--mount`:\n```bash\ndocker run -v <volume-name>:<container-path> <image>\ndocker run --mount type=volume,source=<volume>,target=<path> <image>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'What is the difference between volumes and bind mounts?',
    answer: '- **Volumes**: Managed by Docker, stored in Docker\'s directory, portable\n- **Bind Mounts**: Direct mapping to host filesystem, less portable',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you map a port?',
    answer: 'Use `-p` flag:\n```bash\ndocker run -p 8080:80 <image>\ndocker run -p <host-port>:<container-port> <image>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you set environment variables?',
    answer: 'Use `-e` or `--env-file`:\n```bash\ndocker run -e VAR=value <image>\ndocker run --env-file .env <image>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'What is Docker Compose?',
    answer: 'Docker Compose is a tool for defining and running multi-container Docker applications using a YAML file.',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you start services with Docker Compose?',
    answer: 'Use `docker-compose up`:\n```bash\ndocker-compose up\ndocker-compose up -d  # Detached mode\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'How do you stop services with Docker Compose?',
    answer: 'Use these commands:\n```bash\ndocker-compose down\ndocker-compose stop\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'What is the difference between `docker-compose up` and `docker-compose start`?',
    answer: '- `docker-compose up`: Creates and starts containers\n- `docker-compose start`: Starts existing containers',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'What is `.dockerignore`?',
    answer: '`.dockerignore` is a file that specifies which files should be excluded from the build context, similar to `.gitignore`.',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'What is the difference between `COPY` and `ADD` in Dockerfile?',
    answer: '- **COPY**: Simple file copy from host to container\n- **ADD**: Can copy from URLs and automatically extract tar files',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'What is the difference between `CMD` and `ENTRYPOINT`?',
    answer: '- **CMD**: Default command/parameters (can be overridden)\n- **ENTRYPOINT**: Command that always runs (parameters can be appended)',
    difficulty: 'Easy'
  },
  {
    topic: 'Docker',
    question: 'What is `WORKDIR` in Dockerfile?',
    answer: '`WORKDIR` sets the working directory for subsequent instructions in the Dockerfile.',
    difficulty: 'Easy'
  },

  // Medium Level (Questions 36-70)
  {
    topic: 'Docker',
    question: 'Explain Docker architecture components.',
    answer: 'Docker components:\n- **Docker Daemon**: Background service managing containers\n- **Docker Client**: CLI tool to interact with daemon\n- **Docker Registry**: Repository for Docker images (Docker Hub, etc.)\n- **Docker Images**: Read-only templates\n- **Docker Containers**: Running instances of images',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'What is a Docker registry?',
    answer: 'A Docker registry is a storage and distribution system for Docker images. Examples: Docker Hub, AWS ECR, Google Container Registry.',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'What is image layering?',
    answer: 'Docker images are built in layers. Each instruction in a Dockerfile creates a new layer. Layers are cached and reused, making builds faster.',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you reduce Docker image size?',
    answer: 'Strategies:\n- Use multi-stage builds\n- Use minimal base images (alpine)\n- Remove unnecessary files\n- Combine RUN commands\n- Use `.dockerignore`\n- Remove package managers after installation',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'What is a multi-stage build?',
    answer: 'Multi-stage builds allow you to use multiple `FROM` statements in a Dockerfile. Useful for:\n- Reducing final image size\n- Separating build and runtime environments\n- Keeping build tools out of production image',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you create a multi-stage build?',
    answer: 'Example multi-stage Dockerfile:\n```dockerfile\nFROM node:18 AS builder\nWORKDIR /app\nCOPY . .\nRUN npm run build\n\nFROM node:18-alpine\nCOPY --from=builder /app/dist ./dist\nCMD ["node", "dist/index.js"]\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'What are Dockerfile best practices?',
    answer: 'Best practices:\n- Use multi-stage builds\n- Minimize layers\n- Use `.dockerignore`\n- Don\'t run as root\n- Use specific tags (not `latest`)\n- Order instructions from least to most frequently changing\n- Use cache effectively',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'Why should you avoid running containers as root?',
    answer: 'Running as root poses security risks. If container is compromised, attacker has root access. Best practice is to create and use a non-root user.',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you create a non-root user in Dockerfile?',
    answer: 'Example:\n```dockerfile\nRUN adduser -D -s /bin/sh appuser\nUSER appuser\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'What is a named volume?',
    answer: 'A named volume is a volume with a specific name that can be referenced and reused across containers.',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you persist data in Docker?',
    answer: 'Data persistence methods:\n- Volumes (recommended)\n- Bind mounts\n- tmpfs mounts (in-memory)',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'What are Docker network types?',
    answer: 'Network types:\n- **bridge**: Default network for containers on same host\n- **host**: Uses host\'s network stack\n- **none**: No networking\n- **overlay**: For multi-host networking (Swarm)\n- **macvlan**: Assigns MAC address to container',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do containers communicate?',
    answer: 'Containers on the same network can communicate using container names as hostnames. Docker provides DNS resolution for containers.',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'What is the default network driver?',
    answer: 'The default network driver is `bridge`, which creates an internal network on the host.',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you create a network?',
    answer: 'Use `docker network create`:\n```bash\ndocker network create <name>\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you connect a container to a network?',
    answer: 'Use these commands:\n```bash\ndocker run --network <network> <image>\ndocker network connect <network> <container>\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you scale services in Docker Compose?',
    answer: 'Use `docker-compose scale`:\n```bash\ndocker-compose scale <service>=<number>\n# Or in docker-compose.yml v3+, use deploy.replicas\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'What is the difference between `docker save` and `docker export`?',
    answer: '- `docker save`: Saves one or more images to tar archive\n- `docker export`: Exports container\'s filesystem to tar archive',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you save an image?',
    answer: 'Use `docker save`:\n```bash\ndocker save <image> -o file.tar\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you load an image?',
    answer: 'Use `docker load`:\n```bash\ndocker load -i file.tar\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'Explain Docker health checks.',
    answer: 'Health checks allow Docker to check if a container is still working. Defined in Dockerfile with `HEALTHCHECK` or with `--health-cmd` flag.',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you add a health check?',
    answer: 'Example in Dockerfile:\n```dockerfile\nHEALTHCHECK --interval=30s --timeout=3s --retries=3 \\\n  CMD curl -f http://localhost/health || exit 1\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'What is the difference between `docker build` and `docker commit`?',
    answer: '- `docker build`: Builds image from Dockerfile (reproducible)\n- `docker commit`: Creates image from container changes (not recommended)',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you optimize Docker build time?',
    answer: 'Optimization strategies:\n- Leverage layer caching\n- Order Dockerfile instructions from least to most changing\n- Use build cache\n- Use multi-stage builds\n- Minimize context size with `.dockerignore`',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'What is Docker Swarm?',
    answer: 'Docker Swarm is Docker\'s native clustering and orchestration tool. It allows you to manage a cluster of Docker hosts.',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you initialize a Swarm?',
    answer: 'Use `docker swarm init`:\n```bash\ndocker swarm init\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you join a Swarm?',
    answer: 'Use `docker swarm join`:\n```bash\ndocker swarm join --token <token> <manager-ip>:2377\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'What is a Docker service?',
    answer: 'A Docker service is a container running in Swarm mode, managed by Docker Swarm.',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you create a service?',
    answer: 'Use `docker service create`:\n```bash\ndocker service create --replicas 3 <image>\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you view services?',
    answer: 'Use these commands:\n```bash\ndocker service ls\ndocker service ps <service>\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'What is Docker BuildKit?',
    answer: 'BuildKit is an improved backend for building Docker images, providing better performance and features.',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you enable BuildKit?',
    answer: 'Set environment variable:\n```bash\nexport DOCKER_BUILDKIT=1\ndocker build ...\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'What is the difference between `docker system prune` and `docker system prune -a`?',
    answer: '- `docker system prune`: Removes unused containers, networks, images (dangling), and build cache\n- `docker system prune -a`: Also removes all unused images (not just dangling)',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you view Docker disk usage?',
    answer: 'Use `docker system df`:\n```bash\ndocker system df\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Docker',
    question: 'How do you inspect a container?',
    answer: 'Use `docker inspect`:\n```bash\ndocker inspect <container>\ndocker inspect <image>\n```',
    difficulty: 'Medium'
  },

  // High/Advanced Level (Questions 71-100)
  {
    topic: 'Docker',
    question: 'What are Docker security best practices?',
    answer: 'Security best practices:\n- Don\'t run as root\n- Use official/base images\n- Scan images for vulnerabilities\n- Keep images updated\n- Use minimal base images\n- Limit container capabilities\n- Use read-only filesystems where possible\n- Don\'t store secrets in images',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is the difference between `--privileged` and `--cap-add`?',
    answer: '- `--privileged`: Gives container all capabilities (dangerous)\n- `--cap-add`: Adds specific capabilities (more secure)',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'How do you run a container with limited capabilities?',
    answer: 'Use `--cap-drop` and `--cap-add`:\n```bash\ndocker run --cap-drop ALL --cap-add NET_BIND_SERVICE <image>\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'How do you run a container with read-only filesystem?',
    answer: 'Use `--read-only` flag:\n```bash\ndocker run --read-only <image>\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is Docker Content Trust?',
    answer: 'Docker Content Trust provides cryptographic signatures for images, ensuring image integrity.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'How do you enable Content Trust?',
    answer: 'Set environment variable:\n```bash\nexport DOCKER_CONTENT_TRUST=1\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is Docker secrets?',
    answer: 'Docker secrets is a secure way to store sensitive data like passwords, tokens, and keys in Swarm mode.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'How do you create a secret?',
    answer: 'Use `docker secret create`:\n```bash\necho "mypassword" | docker secret create my_secret -\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is Docker configs?',
    answer: 'Docker configs allows you to store non-sensitive configuration files in Swarm mode.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is Docker overlay network?',
    answer: 'Overlay network enables communication between containers on different Docker hosts in a Swarm.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'How do you create an overlay network?',
    answer: 'Use `docker network create` with overlay driver:\n```bash\ndocker network create --driver overlay <name>\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is Docker stack?',
    answer: 'A Docker stack is a group of services that make up an application, defined in a Compose file.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'How do you deploy a stack?',
    answer: 'Use `docker stack deploy`:\n```bash\ndocker stack deploy -c docker-compose.yml <stack-name>\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is Docker plugin?',
    answer: 'Docker plugins extend Docker functionality, such as volume plugins, network plugins, etc.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is Docker context?',
    answer: 'Docker context allows you to manage connections to multiple Docker daemons.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'How do you switch Docker context?',
    answer: 'Use `docker context use`:\n```bash\ndocker context use <context-name>\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is BuildKit cache mounts?',
    answer: 'BuildKit cache mounts allow you to cache directories between builds for faster builds.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'How do you use cache mounts?',
    answer: 'Example in Dockerfile:\n```dockerfile\nRUN --mount=type=cache,target=/root/.npm npm install\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is Docker BuildKit secrets?',
    answer: 'BuildKit secrets allow you to securely pass secrets during build without including them in the image.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'How do you use BuildKit secrets?',
    answer: 'Example in Dockerfile:\n```dockerfile\nRUN --mount=type=secret,id=mysecret cat /run/secrets/mysecret\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is Docker rootless mode?',
    answer: 'Rootless mode allows running Docker daemon and containers without root privileges.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'How do you enable rootless Docker?',
    answer: 'Install Docker in rootless mode using the rootless installation script.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is Docker Desktop?',
    answer: 'Docker Desktop is a GUI application for Mac and Windows that includes Docker Engine, CLI, and other tools.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is Docker Machine?',
    answer: 'Docker Machine is a tool that lets you install Docker Engine on virtual hosts and manage them.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is Docker Compose v3 vs v2?',
    answer: 'v3 is designed for Swarm mode and includes features like `deploy` section, while v2 is for standalone Docker.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is Docker BuildKit frontend?',
    answer: 'BuildKit frontend allows using different syntaxes for Dockerfiles, like Dockerfile, Buildpacks, etc.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is Docker Buildx?',
    answer: 'Docker Buildx is an extended build command that supports advanced features like multi-platform builds.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'How do you build for multiple platforms?',
    answer: 'Use `docker buildx build`:\n```bash\ndocker buildx build --platform linux/amd64,linux/arm64 -t <image> .\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'What is Docker layer caching?',
    answer: 'Layer caching stores intermediate layers from previous builds, allowing faster subsequent builds.',
    difficulty: 'Hard'
  },
  {
    topic: 'Docker',
    question: 'How do you debug a Docker container?',
    answer: 'Debugging commands:\n```bash\ndocker logs <container>        # Check logs\ndocker exec -it <container> sh  # Access shell\ndocker inspect <container>     # Inspect configuration\ndocker stats <container>       # Resource usage\n```',
    difficulty: 'Hard'
  }
]

