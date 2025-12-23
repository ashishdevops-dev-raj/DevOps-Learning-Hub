import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DevOps Learning Hub</h3>
            <p className="text-gray-400">
              Your comprehensive guide to mastering DevOps tools and practices.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/topics" className="hover:text-white transition">Topics</Link></li>
              <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link href="/interview" className="hover:text-white transition">Interview Prep</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="https://github.com/ashishdevops-dev-raj" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.docker.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition"
                >
                  Docker Docs
                </a>
              </li>
              <li>
                <a 
                  href="https://kubernetes.io/docs" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition"
                >
                  K8s Docs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DevOps Learning Hub. Built with Next.js, Node.js, and MongoDB.</p>
        </div>
      </div>
    </footer>
  )
}

