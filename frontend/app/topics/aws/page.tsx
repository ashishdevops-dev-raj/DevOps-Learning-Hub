import CodeBlock from '@/components/CodeBlock'
import BackButton from '@/components/BackButton'

export default function AWSPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      <h1 className="text-4xl font-bold mb-6">AWS Cloud Fundamentals</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Core Services</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">EC2 (Elastic Compute Cloud)</h3>
          <CodeBlock
            code={`# Launch EC2 instance using AWS CLI
aws ec2 run-instances \\
  --image-id ami-0c55b159cbfafe1f0 \\
  --instance-type t2.micro \\
  --key-name my-key-pair \\
  --security-group-ids sg-12345678 \\
  --subnet-id subnet-12345678 \\
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=WebServer}]'`}
            language="bash"
            title="EC2 instance creation"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">S3 (Simple Storage Service)</h3>
          <CodeBlock
            code={`# Create S3 bucket
aws s3 mb s3://my-bucket-name

# Upload file
aws s3 cp file.txt s3://my-bucket-name/

# Sync directory
aws s3 sync ./local-folder s3://my-bucket-name/folder/

# Download file
aws s3 cp s3://my-bucket-name/file.txt ./

# List objects
aws s3 ls s3://my-bucket-name/`}
            language="bash"
            title="S3 operations"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">RDS (Relational Database Service)</h3>
          <CodeBlock
            code={`# Create RDS instance
aws rds create-db-instance \\
  --db-instance-identifier mydb \\
  --db-instance-class db.t2.micro \\
  --engine mysql \\
  --master-username admin \\
  --master-user-password MyPassword123 \\
  --allocated-storage 20`}
            language="bash"
            title="RDS instance creation"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">IAM (Identity and Access Management)</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">IAM Policy Example</h3>
          <CodeBlock
            code={`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-bucket/*"
    },
    {
      "Effect": "Deny",
      "Action": "s3:DeleteObject",
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}`}
            language="json"
            title="IAM policy"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">VPC (Virtual Private Cloud)</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">VPC Configuration</h3>
          <CodeBlock
            code={`# Create VPC
aws ec2 create-vpc --cidr-block 10.0.0.0/16

# Create subnet
aws ec2 create-subnet \\
  --vpc-id vpc-12345678 \\
  --cidr-block 10.0.1.0/24 \\
  --availability-zone us-east-1a

# Create Internet Gateway
aws ec2 create-internet-gateway
aws ec2 attach-internet-gateway \\
  --internet-gateway-id igw-12345678 \\
  --vpc-id vpc-12345678`}
            language="bash"
            title="VPC setup"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">AWS Services Overview</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>EC2:</strong> Virtual servers in the cloud</li>
            <li><strong>S3:</strong> Object storage service</li>
            <li><strong>RDS:</strong> Managed relational databases</li>
            <li><strong>Lambda:</strong> Serverless compute</li>
            <li><strong>VPC:</strong> Isolated cloud network</li>
            <li><strong>CloudFront:</strong> Content delivery network</li>
            <li><strong>Route 53:</strong> DNS service</li>
            <li><strong>IAM:</strong> Access management</li>
            <li><strong>CloudWatch:</strong> Monitoring and logging</li>
            <li><strong>Elastic Beanstalk:</strong> Application deployment</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

