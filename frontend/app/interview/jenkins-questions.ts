// Jenkins Interview Questions - 100 Questions
// Easy Level (1-35), Medium Level (36-70), Hard Level (71-100)

export const jenkinsQuestions = [
  // Easy Level (Questions 1-35)
  {
    topic: 'Jenkins',
    question: 'What is Jenkins?',
    answer: 'Jenkins is an open-source automation server that enables continuous integration and continuous delivery (CI/CD). It automates building, testing, and deploying software.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is Continuous Integration (CI)?',
    answer: 'CI is a development practice where developers frequently integrate code into a shared repository. Each integration is automatically built and tested.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is Continuous Delivery (CD)?',
    answer: 'CD extends CI by automatically deploying code to staging/production environments after successful builds and tests.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is Continuous Deployment?',
    answer: 'Continuous Deployment automatically deploys every change that passes tests to production without manual intervention.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'How do you install Jenkins?',
    answer: 'Installation methods:\n- Download and run Jenkins WAR file\n- Install via package manager (apt, yum)\n- Run in Docker container\n- Use Jenkins Helm chart for Kubernetes',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is the default Jenkins port?',
    answer: '8080',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'How do you access Jenkins?',
    answer: 'Open a web browser and navigate to `http://localhost:8080` (or your server\'s IP:8080).',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is a Jenkins job?',
    answer: 'A Jenkins job is a project or task that Jenkins can build, test, or deploy.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What are the types of Jenkins jobs?',
    answer: 'Jenkins job types:\n- **Freestyle Project**: Simple, GUI-based job configuration\n- **Pipeline**: Code-based CI/CD pipeline (Jenkinsfile)\n- **Multi-configuration Project**: Matrix builds\n- **Multibranch Pipeline**: Automatically creates jobs for branches',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is a Jenkinsfile?',
    answer: 'A Jenkinsfile is a text file that defines a Jenkins Pipeline. It can be written in Declarative or Scripted syntax and is version-controlled.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is the difference between Declarative and Scripted Pipeline?',
    answer: '- **Declarative**: Simpler, structured syntax, easier to read\n- **Scripted**: More flexible, uses Groovy scripting, more powerful',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'How do you create a Pipeline job?',
    answer: 'Steps:\n1. Click "New Item"\n2. Enter name and select "Pipeline"\n3. Configure pipeline (SCM or Pipeline script)\n4. Save',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is a Jenkins agent?',
    answer: 'A Jenkins agent (formerly slave) is a machine that executes build jobs. Agents can be on different operating systems and connect to the master.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is the difference between Jenkins master and agent?',
    answer: '- **Master**: Orchestrates builds, manages configuration, schedules jobs\n- **Agent**: Executes build jobs, can be on different machines/OS',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is a Jenkins executor?',
    answer: 'An executor is a slot on a Jenkins agent that can run a single build at a time. An agent can have multiple executors.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'How do you trigger a Jenkins build?',
    answer: 'Build triggers:\n- Manual trigger\n- SCM polling (checking for changes)\n- Webhook (GitHub, GitLab, etc.)\n- Scheduled (cron)\n- Upstream/downstream projects\n- Remote API',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is build polling?',
    answer: 'Build polling checks the SCM repository at specified intervals for changes and triggers a build if changes are detected.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is a webhook?',
    answer: 'A webhook is an HTTP callback that triggers a Jenkins build when events occur in the SCM (e.g., push to repository).',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'How do you view build logs?',
    answer: 'Click on a build number, then click "Console Output".',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'How do you view build history?',
    answer: 'Build history is displayed on the job\'s main page, showing all past builds.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is a build artifact?',
    answer: 'A build artifact is a file or collection of files produced during a build (e.g., JAR files, test reports).',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'How do you archive artifacts?',
    answer: 'In job configuration, use "Archive the artifacts" post-build action, or in Pipeline use `archiveArtifacts`.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What are Jenkins plugins?',
    answer: 'Plugins extend Jenkins functionality. Examples:\n- Git plugin\n- Docker plugin\n- Kubernetes plugin\n- SonarQube plugin\n- Email extension plugin',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'How do you install plugins?',
    answer: 'Plugin installation:\n- Via Jenkins UI: Manage Jenkins → Manage Plugins\n- Via CLI\n- Manually (upload .hpi file)',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is Blue Ocean?',
    answer: 'Blue Ocean is a modern UI for Jenkins that provides a better visual experience for creating and managing pipelines.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'How do you configure Git in Jenkins?',
    answer: 'Steps:\n1. Install Git plugin\n2. Configure Git in "Global Tool Configuration"\n3. Add Git repository URL in job configuration',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is Jenkins workspace?',
    answer: 'A workspace is a directory on the agent where Jenkins checks out source code and runs builds.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'How do you clean workspace?',
    answer: 'Use "Clean before checkout" option or `cleanWs()` in Pipeline.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is a build parameter?',
    answer: 'A build parameter allows you to pass values to a build at runtime.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'How do you add parameters?',
    answer: 'In job configuration, select "This project is parameterized" and add parameters (string, choice, boolean, etc.).',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is a build trigger?',
    answer: 'A build trigger defines when a build should be executed automatically.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is upstream/downstream project?',
    answer: '- **Upstream**: Project that triggers another project\n- **Downstream**: Project triggered by another project',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'How do you send email notifications?',
    answer: 'Use Email Extension Plugin and configure in post-build actions or Pipeline post section.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'What is Jenkins CLI?',
    answer: 'Jenkins CLI is a command-line interface for interacting with Jenkins remotely.',
    difficulty: 'Easy'
  },
  {
    topic: 'Jenkins',
    question: 'How do you restart Jenkins?',
    answer: 'Restart methods:\n- Via UI: Manage Jenkins → Prepare for Shutdown\n- Via CLI: `java -jar jenkins-cli.jar restart`\n- Via system service: `systemctl restart jenkins`',
    difficulty: 'Easy'
  },

  // Medium Level (Questions 36-70)
  {
    topic: 'Jenkins',
    question: 'Explain Jenkins architecture.',
    answer: 'Jenkins architecture:\n- **Master**: Central Jenkins server that manages builds, schedules jobs, and distributes work\n- **Agent/Node**: Machines that execute build jobs\n- **Executor**: Slot on agent that runs a single build at a time',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'What is a Jenkins node?',
    answer: 'A Jenkins node is a machine that can execute Jenkins jobs. Can be a master or agent.',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'How do you add a Jenkins agent?',
    answer: 'Agent addition methods:\n- Via SSH\n- Via JNLP (Java Web Start)\n- Via cloud providers (AWS, Azure, etc.)\n- Static agent configuration',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'What is JNLP?',
    answer: 'JNLP (Java Network Launch Protocol) is used to launch Jenkins agents.',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'How do you configure SSH agent?',
    answer: 'Steps:\n1. Add SSH credentials in Jenkins\n2. Configure agent with SSH connection\n3. Specify host and credentials',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'What are the main components of a Pipeline?',
    answer: 'Pipeline components:\n- **Agent**: Where the pipeline runs\n- **Stages**: Logical divisions of work\n- **Steps**: Individual tasks within stages\n- **Post**: Actions to run after stages complete',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'Explain Jenkins Pipeline stages.',
    answer: 'Stages are logical divisions of work in a pipeline. Common stages:\n- Checkout\n- Build\n- Test\n- Deploy',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'What is the difference between `when` and `if` in pipelines?',
    answer: '- `when`: Used in Declarative pipelines for conditional stage execution\n- `if`: Used in Scripted pipelines for conditional logic',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'How do you use parallel stages?',
    answer: 'Example:\n```groovy\nstage(\'Test\') {\n    parallel {\n        stage(\'Unit Tests\') {\n            steps { sh \'npm test\' }\n        }\n        stage(\'Integration Tests\') {\n            steps { sh \'npm run test:integration\' }\n        }\n    }\n}\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'How do you handle build failures?',
    answer: 'Failure handling:\n- Email notifications\n- Slack/Teams notifications\n- Retry failed stages\n- Rollback deployments\n- Post-build actions',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'What is a shared library in Jenkins?',
    answer: 'A shared library is a collection of reusable pipeline code stored in a repository. Allows code reuse across multiple pipelines.',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'How do you use a shared library?',
    answer: 'Configure in "Manage Jenkins → Configure System → Global Pipeline Libraries" and reference in Jenkinsfile with `@Library(\'library-name\')`.',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'Explain Jenkins multibranch pipeline.',
    answer: 'A multibranch pipeline automatically creates jobs for each branch in the repository and manages them based on branch lifecycle.',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'What is Jenkinsfile from SCM?',
    answer: 'Jenkinsfile from SCM allows loading the pipeline definition directly from the source code repository.',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'How do you manage credentials in Jenkins?',
    answer: 'Jenkins Credentials Plugin allows storing:\n- Usernames/passwords\n- SSH keys\n- Secret files\n- Secret text\n- Certificates',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'How do you use credentials in Pipeline?',
    answer: 'Example:\n```groovy\nwithCredentials([usernamePassword(credentialsId: \'mycreds\', usernameVariable: \'USER\', passwordVariable: \'PASS\')]) {\n    sh \'echo $USER:$PASS\'\n}\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'What is Jenkins security?',
    answer: 'Jenkins security includes:\n- Authentication (who can access)\n- Authorization (what they can do)\n- Credential management\n- CSRF protection',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'Explain Jenkins user roles.',
    answer: 'User roles:\n- **Admin**: Full access\n- **Developer**: Can trigger builds, view results\n- **Viewer**: Read-only access',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'How do you configure matrix builds?',
    answer: 'Use "Multi-configuration Project" to run builds across multiple configurations (e.g., different OS, browsers).',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'What is build discarder?',
    answer: 'Build discarder automatically deletes old builds to save disk space.',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'How do you configure build discarder?',
    answer: 'In job configuration, use "Discard old builds" or in Pipeline use `options { buildDiscarder(...) }`.',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'What is workspace cleanup?',
    answer: 'Workspace cleanup removes files from the workspace before/after builds to prevent conflicts and save disk space.',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'How do you integrate test results?',
    answer: 'Test integration:\n- JUnit plugin for test results\n- Publish test results in post section\n- Archive test reports',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'How do you publish test results?',
    answer: 'Example:\n```groovy\npost {\n    always {\n        junit \'test-results/**/*.xml\'\n    }\n}\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'What is SonarQube integration?',
    answer: 'SonarQube integration allows running code quality analysis in Jenkins pipelines.',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'How do you integrate SonarQube?',
    answer: 'Install SonarQube plugin and use `withSonarQubeEnv` in Pipeline.',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'What is Docker integration in Jenkins?',
    answer: 'Docker integration allows building Docker images and running containers in Jenkins pipelines.',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'How do you use Docker in Pipeline?',
    answer: 'Example:\n```groovy\nstage(\'Build\') {\n    steps {\n        script {\n            def image = docker.build("myapp:${env.BUILD_NUMBER}")\n            image.push()\n        }\n    }\n}\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'What is Kubernetes integration in Jenkins?',
    answer: 'Kubernetes integration allows running Jenkins agents as Kubernetes pods.',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'How do you configure Kubernetes plugin?',
    answer: 'Configure Kubernetes cloud in "Manage Jenkins → Configure System → Cloud" with Kubernetes cluster details.',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'What is pipeline as code?',
    answer: 'Pipeline as code means defining pipelines in code (Jenkinsfile) rather than through UI, enabling version control and code review.',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'How do you handle secrets in Jenkins?',
    answer: 'Secret management:\n- Credentials Plugin\n- HashiCorp Vault integration\n- Environment variables (less secure)\n- Secret files',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'What is Jenkins X?',
    answer: 'Jenkins X is a cloud-native CI/CD solution built on top of Jenkins, designed for Kubernetes environments.',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'What is the difference between `sh` and `bat` in pipelines?',
    answer: '- `sh`: For Unix/Linux commands\n- `bat`: For Windows batch commands',
    difficulty: 'Medium'
  },
  {
    topic: 'Jenkins',
    question: 'How do you set environment variables in Pipeline?',
    answer: 'Example:\n```groovy\nenvironment {\n    NODE_ENV = \'production\'\n    VERSION = "${env.BUILD_NUMBER}"\n}\n```',
    difficulty: 'Medium'
  },

  // High/Advanced Level (Questions 71-100)
  {
    topic: 'Jenkins',
    question: 'What are Jenkins best practices?',
    answer: 'Best practices:\n- Use Pipelines (Jenkinsfile)\n- Version control Jenkinsfiles\n- Use agents for builds\n- Implement proper security\n- Use credentials plugin\n- Clean workspace after builds\n- Use parallel stages when possible\n- Implement proper notifications',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'How do you optimize Jenkins performance?',
    answer: 'Performance optimization:\n- Use agents for builds\n- Clean workspace regularly\n- Archive old builds\n- Use build discarder\n- Optimize plugin usage\n- Use parallel stages\n- Cache dependencies',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'How do you backup Jenkins?',
    answer: 'Backup methods:\n- Backup JENKINS_HOME directory\n- Use ThinBackup plugin\n- Export configuration as XML\n- Backup plugins',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'How do you restore Jenkins from backup?',
    answer: 'Restore JENKINS_HOME directory or use ThinBackup plugin restore functionality.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'What is JENKINS_HOME?',
    answer: 'JENKINS_HOME is the directory where Jenkins stores all its configuration, jobs, and build history.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'How do you migrate Jenkins?',
    answer: 'Migration methods:\n- Copy JENKINS_HOME to new server\n- Export/import jobs\n- Use Jenkins CLI\n- Use configuration as code',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'What is Configuration as Code (JCasC)?',
    answer: 'JCasC allows managing Jenkins configuration through YAML files, enabling infrastructure as code.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'How do you use JCasC?',
    answer: 'Install Configuration as Code plugin and provide YAML configuration file.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'What is Jenkins pipeline library?',
    answer: 'A pipeline library is a shared library containing reusable pipeline code, steps, and utilities.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'How do you create a pipeline library?',
    answer: 'Create a Git repository with `vars/` directory for global variables and `src/` for classes.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'What is pipeline step?',
    answer: 'A pipeline step is a single operation in a pipeline (e.g., `sh`, `echo`, `git`).',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'How do you create custom pipeline steps?',
    answer: 'Create Groovy scripts in shared library `vars/` directory.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'What is pipeline DSL?',
    answer: 'Pipeline DSL (Domain-Specific Language) is the syntax used to define Jenkins pipelines.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'How do you debug Jenkins pipelines?',
    answer: 'Debugging methods:\n- Use `echo` statements\n- Check console output\n- Use Pipeline Syntax generator\n- Enable debug mode\n- Check agent connectivity\n- Review logs',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'What is pipeline replay?',
    answer: 'Pipeline replay allows re-running a pipeline with modified script without committing changes.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'How do you handle pipeline failures?',
    answer: 'Use `post` section with `failure`, `success`, `always` blocks to handle different outcomes.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'What is pipeline timeout?',
    answer: 'Pipeline timeout allows setting maximum execution time for a pipeline or stage.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'How do you set pipeline timeout?',
    answer: 'Example:\n```groovy\noptions {\n    timeout(time: 1, unit: \'HOURS\')\n}\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'What is pipeline retry?',
    answer: 'Pipeline retry allows automatically retrying failed stages.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'How do you retry a stage?',
    answer: 'Example:\n```groovy\nretry(3) {\n    sh \'unstable-command\'\n}\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'What is pipeline input?',
    answer: 'Pipeline input allows pausing pipeline execution for user input.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'How do you use pipeline input?',
    answer: 'Example:\n```groovy\ninput message: \'Deploy to production?\', ok: \'Deploy\'\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'What is pipeline lock?',
    answer: 'Pipeline lock allows locking resources to prevent concurrent access.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'How do you use pipeline lock?',
    answer: 'Example:\n```groovy\nlock(\'my-resource\') {\n    // Critical section\n}\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'What is pipeline stash/unstash?',
    answer: 'Stash/unstash allows saving and restoring files across stages and nodes.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'How do you use stash?',
    answer: 'Example:\n```groovy\nstash includes: \'target/**\', name: \'artifacts\'\nunstash \'artifacts\'\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'What is pipeline script approval?',
    answer: 'Script approval is a security feature that requires admin approval for certain scripts.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'How do you approve scripts?',
    answer: 'Go to "Manage Jenkins → In-process Script Approval" and approve pending scripts.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'What is Jenkins distributed builds?',
    answer: 'Distributed builds allow running builds on multiple agents, improving performance and scalability.',
    difficulty: 'Hard'
  },
  {
    topic: 'Jenkins',
    question: 'How do you troubleshoot failed builds?',
    answer: 'Troubleshooting steps:\n- Check console output\n- Review build logs\n- Check agent connectivity\n- Verify dependencies\n- Check disk space\n- Review permissions\n- Check plugin compatibility\n- Review system logs',
    difficulty: 'Hard'
  }
]

