import CodeBlock from '@/components/CodeBlock'
import BackButton from '@/components/BackButton'

export default function KubernetesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      <h1 className="text-4xl font-bold mb-6">Kubernetes Guide</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Kubernetes Basics</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Basic Commands</h3>
          <CodeBlock
            code={`# Get cluster information
kubectl cluster-info
kubectl cluster-info dump  # Debug info

# Get nodes
kubectl get nodes
kubectl get nodes -o wide  # More details
kubectl describe node node-name

# Get all resources
kubectl get all
kubectl get all -n namespace-name
kubectl get all --all-namespaces

# Get pods
kubectl get pods
kubectl get pods -o wide  # Show node info
kubectl get pods -w  # Watch mode
kubectl get pods --show-labels  # Show labels

# Get pods in namespace
kubectl get pods -n production
kubectl get pods -A  # All namespaces

# Describe a pod
kubectl describe pod my-pod
kubectl describe pod my-pod -n namespace-name

# View pod logs
kubectl logs my-pod
kubectl logs -f my-pod  # Follow logs
kubectl logs --tail=100 my-pod  # Last 100 lines
kubectl logs --since=1h my-pod  # Last hour
kubectl logs -l app=myapp  # All pods with label

# Execute command in pod
kubectl exec -it my-pod -- /bin/bash
kubectl exec my-pod -- ls /app
kubectl exec my-pod -c container-name -- /bin/bash  # Multi-container pod

# Port forwarding
kubectl port-forward pod/my-pod 8080:80
kubectl port-forward service/my-service 8080:80

# Copy files
kubectl cp my-pod:/path/file.txt ./file.txt
kubectl cp ./file.txt my-pod:/path/`}
            language="bash"
            title="Basic kubectl commands"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Deployment YAML</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Simple Deployment</h3>
          <CodeBlock
            code={`apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.21
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"`}
            language="yaml"
            title="deployment.yaml"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Service</h3>
          <CodeBlock
            code={`apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  type: LoadBalancer
  selector:
    app: nginx
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80`}
            language="yaml"
            title="service.yaml"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">ConfigMap</h3>
          <CodeBlock
            code={`apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  database_url: "postgresql://db:5432/mydb"
  api_key: "your-api-key"
  log_level: "info"`}
            language="yaml"
            title="configmap.yaml"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Secret</h3>
          <CodeBlock
            code={`apiVersion: v1
kind: Secret
metadata:
  name: app-secret
type: Opaque
data:
  username: YWRtaW4=  # base64 encoded
  password: cGFzc3dvcmQ=  # base64 encoded`}
            language="yaml"
            title="secret.yaml"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Deployment Operations</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Scaling & Updates</h3>
          <CodeBlock
            code={`# Scale deployment
kubectl scale deployment myapp --replicas=5

# Update deployment image
kubectl set image deployment/myapp nginx=nginx:1.21

# Rollout management
kubectl rollout status deployment/myapp
kubectl rollout history deployment/myapp
kubectl rollout undo deployment/myapp
kubectl rollout undo deployment/myapp --to-revision=2

# Restart deployment
kubectl rollout restart deployment/myapp

# Pause/Resume rollout
kubectl rollout pause deployment/myapp
kubectl rollout resume deployment/myapp`}
            language="bash"
            title="Deployment operations"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Resource Management</h3>
          <CodeBlock
            code={`# Apply YAML file
kubectl apply -f deployment.yaml
kubectl apply -f .  # All YAML files in directory
kubectl apply -f deployment.yaml --dry-run=client  # Dry run

# Delete resource
kubectl delete pod pod-name
kubectl delete deployment myapp
kubectl delete -f deployment.yaml

# Edit resource
kubectl edit deployment myapp
kubectl edit pod pod-name

# Patch resource
kubectl patch deployment myapp -p '{"spec":{"replicas":5}}'

# Label resources
kubectl label pod pod-name environment=production
kubectl label pod pod-name environment-  # Remove label

# Get resource YAML
kubectl get pod pod-name -o yaml
kubectl get deployment myapp -o yaml > deployment.yaml`}
            language="bash"
            title="Resource operations"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Namespace Management</h3>
          <CodeBlock
            code={`# Create namespace
kubectl create namespace production

# Switch context to namespace
kubectl config set-context --current --namespace=production

# Get all resources in namespace
kubectl get all -n production

# Delete all resources in namespace
kubectl delete all --all -n production

# List all namespaces
kubectl get namespaces
kubectl get ns  # Short form`}
            language="bash"
            title="Namespace operations"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advanced Configurations</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Deployment with Health Checks</h3>
          <CodeBlock
            code={`apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web
        image: myapp:latest
        ports:
        - containerPort: 8080
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 5
        env:
        - name: DATABASE_URL
          valueFrom:
            configMapKeyRef:
              name: app-config
              key: database_url
        - name: API_KEY
          valueFrom:
            secretKeyRef:
              name: app-secret
              key: api_key`}
            language="yaml"
            title="deployment-with-probes.yaml"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Horizontal Pod Autoscaler</h3>
          <CodeBlock
            code={`apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: web-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: web-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70`}
            language="yaml"
            title="hpa.yaml"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Kubernetes Architecture</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-medium mb-4">Key Components</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Control Plane:</strong> Manages the cluster (API Server, etcd, Scheduler, Controller Manager)</li>
            <li><strong>Nodes:</strong> Worker machines that run containers</li>
            <li><strong>Pods:</strong> Smallest deployable unit, contains one or more containers</li>
            <li><strong>Deployments:</strong> Manages replica sets and provides rolling updates</li>
            <li><strong>Services:</strong> Exposes pods to network traffic</li>
            <li><strong>ConfigMaps:</strong> Store configuration data</li>
            <li><strong>Secrets:</strong> Store sensitive data</li>
            <li><strong>Namespaces:</strong> Virtual clusters within a physical cluster</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

