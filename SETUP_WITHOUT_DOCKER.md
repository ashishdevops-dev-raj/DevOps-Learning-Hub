# Setup Without Docker (Windows)

Since Docker is not installed, here's how to run the project using local services.

## Option 1: MongoDB Atlas (Cloud - Easiest) ☁️

This is the **easiest option** - no local MongoDB installation needed!

### Steps:

1. **Create free MongoDB Atlas account**
   - Go to: https://www.mongodb.com/cloud/atlas/register
   - Sign up for free (no credit card needed)

2. **Create a free cluster**
   - Click "Build a Database"
   - Choose "FREE" (M0) tier
   - Select a cloud provider and region
   - Click "Create"

3. **Get connection string**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`)

4. **Configure backend**
   ```bash
   cd backend
   copy env.example .env
   ```

5. **Edit `backend/.env`**
   - Replace `MONGODB_URI` with your Atlas connection string
   - Add your database name: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/devops-learning-hub?retryWrites=true&w=majority`

6. **Install dependencies and run**
   ```bash
   # From project root
   npm run install:all
   
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

7. **Access**: http://localhost:3000

---

## Option 2: Install MongoDB Locally (Windows) 💾

### Step 1: Download and Install MongoDB

1. **Download MongoDB Community Server**
   - Go to: https://www.mongodb.com/try/download/community
   - Select:
     - Version: Latest (7.0+)
     - Platform: Windows
     - Package: MSI
   - Click "Download"

2. **Install MongoDB**
   - Run the downloaded `.msi` file
   - Choose "Complete" installation
   - Check "Install MongoDB as a Service"
   - Check "Install MongoDB Compass" (GUI tool)
   - Click "Install"

3. **Verify Installation**
   - MongoDB should start automatically as a Windows service
   - Check Services: Press `Win + R`, type `services.msc`, look for "MongoDB"

### Step 2: Configure Backend

```bash
cd backend
copy env.example .env
```

The `.env` file should have:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/devops-learning-hub
NODE_ENV=development
```

### Step 3: Install Dependencies

```bash
# From project root
npm run install:all
```

### Step 4: Start Backend

```bash
cd backend
npm run dev
```

You should see:
```
Server is running on port 5000
MongoDB connected successfully
```

### Step 5: Start Frontend

Open a **new terminal**:

```bash
cd frontend
npm run dev
```

### Step 6: Access Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

---

## Option 3: Use npm Script (Both Servers Together)

After setting up MongoDB (Option 1 or 2):

```bash
# Install all dependencies
npm run install:all

# Start both servers
npm run dev
```

This will start both frontend and backend in the same terminal.

---

## Quick Setup Checklist

### If using MongoDB Atlas:
- [ ] Create MongoDB Atlas account
- [ ] Create free cluster
- [ ] Get connection string
- [ ] Update `backend/.env` with Atlas connection string
- [ ] Run `npm run install:all`
- [ ] Run `npm run dev`

### If using Local MongoDB:
- [ ] Download and install MongoDB Community Server
- [ ] Verify MongoDB service is running
- [ ] Update `backend/.env` (should already be correct)
- [ ] Run `npm run install:all`
- [ ] Run `npm run dev`

---

## Troubleshooting

### MongoDB Connection Error

**If using local MongoDB:**
```bash
# Check if MongoDB service is running
# Press Win + R, type: services.msc
# Look for "MongoDB" service - should be "Running"

# Or restart MongoDB service
# In Services, right-click MongoDB > Restart
```

**If using MongoDB Atlas:**
- Make sure you added your IP address to the whitelist (0.0.0.0/0 for all IPs)
- Check connection string is correct
- Verify username and password in connection string

### Port Already in Use

**Error**: `Port 3000 is already in use` or `Port 5000 is already in use`

**Solution**:
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process (replace <PID> with actual number)
taskkill /PID <PID> /F
```

### Node Modules Issues

```bash
# Delete node_modules and reinstall
cd frontend
rmdir /s /q node_modules
npm install

cd ../backend
rmdir /s /q node_modules
npm install
```

---

## Recommended: MongoDB Atlas (Option 1)

**Why MongoDB Atlas?**
- ✅ No installation needed
- ✅ Free tier available
- ✅ Works immediately
- ✅ No local service management
- ✅ Can access from anywhere

**Get started in 5 minutes:**
1. Sign up at mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Update `backend/.env`
5. Run the app!

---

## Next Steps

Once running:
1. ✅ Open http://localhost:3000
2. ✅ Explore topics
3. ✅ Check projects
4. ✅ Practice interviews

**Need help?** Check the main [README.md](README.md) or [LOCAL_SETUP.md](LOCAL_SETUP.md)

