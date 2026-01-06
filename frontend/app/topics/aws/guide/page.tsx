'use client'

import CodeBlock from '@/components/CodeBlock'
import BackButton from '@/components/BackButton'
import Link from 'next/link'
import { CheckCircle2, AlertCircle, BookOpen, Terminal, Cloud, Server, Lock, Network, Code, BarChart3, Rocket } from 'lucide-react'

export default function AWSGuidePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <BackButton />
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          AWS DevOps Roadmap
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          Complete step-by-step guide to become a job-ready AWS DevOps Engineer
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="text-gray-700">
            <strong>Your Background:</strong> Linux, Git, Jenkins, GitHub Actions, Docker, Kubernetes, Terraform, Monitoring, Spring Boot & Angular
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Goal:</strong> Master AWS Cloud Services and become production-ready
          </p>
        </div>
      </div>

      {/* Phase 1: AWS Core Basics */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">1</div>
          <h2 className="text-3xl font-bold">PHASE 1: AWS CORE BASICS</h2>
        </div>

        {/* AWS Global Infrastructure */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Cloud className="w-6 h-6 text-blue-500" />
            AWS Global Infrastructure
          </h3>
          
          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">1. What is it?</h4>
            <p className="text-gray-700 mb-3">
              AWS has a global network of data centers organized into <strong>Regions</strong>, <strong>Availability Zones (AZs)</strong>, and <strong>Edge Locations</strong>.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li><strong>Region:</strong> A geographic area (e.g., us-east-1, eu-west-1). Each region is completely independent.</li>
              <li><strong>Availability Zone (AZ):</strong> One or more discrete data centers within a region. Each AZ has independent power, cooling, and networking.</li>
              <li><strong>Edge Locations:</strong> Points of presence for CloudFront (CDN) to deliver content faster to users.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">2. Why do we need it?</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>High Availability:</strong> Deploy across multiple AZs to survive data center failures</li>
              <li><strong>Low Latency:</strong> Choose regions close to your users</li>
              <li><strong>Disaster Recovery:</strong> Replicate data across regions</li>
              <li><strong>Compliance:</strong> Store data in specific regions for legal requirements</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">3. Architecture Explanation</h4>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm text-gray-700">
{`Region: us-east-1 (N. Virginia)
├── Availability Zone: us-east-1a
│   └── Data Center 1
├── Availability Zone: us-east-1b
│   └── Data Center 2
└── Availability Zone: us-east-1c
    └── Data Center 3

Edge Locations: 400+ worldwide for CloudFront`}
              </pre>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">4. AWS Console Steps</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Log into AWS Console → Top right corner shows your current region</li>
              <li>Click region dropdown → Select <code className="bg-gray-100 px-2 py-1 rounded">us-east-1 (N. Virginia)</code></li>
              <li>When creating resources, you'll see AZ options like <code className="bg-gray-100 px-2 py-1 rounded">us-east-1a, us-east-1b, us-east-1c</code></li>
            </ol>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">5. AWS CLI Commands</h4>
            <CodeBlock
              code={`# List all available regions
aws ec2 describe-regions --output table

# List availability zones in a region
aws ec2 describe-availability-zones --region us-east-1

# Set default region
aws configure set region us-east-1

# Check current region
aws configure get region`}
              language="bash"
              title="Region and AZ commands"
            />
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">7. Verification Checklist</h4>
            <div className="bg-green-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Understand what a region is</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Understand what an AZ is</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Know how to change regions in console</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Can list regions using CLI</li>
              </ul>
            </div>
          </div>
        </div>

        {/* IAM */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6 text-red-500" />
            IAM (Identity and Access Management)
          </h3>
          
          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">1. What is it?</h4>
            <p className="text-gray-700 mb-3">
              IAM controls <strong>WHO</strong> can do <strong>WHAT</strong> in your AWS account. It manages users, groups, roles, and policies.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>User:</strong> A person or application that needs access</li>
              <li><strong>Group:</strong> Collection of users with same permissions</li>
              <li><strong>Role:</strong> Temporary credentials for services or users</li>
              <li><strong>Policy:</strong> Document that defines permissions (JSON format)</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">2. Why do we need it?</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Security:</strong> Follow principle of least privilege</li>
              <li><strong>Audit:</strong> Track who did what (CloudTrail)</li>
              <li><strong>Compliance:</strong> Meet security requirements</li>
              <li><strong>Cost Control:</strong> Prevent unauthorized resource creation</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">3. AWS Console Steps - Create IAM User</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Go to <strong>IAM</strong> service in AWS Console</li>
              <li>Click <strong>Users</strong> → <strong>Create user</strong></li>
              <li>Enter username: <code className="bg-gray-100 px-2 py-1 rounded">devops-engineer</code></li>
              <li>Select <strong>Provide user access to the AWS Management Console</strong></li>
              <li>Choose <strong>Set password</strong> → <strong>Autogenerated</strong> or <strong>Custom</strong></li>
              <li>Click <strong>Next</strong></li>
              <li>Click <strong>Create user</strong></li>
              <li><strong>IMPORTANT:</strong> Download CSV with credentials (you won't see password again!)</li>
            </ol>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">4. AWS Console Steps - Create IAM Role</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Go to <strong>IAM</strong> → <strong>Roles</strong> → <strong>Create role</strong></li>
              <li>Select <strong>AWS service</strong> → Choose <strong>EC2</strong> (for EC2 instances)</li>
              <li>Click <strong>Next</strong></li>
              <li>Attach policy: <strong>AmazonS3ReadOnlyAccess</strong> (example)</li>
              <li>Role name: <code className="bg-gray-100 px-2 py-1 rounded">ec2-s3-readonly-role</code></li>
              <li>Click <strong>Create role</strong></li>
            </ol>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">5. AWS Console Steps - Attach Least-Privilege Policy</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Go to <strong>IAM</strong> → <strong>Policies</strong> → <strong>Create policy</strong></li>
              <li>Click <strong>JSON</strong> tab</li>
              <li>Paste the policy JSON (see example below)</li>
              <li>Click <strong>Next</strong> → Name: <code className="bg-gray-100 px-2 py-1 rounded">S3ReadOnlySpecificBucket</code></li>
              <li>Click <strong>Create policy</strong></li>
              <li>Go to <strong>Users</strong> → Select user → <strong>Add permissions</strong> → Attach this policy</li>
            </ol>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">6. AWS CLI Commands</h4>
            <CodeBlock
              code={`# Create IAM user
aws iam create-user --user-name devops-engineer

# Create access key for user (for CLI/API access)
aws iam create-access-key --user-name devops-engineer

# Create IAM role
aws iam create-role \\
  --role-name ec2-s3-readonly-role \\
  --assume-role-policy-document file://trust-policy.json

# Attach policy to user
aws iam attach-user-policy \\
  --user-name devops-engineer \\
  --policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess

# Create custom policy
aws iam create-policy \\
  --policy-name S3ReadOnlySpecificBucket \\
  --policy-document file://policy.json

# List user policies
aws iam list-attached-user-policies --user-name devops-engineer

# Get user details
aws iam get-user --user-name devops-engineer`}
              language="bash"
              title="IAM CLI commands"
            />
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">7. Policy Examples</h4>
            <CodeBlock
              code={`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::my-bucket",
        "arn:aws:s3:::my-bucket/*"
      ]
    }
  ]
}`}
              language="json"
              title="Least-privilege S3 policy (policy.json)"
            />

            <CodeBlock
              code={`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}`}
              language="json"
              title="Trust policy for EC2 role (trust-policy.json)"
            />
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">8. Verification Checklist</h4>
            <div className="bg-green-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Created IAM user via console</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Created IAM role via console</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Created custom policy with least privilege</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Can create user/role via CLI</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Understand difference between user and role</li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">9. Common Mistakes</h4>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" /> <span>Using root account for daily tasks (always use IAM users)</span></li>
                <li className="flex items-start gap-2"><AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" /> <span>Giving too many permissions (use least privilege)</span></li>
                <li className="flex items-start gap-2"><AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" /> <span>Not enabling MFA for sensitive operations</span></li>
                <li className="flex items-start gap-2"><AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" /> <span>Hardcoding credentials in code (use roles instead)</span></li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">10. Interview Questions</h4>
            <div className="bg-blue-50 p-4 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li><strong>Q:</strong> What's the difference between IAM user and role?</li>
                <li className="ml-4"><strong>A:</strong> Users are permanent identities, roles are temporary credentials assumed by users or services.</li>
                <li className="mt-3"><strong>Q:</strong> What is least privilege principle?</li>
                <li className="ml-4"><strong>A:</strong> Grant only the minimum permissions needed to perform a task.</li>
                <li className="mt-3"><strong>Q:</strong> How do you give EC2 instance access to S3?</li>
                <li className="ml-4"><strong>A:</strong> Create an IAM role with S3 permissions, attach it to EC2 instance.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* EC2 */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Server className="w-6 h-6 text-green-500" />
            EC2 (Elastic Compute Cloud)
          </h3>
          
          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">1. What is it?</h4>
            <p className="text-gray-700 mb-3">
              EC2 provides <strong>virtual servers</strong> in the cloud. You can launch, configure, and manage virtual machines.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Instance:</strong> A virtual server</li>
              <li><strong>AMI (Amazon Machine Image):</strong> Template for your instance (OS + software)</li>
              <li><strong>Instance Type:</strong> CPU, memory, storage, networking capacity (t2.micro, t3.small, etc.)</li>
              <li><strong>Key Pair:</strong> Public/private key for SSH access</li>
              <li><strong>Security Group:</strong> Virtual firewall</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">2. Why do we need it?</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Run applications that need full OS control</li>
              <li>Host web servers, databases, applications</li>
              <li>Scalable compute capacity</li>
              <li>Pay only for what you use</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">3. AWS Console Steps - Launch EC2</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Go to <strong>EC2</strong> service → <strong>Launch instance</strong></li>
              <li><strong>Name:</strong> <code className="bg-gray-100 px-2 py-1 rounded">my-first-server</code></li>
              <li><strong>AMI:</strong> Select <strong>Amazon Linux 2023</strong> (Free Tier eligible)</li>
              <li><strong>Instance type:</strong> <code className="bg-gray-100 px-2 py-1 rounded">t2.micro</code> (Free Tier)</li>
              <li><strong>Key pair:</strong> Click <strong>Create new key pair</strong> → Name: <code className="bg-gray-100 px-2 py-1 rounded">my-key</code> → <strong>Download</strong> (.pem file)</li>
              <li><strong>Network settings:</strong> 
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Create new security group</li>
                  <li>Allow SSH (port 22) from My IP</li>
                  <li>Allow HTTP (port 80) from anywhere (0.0.0.0/0)</li>
                </ul>
              </li>
              <li><strong>Configure storage:</strong> 8 GB gp3 (Free Tier)</li>
              <li>Click <strong>Launch instance</strong></li>
              <li>Click <strong>View all instances</strong></li>
            </ol>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">4. AWS Console Steps - Create Security Group</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Go to <strong>EC2</strong> → <strong>Security Groups</strong> → <strong>Create security group</strong></li>
              <li>Name: <code className="bg-gray-100 px-2 py-1 rounded">web-server-sg</code></li>
              <li>Description: <code className="bg-gray-100 px-2 py-1 rounded">Allow HTTP and SSH</code></li>
              <li><strong>Inbound rules:</strong>
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Type: SSH, Port: 22, Source: My IP</li>
                  <li>Type: HTTP, Port: 80, Source: 0.0.0.0/0</li>
                </ul>
              </li>
              <li>Click <strong>Create security group</strong></li>
            </ol>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">5. AWS CLI Commands</h4>
            <CodeBlock
              code={`# Create key pair
aws ec2 create-key-pair --key-name my-key --query 'KeyMaterial' --output text > my-key.pem
chmod 400 my-key.pem  # Linux/Mac: secure the key file

# Create security group
aws ec2 create-security-group \\
  --group-name web-server-sg \\
  --description "Allow HTTP and SSH"

# Add inbound rule to security group
aws ec2 authorize-security-group-ingress \\
  --group-id sg-12345678 \\
  --protocol tcp \\
  --port 22 \\
  --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress \\
  --group-id sg-12345678 \\
  --protocol tcp \\
  --port 80 \\
  --cidr 0.0.0.0/0

# Launch EC2 instance
aws ec2 run-instances \\
  --image-id ami-0c55b159cbfafe1f0 \\
  --instance-type t2.micro \\
  --key-name my-key \\
  --security-group-ids sg-12345678 \\
  --subnet-id subnet-12345678 \\
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=my-first-server}]'

# List instances
aws ec2 describe-instances

# Get instance status
aws ec2 describe-instance-status --instance-ids i-1234567890abcdef0

# Stop instance
aws ec2 stop-instances --instance-ids i-1234567890abcdef0

# Start instance
aws ec2 start-instances --instance-ids i-1234567890abcdef0

# Terminate instance
aws ec2 terminate-instances --instance-ids i-1234567890abcdef0`}
              language="bash"
              title="EC2 CLI commands"
            />
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">6. SSH into EC2</h4>
            <CodeBlock
              code={`# Linux/Mac - SSH into EC2
ssh -i my-key.pem ec2-user@<PUBLIC_IP>

# Example:
ssh -i my-key.pem ec2-user@54.123.45.67

# Windows (using PowerShell or Git Bash)
ssh -i my-key.pem ec2-user@54.123.45.67

# If you get "Permission denied (publickey)" error:
chmod 400 my-key.pem  # Make sure key has correct permissions

# After SSH, update system
sudo yum update -y  # Amazon Linux
sudo apt update && sudo apt upgrade -y  # Ubuntu

# Install a web server
sudo yum install httpd -y  # Amazon Linux
sudo systemctl start httpd
sudo systemctl enable httpd`}
              language="bash"
              title="SSH and basic setup"
            />
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">7. Terraform Code</h4>
            <CodeBlock
              code={`# main.tf
terraform {
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

# Get latest Amazon Linux 2023 AMI
data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["al2023-ami-*-x86_64"]
  }
}

# Create key pair (or use existing)
resource "aws_key_pair" "my_key" {
  key_name   = "my-key"
  public_key = file("~/.ssh/id_rsa.pub")
}

# Create security group
resource "aws_security_group" "web_sg" {
  name        = "web-server-sg"
  description = "Allow HTTP and SSH"

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # In production, use your IP only
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "web-server-sg"
  }
}

# Launch EC2 instance
resource "aws_instance" "web_server" {
  ami           = data.aws_ami.amazon_linux.id
  instance_type = "t2.micro"
  key_name      = aws_key_pair.my_key.key_name

  vpc_security_group_ids = [aws_security_group.web_sg.id]

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install httpd -y
              systemctl start httpd
              systemctl enable httpd
              echo "<h1>Hello from EC2!</h1>" > /var/www/html/index.html
              EOF

  tags = {
    Name = "my-first-server"
  }
}

# Output public IP
output "instance_public_ip" {
  value = aws_instance.web_server.public_ip
}`}
              language="hcl"
              title="Terraform EC2 configuration"
            />
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">8. Verification Checklist</h4>
            <div className="bg-green-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Launched EC2 instance via console</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Created key pair and downloaded .pem file</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Created security group with proper rules</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> SSH'd into instance successfully</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Can launch instance via CLI</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Created EC2 with Terraform</li>
              </ul>
            </div>
          </div>
        </div>

        {/* S3 */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Server className="w-6 h-6 text-orange-500" />
            S3 (Simple Storage Service)
          </h3>
          
          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">1. What is it?</h4>
            <p className="text-gray-700 mb-3">
              S3 is <strong>object storage</strong> for files. Think of it as unlimited cloud storage for any type of file.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Bucket:</strong> Container for objects (like a folder, but globally unique name)</li>
              <li><strong>Object:</strong> A file stored in S3 (key + data + metadata)</li>
              <li><strong>Key:</strong> Object name/path</li>
              <li><strong>Versioning:</strong> Keep multiple versions of same object</li>
              <li><strong>Lifecycle:</strong> Automatically move/delete objects based on rules</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">2. Why do we need it?</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Store static website files</li>
              <li>Backup and archive data</li>
              <li>Store application files, logs, images</li>
              <li>99.999999999% (11 9's) durability</li>
              <li>Cost-effective storage classes</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">3. AWS Console Steps - Create Bucket</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Go to <strong>S3</strong> service → <strong>Create bucket</strong></li>
              <li><strong>Bucket name:</strong> <code className="bg-gray-100 px-2 py-1 rounded">my-devops-bucket-2024</code> (must be globally unique)</li>
              <li><strong>AWS Region:</strong> Choose your region (e.g., us-east-1)</li>
              <li><strong>Object Ownership:</strong> ACLs disabled (recommended)</li>
              <li><strong>Block Public Access:</strong> Keep all checked (for security)</li>
              <li>Click <strong>Create bucket</strong></li>
            </ol>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">4. AWS Console Steps - Enable Versioning</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Click on your bucket name</li>
              <li>Go to <strong>Properties</strong> tab</li>
              <li>Scroll to <strong>Bucket Versioning</strong></li>
              <li>Click <strong>Edit</strong> → Select <strong>Enable</strong></li>
              <li>Click <strong>Save changes</strong></li>
            </ol>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">5. AWS Console Steps - Configure Lifecycle</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>In bucket → <strong>Management</strong> tab</li>
              <li>Scroll to <strong>Lifecycle rules</strong> → <strong>Create lifecycle rule</strong></li>
              <li>Rule name: <code className="bg-gray-100 px-2 py-1 rounded">move-to-glacier</code></li>
              <li><strong>Rule scope:</strong> Apply to all objects</li>
              <li><strong>Lifecycle rule actions:</strong>
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Check <strong>Move current versions of objects between storage classes</strong></li>
                  <li>After 30 days → Move to Glacier Instant Retrieval</li>
                </ul>
              </li>
              <li>Click <strong>Create rule</strong></li>
            </ol>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">6. AWS CLI Commands</h4>
            <CodeBlock
              code={`# Create bucket
aws s3 mb s3://my-devops-bucket-2024 --region us-east-1

# Enable versioning
aws s3api put-bucket-versioning \\
  --bucket my-devops-bucket-2024 \\
  --versioning-configuration Status=Enabled

# Upload file
aws s3 cp file.txt s3://my-devops-bucket-2024/
aws s3 cp file.txt s3://my-devops-bucket-2024/folder/file.txt

# Upload directory
aws s3 sync ./local-folder s3://my-devops-bucket-2024/folder/

# Download file
aws s3 cp s3://my-devops-bucket-2024/file.txt ./

# Download directory
aws s3 sync s3://my-devops-bucket-2024/folder/ ./local-folder/

# List objects
aws s3 ls s3://my-devops-bucket-2024/
aws s3 ls s3://my-devops-bucket-2024/folder/ --recursive

# Delete file
aws s3 rm s3://my-devops-bucket-2024/file.txt

# Delete all objects (before deleting bucket)
aws s3 rm s3://my-devops-bucket-2024/ --recursive

# Delete bucket
aws s3 rb s3://my-devops-bucket-2024

# Create lifecycle policy
aws s3api put-bucket-lifecycle-configuration \\
  --bucket my-devops-bucket-2024 \\
  --lifecycle-configuration file://lifecycle.json`}
              language="bash"
              title="S3 CLI commands"
            />
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">7. Terraform Code</h4>
            <CodeBlock
              code={`# s3.tf
resource "aws_s3_bucket" "my_bucket" {
  bucket = "my-devops-bucket-2024-\${random_id.bucket_suffix.hex}"
}

resource "random_id" "bucket_suffix" {
  byte_length = 4
}

# Enable versioning
resource "aws_s3_bucket_versioning" "my_bucket_versioning" {
  bucket = aws_s3_bucket.my_bucket.id

  versioning_configuration {
    status = "Enabled"
  }
}

# Lifecycle configuration
resource "aws_s3_bucket_lifecycle_configuration" "my_bucket_lifecycle" {
  bucket = aws_s3_bucket.my_bucket.id

  rule {
    id     = "move-to-glacier"
    status = "Enabled"

    transition {
      days          = 30
      storage_class = "GLACIER_IR"
    }
  }
}

# Block public access (security best practice)
resource "aws_s3_bucket_public_access_block" "my_bucket_pab" {
  bucket = aws_s3_bucket.my_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Upload a file
resource "aws_s3_object" "index_html" {
  bucket = aws_s3_bucket.my_bucket.id
  key    = "index.html"
  source = "./index.html"
  etag   = filemd5("./index.html")
}

# Output bucket name
output "bucket_name" {
  value = aws_s3_bucket.my_bucket.id
}`}
              language="hcl"
              title="Terraform S3 configuration"
            />
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">8. Verification Checklist</h4>
            <div className="bg-green-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Created S3 bucket via console</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Enabled versioning</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Configured lifecycle rule</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Uploaded/downloaded files via CLI</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Created S3 bucket with Terraform</li>
              </ul>
            </div>
          </div>
        </div>

        {/* VPC */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Network className="w-6 h-6 text-purple-500" />
            VPC (Virtual Private Cloud)
          </h3>
          
          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">1. What is it?</h4>
            <p className="text-gray-700 mb-3">
              VPC is your <strong>private network</strong> in AWS. It's like having your own isolated data center in the cloud.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>VPC:</strong> Isolated network (like 10.0.0.0/16)</li>
              <li><strong>Subnet:</strong> Segment of VPC (like 10.0.1.0/24)</li>
              <li><strong>Public Subnet:</strong> Has route to Internet Gateway (for web servers)</li>
              <li><strong>Private Subnet:</strong> No direct internet access (for databases)</li>
              <li><strong>Internet Gateway (IGW):</strong> Allows internet access</li>
              <li><strong>Route Table:</strong> Defines where traffic goes</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">2. Why do we need it?</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Security:</strong> Isolate resources</li>
              <li><strong>Network Control:</strong> Define your own IP ranges</li>
              <li><strong>Multi-tier Architecture:</strong> Public web tier, private app tier, private DB tier</li>
              <li><strong>Compliance:</strong> Meet network security requirements</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">3. Architecture Explanation</h4>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm text-gray-700">
{`VPC: 10.0.0.0/16
│
├── Public Subnet: 10.0.1.0/24 (us-east-1a)
│   ├── Web Server (EC2)
│   └── Route Table → Internet Gateway
│
├── Public Subnet: 10.0.2.0/24 (us-east-1b)
│   ├── Web Server (EC2)
│   └── Route Table → Internet Gateway
│
├── Private Subnet: 10.0.3.0/24 (us-east-1a)
│   ├── Application Server (EC2)
│   └── Route Table → NAT Gateway
│
└── Private Subnet: 10.0.4.0/24 (us-east-1b)
    ├── Database (RDS)
    └── Route Table → No Internet`}
              </pre>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">4. AWS Console Steps - Create Custom VPC</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Go to <strong>VPC</strong> service → <strong>Create VPC</strong></li>
              <li><strong>Name tag:</strong> <code className="bg-gray-100 px-2 py-1 rounded">my-custom-vpc</code></li>
              <li><strong>IPv4 CIDR block:</strong> <code className="bg-gray-100 px-2 py-1 rounded">10.0.0.0/16</code></li>
              <li>Click <strong>Create VPC</strong></li>
            </ol>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">5. AWS Console Steps - Create Subnets</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Go to <strong>Subnets</strong> → <strong>Create subnet</strong></li>
              <li><strong>VPC:</strong> Select <code className="bg-gray-100 px-2 py-1 rounded">my-custom-vpc</code></li>
              <li><strong>Subnet name:</strong> <code className="bg-gray-100 px-2 py-1 rounded">public-subnet-1a</code></li>
              <li><strong>Availability Zone:</strong> <code className="bg-gray-100 px-2 py-1 rounded">us-east-1a</code></li>
              <li><strong>IPv4 CIDR block:</strong> <code className="bg-gray-100 px-2 py-1 rounded">10.0.1.0/24</code></li>
              <li>Click <strong>Create subnet</strong></li>
              <li>Repeat for: <code className="bg-gray-100 px-2 py-1 rounded">public-subnet-1b</code> (10.0.2.0/24, us-east-1b)</li>
              <li>Repeat for: <code className="bg-gray-100 px-2 py-1 rounded">private-subnet-1a</code> (10.0.3.0/24, us-east-1a)</li>
            </ol>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">6. AWS Console Steps - Create Internet Gateway</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Go to <strong>Internet Gateways</strong> → <strong>Create internet gateway</strong></li>
              <li>Name: <code className="bg-gray-100 px-2 py-1 rounded">my-igw</code></li>
              <li>Click <strong>Create internet gateway</strong></li>
              <li>Select the IGW → Click <strong>Actions</strong> → <strong>Attach to VPC</strong></li>
              <li>Select <code className="bg-gray-100 px-2 py-1 rounded">my-custom-vpc</code> → <strong>Attach internet gateway</strong></li>
            </ol>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">7. AWS Console Steps - Configure Route Tables</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Go to <strong>Route Tables</strong> → Select main route table</li>
              <li>Click <strong>Routes</strong> tab → <strong>Edit routes</strong></li>
              <li>Add route: <code className="bg-gray-100 px-2 py-1 rounded">0.0.0.0/0</code> → Target: <code className="bg-gray-100 px-2 py-1 rounded">my-igw</code></li>
              <li>Click <strong>Save changes</strong></li>
              <li>Go to <strong>Subnet associations</strong> tab → <strong>Edit subnet associations</strong></li>
              <li>Select <code className="bg-gray-100 px-2 py-1 rounded">public-subnet-1a</code> and <code className="bg-gray-100 px-2 py-1 rounded">public-subnet-1b</code></li>
              <li>Click <strong>Save associations</strong></li>
            </ol>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">8. AWS CLI Commands</h4>
            <CodeBlock
              code={`# Create VPC
aws ec2 create-vpc --cidr-block 10.0.0.0/16 --tag-specifications 'ResourceType=vpc,Tags=[{Key=Name,Value=my-custom-vpc}]'

# Create public subnet
aws ec2 create-subnet \\
  --vpc-id vpc-12345678 \\
  --cidr-block 10.0.1.0/24 \\
  --availability-zone us-east-1a \\
  --tag-specifications 'ResourceType=subnet,Tags=[{Key=Name,Value=public-subnet-1a}]'

# Create private subnet
aws ec2 create-subnet \\
  --vpc-id vpc-12345678 \\
  --cidr-block 10.0.3.0/24 \\
  --availability-zone us-east-1a \\
  --tag-specifications 'ResourceType=subnet,Tags=[{Key=Name,Value=private-subnet-1a}]'

# Create Internet Gateway
aws ec2 create-internet-gateway --tag-specifications 'ResourceType=internet-gateway,Tags=[{Key=Name,Value=my-igw}]'

# Attach IGW to VPC
aws ec2 attach-internet-gateway \\
  --internet-gateway-id igw-12345678 \\
  --vpc-id vpc-12345678

# Get route table ID
aws ec2 describe-route-tables --filters "Name=vpc-id,Values=vpc-12345678"

# Add route to Internet Gateway
aws ec2 create-route \\
  --route-table-id rtb-12345678 \\
  --destination-cidr-block 0.0.0.0/0 \\
  --gateway-id igw-12345678

# Associate subnet with route table
aws ec2 associate-route-table \\
  --subnet-id subnet-12345678 \\
  --route-table-id rtb-12345678`}
              language="bash"
              title="VPC CLI commands"
            />
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">9. Terraform Code</h4>
            <CodeBlock
              code={`# vpc.tf
# Create VPC
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "my-custom-vpc"
  }
}

# Create Internet Gateway
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "my-igw"
  }
}

# Create Public Subnet 1
resource "aws_subnet" "public_1a" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "us-east-1a"
  map_public_ip_on_launch = true

  tags = {
    Name = "public-subnet-1a"
  }
}

# Create Public Subnet 2
resource "aws_subnet" "public_1b" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.2.0/24"
  availability_zone       = "us-east-1b"
  map_public_ip_on_launch = true

  tags = {
    Name = "public-subnet-1b"
  }
}

# Create Private Subnet 1
resource "aws_subnet" "private_1a" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.3.0/24"
  availability_zone = "us-east-1a"

  tags = {
    Name = "private-subnet-1a"
  }
}

# Create Route Table for Public Subnets
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }

  tags = {
    Name = "public-route-table"
  }
}

# Associate Public Subnets with Public Route Table
resource "aws_route_table_association" "public_1a" {
  subnet_id      = aws_subnet.public_1a.id
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table_association" "public_1b" {
  subnet_id      = aws_subnet.public_1b.id
  route_table_id = aws_route_table.public.id
}

# Output VPC ID
output "vpc_id" {
  value = aws_vpc.main.id
}

output "public_subnet_ids" {
  value = [aws_subnet.public_1a.id, aws_subnet.public_1b.id]
}

output "private_subnet_ids" {
  value = [aws_subnet.private_1a.id]
}`}
              language="hcl"
              title="Terraform VPC configuration"
            />
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-medium mb-2">10. Verification Checklist</h4>
            <div className="bg-green-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Created custom VPC</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Created public and private subnets</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Created and attached Internet Gateway</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Configured route tables correctly</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Created VPC with Terraform</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Understand difference between public and private subnets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Networking & High Availability */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">2</div>
          <h2 className="text-3xl font-bold">PHASE 2: NETWORKING & HIGH AVAILABILITY</h2>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
          <p className="text-gray-700">
            <strong>Coming Soon:</strong> Application Load Balancer, Auto Scaling Group, NAT Gateway, Route 53, VPC Peering
          </p>
        </div>
      </section>

      {/* Phase 3: DevOps & CI/CD on AWS */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">3</div>
          <h2 className="text-3xl font-bold">PHASE 3: DEVOPS & CI/CD ON AWS</h2>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded mb-6">
          <p className="text-gray-700">
            <strong>Coming Soon:</strong> ECR, ECS/EKS, Jenkins/GitHub Actions pipelines, Docker deployment
          </p>
        </div>
      </section>

      {/* Phase 4: Infrastructure as Code */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">4</div>
          <h2 className="text-3xl font-bold">PHASE 4: INFRASTRUCTURE AS CODE</h2>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded mb-6">
          <p className="text-gray-700">
            <strong>Coming Soon:</strong> Complete Terraform modules, S3 backend, state locking
          </p>
        </div>
      </section>

      {/* Phase 5: Monitoring, Logging & Security */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">5</div>
          <h2 className="text-3xl font-bold">PHASE 5: MONITORING, LOGGING & SECURITY</h2>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-6">
          <p className="text-gray-700">
            <strong>Coming Soon:</strong> CloudWatch, CloudTrail, Secrets Manager, KMS
          </p>
        </div>
      </section>

      {/* Phase 6: Production-Ready Architecture */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">6</div>
          <h2 className="text-3xl font-bold">PHASE 6: PRODUCTION-READY ARCHITECTURE</h2>
        </div>

        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded mb-6">
          <p className="text-gray-700">
            <strong>Coming Soon:</strong> Blue-Green deployment, Rolling updates, Cost optimization, Backup & DR, Well-Architected Framework
          </p>
        </div>
      </section>

      {/* Footer Note */}
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <p className="text-gray-700">
          <strong>Note:</strong> This is Phase 1 of the complete AWS DevOps Roadmap. Phases 2-6 will be added progressively.
          Focus on mastering Phase 1 before moving to the next phase.
        </p>
      </div>
    </div>
  )
}
