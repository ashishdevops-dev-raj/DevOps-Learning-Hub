import CodeBlock from '@/components/CodeBlock'
import BackButton from '@/components/BackButton'

export default function TerraformPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      <h1 className="text-4xl font-bold mb-6">Terraform - Infrastructure as Code</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Terraform Basics</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Basic Commands</h3>
          <CodeBlock
            code={`# Initialize Terraform
terraform init

# Validate configuration
terraform validate

# Plan changes
terraform plan

# Apply changes
terraform apply

# Destroy infrastructure
terraform destroy

# Format code
terraform fmt

# Show current state
terraform show`}
            language="bash"
            title="Basic Terraform commands"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">AWS EC2 Example</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">main.tf</h3>
          <CodeBlock
            code={`terraform {
  required_version = ">= 1.0"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "WebServer"
    Environment = "Production"
  }
}

output "instance_ip" {
  value = aws_instance.web_server.public_ip
}`}
            language="hcl"
            title="main.tf"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Variables and Outputs</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">variables.tf</h3>
          <CodeBlock
            code={`variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}

variable "environment" {
  description = "Environment name"
  type        = string
  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be dev, staging, or prod."
  }
}`}
            language="hcl"
            title="variables.tf"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">outputs.tf</h3>
          <CodeBlock
            code={`output "instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.web_server.id
}

output "instance_public_ip" {
  description = "Public IP address of the instance"
  value       = aws_instance.web_server.public_ip
}

output "instance_arn" {
  description = "ARN of the instance"
  value       = aws_instance.web_server.arn
}`}
            language="hcl"
            title="outputs.tf"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Modules</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Using Modules</h3>
          <CodeBlock
            code={`module "vpc" {
  source = "./modules/vpc"
  
  vpc_cidr = "10.0.0.0/16"
  environment = var.environment
}

module "ec2" {
  source = "./modules/ec2"
  
  vpc_id = module.vpc.vpc_id
  subnet_id = module.vpc.public_subnet_id
  instance_type = var.instance_type
}`}
            language="hcl"
            title="Using modules"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">State Management</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Remote State (S3 Backend)</h3>
          <CodeBlock
            code={`terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
    encrypt = true
    dynamodb_table = "terraform-state-lock"
  }
}`}
            language="hcl"
            title="Remote state configuration"
          />
        </div>
      </section>
    </div>
  )
}

