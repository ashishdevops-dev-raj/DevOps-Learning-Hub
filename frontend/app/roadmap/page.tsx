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
  TrendingUp,
  CheckCircle2,
  Circle,
  ArrowRight
} from 'lucide-react'

const roadmapStages = [
  {
    stage: 'Foundation (Weeks 1-4)',
    level: 'Beginner',
    color: 'bg-green-500',
    topics: [
      {
        title: 'Linux Fundamentals',
        description: 'Master essential Linux commands, file system, permissions, and shell scripting',
        icon: Terminal,
        href: '/topics/linux',
        skills: ['Basic commands', 'File operations', 'Process management', 'Shell scripting basics']
      },
      {
        title: 'Git & GitHub',
        description: 'Learn version control, branching strategies, and collaborative workflows',
        icon: GitBranch,
        href: '/topics/git',
        skills: ['Git basics', 'Branching & merging', 'GitHub workflows', 'Pull requests']
      },
      {
        title: 'Networking Basics',
        description: 'Understand TCP/IP, DNS, HTTP/HTTPS, and network troubleshooting',
        icon: Server,
        href: '#',
        skills: ['OSI model', 'Ports & protocols', 'DNS & DHCP', 'Network security']
      }
    ]
  },
  {
    stage: 'Containerization (Weeks 5-8)',
    level: 'Beginner to Intermediate',
    color: 'bg-blue-500',
    topics: [
      {
        title: 'Docker',
        description: 'Containerization fundamentals, Dockerfile, Docker Compose, and best practices',
        icon: Box,
        href: '/topics/docker',
        skills: ['Docker basics', 'Images & containers', 'Docker Compose', 'Multi-stage builds']
      },
      {
        title: 'Container Orchestration',
        description: 'Introduction to container orchestration concepts',
        icon: Container,
        href: '#',
        skills: ['Container networking', 'Volume management', 'Service discovery']
      }
    ]
  },
  {
    stage: 'Orchestration & Cloud (Weeks 9-16)',
    level: 'Intermediate',
    color: 'bg-cyan-500',
    topics: [
      {
        title: 'Kubernetes',
        description: 'Deploy and manage containerized applications at scale',
        icon: Container,
        href: '/topics/kubernetes',
        skills: ['Pods & Deployments', 'Services & Ingress', 'ConfigMaps & Secrets', 'StatefulSets']
      },
      {
        title: 'Cloud Fundamentals',
        description: 'Learn cloud computing concepts and AWS basics',
        icon: Cloud,
        href: '/topics/aws',
        skills: ['EC2, S3, VPC', 'IAM & Security', 'Cloud networking', 'Storage solutions']
      },
      {
        title: 'Infrastructure as Code',
        description: 'Automate infrastructure provisioning with Terraform',
        icon: Code,
        href: '/topics/terraform',
        skills: ['Terraform basics', 'Resource management', 'State management', 'Modules']
      }
    ]
  },
  {
    stage: 'Automation & CI/CD (Weeks 17-24)',
    level: 'Intermediate to Advanced',
    color: 'bg-purple-500',
    topics: [
      {
        title: 'CI/CD Pipelines',
        description: 'Build, test, and deploy applications automatically',
        icon: Workflow,
        href: '/topics/cicd',
        skills: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Pipeline design']
      },
      {
        title: 'Configuration Management',
        description: 'Automate server configuration with Ansible',
        icon: Server,
        href: '/topics/ansible',
        skills: ['Playbooks', 'Roles & modules', 'Inventory management', 'Idempotency']
      },
      {
        title: 'Scripting & Automation',
        description: 'Python and Shell scripting for DevOps automation',
        icon: Terminal,
        href: '#',
        skills: ['Python scripting', 'Bash automation', 'API integration', 'Error handling']
      }
    ]
  },
  {
    stage: 'Monitoring & Observability (Weeks 25-28)',
    level: 'Advanced',
    color: 'bg-yellow-500',
    topics: [
      {
        title: 'Monitoring & Logging',
        description: 'Set up comprehensive monitoring and observability',
        icon: TrendingUp,
        href: '/topics/monitoring',
        skills: ['Prometheus & Grafana', 'ELK Stack', 'Log aggregation', 'Alerting']
      },
      {
        title: 'Performance Optimization',
        description: 'Optimize application and infrastructure performance',
        icon: TrendingUp,
        href: '#',
        skills: ['Performance tuning', 'Resource optimization', 'Cost management']
      }
    ]
  },
  {
    stage: 'Advanced Topics (Weeks 29+)',
    level: 'Expert',
    color: 'bg-red-500',
    topics: [
      {
        title: 'Advanced Kubernetes',
        description: 'Master advanced K8s concepts and patterns',
        icon: Container,
        href: '/topics/kubernetes',
        skills: ['Helm charts', 'Operators', 'Service mesh', 'Multi-cluster']
      },
      {
        title: 'Security & Compliance',
        description: 'DevSecOps practices and security automation',
        icon: Server,
        href: '#',
        skills: ['Security scanning', 'Secrets management', 'Compliance automation', 'Vulnerability management']
      },
      {
        title: 'Cloud Advanced',
        description: 'Advanced cloud services and architectures',
        icon: Cloud,
        href: '/topics/aws',
        skills: ['Serverless', 'Microservices', 'Cloud-native patterns', 'Multi-cloud']
      }
    ]
  }
]

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">DevOps Learning Roadmap</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            A comprehensive step-by-step guide to mastering DevOps from beginner to expert level.
            Follow this roadmap to build a strong foundation and advance your DevOps career.
          </p>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {roadmapStages.map((stage, stageIndex) => (
              <div key={stageIndex} className="relative">
                {/* Timeline Line */}
                {stageIndex < roadmapStages.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gray-300 -mb-16"></div>
                )}

                {/* Stage Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className={`${stage.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg`}>
                    {stageIndex + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-3xl font-bold text-gray-900">{stage.stage}</h2>
                      <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-semibold rounded-full">
                        {stage.level}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Topics Grid */}
                <div className="ml-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {stage.topics.map((topic, topicIndex) => {
                    const Icon = topic.icon
                    return (
                      <div
                        key={topicIndex}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-200"
                      >
                        <div className={`${stage.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                          <Icon className="text-white w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          {topic.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {topic.description}
                        </p>
                        
                        {/* Skills List */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Skills:</h4>
                          <ul className="space-y-1">
                            {topic.skills.map((skill, skillIndex) => (
                              <li key={skillIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Link Button */}
                        {topic.href !== '#' ? (
                          <Link
                            href={topic.href}
                            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm mt-4 group"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        ) : (
                          <span className="inline-flex items-center gap-2 text-gray-400 font-medium text-sm mt-4">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            🎯 Learning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-lg mb-2 text-blue-900">Practice Daily</h3>
              <p className="text-blue-800">
                Set aside at least 1-2 hours daily for hands-on practice. Build projects and experiment with tools.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-lg mb-2 text-green-900">Build Projects</h3>
              <p className="text-green-800">
                Apply what you learn by building real-world projects. Check out our Projects section for ideas.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-lg mb-2 text-purple-900">Join Communities</h3>
              <p className="text-purple-800">
                Engage with DevOps communities on GitHub, Reddit, and Discord to learn from others.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-lg mb-2 text-yellow-900">Prepare for Interviews</h3>
              <p className="text-yellow-800">
                Practice interview questions regularly. Visit our Interview Prep section for curated questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-primary-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your DevOps Journey?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Begin with the foundation topics and work your way up. Remember, consistency is key!
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/topics"
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              Explore Topics
            </Link>
            <Link
              href="/projects"
              className="bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition border border-primary-500"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

