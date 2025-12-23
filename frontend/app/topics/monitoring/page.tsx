import CodeBlock from '@/components/CodeBlock'
import BackButton from '@/components/BackButton'

export default function MonitoringPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      <h1 className="text-4xl font-bold mb-6">Monitoring & Observability</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Prometheus</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Prometheus Configuration</h3>
          <CodeBlock
            code={`global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
  
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']
  
  - job_name: 'app'
    static_configs:
      - targets: ['app:8080']
    metrics_path: '/metrics'`}
            language="yaml"
            title="prometheus.yml"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">PromQL Examples</h3>
          <CodeBlock
            code={`# CPU usage
100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)

# Memory usage
node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes

# HTTP request rate
rate(http_requests_total[5m])

# Error rate
rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m])`}
            language="text"
            title="PromQL queries"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Grafana</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Grafana Dashboard JSON</h3>
          <CodeBlock
            code={`{
  "dashboard": {
    "title": "System Metrics",
    "panels": [
      {
        "title": "CPU Usage",
        "targets": [
          {
            "expr": "100 - (avg by (instance) (rate(node_cpu_seconds_total{mode=\"idle\"}[5m])) * 100)"
          }
        ]
      },
      {
        "title": "Memory Usage",
        "targets": [
          {
            "expr": "node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes"
          }
        ]
      }
    ]
  }
}`}
            language="json"
            title="Grafana dashboard example"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Docker Compose Setup</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Prometheus + Grafana Stack</h3>
          <CodeBlock
            code={`version: '3.8'

services:
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana_data:/var/lib/grafana
    depends_on:
      - prometheus

  node-exporter:
    image: prom/node-exporter:latest
    ports:
      - "9100:9100"
    command:
      - '--path.procfs=/host/proc'
      - '--path.sysfs=/host/sys'
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro

volumes:
  prometheus_data:
  grafana_data:`}
            language="yaml"
            title="docker-compose.yml"
          />
        </div>
      </section>
    </div>
  )
}

