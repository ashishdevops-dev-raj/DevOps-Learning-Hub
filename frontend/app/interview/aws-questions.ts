// AWS Interview Questions - 100 Questions
// Easy Level (1-35), Medium Level (36-70), Hard Level (71-100)

export const awsQuestions = [
  // Easy Level (Questions 1-35)
  {
    topic: 'AWS',
    question: 'What is AWS?',
    answer: 'Amazon Web Services (AWS) is a cloud computing platform providing on-demand computing resources and services.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is EC2?',
    answer: 'Amazon EC2 provides resizable compute capacity in the cloud. It allows launching virtual servers with various configurations.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What are the EC2 instance types?',
    answer: 'EC2 instance types:\n- **General Purpose**: Balanced (t3, m5)\n- **Compute Optimized**: High CPU (c5, c6g)\n- **Memory Optimized**: High RAM (r5, x1)\n- **Storage Optimized**: High I/O (i3, d2)\n- **Accelerated Computing**: GPUs (p3, g4)',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is the difference between stopping and terminating an instance?',
    answer: '- **Stopping**: Instance is stopped, data on EBS volumes is preserved, can be restarted\n- **Terminating**: Instance is deleted, root EBS volume is deleted (unless configured otherwise)',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is an AMI?',
    answer: 'AMI (Amazon Machine Image) is a template for creating EC2 instances. Contains OS, application server, and applications.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is the difference between EBS and Instance Store?',
    answer: '- **EBS**: Persistent storage, survives instance stop/terminate, can be detached/attached\n- **Instance Store**: Ephemeral storage, lost on instance stop/terminate, better performance',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What are the EC2 pricing models?',
    answer: 'EC2 pricing models:\n- **On-Demand**: Pay per hour, no commitment\n- **Reserved Instances**: 1-3 year commitment, up to 75% discount\n- **Spot Instances**: Bid on unused capacity, up to 90% discount\n- **Dedicated Hosts**: Physical server dedicated to your use',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is Auto Scaling?',
    answer: 'Auto Scaling automatically adjusts the number of EC2 instances based on demand, ensuring optimal performance and cost.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is Elastic IP?',
    answer: 'Elastic IP is a static, public IPv4 address that you can allocate and associate with EC2 instances.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is IAM?',
    answer: 'IAM enables you to manage access to AWS services and resources securely. Controls authentication and authorization.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is the difference between IAM User and IAM Role?',
    answer: '- **User**: Permanent identity with long-term credentials\n- **Role**: Temporary identity assumed by users, services, or applications',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is the principle of least privilege?',
    answer: 'Grant users and roles only the minimum permissions needed to perform their tasks.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is an IAM Policy?',
    answer: 'An IAM Policy is a document that defines permissions. Can be attached to users, groups, or roles.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is the difference between managed and inline policies?',
    answer: '- **Managed Policy**: Reusable policy that can be attached to multiple entities\n- **Inline Policy**: Embedded directly in a user, group, or role',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is MFA?',
    answer: 'MFA (Multi-Factor Authentication) adds an extra layer of security by requiring additional authentication beyond username/password.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is IAM Role for EC2?',
    answer: 'IAM Role for EC2 allows EC2 instances to access AWS services without storing credentials. More secure than access keys.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is a VPC?',
    answer: 'VPC is a logically isolated section of AWS Cloud where you can launch resources in a virtual network.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is the difference between public and private subnet?',
    answer: '- **Public Subnet**: Has route to Internet Gateway, resources can have public IPs\n- **Private Subnet**: No direct internet access, uses NAT Gateway for outbound',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is an Internet Gateway?',
    answer: 'Internet Gateway allows communication between resources in VPC and the internet. Attached to VPC.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is a NAT Gateway?',
    answer: 'NAT Gateway allows resources in private subnets to access the internet for outbound traffic while preventing inbound access.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is the difference between Security Group and NACL?',
    answer: '- **Security Group**: Stateful, instance-level, default deny, rules are evaluated together\n- **NACL**: Stateless, subnet-level, explicit allow/deny, rules evaluated in order',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is S3?',
    answer: 'S3 is object storage service for storing and retrieving any amount of data from anywhere.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What are S3 storage classes?',
    answer: 'S3 storage classes:\n- **Standard**: General purpose, frequently accessed\n- **IA (Infrequent Access)**: Less frequently accessed\n- **Glacier**: Archive storage\n- **Intelligent-Tiering**: Automatically moves objects between tiers',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is S3 versioning?',
    answer: 'S3 versioning keeps multiple versions of an object, protecting against accidental deletion or overwrites.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is S3 lifecycle policy?',
    answer: 'Lifecycle policies automate moving objects between storage classes or deleting them based on rules.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is the difference between S3 and EBS?',
    answer: '- **S3**: Object storage, unlimited capacity, accessed via API\n- **EBS**: Block storage, attached to EC2 instances, limited capacity',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is CloudWatch?',
    answer: 'CloudWatch is a monitoring and observability service for AWS resources and applications.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is Lambda?',
    answer: 'Lambda is a serverless compute service that runs code in response to events without provisioning servers.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is RDS?',
    answer: 'RDS (Relational Database Service) is a managed database service supporting MySQL, PostgreSQL, Oracle, SQL Server, etc.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is Route 53?',
    answer: 'Route 53 is a scalable DNS web service for domain registration and DNS routing.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is CloudFront?',
    answer: 'CloudFront is a content delivery network (CDN) that delivers data, videos, applications, and APIs globally.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is ELB?',
    answer: 'ELB (Elastic Load Balancer) distributes incoming traffic across multiple targets (EC2, containers, IPs).',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What are the types of Load Balancers?',
    answer: 'Load balancer types:\n- **Application Load Balancer (ALB)**: Layer 7, HTTP/HTTPS\n- **Network Load Balancer (NLB)**: Layer 4, TCP/UDP\n- **Classic Load Balancer**: Legacy, Layer 4/7',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is SNS?',
    answer: 'SNS (Simple Notification Service) is a messaging service for sending notifications to subscribers.',
    difficulty: 'Easy'
  },
  {
    topic: 'AWS',
    question: 'What is SQS?',
    answer: 'SQS (Simple Queue Service) is a message queuing service for decoupling and scaling microservices.',
    difficulty: 'Easy'
  },

  // Medium Level (Questions 36-70)
  {
    topic: 'AWS',
    question: 'What is CloudFormation?',
    answer: 'CloudFormation is Infrastructure as Code service that allows you to model and provision AWS resources using templates.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is ECS?',
    answer: 'ECS (Elastic Container Service) is a container orchestration service for running Docker containers.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is EKS?',
    answer: 'EKS (Elastic Kubernetes Service) is a managed Kubernetes service for running containerized applications.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is VPC Peering?',
    answer: 'VPC Peering connects two VPCs, allowing resources to communicate using private IP addresses.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is a Route Table?',
    answer: 'Route Table contains rules (routes) that determine where network traffic is directed.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is VPC Flow Logs?',
    answer: 'VPC Flow Logs captures information about IP traffic going to and from network interfaces in VPC.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is CloudTrail?',
    answer: 'CloudTrail logs API calls and events for AWS accounts, providing audit trail.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is AWS Config?',
    answer: 'Config monitors and records configuration changes to AWS resources.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is AWS Secrets Manager?',
    answer: 'Secrets Manager helps protect secrets needed to access applications, services, and IT resources.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is the Shared Responsibility Model?',
    answer: 'AWS is responsible for security OF the cloud (infrastructure), customer is responsible for security IN the cloud (data, applications).',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is AWS WAF?',
    answer: 'WAF (Web Application Firewall) protects web applications from common web exploits.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is AWS Shield?',
    answer: 'Shield provides DDoS protection for AWS resources.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is the Well-Architected Framework?',
    answer: 'Framework with five pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is AWS Organizations?',
    answer: 'Organizations helps manage multiple AWS accounts centrally.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'How do you secure data in transit and at rest?',
    answer: 'Security methods:\n- **In Transit**: Use TLS/SSL, VPN, encrypted connections\n- **At Rest**: Use encryption (KMS, S3 encryption, EBS encryption)',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is KMS?',
    answer: 'KMS (Key Management Service) creates and manages encryption keys for encrypting data.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is DynamoDB?',
    answer: 'DynamoDB is a fully managed NoSQL database service providing fast and predictable performance.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is ElastiCache?',
    answer: 'ElastiCache is a fully managed in-memory caching service supporting Redis and Memcached.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is EFS?',
    answer: 'EFS (Elastic File System) is a fully managed NFS file system for EC2 instances.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is CloudWatch Logs?',
    answer: 'CloudWatch Logs monitors, stores, and accesses log files from AWS resources.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is CloudWatch Alarms?',
    answer: 'CloudWatch Alarms monitor metrics and trigger actions when thresholds are breached.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is EventBridge?',
    answer: 'EventBridge is a serverless event bus that connects applications using events.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is Step Functions?',
    answer: 'Step Functions coordinates multiple AWS services into serverless workflows.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is API Gateway?',
    answer: 'API Gateway creates, publishes, maintains, monitors, and secures REST and WebSocket APIs.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is S3 Cross-Region Replication?',
    answer: 'S3 Cross-Region Replication automatically replicates objects to another region for disaster recovery.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is S3 Transfer Acceleration?',
    answer: 'S3 Transfer Acceleration uses CloudFront edge locations to accelerate uploads to S3.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is EBS Snapshot?',
    answer: 'EBS Snapshot is a backup of an EBS volume stored in S3.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is AMI Sharing?',
    answer: 'AMI Sharing allows sharing custom AMIs with other AWS accounts.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is Placement Groups?',
    answer: 'Placement Groups influence the placement of instances for low latency or high throughput.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is Enhanced Networking?',
    answer: 'Enhanced Networking provides higher I/O performance and lower latency using SR-IOV.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is Elastic Beanstalk?',
    answer: 'Elastic Beanstalk is a platform-as-a-service for deploying and scaling web applications.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is CodePipeline?',
    answer: 'CodePipeline is a fully managed continuous delivery service for fast and reliable application updates.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is CodeBuild?',
    answer: 'CodeBuild is a fully managed build service that compiles source code, runs tests, and produces ready-to-deploy packages.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is CodeDeploy?',
    answer: 'CodeDeploy automates code deployments to EC2, Lambda, or on-premises instances.',
    difficulty: 'Medium'
  },
  {
    topic: 'AWS',
    question: 'What is Systems Manager?',
    answer: 'Systems Manager provides operational insights and actions for AWS resources.',
    difficulty: 'Medium'
  },

  // High/Advanced Level (Questions 71-100)
  {
    topic: 'AWS',
    question: 'What is VPC Endpoint?',
    answer: 'VPC Endpoint allows private connectivity to AWS services without internet gateway or NAT.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Transit Gateway?',
    answer: 'Transit Gateway simplifies network architecture by connecting VPCs and on-premises networks through a central hub.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Direct Connect?',
    answer: 'Direct Connect establishes dedicated network connection from on-premises to AWS.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is VPN?',
    answer: 'VPN creates secure connection between on-premises network and VPC over the internet.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is GuardDuty?',
    answer: 'GuardDuty is a threat detection service that continuously monitors for malicious activity.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Inspector?',
    answer: 'Inspector automatically assesses applications for vulnerabilities and deviations from best practices.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Macie?',
    answer: 'Macie uses machine learning to discover, classify, and protect sensitive data in S3.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Certificate Manager?',
    answer: 'Certificate Manager provisions, manages, and deploys SSL/TLS certificates.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is CloudHSM?',
    answer: 'CloudHSM provides dedicated hardware security modules (HSM) for cryptographic key storage.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is IAM Access Analyzer?',
    answer: 'Access Analyzer helps identify resources shared with external entities.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Resource Access Manager?',
    answer: 'Resource Access Manager enables sharing AWS resources across accounts.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Control Tower?',
    answer: 'Control Tower provides centralized governance and compliance across multiple AWS accounts.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Service Catalog?',
    answer: 'Service Catalog allows organizations to create and manage catalogs of IT services.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Trusted Advisor?',
    answer: 'Trusted Advisor provides real-time guidance to help provision resources following AWS best practices.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Cost Explorer?',
    answer: 'Cost Explorer analyzes and visualizes AWS costs and usage over time.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Budgets?',
    answer: 'Budgets set custom cost and usage budgets and receive alerts when thresholds are exceeded.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Reserved Instance Marketplace?',
    answer: 'Reserved Instance Marketplace allows buying and selling unused Reserved Instances.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Savings Plans?',
    answer: 'Savings Plans provide flexible pricing model offering lower prices in exchange for commitment to consistent usage.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Spot Fleet?',
    answer: 'Spot Fleet manages a collection of Spot Instances and optionally On-Demand Instances.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is EMR?',
    answer: 'EMR (Elastic MapReduce) is a managed cluster platform for processing big data using Hadoop, Spark, etc.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Redshift?',
    answer: 'Redshift is a fully managed data warehouse service for analytics.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Athena?',
    answer: 'Athena is an interactive query service for analyzing data in S3 using SQL.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Glue?',
    answer: 'Glue is a fully managed ETL service for preparing and transforming data for analytics.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Kinesis?',
    answer: 'Kinesis is a platform for streaming data on AWS, enabling real-time analytics.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Data Pipeline?',
    answer: 'Data Pipeline orchestrates data movement and transformation across AWS services.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is AppSync?',
    answer: 'AppSync creates serverless GraphQL and Pub/Sub APIs.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is Cognito?',
    answer: 'Cognito provides authentication, authorization, and user management for web and mobile apps.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is IAM Identity Center?',
    answer: 'IAM Identity Center (formerly SSO) provides single sign-on access to AWS accounts and applications.',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What are AWS best practices?',
    answer: 'AWS best practices:\n- Use IAM roles instead of access keys\n- Enable MFA for sensitive operations\n- Use VPC for network isolation\n- Enable CloudTrail for audit logging\n- Use encryption at rest and in transit\n- Implement least privilege access\n- Use tags for resource management\n- Enable versioning for S3\n- Use multi-AZ for high availability\n- Regular backups and disaster recovery',
    difficulty: 'Hard'
  },
  {
    topic: 'AWS',
    question: 'What is AWS Global Infrastructure?',
    answer: 'AWS Global Infrastructure consists of:\n- **Regions**: Geographic areas with multiple Availability Zones\n- **Availability Zones**: Isolated locations within regions\n- **Edge Locations**: Points of presence for CloudFront and Route 53',
    difficulty: 'Hard'
  }
]

