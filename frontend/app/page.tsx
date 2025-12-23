import Link from 'next/link'
import { 
  Terminal, 
  GitBranch, 
  Box, 
  Container, 
  Workflow, 
  Code, 
  Server, 
  Cloud,
  TrendingUp
} from 'lucide-react'

const topics = [
  {
    id: 'linux',
    title: 'Linux Commands',
    description: 'Master essential Linux commands with practical examples',
    icon: Terminal,
    color: 'bg-green-500',
    href: '/topics/linux'
  },
  {
    id: 'git',
    title: 'Git & GitHub',
    description: 'Learn Git workflows and GitHub best practices',
    icon: GitBranch,
    color: 'bg-orange-500',
    href: '/topics/git'
  },
  {
    id: 'docker',
    title: 'Docker',
    description: 'From basics to advanced containerization',
    icon: Box,
    color: 'bg-blue-500',
    href: '/topics/docker'
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    description: 'K8s YAML examples and architecture diagrams',
    icon: Container,
    color: 'bg-cyan-500',
    href: '/topics/kubernetes'
  },
  {
    id: 'cicd',
    title: 'CI/CD Pipelines',
    description: 'Jenkins, GitHub Actions, and automation',
    icon: Workflow,
    color: 'bg-purple-500',
    href: '/topics/cicd'
  },
  {
    id: 'terraform',
    title: 'Terraform',
    description: 'Infrastructure as Code with Terraform',
    icon: Code,
    color: 'bg-indigo-500',
    href: '/topics/terraform'
  },
  {
    id: 'ansible',
    title: 'Ansible',
    description: 'Configuration management and automation',
    icon: Server,
    color: 'bg-red-500',
    href: '/topics/ansible'
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    description: 'Prometheus, Grafana, and observability',
    icon: TrendingUp,
    color: 'bg-yellow-500',
    href: '/topics/monitoring'
  },
  {
    id: 'aws',
    title: 'AWS Cloud',
    description: 'Amazon Web Services fundamentals',
    icon: Cloud,
    color: 'bg-amber-500',
    href: '/topics/aws'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          DevOps Learning Hub
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your one-stop platform for mastering DevOps tools, projects, and interview preparation.
          Learn Linux, Docker, Kubernetes, CI/CD, and more with hands-on examples.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/topics"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Start Learning
          </Link>
          <Link 
            href="/projects"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Explore DevOps Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => {
            const Icon = topic.icon || Box
            return (
              <Link
                key={topic.id}
                href={topic.href}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className={`${topic.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {topic.title}
                </h3>
                <p className="text-gray-600">
                  {topic.description}
                </p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white rounded-lg shadow-md p-8 my-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Why Choose DevOps Learning Hub?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            href="/topics"
            className="text-center bg-white rounded-lg p-6 border-2 border-transparent hover:border-primary-500 hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
              Comprehensive Content
            </h3>
            <p className="text-gray-600">
              From basics to advanced topics, covering all essential DevOps tools and practices
            </p>
            <div className="mt-4 text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Explore Topics →
            </div>
          </Link>
          <Link
            href="/projects"
            className="text-center bg-white rounded-lg p-6 border-2 border-transparent hover:border-primary-500 hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💻</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
              Hands-On Examples
            </h3>
            <p className="text-gray-600">
              Real-world examples, code snippets, and practical exercises
            </p>
            <div className="mt-4 text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              View Projects →
            </div>
          </Link>
          <Link
            href="/interview"
            className="text-center bg-white rounded-lg p-6 border-2 border-transparent hover:border-primary-500 hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
              Interview Ready
            </h3>
            <p className="text-gray-600">
              Prepare for DevOps interviews with curated content and common questions
            </p>
            <div className="mt-4 text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Start Preparing →
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

