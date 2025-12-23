# Local Setup Guide

Step-by-step instructions to run DevOps Learning Hub on your local machine.

## Prerequisites

Before starting, ensure you have installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** (or use Docker for MongoDB)
- **Git**

Optional but recommended:
- **Docker Desktop** - [Download](https://www.docker.com/products/docker-desktop)

---

## Method 1: Using Docker Compose (Easiest) 🐳

This method runs everything in containers - no need to install MongoDB separately.

### Steps:

1. **Open Terminal/Command Prompt**
   ```bash
   # Navigate to project directory
   cd "C:\Users\ashis\OneDrive\Desktop\New folder\DevOps Learning Hub"
   ```

2. **Start all services**
   ```bash
   docker-compose up -d
   ```
   
   This will:
   - Download required images (if not already downloaded)
   - Build frontend and backend containers
   - Start MongoDB, Backend, Frontend, and Nginx
   - Set up networking between services

3. **Wait for services to start** (first time may take 2-3 minutes)

4. **Access the application**
   - Open your browser and go to: **http://localhost**
   - Or directly: **http://localhost:80**

5. **Check if everything is running**
   ```bash
   docker-compose ps
   ```
   
   You should see 4 services running:
   - devops-hub-mongodb
   - devops-hub-backend
   - devops-hub-frontend
   - devops-hub-nginx

6. **View logs** (if needed)
   ```bash
   # All services
   docker-compose logs -f
   
   # Specific service
   docker-compose logs -f frontend
   docker-compose logs -f backend
   ```

### Stop Services:
```bash
docker-compose down
```

### Restart Services:
```bash
docker-compose restart
```

---

## Method 2: Local Development (Without Docker) 💻

This method runs services directly on your machine - better for development and debugging.

### Step 1: Install MongoDB

**Option A: Using Docker (Recommended)**
```bash
docker run -d -p 27017:27017 --name mongodb mongo:7
```

**Option B: Install MongoDB locally**
- Download from: https://www.mongodb.com/try/download/community
- Install and start MongoDB service

### Step 2: Install Dependencies

Open terminal in the project root directory:

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

Or use the convenience script:
```bash
npm run install:all
```

### Step 3: Configure Environment Variables

**Backend:**
```bash
cd backend
copy env.example .env
```

Edit `backend/.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/devops-learning-hub
NODE_ENV=development
```

**Frontend (optional):**
Create `frontend/.env.local` if you need to change API URL:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Step 4: Start MongoDB

If using Docker:
```bash
docker start mongodb
```

If installed locally, MongoDB should be running as a service.

### Step 5: Start Backend Server

Open **Terminal 1**:
```bash
cd backend
npm run dev
```

You should see:
```
Server is running on port 5000
MongoDB connected successfully
```

### Step 6: Start Frontend Server

Open **Terminal 2**:
```bash
cd frontend
npm run dev
```

You should see:
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

### Step 7: Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

---

## Method 3: Using npm Scripts (Convenient) 🚀

From the root directory:

```bash
# Install all dependencies first
npm run install:all

# Start both frontend and backend together
npm run dev
```

This uses `concurrently` to run both servers simultaneously.

---

## Troubleshooting

### Port Already in Use

**Error**: `Port 3000 is already in use` or `Port 5000 is already in use`

**Solution**:
```bash
# Windows - Find process using port
netstat -ano | findstr :3000
netstat -ano | findstr :5000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F

# Or change ports in:
# - frontend: package.json (dev script)
# - backend: .env file
```

### MongoDB Connection Error

**Error**: `MongoDB connection error`

**Solutions**:
1. Check if MongoDB is running:
   ```bash
   # Docker
   docker ps | findstr mongodb
   
   # Or restart
   docker restart mongodb
   ```

2. Verify connection string in `backend/.env`

3. Check MongoDB logs:
   ```bash
   docker logs mongodb
   ```

### Frontend Build Errors

**Error**: `Module not found` or build errors

**Solution**:
```bash
cd frontend
rm -rf node_modules .next
npm install
npm run build
```

### Docker Issues

**Error**: `Cannot connect to Docker daemon`

**Solution**:
- Make sure Docker Desktop is running
- Restart Docker Desktop
- Check Docker is accessible: `docker ps`

### Permission Errors (Linux/Mac)

**Solution**:
```bash
sudo chown -R $USER:$USER .
```

---

## Verify Installation

### 1. Check Backend API
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{"status":"ok","message":"DevOps Learning Hub API is running"}
```

### 2. Check Frontend
Open browser: http://localhost:3000 (or http://localhost if using Docker)

You should see the DevOps Learning Hub homepage.

### 3. Check MongoDB
```bash
# Using Docker
docker exec -it mongodb mongosh

# In MongoDB shell:
show dbs
exit
```

---

## Development Tips

1. **Hot Reload**: Both frontend and backend support hot reload - changes reflect automatically

2. **View Logs**: 
   - Frontend: Check terminal running `npm run dev`
   - Backend: Check terminal running backend server
   - Docker: `docker-compose logs -f`

3. **Database Access**:
   - MongoDB Compass: Connect to `mongodb://localhost:27017`
   - Or use MongoDB shell

4. **Code Changes**:
   - Frontend: Changes in `frontend/` reflect immediately
   - Backend: Restart server after changes (or use nodemon)

---

## Quick Commands Reference

```bash
# Docker Compose
docker-compose up -d          # Start all services
docker-compose down            # Stop all services
docker-compose logs -f         # View logs
docker-compose restart         # Restart services
docker-compose ps              # Check status

# Local Development
npm run install:all           # Install all dependencies
npm run dev                   # Start both servers
cd frontend && npm run dev     # Start frontend only
cd backend && npm run dev      # Start backend only

# Build
cd frontend && npm run build   # Build frontend for production
```

---

## Next Steps

Once running:
1. ✅ Explore topics: http://localhost/topics
2. ✅ Check projects: http://localhost/projects  
3. ✅ Practice interviews: http://localhost/interview
4. ✅ Start learning DevOps!

---

**Need Help?** Check the main [README.md](README.md) or open an issue on GitHub.

