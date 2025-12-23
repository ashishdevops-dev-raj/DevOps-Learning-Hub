// Linux Interview Questions - 100 Questions
// Easy Level (1-35), Medium Level (36-70), Hard Level (71-100)

export const linuxQuestions = [
  // Easy Level (Questions 1-35)
  {
    topic: 'Linux',
    question: 'What is Linux?',
    answer: 'Linux is an open-source, Unix-like operating system kernel. It\'s the foundation for various Linux distributions (distros) like Ubuntu, CentOS, RedHat, etc.',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'What is a Linux distribution?',
    answer: 'A Linux distribution (distro) is a complete operating system built around the Linux kernel, including package management, desktop environment, and software.',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'What is the difference between Linux and Unix?',
    answer: 'Linux is a Unix-like kernel that is open-source and free. Unix is a proprietary operating system. Linux was inspired by Unix but written from scratch.',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'Explain the Linux file system hierarchy.',
    answer: 'Key directories:\n- `/` - Root directory\n- `/bin` - Essential binaries\n- `/boot` - Boot loader files\n- `/dev` - Device files\n- `/etc` - Configuration files\n- `/home` - User home directories\n- `/lib` - Shared libraries\n- `/opt` - Optional software\n- `/proc` - Process information\n- `/root` - Root user home\n- `/sbin` - System binaries\n- `/tmp` - Temporary files\n- `/usr` - User programs\n- `/var` - Variable data (logs, etc.)',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'What is the root user?',
    answer: 'The root user is the superuser account with full administrative privileges. UID is 0.',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'How do you check your current user?',
    answer: 'Use `whoami` or `id` command:\n```bash\nwhoami\nid\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'What is the difference between `su` and `sudo`?',
    answer: '- `su` - Switch user (requires target user\'s password)\n- `sudo` - Execute command as another user (requires your password and sudo privileges)',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'How do you change file permissions?',
    answer: 'Use `chmod` command:\n```bash\nchmod 755 file.sh\nchmod +x file.sh\nchmod u+x file.sh\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'Explain file permissions in Linux.',
    answer: 'Three types of permissions:\n- **Read (r)** - 4\n- **Write (w)** - 2\n- **Execute (x)** - 1\n\nThree user groups:\n- **Owner (u)**\n- **Group (g)**\n- **Others (o)**\n\nExample: `755` = rwxr-xr-x',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'What is the difference between hard links and soft links?',
    answer: '- **Hard Link**: Points directly to the inode of a file. If original file is deleted, hard link still works. Cannot link directories.\n- **Soft Link (Symbolic Link)**: Points to the path of a file. If original file is deleted, link becomes broken. Can link directories.',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'How do you create a symbolic link?',
    answer: 'Use `ln -s` command:\n```bash\nln -s /path/to/file /path/to/link\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'What is a process in Linux?',
    answer: 'A process is a running instance of a program. Each process has a unique Process ID (PID).',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'How do you list running processes?',
    answer: 'Use these commands:\n```bash\nps aux\nps -ef\ntop\nhtop\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'How do you kill a process?',
    answer: 'Use these commands:\n```bash\nkill PID\nkill -9 PID  # Force kill\nkillall processname\npkill pattern\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'What is the difference between `kill`, `killall`, and `pkill`?',
    answer: '- `kill PID` - Kills a specific process by PID\n- `killall name` - Kills all processes matching the name\n- `pkill pattern` - Kills processes matching a pattern',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'How do you check disk usage?',
    answer: 'Use these commands:\n```bash\ndf -h          # Filesystem disk space usage\ndu -h          # Directory space usage\ndu -sh *       # Size of each directory\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'How do you check memory usage?',
    answer: 'Use these commands:\n```bash\nfree -h\ncat /proc/meminfo\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'How do you check CPU information?',
    answer: 'Use these commands:\n```bash\nlscpu\ncat /proc/cpuinfo\nnproc  # Number of CPU cores\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'What is the difference between `top` and `htop`?',
    answer: '`htop` is an enhanced version of `top` with better UI, colors, and easier navigation.',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'How do you find a file?',
    answer: 'Use these commands:\n```bash\nfind /path -name "filename"\nlocate filename\nwhich command\nwhereis command\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'What is the difference between `find` and `locate`?',
    answer: '- `find` - Searches filesystem in real-time (slower but current)\n- `locate` - Uses a database (faster but may be outdated)',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'How do you search text in files?',
    answer: 'Use `grep` command:\n```bash\ngrep "pattern" file\ngrep -r "pattern" /path\ngrep -i "pattern" file  # Case insensitive\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'How do you view file contents?',
    answer: 'Use these commands:\n```bash\ncat file\nless file\nmore file\nhead file\ntail file\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'How do you follow a log file in real-time?',
    answer: 'Use `tail -f` or `tail -F`:\n```bash\ntail -f /var/log/syslog\ntail -F /var/log/file\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'Where are system logs stored?',
    answer: 'Main log locations:\n- `/var/log/` - Main log directory\n- `/var/log/syslog` - System log\n- `/var/log/auth.log` - Authentication log\n- `/var/log/kern.log` - Kernel log\n- `journalctl` - systemd journal',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'How do you check network connectivity?',
    answer: 'Use these commands:\n```bash\nping hostname\ntraceroute hostname\ntelnet hostname port\nnc -zv hostname port\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'How do you check listening ports?',
    answer: 'Use these commands:\n```bash\nnetstat -tulpn\nss -tulpn\nlsof -i -P -n\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'What is the difference between `ifconfig` and `ip`?',
    answer: '- `ifconfig` - Older command for network interface configuration\n- `ip` - Modern replacement with more features (part of iproute2)',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'How do you install packages?',
    answer: 'Package installation:\n```bash\n# Debian/Ubuntu\napt update\napt install package\n\n# RedHat/CentOS\nyum install package\ndnf install package\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'What is a package manager?',
    answer: 'A package manager is a tool that automates installing, updating, and removing software packages.',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'What is the difference between `apt` and `apt-get`?',
    answer: 'Both are package managers for Debian/Ubuntu. `apt` is a newer, user-friendly wrapper around `apt-get` with better output formatting.',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'What is a shell?',
    answer: 'A shell is a command-line interface that interprets user commands and executes them.',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'What are common Linux shells?',
    answer: 'Common shells:\n- Bash (Bourne Again Shell) - Most common\n- sh (Bourne Shell)\n- zsh (Z Shell)\n- fish (Friendly Interactive Shell)',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'What is a shebang line?',
    answer: 'The first line of a script that specifies the interpreter:\n```bash\n#!/bin/bash\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Linux',
    question: 'How do you make a script executable?',
    answer: 'Use `chmod +x`:\n```bash\nchmod +x script.sh\n```',
    difficulty: 'Easy'
  },

  // Medium Level (Questions 36-70)
  {
    topic: 'Linux',
    question: 'What are the different process states?',
    answer: 'Process states:\n- **Running (R)** - Currently executing\n- **Sleeping (S)** - Waiting for an event\n- **Stopped (T)** - Stopped by a signal\n- **Zombie (Z)** - Terminated but not cleaned up',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'What is a daemon process?',
    answer: 'A daemon is a background process that runs continuously, typically started at system boot, and provides services to other processes.',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'What is a zombie process and how do you handle it?',
    answer: 'A zombie process is a terminated process whose parent hasn\'t read its exit status. Usually handled by the parent process or init (PID 1) if parent dies.',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'What is the purpose of `/etc/passwd` and `/etc/shadow`?',
    answer: '- `/etc/passwd` - Contains user account information (readable by all)\n- `/etc/shadow` - Contains encrypted passwords (readable only by root)',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'Explain the difference between `grep`, `sed`, and `awk`.',
    answer: '- `grep` - Search for patterns in files\n- `sed` - Stream editor for filtering/transforming text\n- `awk` - Programming language for text processing',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'How do you use `sed` to replace text?',
    answer: 'Use `sed` substitution:\n```bash\nsed \'s/old/new/g\' file\nsed -i \'s/old/new/g\' file  # In-place editing\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'How do you use `awk` to print specific columns?',
    answer: 'Use `awk` to print columns:\n```bash\nawk \'{print $1, $3}\' file\nawk -F: \'{print $1}\' /etc/passwd\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'Explain the difference between `$*` and `$@` in bash.',
    answer: '- `$*` - All arguments as a single string\n- `$@` - All arguments as separate strings (preserves quoting)',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'What is the difference between `==` and `-eq` in bash?',
    answer: '- `==` - String comparison\n- `-eq` - Numeric comparison',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'Explain exit codes.',
    answer: 'Exit codes:\n- `0` - Success\n- `1-255` - Error codes\n- `$?` - Contains exit code of last command',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'How do you redirect output?',
    answer: 'Output redirection:\n```bash\ncommand > file      # Overwrite\ncommand >> file     # Append\ncommand 2>&1        # Redirect stderr to stdout\ncommand &> file     # Redirect both\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'What is a pipe?',
    answer: 'A pipe (`|`) sends the output of one command as input to another:\n```bash\nps aux | grep process\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'Explain systemd and its purpose.',
    answer: 'systemd is a system and service manager that:\n- Manages system services\n- Handles system initialization\n- Manages logging (journald)\n- Handles device management',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'How do you check service status?',
    answer: 'Use systemctl:\n```bash\nsystemctl status servicename\nservice servicename status  # Older systems\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'How do you start/stop/restart a service?',
    answer: 'Use systemctl:\n```bash\nsystemctl start servicename\nsystemctl stop servicename\nsystemctl restart servicename\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'How do you enable a service to start on boot?',
    answer: 'Use systemctl enable:\n```bash\nsystemctl enable servicename\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'What is `journalctl`?',
    answer: '`journalctl` is a command to view systemd journal logs.',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'How do you view logs with `journalctl`?',
    answer: 'Use journalctl:\n```bash\njournalctl -u servicename\njournalctl -f\njournalctl --since "1 hour ago"\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'What is cron?',
    answer: 'Cron is a time-based job scheduler in Unix-like systems.',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'Explain cron and crontab.',
    answer: '- `cron` - Time-based job scheduler\n- `crontab` - Command to edit cron jobs\n- Format: `minute hour day month weekday command`',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'How do you edit crontab?',
    answer: 'Use crontab commands:\n```bash\ncrontab -e  # Edit\ncrontab -l  # List\ncrontab -r  # Remove\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'What is SELinux?',
    answer: 'Security-Enhanced Linux - A security module that provides access control security policies.',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'How do you check SELinux status?',
    answer: 'Use these commands:\n```bash\ngetenforce\nsestatus\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'What is AppArmor?',
    answer: 'AppArmor is a Linux security module that restricts programs\' capabilities with per-program profiles.',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'How do you check disk I/O?',
    answer: 'Use these commands:\n```bash\niostat\niotop\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'How do you monitor system resources?',
    answer: 'Use these commands:\n```bash\ntop            # Real-time process monitor\nhtop           # Enhanced top\nfree -h        # Memory usage\niostat         # I/O statistics\nvmstat         # Virtual memory statistics\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'What is `nice` and `renice`?',
    answer: '- `nice` - Run command with modified priority\n- `renice` - Change priority of running process',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'How do you run a process in the background?',
    answer: 'Use `&` or `nohup`:\n```bash\ncommand &\nnohup command &\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'What is the difference between `&` and `nohup`?',
    answer: '- `&` - Runs in background, but process may be killed when terminal closes\n- `nohup` - Runs immune to hangups, output goes to nohup.out',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'How do you compress files?',
    answer: 'Use these commands:\n```bash\ntar -czf archive.tar.gz files/\nzip archive.zip files/\ngzip file\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'How do you extract archives?',
    answer: 'Use these commands:\n```bash\ntar -xzf archive.tar.gz\nunzip archive.zip\ngunzip file.gz\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'What is the difference between `tar` and `zip`?',
    answer: '- `tar` - Archives files (often used with compression)\n- `zip` - Archives and compresses in one step',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'How do you find which package provides a file?',
    answer: 'Use these commands:\n```bash\napt-file search filename    # Debian/Ubuntu\nyum provides filename       # RedHat/CentOS\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'How do you update packages?',
    answer: 'Package updates:\n```bash\n# Debian/Ubuntu\napt update\napt upgrade\n\n# RedHat/CentOS\nyum update\ndnf update\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Linux',
    question: 'What is `rsync`?',
    answer: '`rsync` is a utility for synchronizing files and directories, useful for backups and mirroring.',
    difficulty: 'Medium'
  },

  // High/Advanced Level (Questions 71-100)
  {
    topic: 'Linux',
    question: 'Explain Linux boot process.',
    answer: 'Boot process:\n1. BIOS/UEFI initialization\n2. Bootloader (GRUB) loads\n3. Kernel initialization\n4. Init process (systemd) starts\n5. Runlevel/target services start',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'What is GRUB?',
    answer: 'GRUB (Grand Unified Bootloader) is a bootloader that loads the Linux kernel.',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'What is the difference between BIOS and UEFI?',
    answer: '- **BIOS**: Legacy firmware, MBR partitioning\n- **UEFI**: Modern firmware, GPT partitioning, faster boot',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'Explain Linux kernel modules.',
    answer: 'Kernel modules are pieces of code that can be loaded and unloaded into the kernel on demand.',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'How do you list kernel modules?',
    answer: 'Use these commands:\n```bash\nlsmod\nmodinfo modulename\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'How do you load/unload kernel modules?',
    answer: 'Use these commands:\n```bash\nmodprobe modulename\nrmmod modulename\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'What is `/proc` filesystem?',
    answer: '`/proc` is a virtual filesystem that provides information about processes and system information.',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'What is `/sys` filesystem?',
    answer: '`/sys` is a virtual filesystem that provides information about devices, drivers, and kernel features.',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'Explain Linux namespaces.',
    answer: 'Namespaces provide isolation for processes, networking, filesystems, etc. Used by containers.',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'What is cgroups?',
    answer: 'cgroups (control groups) limit and account for resource usage (CPU, memory, I/O) of process groups.',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'How do you check cgroup information?',
    answer: 'Use these commands:\n```bash\ncat /proc/cgroups\nsystemd-cgtop\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'What is systemd unit?',
    answer: 'A systemd unit is a resource that systemd knows how to manage (service, socket, mount, etc.).',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'How do you create a systemd service?',
    answer: 'Create a `.service` file in `/etc/systemd/system/` and run `systemctl daemon-reload`.',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'What is systemd target?',
    answer: 'A target is a synchronization point for services, similar to runlevels in SysV init.',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'Explain Linux process scheduling.',
    answer: 'Linux uses Completely Fair Scheduler (CFS) to schedule processes, ensuring fair CPU time allocation.',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'What is OOM Killer?',
    answer: 'Out-of-Memory (OOM) Killer terminates processes when system runs out of memory.',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'How do you configure swap?',
    answer: 'Swap management:\n```bash\nswapon /dev/sda2\nswapoff /dev/sda2\nswapon -s  # Show swap usage\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'What is the difference between `kill -9` and `kill -15`?',
    answer: '- `kill -15` (SIGTERM) - Graceful termination (default)\n- `kill -9` (SIGKILL) - Forceful termination (cannot be caught)',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'Explain Linux file system types.',
    answer: 'Common filesystems:\n- **ext4** - Default on most Linux systems\n- **XFS** - High-performance filesystem\n- **Btrfs** - Copy-on-write filesystem\n- **ZFS** - Advanced filesystem with snapshots',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'How do you check filesystem type?',
    answer: 'Use these commands:\n```bash\ndf -T\nlsblk -f\nfile -s /dev/sda1\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'What is LVM?',
    answer: 'LVM (Logical Volume Manager) provides abstraction layer for disk management, allowing dynamic resizing.',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'How do you create an LVM volume?',
    answer: 'LVM creation:\n```bash\npvcreate /dev/sda1\nvgcreate myvg /dev/sda1\nlvcreate -L 10G -n mylv myvg\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'What is RAID?',
    answer: 'RAID (Redundant Array of Independent Disks) combines multiple disks for performance and/or redundancy.',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'Explain common RAID levels.',
    answer: 'Common RAID levels:\n- **RAID 0**: Striping (performance, no redundancy)\n- **RAID 1**: Mirroring (redundancy)\n- **RAID 5**: Striping with parity (redundancy, performance)\n- **RAID 10**: Mirroring + Striping',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'What is iptables?',
    answer: 'iptables is a firewall utility for Linux that filters network packets.',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'What is firewalld?',
    answer: 'firewalld is a dynamic firewall manager that provides a D-Bus interface for managing firewall rules.',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'What is the difference between iptables and firewalld?',
    answer: '- **iptables**: Direct rule management, static\n- **firewalld**: Zone-based, dynamic, easier management',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'Explain Linux capabilities.',
    answer: 'Capabilities divide root privileges into distinct units, allowing fine-grained permission control.',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'How do you set capabilities?',
    answer: 'Use these commands:\n```bash\nsetcap cap_net_bind_service=+ep /path/to/binary\ngetcap /path/to/binary\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Linux',
    question: 'What is strace?',
    answer: 'strace is a diagnostic tool that traces system calls and signals made by a process.',
    difficulty: 'Hard'
  }
]

