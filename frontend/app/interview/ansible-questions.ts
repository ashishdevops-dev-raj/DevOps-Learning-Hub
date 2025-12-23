// Ansible Interview Questions - 100 Questions
// Easy Level (1-35), Medium Level (36-70), Hard Level (71-100)

export const ansibleQuestions = [
  // Easy Level (Questions 1-35)
  {
    topic: 'Ansible',
    question: 'What is Ansible?',
    answer: 'Ansible is an open-source automation tool for configuration management, application deployment, and task automation.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is configuration management?',
    answer: 'Configuration management is the process of maintaining computer systems, servers, and software in a desired, consistent state.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What are the main components of Ansible?',
    answer: 'Main components:\n- Control Node (where Ansible runs)\n- Managed Nodes (target systems)\n- Inventory (list of managed nodes)\n- Playbooks (automation scripts)\n- Modules (units of work)',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is an Ansible playbook?',
    answer: 'A playbook is a YAML file containing a series of tasks to be executed on managed nodes.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is an Ansible module?',
    answer: 'A module is a discrete unit of code that Ansible executes (e.g., `apt`, `yum`, `copy`, `service`).',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is an inventory?',
    answer: 'An inventory is a file that lists the hosts and groups of hosts that Ansible manages.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'How do you run an ad-hoc command?',
    answer: 'Use `ansible` command:\n```bash\nansible all -m ping\nansible all -m command -a "uptime"\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'How do you run a playbook?',
    answer: 'Use `ansible-playbook`:\n```bash\nansible-playbook playbook.yml\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible.cfg`?',
    answer: '`ansible.cfg` is the configuration file for Ansible that sets defaults and behavior.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is a task?',
    answer: 'A task is a single action to be performed on a managed node (e.g., install a package, start a service).',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is a play?',
    answer: 'A play is a set of tasks to be executed on a set of hosts.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is a handler?',
    answer: 'A handler is a special task that runs only when notified by another task.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'How do you define a handler?',
    answer: 'Example:\n```yaml\nhandlers:\n  - name: restart nginx\n    service:\n      name: nginx\n      state: restarted\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'How do you trigger a handler?',
    answer: 'Use `notify`:\n```yaml\ntasks:\n  - name: Configure nginx\n    template:\n      src: nginx.conf.j2\n      dest: /etc/nginx/nginx.conf\n    notify: restart nginx\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is a variable in Ansible?',
    answer: 'A variable stores a value that can be used throughout your playbooks.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'How do you define a variable?',
    answer: 'Example:\n```yaml\nvars:\n  package_name: nginx\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'How do you use a variable?',
    answer: 'Use double curly braces:\n```yaml\n- name: Install package\n  apt:\n    name: "{{ package_name }}"\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-vault`?',
    answer: '`ansible-vault` encrypts sensitive data like passwords and API keys.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'How do you create an encrypted file?',
    answer: 'Use `ansible-vault create`:\n```bash\nansible-vault create secrets.yml\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'How do you edit an encrypted file?',
    answer: 'Use `ansible-vault edit`:\n```bash\nansible-vault edit secrets.yml\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is an Ansible role?',
    answer: 'A role is a collection of tasks, variables, files, templates, and handlers organized in a directory structure.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-galaxy`?',
    answer: '`ansible-galaxy` is a command-line tool for managing Ansible roles and collections.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'How do you install a role?',
    answer: 'Use `ansible-galaxy role install`:\n```bash\nansible-galaxy role install username.role_name\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is a collection?',
    answer: 'A collection is a distribution format for Ansible content (roles, modules, plugins).',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'How do you install a collection?',
    answer: 'Use `ansible-galaxy collection install`:\n```bash\nansible-galaxy collection install namespace.collection_name\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is `become`?',
    answer: '`become` allows you to execute tasks with elevated privileges (like sudo).',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'How do you use `become`?',
    answer: 'Set `become: yes`:\n```yaml\n- name: Install package\n  apt:\n    name: nginx\n  become: yes\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-playbook --check`?',
    answer: '`--check` runs the playbook in check mode (dry run) without making changes.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-playbook --diff`?',
    answer: '`--diff` shows file differences when files are changed.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-playbook --limit`?',
    answer: '`--limit` restricts execution to specific hosts or groups.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-playbook --tags`?',
    answer: '`--tags` runs only tasks with specified tags.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-playbook --skip-tags`?',
    answer: '`--skip-tags` skips tasks with specified tags.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is a fact?',
    answer: 'A fact is a variable that Ansible automatically discovers about a system.',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'How do you display facts?',
    answer: 'Use `ansible` with `setup` module:\n```bash\nansible hostname -m setup\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Ansible',
    question: 'What is `gather_facts`?',
    answer: '`gather_facts` controls whether Ansible collects facts about managed nodes (default: yes).',
    difficulty: 'Easy'
  },

  // Medium Level (Questions 36-70)
  {
    topic: 'Ansible',
    question: 'What is an inventory plugin?',
    answer: 'An inventory plugin allows Ansible to dynamically generate inventory from various sources (cloud providers, databases, etc.).',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is a dynamic inventory?',
    answer: 'A dynamic inventory is generated programmatically rather than from a static file.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-inventory`?',
    answer: '`ansible-inventory` displays or dumps the configured inventory.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is a group variable?',
    answer: 'A group variable is a variable applied to all hosts in a group.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'Where do you define group variables?',
    answer: 'In `group_vars/<group_name>.yml` or in the inventory file.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is a host variable?',
    answer: 'A host variable is a variable specific to a single host.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'Where do you define host variables?',
    answer: 'In `host_vars/<hostname>.yml` or in the inventory file.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is a template?',
    answer: 'A template is a file with variables that Ansible renders before copying to the managed node.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What template engine does Ansible use?',
    answer: 'Ansible uses Jinja2 templating engine.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'How do you use a template?',
    answer: 'Use `template` module:\n```yaml\n- name: Configure nginx\n  template:\n    src: nginx.conf.j2\n    dest: /etc/nginx/nginx.conf\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is a loop?',
    answer: 'A loop allows you to repeat a task multiple times with different values.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'How do you use a loop?',
    answer: 'Use `loop` keyword:\n```yaml\n- name: Install packages\n  apt:\n    name: "{{ item }}"\n  loop:\n    - nginx\n    - mysql\n    - php\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `when`?',
    answer: '`when` conditionally executes a task based on a condition.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'How do you use `when`?',
    answer: 'Example:\n```yaml\n- name: Install package\n  apt:\n    name: nginx\n  when: ansible_os_family == "Debian"\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `register`?',
    answer: '`register` stores the result of a task in a variable.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'How do you use `register`?',
    answer: 'Example:\n```yaml\n- name: Check if service is running\n  command: systemctl is-active nginx\n  register: nginx_status\n\n- name: Display status\n  debug:\n    msg: "Nginx is {{ nginx_status.stdout }}"\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `failed_when`?',
    answer: '`failed_when` allows you to define when a task should be considered failed.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `changed_when`?',
    answer: '`changed_when` allows you to define when a task should be considered changed.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `ignore_errors`?',
    answer: '`ignore_errors` allows a task to continue even if it fails.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is a block?',
    answer: 'A block groups tasks together and allows error handling.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'How do you use a block?',
    answer: 'Example:\n```yaml\n- block:\n    - name: Task 1\n      command: /bin/false\n    - name: Task 2\n      command: /bin/true\n  rescue:\n    - name: Handle error\n      debug:\n        msg: "An error occurred"\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `rescue`?',
    answer: '`rescue` defines tasks to run when a block fails.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `always`?',
    answer: '`always` defines tasks that always run, regardless of success or failure.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `pre_tasks`?',
    answer: '`pre_tasks` are tasks that run before the main tasks in a play.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `post_tasks`?',
    answer: '`post_tasks` are tasks that run after the main tasks in a play.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `serial`?',
    answer: '`serial` limits the number of hosts a play runs on simultaneously.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'How do you use `serial`?',
    answer: 'Example:\n```yaml\n- hosts: webservers\n  serial: 2\n  tasks:\n    - name: Deploy application\n      # ...\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `strategy`?',
    answer: '`strategy` controls how Ansible executes tasks on multiple hosts.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What are the available strategies?',
    answer: 'Available strategies:\n- `linear`: Default, one host at a time\n- `free`: All hosts in parallel\n- `host_pinned`: Custom parallelization',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `delegate_to`?',
    answer: '`delegate_to` runs a task on a different host than the play\'s target.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `run_once`?',
    answer: '`run_once` runs a task only once, even if multiple hosts are targeted.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `local_action`?',
    answer: '`local_action` runs a task on the control node instead of managed nodes.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-pull`?',
    answer: '`ansible-pull` runs playbooks locally by pulling them from a repository.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-console`?',
    answer: '`ansible-console` provides an interactive REPL for executing ad-hoc tasks.',
    difficulty: 'Medium'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-doc`?',
    answer: '`ansible-doc` displays documentation for modules and plugins.',
    difficulty: 'Medium'
  },

  // High/Advanced Level (Questions 71-100)
  {
    topic: 'Ansible',
    question: 'What is an Ansible callback plugin?',
    answer: 'A callback plugin controls the output and behavior of Ansible execution.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-lint`?',
    answer: '`ansible-lint` is a tool that checks playbooks for best practices and potential issues.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `molecule`?',
    answer: 'Molecule is a testing framework for Ansible roles.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-builder`?',
    answer: '`ansible-builder` creates execution environments for Ansible Automation Platform.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is an execution environment?',
    answer: 'An execution environment is a container image containing Ansible and its dependencies.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-navigator`?',
    answer: '`ansible-navigator` is a command-line tool for running Ansible Automation Platform content.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is Ansible Tower/AWX?',
    answer: 'Ansible Tower (commercial) and AWX (open-source) provide a web-based UI and API for Ansible.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is a custom module?',
    answer: 'A custom module is a module you write to perform specific tasks not covered by built-in modules.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is a filter plugin?',
    answer: 'A filter plugin extends Jinja2 templating with custom filters.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is a lookup plugin?',
    answer: 'A lookup plugin retrieves data from external sources (files, databases, APIs).',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `vault_password_file`?',
    answer: '`vault_password_file` specifies a file containing the vault password.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-vault rekey`?',
    answer: '`ansible-vault rekey` changes the password of an encrypted file.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-vault view`?',
    answer: '`ansible-vault view` displays the contents of an encrypted file without editing.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-playbook --vault-password-file`?',
    answer: '`--vault-password-file` specifies a file containing the vault password.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-playbook --ask-vault-pass`?',
    answer: '`--ask-vault-pass` prompts for the vault password.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `host_key_checking`?',
    answer: '`host_key_checking` controls whether Ansible verifies SSH host keys.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `pipelining`?',
    answer: '`pipelining` reduces the number of SSH operations by piping scripts through SSH.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `forks`?',
    answer: '`forks` controls the number of parallel processes Ansible uses.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `gathering`?',
    answer: '`gathering` controls when Ansible gathers facts (implicit, explicit, smart, or never).',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is fact caching?',
    answer: 'Fact caching stores facts in a cache to avoid re-gathering them on every run.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'How do you enable fact caching?',
    answer: 'In `ansible.cfg`:\n```ini\n[defaults]\nfact_caching = jsonfile\nfact_caching_connection = /tmp/ansible_facts\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-playbook --list-tasks`?',
    answer: '`--list-tasks` lists all tasks that would be executed.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-playbook --list-hosts`?',
    answer: '`--list-hosts` lists all hosts that would be affected.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-playbook --syntax-check`?',
    answer: '`--syntax-check` checks playbook syntax without executing.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-playbook --start-at-task`?',
    answer: '`--start-at-task` starts execution at a specific task.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-playbook --step`?',
    answer: '`--step` prompts before executing each task.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-config`?',
    answer: '`ansible-config` manages Ansible configuration files.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-config view`?',
    answer: '`ansible-config view` displays the current configuration.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What is `ansible-config dump`?',
    answer: '`ansible-config dump` shows all configuration settings.',
    difficulty: 'Hard'
  },
  {
    topic: 'Ansible',
    question: 'What are Ansible best practices?',
    answer: 'Best practices:\n- Use roles for reusability\n- Use variables for flexibility\n- Use handlers for service restarts\n- Use tags for selective execution\n- Use vault for secrets\n- Use inventory organization\n- Use meaningful task names\n- Use `--check` before applying\n- Use version control\n- Use `ansible-lint` for quality\n- Use `gather_facts: false` when not needed\n- Use `serial` for rolling updates\n- Use `delegate_to` for orchestration\n- Use `run_once` for singleton tasks\n- Document your playbooks\n- Use consistent naming conventions\n- Test in development first\n- Use idempotent tasks\n- Avoid using `command` and `shell` when modules exist\n- Use `changed_when` and `failed_when` appropriately',
    difficulty: 'Hard'
  }
]

