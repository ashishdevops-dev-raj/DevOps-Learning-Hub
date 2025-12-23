// Kubernetes Interview Questions - 100 Questions
// Easy Level (1-35), Medium Level (36-70), Hard Level (71-100)

export const kubernetesQuestions = [
  // Easy Level (Questions 1-35)
  {
    topic: 'Kubernetes',
    question: 'What is Kubernetes?',
    answer: 'Kubernetes (K8s) is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications.',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'What does K8s stand for?',
    answer: 'K8s is an abbreviation for Kubernetes (K + 8 letters + s).',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'What are the main components of Kubernetes?',
    answer: 'Main components:\n- **Master Node**: API Server, etcd, Controller Manager, Scheduler\n- **Worker Node**: Kubelet, Kube-proxy, Container Runtime\n- **Add-ons**: DNS, Dashboard, Monitoring',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a Pod?',
    answer: 'A Pod is the smallest deployable unit in Kubernetes. It contains one or more containers that share storage, network, and specifications.',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a Node?',
    answer: 'A Node is a worker machine in Kubernetes. Can be a physical or virtual machine. Each node runs pods.',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a Cluster?',
    answer: 'A cluster is a set of nodes (masters and workers) that run containerized applications managed by Kubernetes.',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you check cluster information?',
    answer: 'Use these commands:\n```bash\nkubectl cluster-info\nkubectl get nodes\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a Namespace?',
    answer: 'A Namespace provides logical separation of resources in a cluster. Resources are scoped to namespaces.',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you create a namespace?',
    answer: 'Use `kubectl create namespace`:\n```bash\nkubectl create namespace <name>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'What are default namespaces?',
    answer: 'Default namespaces:\n- `default`: Default namespace\n- `kube-system`: System components\n- `kube-public`: Publicly accessible data\n- `kube-node-lease`: Node heartbeat',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you list pods?',
    answer: 'Use `kubectl get pods`:\n```bash\nkubectl get pods\nkubectl get pods -A  # All namespaces\nkubectl get pods -n <namespace>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you describe a pod?',
    answer: 'Use `kubectl describe`:\n```bash\nkubectl describe pod <pod-name>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you view pod logs?',
    answer: 'Use `kubectl logs`:\n```bash\nkubectl logs <pod-name>\nkubectl logs -f <pod-name>  # Follow logs\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you execute a command in a pod?',
    answer: 'Use `kubectl exec`:\n```bash\nkubectl exec -it <pod-name> -- /bin/sh\nkubectl exec <pod-name> -- <command>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a Deployment?',
    answer: 'A Deployment provides declarative updates for Pods and ReplicaSets. It manages desired state, rolling updates, and rollbacks.',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you create a deployment?',
    answer: 'Use these commands:\n```bash\nkubectl create deployment <name> --image=<image>\nkubectl apply -f deployment.yaml\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you list deployments?',
    answer: 'Use `kubectl get deployments`:\n```bash\nkubectl get deployments\nkubectl get deploy  # Short form\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you scale a deployment?',
    answer: 'Use `kubectl scale`:\n```bash\nkubectl scale deployment/<name> --replicas=5\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a Service?',
    answer: 'A Service provides stable network access to a set of Pods. It abstracts pod IPs and provides load balancing.',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'What are the types of Services?',
    answer: 'Service types:\n- **ClusterIP**: Internal cluster IP (default)\n- **NodePort**: Exposes service on each node\'s IP at a static port\n- **LoadBalancer**: Exposes service externally using cloud provider\'s load balancer\n- **ExternalName**: Maps service to external DNS name',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you create a service?',
    answer: 'Use these commands:\n```bash\nkubectl expose deployment <name> --port=80 --type=LoadBalancer\nkubectl apply -f service.yaml\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you list services?',
    answer: 'Use `kubectl get services`:\n```bash\nkubectl get services\nkubectl get svc  # Short form\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a ConfigMap?',
    answer: 'A ConfigMap stores non-confidential configuration data as key-value pairs. Can be mounted as volumes or environment variables.',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you create a ConfigMap?',
    answer: 'Use these commands:\n```bash\nkubectl create configmap <name> --from-literal=key=value\nkubectl create configmap <name> --from-file=file.txt\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a Secret?',
    answer: 'A Secret stores sensitive data (passwords, tokens, keys). Similar to ConfigMap but base64 encoded.',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you create a Secret?',
    answer: 'Use these commands:\n```bash\nkubectl create secret generic <name> --from-literal=key=value\nkubectl create secret generic <name> --from-file=./file\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'What is the difference between ConfigMap and Secret?',
    answer: '- **ConfigMap**: Plain text configuration\n- **Secret**: Base64 encoded (not encrypted), for sensitive data',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you apply a YAML file?',
    answer: 'Use `kubectl apply`:\n```bash\nkubectl apply -f file.yaml\nkubectl apply -f directory/\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you delete a resource?',
    answer: 'Use `kubectl delete`:\n```bash\nkubectl delete pod <pod-name>\nkubectl delete -f file.yaml\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you edit a resource?',
    answer: 'Use `kubectl edit`:\n```bash\nkubectl edit deployment <name>\nkubectl edit pod <pod-name>\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'What is kubectl?',
    answer: 'kubectl is the command-line tool for interacting with Kubernetes clusters.',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you check kubectl version?',
    answer: 'Use `kubectl version`:\n```bash\nkubectl version\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you check cluster connectivity?',
    answer: 'Use these commands:\n```bash\nkubectl cluster-info\nkubectl get nodes\n```',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a label?',
    answer: 'A label is a key-value pair attached to objects for identification and selection.',
    difficulty: 'Easy'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you filter resources by label?',
    answer: 'Use label selectors:\n```bash\nkubectl get pods -l app=myapp\nkubectl get pods --selector=app=myapp\n```',
    difficulty: 'Easy'
  },

  // Medium Level (Questions 36-70)
  {
    topic: 'Kubernetes',
    question: 'Explain Kubernetes master components.',
    answer: 'Master components:\n- **API Server**: Entry point for all REST commands\n- **etcd**: Distributed key-value store (cluster state)\n- **Controller Manager**: Runs controllers (replication, endpoints, etc.)\n- **Scheduler**: Assigns pods to nodes',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'Explain Kubernetes worker node components.',
    answer: 'Worker node components:\n- **Kubelet**: Agent that communicates with master, manages pods\n- **Kube-proxy**: Network proxy maintaining network rules\n- **Container Runtime**: Runs containers (Docker, containerd, etc.)',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is etcd?',
    answer: 'etcd is a distributed, consistent key-value store used by Kubernetes to store cluster state and configuration.',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is the API Server?',
    answer: 'The API Server is the front-end for Kubernetes control plane. It validates and processes REST requests, updates etcd, and communicates with other components.',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is the Scheduler?',
    answer: 'The Scheduler assigns pods to nodes based on resource requirements, constraints, and policies.',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is the Controller Manager?',
    answer: 'The Controller Manager runs controllers that regulate the state of the cluster (replication, endpoints, etc.).',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'Can a Pod have multiple containers?',
    answer: 'Yes, a Pod can have multiple containers that share:\n- Network namespace (same IP)\n- Storage volumes\n- IPC namespace',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is the difference between a Pod and a Container?',
    answer: '- **Container**: Runtime instance of an image\n- **Pod**: Kubernetes abstraction that wraps one or more containers',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a sidecar container?',
    answer: 'A sidecar container runs alongside the main container in a Pod, providing supporting functionality (logging, monitoring, etc.).',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What are init containers?',
    answer: 'Init containers run before the main containers in a Pod. They\'re used for setup tasks and must complete successfully before main containers start.',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a ReplicaSet?',
    answer: 'A ReplicaSet ensures a specified number of pod replicas are running. Deployments use ReplicaSets for pod management.',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is the difference between Deployment and ReplicaSet?',
    answer: '- **ReplicaSet**: Low-level controller ensuring pod replicas\n- **Deployment**: Higher-level abstraction managing ReplicaSets with rolling updates',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'Explain rolling update strategy.',
    answer: 'Rolling update gradually replaces old pods with new ones, ensuring zero downtime. Controlled by `maxSurge` and `maxUnavailable`.',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you rollback a deployment?',
    answer: 'Use `kubectl rollout undo`:\n```bash\nkubectl rollout undo deployment/<name>\nkubectl rollout undo deployment/<name> --to-revision=2\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you check rollout status?',
    answer: 'Use these commands:\n```bash\nkubectl rollout status deployment/<name>\nkubectl rollout history deployment/<name>\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is the difference between ClusterIP and NodePort?',
    answer: '- **ClusterIP**: Only accessible within cluster\n- **NodePort**: Accessible from outside cluster via node IP and port',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a Headless Service?',
    answer: 'A Headless Service (clusterIP: None) doesn\'t provide load balancing. Returns individual pod IPs, useful for StatefulSets.',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'How do Pods communicate?',
    answer: 'Pods can communicate using:\n- Pod IP addresses\n- Service names (DNS)\n- Environment variables',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is kube-proxy?',
    answer: 'kube-proxy maintains network rules on nodes, enabling service abstraction and load balancing.',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is CNI?',
    answer: 'Container Network Interface (CNI) is a specification for network plugins in Kubernetes (Calico, Flannel, Weave, etc.).',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a Volume?',
    answer: 'A Volume provides persistent storage for Pods. Data persists across container restarts.',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What are the types of Volumes?',
    answer: 'Volume types:\n- **emptyDir**: Temporary storage (lost when pod deleted)\n- **hostPath**: Node\'s filesystem\n- **PersistentVolumeClaim**: Persistent storage\n- **ConfigMap/Secret**: Mounted as volumes',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a PersistentVolume (PV)?',
    answer: 'A PV is a cluster-wide storage resource provisioned by an administrator or dynamically.',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a PersistentVolumeClaim (PVC)?',
    answer: 'A PVC is a request for storage by a user. Binds to a PV.',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you create a PVC?',
    answer: 'Use `kubectl apply`:\n```bash\nkubectl apply -f pvc.yaml\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a StatefulSet?',
    answer: 'A StatefulSet manages stateful applications. Provides:\n- Stable network identities\n- Ordered deployment/scaling\n- Persistent storage',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a DaemonSet?',
    answer: 'A DaemonSet ensures all (or specific) nodes run a copy of a Pod. Used for node-level services (logging, monitoring).',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'When to use StatefulSet vs Deployment?',
    answer: '- **Deployment**: Stateless applications\n- **StatefulSet**: Stateful applications requiring stable identities, ordered deployment, persistent storage',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a Job?',
    answer: 'A Job creates one or more Pods and ensures they complete successfully. Used for batch/one-time tasks.',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a CronJob?',
    answer: 'A CronJob runs Jobs on a time-based schedule (cron syntax).',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What are resource requests and limits?',
    answer: '- **Requests**: Guaranteed resources (scheduling)\n- **Limits**: Maximum resources (throttling)',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you set resource limits?',
    answer: 'Example YAML:\n```yaml\nresources:\n  requests:\n    memory: "256Mi"\n    cpu: "250m"\n  limits:\n    memory: "512Mi"\n    cpu: "500m"\n```',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a ResourceQuota?',
    answer: 'ResourceQuota limits resource consumption per namespace (CPU, memory, pods, etc.).',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a LimitRange?',
    answer: 'LimitRange sets default/min/max resource constraints for Pods in a namespace.',
    difficulty: 'Medium'
  },
  {
    topic: 'Kubernetes',
    question: 'What are liveness and readiness probes?',
    answer: '- **Liveness Probe**: Determines if container is running (restarts if fails)\n- **Readiness Probe**: Determines if container is ready to serve traffic',
    difficulty: 'Medium'
  },

  // High/Advanced Level (Questions 71-100)
  {
    topic: 'Kubernetes',
    question: 'What are the types of probes?',
    answer: 'Probe types:\n- **HTTP**: HTTP GET request\n- **TCP**: TCP connection check\n- **Exec**: Execute command',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you configure probes?',
    answer: 'Example YAML:\n```yaml\nlivenessProbe:\n  httpGet:\n    path: /health\n    port: 8080\n  initialDelaySeconds: 30\n  periodSeconds: 10\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is RBAC?',
    answer: 'Role-Based Access Control (RBAC) controls access to Kubernetes resources based on roles and bindings.',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a ServiceAccount?',
    answer: 'A ServiceAccount provides identity for Pods. Used for API access and authentication.',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you create a ServiceAccount?',
    answer: 'Use `kubectl create serviceaccount`:\n```bash\nkubectl create serviceaccount <name>\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a NetworkPolicy?',
    answer: 'NetworkPolicy controls network traffic between Pods (ingress/egress rules).',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you create a NetworkPolicy?',
    answer: 'Use `kubectl apply`:\n```bash\nkubectl apply -f networkpolicy.yaml\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is HPA (Horizontal Pod Autoscaler)?',
    answer: 'HPA automatically scales pods based on CPU/memory usage or custom metrics.',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you create an HPA?',
    answer: 'Use `kubectl autoscale`:\n```bash\nkubectl autoscale deployment <name> --min=2 --max=10 --cpu-percent=80\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is VPA (Vertical Pod Autoscaler)?',
    answer: 'VPA automatically adjusts pod resource requests/limits based on usage.',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is Cluster Autoscaler?',
    answer: 'Cluster Autoscaler automatically adjusts the number of nodes in a cluster based on demand.',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you update a deployment?',
    answer: 'Use these commands:\n```bash\nkubectl set image deployment/<name> <container>=<image>:<tag>\nkubectl rollout status deployment/<name>\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a Pod Disruption Budget (PDB)?',
    answer: 'PDB limits the number of pods that can be voluntarily disrupted during maintenance.',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you create a PDB?',
    answer: 'Use `kubectl apply`:\n```bash\nkubectl apply -f pdb.yaml\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a Custom Resource Definition (CRD)?',
    answer: 'CRD allows extending Kubernetes API with custom resources.',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is an Operator?',
    answer: 'An Operator is a method of packaging, deploying, and managing a Kubernetes application using CRDs.',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is Helm?',
    answer: 'Helm is a package manager for Kubernetes that simplifies application deployment.',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you install Helm chart?',
    answer: 'Use `helm install`:\n```bash\nhelm install <name> <chart>\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is Ingress?',
    answer: 'Ingress exposes HTTP/HTTPS routes from outside the cluster to services within the cluster.',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you create an Ingress?',
    answer: 'Use `kubectl apply`:\n```bash\nkubectl apply -f ingress.yaml\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is an Ingress Controller?',
    answer: 'An Ingress Controller is a reverse proxy that implements Ingress rules (e.g., NGINX, Traefik).',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a Pod Security Policy (PSP)?',
    answer: 'PSP defines security conditions that pods must meet to be accepted into the cluster (deprecated in favor of Pod Security Standards).',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is Pod Security Standards?',
    answer: 'Pod Security Standards define security policies for pods (restricted, baseline, privileged).',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is etcd backup?',
    answer: 'etcd backup is crucial for disaster recovery. Backup etcd data regularly.',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you backup etcd?',
    answer: 'Use etcdctl:\n```bash\nETCDCTL_API=3 etcdctl snapshot save snapshot.db\n```',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is Kubernetes API versioning?',
    answer: 'Kubernetes API uses versioning (v1, v1beta1, etc.) to manage API evolution.',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is a Custom Resource (CR)?',
    answer: 'A Custom Resource is an extension of the Kubernetes API using CRDs.',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What is Admission Controller?',
    answer: 'Admission Controllers intercept requests to the API server before object persistence, enabling validation and mutation.',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'What are Kubernetes best practices?',
    answer: 'Best practices:\n- Use Deployments instead of Pods\n- Set resource requests/limits\n- Use namespaces for organization\n- Implement health checks\n- Use ConfigMaps/Secrets for configuration\n- Use labels and selectors effectively\n- Implement RBAC\n- Use readiness/liveness probes\n- Avoid using `latest` tag\n- Use Horizontal Pod Autoscaler',
    difficulty: 'Hard'
  },
  {
    topic: 'Kubernetes',
    question: 'How do you debug a Pod that\'s not starting?',
    answer: 'Debugging commands:\n```bash\nkubectl describe pod <pod-name>\nkubectl logs <pod-name>\nkubectl get events\nkubectl exec -it <pod-name> -- /bin/sh\nkubectl get events --field-selector involvedObject.name=<pod-name>\n```',
    difficulty: 'Hard'
  }
]

