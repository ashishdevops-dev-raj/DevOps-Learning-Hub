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

export default function TopicsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">DevOps Topics</h1>
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
    </div>
  )
}

