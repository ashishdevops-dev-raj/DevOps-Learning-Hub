import Link from 'next/link'

interface LogoProps {
  className?: string
  showText?: boolean
  variant?: 'light' | 'dark'
}

export default function Logo({ className = '', showText = true, variant = 'light' }: LogoProps) {
  const textColorClass = variant === 'dark' 
    ? 'text-white group-hover:text-primary-300' 
    : 'text-primary-600 group-hover:text-primary-700'
  const subtitleColorClass = variant === 'dark'
    ? 'text-gray-300'
    : 'text-gray-500'
  
  // Unique ID for gradient to avoid conflicts (static for consistency)
  const gradientId = 'devops-logo-gradient'
  
  return (
    <Link 
      href="/" 
      className={`flex items-center gap-3 group ${className}`}
    >
      {/* Logo Icon - Ultra Modern DevOps Symbol */}
      <div className="relative flex-shrink-0">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
        >
          {/* Outer Glow Effect */}
          <circle
            cx="25"
            cy="25"
            r="23"
            fill={`url(#${gradientId}Glow)`}
            opacity="0.2"
            className="group-hover:opacity-30 transition-opacity"
          />
          
          {/* Main Background Circle with Gradient */}
          <circle
            cx="25"
            cy="25"
            r="21"
            fill={`url(#${gradientId})`}
            className="group-hover:opacity-95 transition-opacity"
          />
          
          {/* Inner Hexagon - Container Symbol */}
          <path
            d="M25 10L33 14.5L37 23L33 31.5L25 36L17 31.5L13 23L17 14.5L25 10Z"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            opacity="0.25"
          />
          
          {/* Code Brackets - Development */}
          <path
            d="M12 18L9 25L12 32M38 18L41 25L38 32"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-blue-200 transition-colors"
          />
          
          {/* Central Hub Circle */}
          <circle
            cx="25"
            cy="25"
            r="9"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            opacity="0.9"
          />
          
          {/* Inner Core */}
          <circle
            cx="25"
            cy="25"
            r="5"
            fill="white"
            opacity="0.95"
            className="group-hover:opacity-100 transition-opacity"
          />
          
          {/* CI/CD Flow Arrow */}
          <path
            d="M16 25H34M28 19L34 25L28 31"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Decorative Nodes */}
          <circle cx="20" cy="15" r="2" fill="white" opacity="0.8" className="group-hover:opacity-100 transition-opacity" />
          <circle cx="30" cy="15" r="2" fill="white" opacity="0.8" className="group-hover:opacity-100 transition-opacity" />
          <circle cx="20" cy="35" r="2" fill="white" opacity="0.8" className="group-hover:opacity-100 transition-opacity" />
          <circle cx="30" cy="35" r="2" fill="white" opacity="0.8" className="group-hover:opacity-100 transition-opacity" />
          
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="30%" stopColor="#4f46e5" />
              <stop offset="70%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id={`${gradientId}Glow`} x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`text-2xl font-bold ${textColorClass} transition-colors duration-200 leading-tight`}>
            DevOps Hub
          </span>
          <span className={`text-xs ${subtitleColorClass} -mt-0.5 hidden sm:block font-medium`}>
            Learning Platform
          </span>
        </div>
      )}
    </Link>
  )
}

