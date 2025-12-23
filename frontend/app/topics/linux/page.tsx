import CodeBlock from '@/components/CodeBlock'
import BackButton from '@/components/BackButton'

export default function LinuxPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      <h1 className="text-4xl font-bold mb-6">Linux Commands</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">File Operations</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">List Files</h3>
          <CodeBlock
            code={`# List files in current directory
ls

# List all files including hidden
ls -a

# Long format with details
ls -lh

# List files recursively
ls -R`}
            language="bash"
            title="ls command examples"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Create and Remove Directories</h3>
          <CodeBlock
            code={`# Create directory
mkdir mydir

# Create nested directories
mkdir -p parent/child/grandchild

# Remove empty directory
rmdir mydir

# Remove directory and contents
rm -rf mydir`}
            language="bash"
            title="Directory operations"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">File Permissions</h3>
          <CodeBlock
            code={`# Change file permissions
chmod 755 script.sh
chmod +x script.sh

# Change ownership
chown user:group file.txt

# Change ownership recursively
chown -R user:group directory/`}
            language="bash"
            title="Permission management"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Text Processing</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">View File Contents</h3>
          <CodeBlock
            code={`# View entire file
cat file.txt

# View with line numbers
cat -n file.txt

# View first 10 lines
head -n 10 file.txt

# View last 10 lines
tail -n 10 file.txt

# Follow file updates (useful for logs)
tail -f /var/log/app.log`}
            language="bash"
            title="File viewing commands"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Search and Filter</h3>
          <CodeBlock
            code={`# Search for text in files
grep "error" log.txt
grep -i "ERROR" log.txt  # Case-insensitive
grep -v "error" log.txt  # Invert match (lines without error)
grep -C 5 "error" log.txt  # Context: 5 lines before/after

# Search recursively
grep -r "pattern" /path/to/dir
grep -r --include="*.log" "error" /path  # Only .log files
grep -r --exclude-dir=node_modules "pattern" .  # Exclude directories

# Count lines matching pattern
grep -c "error" log.txt
grep -l "error" *.txt  # List files with matches

# Find files by name
find /path -name "*.log"
find . -name "*.log" -type f
find /path -iname "*.LOG"  # Case-insensitive

# Find files by size
find /path -size +100M  # Larger than 100MB
find /path -size -1M  # Smaller than 1MB

# Find files by modification time
find /path -mtime -7  # Modified in last 7 days
find /path -mtime +30  # Modified more than 30 days ago
find /path -mmin -60  # Modified in last 60 minutes

# Find and execute
find . -name "*.log" -exec rm {} \\;  # Delete found files
find . -name "*.txt" -exec grep -l "error" {} \\;  # Find files with error`}
            language="bash"
            title="Search commands"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">System Information</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">System Status</h3>
          <CodeBlock
            code={`# Check disk usage
df -h
df -i  # Check inode usage

# Check directory size
du -sh /path/to/dir
du -h --max-depth=1 | sort -hr  # Find largest directories

# Check memory usage
free -h
free -m  # In megabytes

# Check running processes
ps aux
ps aux --sort=-%mem | head -10  # Top memory consumers
ps aux --sort=-%cpu | head -10  # Top CPU consumers

# Check system load
uptime
w  # Who is logged in and load

# View system information
uname -a
hostnamectl  # System hostname and info

# Real-time monitoring
top
htop  # Better interactive top
iotop  # I/O monitoring`}
            language="bash"
            title="System monitoring"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Process Management</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Process Control</h3>
          <CodeBlock
            code={`# Run process in background
nohup command &
command &  # Run in background
disown  # Detach from terminal

# Find process by name
ps aux | grep nginx
pgrep nginx  # Get PID by name
pidof nginx  # Get PID

# Kill process by PID
kill 1234
kill -9 1234  # Force kill (SIGKILL)
kill -15 1234  # Graceful kill (SIGTERM)

# Kill by process name
pkill nginx
killall nginx  # Kill all processes with name

# Monitor processes in real-time
top
htop  # Interactive process viewer
watch -n 1 'ps aux | grep nginx'  # Watch every second

# Jobs management
jobs  # List background jobs
fg %1  # Bring job to foreground
bg %1  # Send job to background`}
            language="bash"
            title="Process management"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Network Commands</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Network Utilities</h3>
          <CodeBlock
            code={`# Check network interfaces
ip addr show
ip link show
ifconfig
ip route show  # Routing table

# Test connectivity
ping google.com
ping -c 4 google.com  # Ping 4 times
ping6 ipv6.google.com  # IPv6 ping

# Check open ports
netstat -tulpn
ss -tulpn  # Modern replacement
lsof -i :80  # What's using port 80

# Download file
wget https://example.com/file.zip
wget -O output.zip https://example.com/file.zip
curl -O https://example.com/file.zip
curl -L -o output.zip https://example.com/file.zip  # Follow redirects

# Test HTTP endpoint
curl -I https://example.com  # Headers only
curl -v https://example.com  # Verbose
curl -X POST -d "data" https://api.example.com  # POST request

# Network troubleshooting
traceroute google.com
mtr google.com  # Network diagnostic tool
nslookup google.com
dig google.com  # DNS lookup`}
            language="bash"
            title="Network commands"
          />
        </div>
      </section>
    </div>
  )
}

