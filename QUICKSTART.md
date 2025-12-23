# Quick Start Guide

Get the DevOps Learning Hub up and running in minutes!

## 🚀 Fastest Way (Docker Compose)

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd devops-learning-hub

# 2. Start everything
docker-compose up -d

# 3. Open your browser
# Frontend: http://localhost
# Backend API: http://localhost:5000
```

That's it! All services (Frontend, Backend, MongoDB, Nginx) are now running.

## 📝 What's Running?

- **Frontend (Next.js)**: Port 3000 (proxied through Nginx on port 80)
- **Backend (Express)**: Port 5000
- **MongoDB**: Port 27017
- **Nginx**: Port 80 (reverse proxy)

## 🛠️ Development Mode

If you want to develop and see live changes:

```bash
# Install dependencies
npm run install:all

# Start MongoDB (if not using Docker)
docker run -d -p 27017:27017 --name mongodb mongo:7

# Start backend (Terminal 1)
cd backend
npm install
cp env.example .env
npm run dev

# Start frontend (Terminal 2)
cd frontend
npm install
npm run dev
```

Access:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 🐳 Docker Commands Cheat Sheet

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild after code changes
docker-compose up -d --build

# View specific service logs
docker-compose logs -f frontend
docker-compose logs -f backend

# Execute command in container
docker-compose exec backend node server.js
```

## ✅ Verify Installation

1. Check if containers are running:
   ```bash
   docker-compose ps
   ```

2. Test backend API:
   ```bash
   curl http://localhost:5000/api/health
   ```

3. Open browser: http://localhost

## 🎓 Next Steps

1. Explore topics: http://localhost/topics
2. Check projects: http://localhost/projects
3. Practice interviews: http://localhost/interview

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Change ports in docker-compose.yml
# Or stop the service using the port
```

**MongoDB connection error?**
```bash
# Make sure MongoDB container is running
docker-compose ps
# Restart if needed
docker-compose restart mongodb
```

**Frontend not loading?**
```bash
# Check frontend logs
docker-compose logs frontend
# Rebuild if needed
docker-compose up -d --build frontend
```

## 📚 Learn More

- Full documentation: See [README.md](README.md)
- Contributing: See [CONTRIBUTING.md](CONTRIBUTING.md)

Happy Learning! 🎉

