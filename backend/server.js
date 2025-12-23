const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/devops-learning-hub';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'DevOps Learning Hub API is running' });
});

// Topics routes
app.get('/api/topics', async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/topics/:id', async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }
    res.json(topic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Projects routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Interview questions routes
app.get('/api/interview/questions', async (req, res) => {
  try {
    const questions = await InterviewQuestion.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Models
const topicSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  content: String,
  examples: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  difficulty: String,
  steps: [String],
  createdAt: { type: Date, default: Date.now }
});

const interviewQuestionSchema = new mongoose.Schema({
  topic: String,
  question: String,
  answer: String,
  difficulty: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

const Topic = mongoose.model('Topic', topicSchema);
const Project = mongoose.model('Project', projectSchema);
const InterviewQuestion = mongoose.model('InterviewQuestion', interviewQuestionSchema);

module.exports = { Topic, Project, InterviewQuestion };

