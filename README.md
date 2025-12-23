# DevOps Learning Hub

A comprehensive one-stop learning platform for DevOps tools, projects, and interview preparation.

## 🎯 Features

- **Linux Commands** - Essential commands with practical examples
- **Git & GitHub** - Workflows and best practices
- **Docker** - From basics to advanced containerization
- **Kubernetes** - YAML examples and architecture diagrams
- **CI/CD Pipelines** - Jenkins, GitHub Actions automation
- **Terraform** - Infrastructure as Code guides
- **Ansible** - Configuration management
- **Monitoring** - Prometheus, Grafana setup
- **AWS** - Cloud fundamentals

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Containerization:** Docker, Docker Compose
- **Reverse Proxy:** Nginx
- **CI/CD:** GitHub Actions
- **Hosting:** AWS (configurable)

## 📋 Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose
- MongoDB (or use Docker Compose)
- Git

## 🚀 Quick Start

### Option 1: Using Docker Compose (Recommended)

1. Clone the repository:
```bash
git clone <repository-url>
cd devops-learning-hub
```

2. Start all services:
```bash
docker-compose up -d
```

3. Access the application:
- Frontend: http://localhost:80
- Backend API: http://localhost:5000
- MongoDB: localhost:27017

### Option 2: Local Development

1. Install dependencies:
```bash
npm run install:all
```

2. Set up environment variables:
```bash
# Backend
cd backend
cp .env.example .env
# Edit .env with your MongoDB URI

# Frontend
cd ../frontend
# Create .env.local if needed
```

3. Start MongoDB (if not using Docker):
```bash
# Using Docker
docker run -d -p 27017:27017 --name mongodb mongo:7

# Or install MongoDB locally
```

4. Start development servers:
```bash
# From root directory
npm run dev

# Or separately:
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm run dev
```

5. Access the application:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 📁 Project Structure

```
devops-learning-hub/
├── frontend/              # Next.js frontend application
│   ├── app/              # Next.js app directory
│   │   ├── topics/       # Topic pages
│   │   ├── projects/     # Project pages
│   │   └── interview/    # Interview prep
│   ├── components/       # React components
│   └── package.json
├── backend/              # Express.js backend API
│   ├── server.js        # Main server file
│   └── package.json
├── nginx/                # Nginx configuration
│   ├── nginx.conf
│   └── conf.d/
├── docker-compose.yml    # Docker Compose configuration
├── .github/
│   └── workflows/        # GitHub Actions CI/CD
└── README.md
```

## 🐳 Docker Commands

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild after changes
docker-compose up -d --build

# Stop and remove volumes
docker-compose down -v
```

## 🔧 Configuration

### Environment Variables

**Backend (.env):**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/devops-learning-hub
NODE_ENV=development
```

**Frontend (.env.local):**
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 🧪 Testing

```bash
# Frontend
cd frontend
npm run lint
npm run build

# Backend
cd backend
npm test  # Add tests as needed
```

## 🚢 Deployment

### AWS Deployment

1. Build Docker images:
```bash
docker-compose build
```

2. Push to container registry (ECR, Docker Hub, etc.)

3. Deploy using:
   - AWS ECS (Elastic Container Service)
   - AWS EC2 with Docker
   - AWS Elastic Beanstalk
   - Kubernetes on EKS

### Using Terraform

See `/topics/terraform` for infrastructure as code examples.

## 📚 Learning Path

1. **Beginner:**
   - Linux Commands
   - Git & GitHub
   - Docker Basics

2. **Intermediate:**
   - Docker Advanced
   - Kubernetes Basics
   - CI/CD Pipelines
   - Monitoring

3. **Advanced:**
   - Kubernetes Advanced
   - Terraform
   - Ansible
   - AWS Cloud

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🎓 Career Benefits

✅ Demonstrates end-to-end DevOps skills  
✅ Great for interview discussions  
✅ Real-world project experience  
✅ Can be extended with analytics, authentication, and more

## 🔗 Resources

- [Docker Documentation](https://docs.docker.com)
- [Kubernetes Documentation](https://kubernetes.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## 📧 Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ for DevOps learners

