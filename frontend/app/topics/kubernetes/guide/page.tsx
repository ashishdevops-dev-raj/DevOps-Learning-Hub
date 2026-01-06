'use client'

import CodeBlock from '@/components/CodeBlock'
import BackButton from '@/components/BackButton'
import Link from 'next/link'

export default function KubernetesGuidePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      <h1 className="text-4xl font-bold mb-6">📚 Kubernetes Complete Guide</h1>
      
      <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 mb-6">
        <p className="text-gray-700">
          <strong>Master Kubernetes from basics to production</strong> - A comprehensive step-by-step guide for container orchestration, deployment, scaling, and managing containerized applications at scale.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">What is Kubernetes?</h2>
        <p className="text-gray-700 mb-4">
          Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It provides a framework to run distributed systems resiliently, handling scaling, failover, and deployment patterns.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">Key Benefits:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>✅ Automated container orchestration</li>
            <li>✅ Self-healing and auto-scaling</li>
            <li>✅ Service discovery and load balancing</li>
            <li>✅ Rolling updates and rollbacks</li>
            <li>✅ Multi-cloud and hybrid cloud support</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Kubernetes Workflow Overview</h2>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-6 rounded-lg mb-4">
          <div className="flex items-center justify-center space-x-4 text-lg font-semibold">
            <span>📦 Deploy</span>
            <span>→</span>
            <span>🔄 Scale</span>
            <span>→</span>
            <span>🔍 Monitor</span>
            <span>→</span>
            <span>🔄 Update</span>
            <span>→</span>
            <span>🛡️ Manage</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Using Minikube (Local Development)</h3>
          <CodeBlock
            code={`# Install Minikube
# Windows: Download from https://minikube.sigs.k8s.io/docs/start/
# Linux/Mac: 
user@machine$ curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
user@machine$ sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Start Minikube
user@machine$ minikube start

# Verify installation
user@machine$ kubectl get nodes

# Stop Minikube
user@machine$ minikube stop`}
            language="bash"
            title="Minikube Installation"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Install kubectl</h3>
          <CodeBlock
            code={`# Linux
user@machine$ curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
user@machine$ sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# Verify installation
user@machine$ kubectl version --client

# macOS
user@machine$ brew install kubectl

# Windows
# Download from https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/`}
            language="bash"
            title="kubectl Installation"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Step 1: Deploy Application</h2>
        <p className="text-gray-700 mb-4">
          Deploying an application to Kubernetes involves creating deployment manifests that define how your containers should run.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Create Deployment</h3>
          <CodeBlock
            code={`# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: nginx:latest
        ports:
        - containerPort: 80`}
            language="yaml"
            title="Deployment YAML"
          />
          <CodeBlock
            code={`# Apply deployment
user@machine$ kubectl apply -f deployment.yaml

# Create deployment from command line
user@machine$ kubectl create deployment my-app --image=nginx:latest

# Get deployments
user@machine$ kubectl get deployments

# Describe deployment
user@machine$ kubectl describe deployment my-app`}
            language="bash"
            title="Deploy Commands"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Step 2: Expose Service</h2>
        <p className="text-gray-700 mb-4">
          Services provide a stable network endpoint to access your pods. They enable load balancing and service discovery.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Create Service</h3>
          <CodeBlock
            code={`# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  selector:
    app: my-app
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: LoadBalancer`}
            language="yaml"
            title="Service YAML"
          />
          <CodeBlock
            code={`# Apply service
user@machine$ kubectl apply -f service.yaml

# Expose deployment as service
user@machine$ kubectl expose deployment my-app --type=LoadBalancer --port=80

# Get services
user@machine$ kubectl get services

# Port forward for local access
user@machine$ kubectl port-forward service/my-app-service 8080:80`}
            language="bash"
            title="Service Commands"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Step 3: Scale Application</h2>
        <p className="text-gray-700 mb-4">
          Kubernetes allows you to scale applications horizontally by increasing or decreasing the number of pod replicas.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Manual Scaling</h3>
          <CodeBlock
            code={`# Scale deployment
user@machine$ kubectl scale deployment my-app --replicas=5

# Scale using YAML
user@machine$ kubectl scale --replicas=5 -f deployment.yaml

# Check pod status
user@machine$ kubectl get pods

# View pod details
user@machine$ kubectl describe pod pod-name`}
            language="bash"
            title="Scaling Commands"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Horizontal Pod Autoscaler</h3>
          <CodeBlock
            code={`# hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
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
            title="HPA Configuration"
          />
          <CodeBlock
            code={`# Apply HPA
user@machine$ kubectl apply -f hpa.yaml

# Check HPA status
user@machine$ kubectl get hpa

# Describe HPA
user@machine$ kubectl describe hpa my-app-hpa`}
            language="bash"
            title="HPA Commands"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Step 4: Update Application</h2>
        <p className="text-gray-700 mb-4">
          Kubernetes supports rolling updates, allowing you to update applications with zero downtime.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Rolling Updates</h3>
          <CodeBlock
            code={`# Update image
user@machine$ kubectl set image deployment/my-app my-app=nginx:1.21

# Update deployment
user@machine$ kubectl apply -f deployment.yaml

# Check rollout status
user@machine$ kubectl rollout status deployment/my-app

# View rollout history
user@machine$ kubectl rollout history deployment/my-app

# Rollback to previous version
user@machine$ kubectl rollout undo deployment/my-app

# Rollback to specific revision
user@machine$ kubectl rollout undo deployment/my-app --to-revision=2`}
            language="bash"
            title="Update Commands"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Step 5: Monitor & Manage</h2>
        <p className="text-gray-700 mb-4">
          Monitoring and managing your Kubernetes cluster is essential for maintaining application health and performance.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Monitoring Commands</h3>
          <CodeBlock
            code={`# View pod logs
user@machine$ kubectl logs pod-name

# Follow logs
user@machine$ kubectl logs -f pod-name

# Logs from all pods with label
user@machine$ kubectl logs -l app=my-app

# Execute command in pod
user@machine$ kubectl exec -it pod-name -- /bin/bash

# Get resource usage
user@machine$ kubectl top nodes
user@machine$ kubectl top pods

# Describe resources
user@machine$ kubectl describe pod pod-name
user@machine$ kubectl describe node node-name`}
            language="bash"
            title="Monitoring Commands"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">1. Resource Management</h3>
          <CodeBlock
            code={`# deployment.yaml with resources
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  template:
    spec:
      containers:
      - name: my-app
        image: nginx:latest
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"`}
            language="yaml"
            title="Resource Limits"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">2. Health Checks</h3>
          <CodeBlock
            code={`# deployment.yaml with health checks
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  template:
    spec:
      containers:
      - name: my-app
        image: nginx:latest
        livenessProbe:
          httpGet:
            path: /health
            port: 80
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 80
          initialDelaySeconds: 5
          periodSeconds: 5`}
            language="yaml"
            title="Health Checks"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">3. ConfigMaps and Secrets</h3>
          <CodeBlock
            code={`# Create ConfigMap
user@machine$ kubectl create configmap my-config --from-literal=key1=value1

# Create Secret
user@machine$ kubectl create secret generic my-secret --from-literal=password=secret123

# Use in deployment
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      containers:
      - name: my-app
        env:
        - name: CONFIG_KEY
          valueFrom:
            configMapKeyRef:
              name: my-config
              key: key1
        - name: SECRET_KEY
          valueFrom:
            secretKeyRef:
              name: my-secret
              key: password`}
            language="yaml"
            title="ConfigMaps and Secrets"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Common Mistakes & Solutions</h2>
        
        <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4">
          <h3 className="text-xl font-medium mb-2">Mistake 1: Not Setting Resource Limits</h3>
          <p className="text-gray-700 mb-2"><strong>Solution:</strong></p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Always set resource requests and limits</li>
            <li>Prevents resource exhaustion</li>
            <li>Enables proper scheduling</li>
          </ul>
        </div>

        <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4">
          <h3 className="text-xl font-medium mb-2">Mistake 2: Missing Health Checks</h3>
          <p className="text-gray-700 mb-2"><strong>Solution:</strong></p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Implement liveness and readiness probes</li>
            <li>Ensures pods are healthy before receiving traffic</li>
            <li>Enables automatic restart of unhealthy pods</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Quick Reference</h2>
        <CodeBlock
          code={`# Pods
kubectl get pods                    # List pods
kubectl describe pod <name>         # Pod details
kubectl logs <pod-name>             # View logs
kubectl exec -it <pod-name> -- sh   # Execute command

# Deployments
kubectl get deployments             # List deployments
kubectl scale deployment <name> --replicas=5  # Scale
kubectl rollout status deployment/<name>      # Check status
kubectl rollout undo deployment/<name>        # Rollback

# Services
kubectl get services                # List services
kubectl expose deployment <name>   # Create service
kubectl port-forward svc/<name> 8080:80  # Port forward

# Namespaces
kubectl get namespaces              # List namespaces
kubectl create namespace <name>    # Create namespace
kubectl get all -n <namespace>      # Resources in namespace`}
          language="bash"
          title="Essential Commands"
        />
      </div>

      <div className="mt-8 pt-6 border-t">
        <Link 
          href="/topics/kubernetes"
          className="text-cyan-600 hover:text-cyan-800 font-medium"
        >
          ← Back to Kubernetes Topics
        </Link>
      </div>
    </div>
  )
}

