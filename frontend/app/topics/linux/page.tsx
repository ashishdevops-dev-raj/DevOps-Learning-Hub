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

# Case-insensitive search
grep -i "ERROR" log.txt

# Search recursively
grep -r "pattern" /path/to/dir

# Count lines matching pattern
grep -c "error" log.txt

# Find files by name
find /path -name "*.log"

# Find files modified in last 7 days
find /path -mtime -7`}
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

# Check directory size
du -sh /path/to/dir

# Check memory usage
free -h

# Check running processes
ps aux

# Check system load
uptime

# View system information
uname -a`}
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

# Find process by name
ps aux | grep nginx

# Kill process by PID
kill 1234

# Force kill
kill -9 1234

# Kill by process name
pkill nginx

# Monitor processes in real-time
top
htop`}
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
ifconfig

# Test connectivity
ping google.com

# Check open ports
netstat -tulpn
ss -tulpn

# Download file
wget https://example.com/file.zip
curl -O https://example.com/file.zip

# Test HTTP endpoint
curl -I https://example.com`}
            language="bash"
            title="Network commands"
          />
        </div>
      </section>
    </div>
  )
}

