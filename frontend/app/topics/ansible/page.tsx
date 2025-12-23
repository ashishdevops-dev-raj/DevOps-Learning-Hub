import CodeBlock from '@/components/CodeBlock'
import BackButton from '@/components/BackButton'

export default function AnsiblePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      <h1 className="text-4xl font-bold mb-6">Ansible - Configuration Management</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ansible Basics</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Basic Commands</h3>
          <CodeBlock
            code={`# Test connectivity
ansible all -m ping

# Run ad-hoc command
ansible all -a "uptime"

# Run playbook
ansible-playbook playbook.yml

# Run with inventory
ansible-playbook -i inventory playbook.yml

# Check syntax
ansible-playbook --syntax-check playbook.yml

# Dry run
ansible-playbook --check playbook.yml`}
            language="bash"
            title="Basic Ansible commands"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Playbook Example</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Simple Playbook</h3>
          <CodeBlock
            code={`---
- name: Setup web server
  hosts: webservers
  become: yes
  tasks:
    - name: Update apt cache
      apt:
        update_cache: yes
        cache_valid_time: 3600
    
    - name: Install nginx
      apt:
        name: nginx
        state: present
    
    - name: Start nginx service
      systemd:
        name: nginx
        state: started
        enabled: yes
    
    - name: Copy index.html
      template:
        src: index.html.j2
        dest: /var/www/html/index.html
      notify: restart nginx

  handlers:
    - name: restart nginx
      systemd:
        name: nginx
        state: restarted`}
            language="yaml"
            title="playbook.yml"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Inventory</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Inventory File</h3>
          <CodeBlock
            code={`[webservers]
web1 ansible_host=192.168.1.10 ansible_user=ubuntu
web2 ansible_host=192.168.1.11 ansible_user=ubuntu

[databases]
db1 ansible_host=192.168.1.20 ansible_user=ubuntu

[webservers:vars]
ansible_ssh_private_key_file=~/.ssh/id_rsa

[all:vars]
ansible_python_interpreter=/usr/bin/python3`}
            language="ini"
            title="inventory.ini"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Roles</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Role Structure</h3>
          <CodeBlock
            code={`roles/
  nginx/
    tasks/
      main.yml
    handlers/
      main.yml
    templates/
      nginx.conf.j2
    vars/
      main.yml
    defaults/
      main.yml
    files/
      index.html`}
            language="text"
            title="Role directory structure"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Using Roles</h3>
          <CodeBlock
            code={`---
- name: Configure servers
  hosts: all
  roles:
    - nginx
    - { role: database, when: inventory_hostname in groups['databases'] }`}
            language="yaml"
            title="Using roles in playbook"
          />
        </div>
      </section>
    </div>
  )
}

