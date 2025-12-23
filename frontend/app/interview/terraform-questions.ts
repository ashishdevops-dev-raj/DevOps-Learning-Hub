// Terraform Interview Questions - 100 Questions
// Easy Level (1-35), Medium Level (36-70), Hard Level (71-100)

export const terraformQuestions = [
  // Easy Level (Questions 1-35)
  {
    topic: 'Terraform',
    question: 'What is Terraform?',
    answer: 'Terraform is an Infrastructure as Code (IaC) tool that allows you to define and provision infrastructure using declarative configuration files.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is Infrastructure as Code (IaC)?',
    answer: 'IaC is the practice of managing and provisioning infrastructure through machine-readable definition files rather than manual processes.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is HashiCorp Configuration Language (HCL)?',
    answer: 'HCL is the configuration language used by Terraform. It\'s designed to be human-readable and machine-friendly.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What are the main components of Terraform?',
    answer: 'Main components:\n- Configuration files (.tf files)\n- State file (.tfstate)\n- Providers\n- Resources\n- Variables\n- Outputs',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is a Terraform provider?',
    answer: 'A provider is a plugin that Terraform uses to interact with APIs of cloud providers or services (AWS, Azure, GCP, etc.).',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'How do you initialize Terraform?',
    answer: 'Use `terraform init` command.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What does `terraform init` do?',
    answer: '`terraform init`:\n- Downloads required providers\n- Initializes backend\n- Sets up working directory',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform plan`?',
    answer: '`terraform plan` creates an execution plan showing what Terraform will do when you apply the configuration.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform apply`?',
    answer: '`terraform apply` executes the plan and creates/updates/destroys resources as defined.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform destroy`?',
    answer: '`terraform destroy` removes all resources defined in the configuration.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is a Terraform resource?',
    answer: 'A resource is a component of your infrastructure (e.g., EC2 instance, S3 bucket, VPC).',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'How do you define a resource?',
    answer: 'Example:\n```hcl\nresource "aws_instance" "example" {\n  ami           = "ami-12345678"\n  instance_type = "t3.micro"\n}\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is a Terraform variable?',
    answer: 'A variable allows you to parameterize your configuration, making it reusable and flexible.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'How do you define a variable?',
    answer: 'Example:\n```hcl\nvariable "instance_type" {\n  description = "EC2 instance type"\n  type        = string\n  default     = "t3.micro"\n}\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'How do you use a variable?',
    answer: 'Example:\n```hcl\nresource "aws_instance" "example" {\n  instance_type = var.instance_type\n}\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is a Terraform output?',
    answer: 'An output exposes information about your infrastructure after it\'s created.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'How do you define an output?',
    answer: 'Example:\n```hcl\noutput "instance_id" {\n  description = "ID of the EC2 instance"\n  value       = aws_instance.example.id\n}\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is a data source?',
    answer: 'A data source allows you to fetch information from existing resources or external systems.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'How do you use a data source?',
    answer: 'Example:\n```hcl\ndata "aws_ami" "latest" {\n  most_recent = true\n  owners      = ["amazon"]\n}\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is the Terraform state file?',
    answer: 'The state file tracks the mapping between your configuration and real-world resources.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'Why is the state file important?',
    answer: 'State file importance:\n- Tracks resource relationships\n- Enables Terraform to update/destroy resources\n- Stores resource metadata',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is a backend?',
    answer: 'A backend determines where Terraform stores its state file (local, S3, Azure Storage, etc.).',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is a local backend?',
    answer: 'Local backend stores state file on the local filesystem (default).',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is a remote backend?',
    answer: 'Remote backend stores state file in a remote location (S3, Azure Storage, GCS, Terraform Cloud).',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is state locking?',
    answer: 'State locking prevents multiple users from modifying the same state simultaneously.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform fmt`?',
    answer: '`terraform fmt` formats Terraform configuration files to a canonical format.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform validate`?',
    answer: '`terraform validate` checks if the configuration is syntactically valid and internally consistent.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform show`?',
    answer: '`terraform show` displays the current state or a saved plan.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform output`?',
    answer: '`terraform output` displays the values of output variables.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is a Terraform workspace?',
    answer: 'A workspace allows you to manage multiple environments (dev, staging, prod) with the same configuration.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'How do you create a workspace?',
    answer: 'Use `terraform workspace new dev` command.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'How do you switch workspaces?',
    answer: 'Use `terraform workspace select dev` command.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform.tfvars`?',
    answer: '`terraform.tfvars` is a file where you can assign values to variables.',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is `.terraformignore`?',
    answer: '`.terraformignore` specifies files that Terraform should ignore (similar to `.gitignore`).',
    difficulty: 'Easy'
  },
  {
    topic: 'Terraform',
    question: 'What is the difference between `terraform plan` and `terraform apply`?',
    answer: '- `terraform plan`: Shows what will happen (dry run)\n- `terraform apply`: Actually makes the changes',
    difficulty: 'Easy'
  },

  // Medium Level (Questions 36-70)
  {
    topic: 'Terraform',
    question: 'What is a Terraform module?',
    answer: 'A module is a container for multiple resources that are used together, promoting reusability.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'How do you use a module?',
    answer: 'Example:\n```hcl\nmodule "vpc" {\n  source = "./modules/vpc"\n  cidr   = "10.0.0.0/16"\n}\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is a root module?',
    answer: 'The root module is the directory where you run `terraform` commands, containing your main configuration.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is a child module?',
    answer: 'A child module is called from another module using the `module` block.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is the Terraform Registry?',
    answer: 'The Terraform Registry is a public repository of modules and providers.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'How do you use a module from the registry?',
    answer: 'Example:\n```hcl\nmodule "vpc" {\n  source  = "terraform-aws-modules/vpc/aws"\n  version = "~> 3.0"\n}\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform import`?',
    answer: '`terraform import` brings existing infrastructure under Terraform management.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'How do you import a resource?',
    answer: 'Use `terraform import aws_instance.example i-1234567890abcdef0` command.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform taint`?',
    answer: '`terraform taint` marks a resource for recreation on the next apply (deprecated, use `terraform apply -replace`).',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform untaint`?',
    answer: '`terraform untaint` removes the taint from a resource (deprecated).',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform state list`?',
    answer: '`terraform state list` lists all resources in the state.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform state show`?',
    answer: '`terraform state show` shows the attributes of a resource in the state.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform state mv`?',
    answer: '`terraform state mv` moves a resource in the state (useful for refactoring).',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform state rm`?',
    answer: '`terraform state rm` removes a resource from the state without destroying it.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is a provisioner?',
    answer: 'A provisioner allows you to execute scripts on local or remote machines after resource creation.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What are the types of provisioners?',
    answer: 'Provisioner types:\n- **local-exec**: Runs commands on the machine running Terraform\n- **remote-exec**: Runs commands on the created resource\n- **file**: Copies files to the created resource',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is a null_resource?',
    answer: 'A null_resource is a resource that doesn\'t create anything but can trigger provisioners.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is `depends_on`?',
    answer: '`depends_on` explicitly defines resource dependencies.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'How do you use `depends_on`?',
    answer: 'Example:\n```hcl\nresource "aws_instance" "example" {\n  depends_on = [aws_security_group.example]\n}\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is `count`?',
    answer: '`count` creates multiple instances of a resource.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'How do you use `count`?',
    answer: 'Example:\n```hcl\nresource "aws_instance" "example" {\n  count = 3\n  # ...\n}\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is `for_each`?',
    answer: '`for_each` creates multiple instances of a resource based on a map or set.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'How do you use `for_each`?',
    answer: 'Example:\n```hcl\nresource "aws_instance" "example" {\n  for_each = {\n    web1 = "t3.micro"\n    web2 = "t3.small"\n  }\n  instance_type = each.value\n}\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is the difference between `count` and `for_each`?',
    answer: '- `count`: Creates resources with numeric indices\n- `for_each`: Creates resources with string keys (better for refactoring)',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform graph`?',
    answer: '`terraform graph` generates a visual representation of the dependency graph.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is a lifecycle block?',
    answer: 'A lifecycle block allows you to control resource lifecycle behavior.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What are lifecycle options?',
    answer: 'Lifecycle options:\n- `create_before_destroy`: Create new before destroying old\n- `prevent_destroy`: Prevent resource destruction\n- `ignore_changes`: Ignore changes to specific attributes',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform console`?',
    answer: '`terraform console` provides an interactive console for testing expressions.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is a local value?',
    answer: 'A local value assigns a name to an expression, making configuration more readable.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'How do you define a local value?',
    answer: 'Example:\n```hcl\nlocals {\n  common_tags = {\n    Environment = "production"\n    ManagedBy   = "Terraform"\n  }\n}\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform workspace show`?',
    answer: '`terraform workspace show` displays the current workspace name.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform workspace list`?',
    answer: '`terraform workspace list` lists all workspaces.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is variable validation?',
    answer: 'Variable validation allows you to add custom validation rules to variables.',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'How do you add variable validation?',
    answer: 'Example:\n```hcl\nvariable "instance_count" {\n  type = number\n  validation {\n    condition     = var.instance_count > 0\n    error_message = "Instance count must be positive."\n  }\n}\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Terraform',
    question: 'What is `sensitive` variable?',
    answer: 'A `sensitive` variable prevents its value from being displayed in logs and output.',
    difficulty: 'Medium'
  },

  // High/Advanced Level (Questions 71-100)
  {
    topic: 'Terraform',
    question: 'What is Terraform Cloud?',
    answer: 'Terraform Cloud is a hosted service for Terraform that provides remote state, collaboration, and automation.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is Terraform Enterprise?',
    answer: 'Terraform Enterprise is the self-hosted version of Terraform Cloud.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is a remote state data source?',
    answer: 'A remote state data source allows you to use outputs from another Terraform configuration.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'How do you use remote state?',
    answer: 'Example:\n```hcl\ndata "terraform_remote_state" "vpc" {\n  backend = "s3"\n  config = {\n    bucket = "my-terraform-state"\n    key    = "vpc/terraform.tfstate"\n  }\n}\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform force-unlock`?',
    answer: '`terraform force-unlock` manually releases a lock on the state.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is a backend configuration?',
    answer: 'Backend configuration determines where and how Terraform stores state.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is partial backend configuration?',
    answer: 'Partial backend configuration allows you to provide some backend settings via command line.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform refresh`?',
    answer: '`terraform refresh` updates the state file to match the real-world infrastructure (now automatic in plan/apply).',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is a provider alias?',
    answer: 'A provider alias allows you to use multiple provider configurations.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'How do you use provider alias?',
    answer: 'Example:\n```hcl\nprovider "aws" {\n  alias  = "us-west"\n  region = "us-west-2"\n}\n\nresource "aws_instance" "example" {\n  provider = aws.us-west\n  # ...\n}\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform version`?',
    answer: '`terraform version` displays Terraform version and provider versions.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is provider version constraints?',
    answer: 'Provider version constraints specify which provider versions are acceptable.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'How do you specify provider versions?',
    answer: 'Example:\n```hcl\nterraform {\n  required_providers {\n    aws = {\n      source  = "hashicorp/aws"\n      version = "~> 4.0"\n    }\n  }\n}\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform providers lock`?',
    answer: '`terraform providers lock` writes dependency lock information to `.terraform.lock.hcl`.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is a custom provider?',
    answer: 'A custom provider is a provider developed for a specific service or API.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform fmt -recursive`?',
    answer: '`terraform fmt -recursive` formats all Terraform files in subdirectories.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform fmt -check`?',
    answer: '`terraform fmt -check` checks if files are formatted without modifying them.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform plan -out`?',
    answer: '`terraform plan -out` saves the plan to a file for later application.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform apply -target`?',
    answer: '`terraform apply -target` applies changes only to specific resources.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform apply -replace`?',
    answer: '`terraform apply -replace` forces replacement of a specific resource.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform state pull`?',
    answer: '`terraform state pull` downloads the current state and outputs it to stdout.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform state push`?',
    answer: '`terraform state push` uploads a local state file to the backend.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform validate -json`?',
    answer: '`terraform validate -json` outputs validation results in JSON format.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is a Terraform function?',
    answer: 'A Terraform function performs computations and transformations (e.g., `length()`, `merge()`, `cidrsubnet()`).',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What are common Terraform functions?',
    answer: 'Common functions:\n- String: `join()`, `split()`, `replace()`\n- Numeric: `max()`, `min()`, `abs()`\n- Collection: `length()`, `keys()`, `values()`\n- Encoding: `base64encode()`, `jsonencode()`',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform workspace delete`?',
    answer: '`terraform workspace delete` deletes a workspace (must be empty).',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is a conditional expression?',
    answer: 'A conditional expression allows you to choose between two values based on a condition.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'How do you use conditional expressions?',
    answer: 'Example:\n```hcl\nresource "aws_instance" "example" {\n  instance_type = var.environment == "prod" ? "t3.large" : "t3.micro"\n}\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What is `terraform plan -destroy`?',
    answer: '`terraform plan -destroy` creates a plan to destroy all resources.',
    difficulty: 'Hard'
  },
  {
    topic: 'Terraform',
    question: 'What are Terraform best practices?',
    answer: 'Best practices:\n- Use version control for all Terraform files\n- Use remote backend for state\n- Enable state locking\n- Use modules for reusability\n- Use variables for flexibility\n- Use workspaces for environments\n- Never commit state files\n- Use `.terraformignore`\n- Validate and format before committing\n- Use provider version constraints\n- Document your code\n- Use meaningful resource names\n- Implement proper error handling\n- Use `terraform plan` before `apply`\n- Regular state backups',
    difficulty: 'Hard'
  }
]

