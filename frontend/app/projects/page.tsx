import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Dockerized Web Application',
    description: 'Deploy a full-stack application using Docker containers',
    difficulty: 'Beginner',
    techStack: ['Docker', 'Node.js', 'PostgreSQL', 'Nginx'],
    href: 'https://github.com/ashishdevops-dev-raj/Dockerized-webapp',
    external: true
  },
  {
    id: 2,
    title: 'Kubernetes Cluster Setup',
    description: 'Deploy and manage applications on Kubernetes',
    difficulty: 'Intermediate',
    techStack: ['Kubernetes', 'Docker', 'Helm'],
    href: 'https://github.com/ashishdevops-dev-raj/Kubernetes-Cluster-Setup',
    external: true
  },
  {
    id: 3,
    title: 'CI/CD Pipeline with GitHub Actions',
    description: 'Automate testing and deployment',
    difficulty: 'Intermediate',
    techStack: ['GitHub Actions', 'Docker', 'AWS'],
    href: 'https://github.com/ashishdevops-dev-raj/CI-CD-Pipeline-with-GitHub-Actions',
    external: true
  },
  {
    id: 4,
    title: 'Infrastructure as Code with Terraform',
    description: 'Provision AWS infrastructure using Terraform',
    difficulty: 'Advanced',
    techStack: ['Terraform', 'AWS', 'EC2', 'S3'],
    href: 'https://github.com/ashishdevops-dev-raj/Infrastructure-as-Code-with-Terraform',
    external: true
  },
  {
    id: 5,
    title: 'Monitoring Stack',
    description: 'Set up Prometheus and Grafana for monitoring',
    difficulty: 'Intermediate',
    techStack: ['Prometheus', 'Grafana', 'Docker'],
    href: 'https://github.com/ashishdevops-dev-raj/Monitoring-Stack',
    external: true
  },
  {
    id: 6,
    title: 'Naukri Automation Bot',
    description: 'Automated job application bot for Naukri.com using Selenium WebDriver',
    difficulty: 'Intermediate',
    techStack: ['Python', 'Selenium', 'GitHub Actions', 'Automation'],
    href: 'https://github.com/ashishdevops-dev-raj/Naukri-Automation',
    external: true
  }
]

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">DevOps Projects</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Hands-on projects to practice and master DevOps skills. Each project includes step-by-step instructions and real-world scenarios.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const isExternal = (project as any).external
          const content = (
            <>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {project.difficulty}
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {isExternal && (
                <div className="mt-4 text-xs text-gray-500 flex items-center gap-1">
                  <span>🔗</span>
                  <span>External Project</span>
                </div>
              )}
            </>
          )

          if (isExternal) {
            return (
              <a
                key={project.id}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-200 block"
              >
                {content}
              </a>
            )
          }

          return (
            <Link
              key={project.id}
              href={project.href}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-200 block"
            >
              {content}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

