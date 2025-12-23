// Monitoring Interview Questions - 100 Questions
// Easy Level (1-35), Medium Level (36-70), Hard Level (71-100)

export const monitoringQuestions = [
  // Easy Level (Questions 1-35)
  {
    topic: 'Monitoring',
    question: 'What is monitoring?',
    answer: 'Monitoring is the process of observing and tracking system behavior, performance, and health over time to ensure reliability and identify issues.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is the difference between metrics, logs, and traces?',
    answer: 'Metrics are numerical measurements over time (CPU usage, request rate). Logs are discrete events with timestamps and messages. Traces show request flow through distributed systems. Together they form the three pillars of observability.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is Prometheus?',
    answer: 'Prometheus is an open-source monitoring and alerting toolkit designed for reliability and scalability. It collects metrics from configured targets at given intervals, evaluates rule expressions, and triggers alerts.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is Grafana?',
    answer: 'Grafana is a visualization and analytics platform. It connects to Prometheus (and other data sources) to create dashboards and graphs. Prometheus stores metrics, Grafana visualizes them.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is an alert?',
    answer: 'An alert is a notification triggered when a metric meets certain conditions, indicating a problem or important event that requires attention.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is a dashboard?',
    answer: 'A dashboard is a visual representation of metrics and data, typically showing graphs, charts, and tables to help understand system performance.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is a metric?',
    answer: 'A metric is a numeric measurement of a system characteristic over time, such as CPU usage, memory consumption, or request count.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is a log?',
    answer: 'A log is a record of events that occurred in a system, typically containing timestamps, severity levels, and messages.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is a trace?',
    answer: 'A trace shows the path of a request through a distributed system, helping identify bottlenecks and understand request flow.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is observability?',
    answer: 'Observability is the ability to understand the internal state of a system by examining its outputs (metrics, logs, traces).',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is Alertmanager?',
    answer: 'Alertmanager handles alerts sent by Prometheus, including grouping, deduplication, and routing to notification channels (email, Slack, PagerDuty).',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is an exporter?',
    answer: 'An exporter is a service that exposes metrics in Prometheus format, allowing Prometheus to scrape metrics from applications that don\'t natively support Prometheus.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is PromQL?',
    answer: 'PromQL (Prometheus Query Language) is a functional query language used to select and aggregate time series data in Prometheus.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is a time series?',
    answer: 'A time series is a sequence of data points collected over time, typically consisting of a timestamp and a value.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is scraping?',
    answer: 'Scraping is the process of Prometheus collecting metrics from target endpoints at regular intervals.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is a target?',
    answer: 'A target is an endpoint that Prometheus scrapes metrics from, such as a service exposing metrics on `/metrics`.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is ELK Stack?',
    answer: 'ELK Stack consists of Elasticsearch (search engine), Logstash (log processing), and Kibana (visualization) for log management and analysis.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is Elasticsearch?',
    answer: 'Elasticsearch is a distributed search and analytics engine used for storing and searching large volumes of log data.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is Logstash?',
    answer: 'Logstash is a data processing pipeline that ingests, transforms, and sends logs to Elasticsearch.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is Kibana?',
    answer: 'Kibana is a visualization tool for Elasticsearch, allowing you to create dashboards and explore log data.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is Loki?',
    answer: 'Loki is a horizontally-scalable log aggregation system inspired by Prometheus, designed to work with Grafana.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is Jaeger?',
    answer: 'Jaeger is a distributed tracing system for monitoring and troubleshooting microservices-based applications.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is Zipkin?',
    answer: 'Zipkin is a distributed tracing system that helps gather timing data needed to troubleshoot latency problems in microservice architectures.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is APM (Application Performance Monitoring)?',
    answer: 'APM is monitoring and managing the performance and availability of software applications, tracking metrics like response time, throughput, and error rates.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is uptime monitoring?',
    answer: 'Uptime monitoring checks if services are available and responding, typically using HTTP requests or ping tests.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is a heartbeat?',
    answer: 'A heartbeat is a periodic signal sent to indicate that a system or service is alive and functioning.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is a threshold?',
    answer: 'A threshold is a value that triggers an alert when a metric crosses it, such as CPU usage exceeding 80%.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is SLO (Service Level Objective)?',
    answer: 'SLO is a target level of reliability for a service, such as "99.9% uptime" or "p95 latency < 200ms".',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is SLA (Service Level Agreement)?',
    answer: 'SLA is a contract between a service provider and customer that defines the expected level of service, including availability and performance metrics.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is SLI (Service Level Indicator)?',
    answer: 'SLI is a metric that measures the quality of service, such as request latency, error rate, or availability.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is a notification channel?',
    answer: 'A notification channel is a method for sending alerts, such as email, Slack, PagerDuty, or webhooks.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is log aggregation?',
    answer: 'Log aggregation is the process of collecting logs from multiple sources into a central location for analysis and storage.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is log parsing?',
    answer: 'Log parsing is the process of extracting structured information from unstructured log messages.',
    difficulty: 'Easy'
  },
  {
    topic: 'Monitoring',
    question: 'What is a data source?',
    answer: 'A data source is where monitoring tools retrieve data from, such as Prometheus, Elasticsearch, or cloud monitoring services.',
    difficulty: 'Easy'
  },

  // Medium Level (Questions 36-70)
  {
    topic: 'Monitoring',
    question: 'What is Prometheus and how does it work?',
    answer: 'Prometheus is a time-series database and monitoring system. It scrapes metrics from targets at configured intervals. Uses Pull model (Prometheus pulls metrics). Stores data in time-series format. PromQL is the query language. Components: Prometheus server, exporters, Alertmanager. Designed for reliability and scalability.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What are the golden signals of monitoring?',
    answer: 'Four golden signals: Latency (time to serve a request), Traffic (demand, requests per second), Errors (rate of failed requests), Saturation (how "full" the service is, resource utilization). These signals help identify if a service is healthy. Popularized by Google\'s SRE book. Focus on these before other metrics.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is the difference between blackbox and whitebox monitoring?',
    answer: 'Blackbox monitoring tests external behavior without knowledge of internals (HTTP endpoint checks, ping tests). Whitebox monitoring uses internal metrics exposed by applications (application logs, custom metrics, performance counters). Use both: blackbox for user experience, whitebox for debugging and optimization.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is a Prometheus job?',
    answer: 'A job is a collection of targets that share the same purpose, such as all instances of a service. Prometheus groups targets by job name.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is a Prometheus instance?',
    answer: 'An instance is a single target within a job, typically identified by a unique label combination.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What are Prometheus labels?',
    answer: 'Labels are key-value pairs that identify time series, allowing filtering and aggregation. Examples: `job="api"`, `instance="server1"`, `environment="prod"`.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is a Prometheus recording rule?',
    answer: 'A recording rule pre-computes frequently used or computationally expensive queries and stores the result as a new time series.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is a Prometheus alerting rule?',
    answer: 'An alerting rule defines conditions that trigger alerts when metrics meet certain criteria, sending notifications via Alertmanager.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is service discovery in Prometheus?',
    answer: 'Service discovery automatically finds and monitors targets from various sources (Kubernetes, Consul, AWS EC2) without manual configuration.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is relabeling in Prometheus?',
    answer: 'Relabeling modifies labels on metrics before ingestion, allowing you to add, remove, or transform labels based on rules.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is remote write in Prometheus?',
    answer: 'Remote write allows Prometheus to send samples to remote storage systems (like Thanos, Cortex) for long-term retention.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is Thanos?',
    answer: 'Thanos is a system that provides long-term storage and global querying for Prometheus, solving scalability and retention challenges.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is Cortex?',
    answer: 'Cortex is a horizontally scalable, highly available Prometheus implementation that provides long-term storage and multi-tenancy.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is a Grafana datasource?',
    answer: 'A datasource is a connection to a data provider (Prometheus, Elasticsearch, InfluxDB) that Grafana queries to fetch metrics and logs.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is a Grafana panel?',
    answer: 'A panel is a visualization component in a Grafana dashboard, such as a graph, table, or gauge, displaying data from a query.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is a Grafana variable?',
    answer: 'A variable is a dynamic value used in queries and panel titles, allowing dashboards to be filtered and reused across different environments.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is log retention?',
    answer: 'Log retention is the policy for how long logs are stored before being deleted or archived, balancing storage costs with compliance needs.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is log rotation?',
    answer: 'Log rotation is the process of archiving old log files and creating new ones to prevent disk space issues.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is structured logging?',
    answer: 'Structured logging uses a consistent format (typically JSON) making logs easier to parse, search, and analyze programmatically.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is log sampling?',
    answer: 'Log sampling reduces log volume by only storing a percentage of logs, useful for high-volume applications while maintaining visibility.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is distributed tracing?',
    answer: 'Distributed tracing tracks requests across multiple services in a microservices architecture, showing the complete request path and timing.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is a span?',
    answer: 'A span represents a single operation within a trace, containing timing information and metadata about the operation.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is a trace context?',
    answer: 'Trace context propagates trace information (trace ID, span ID) across service boundaries, enabling distributed tracing.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is OpenTelemetry?',
    answer: 'OpenTelemetry is an open-source observability framework providing APIs and SDKs for generating, collecting, and exporting telemetry data (metrics, logs, traces).',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is an instrumentation?',
    answer: 'Instrumentation is the process of adding code to applications to collect metrics, logs, and traces for observability.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is a histogram metric?',
    answer: 'A histogram samples observations and counts them in configurable buckets, useful for measuring request latency distributions.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is a summary metric?',
    answer: 'A summary samples observations and provides quantiles over a sliding time window, similar to histogram but with pre-calculated quantiles.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is a counter metric?',
    answer: 'A counter is a cumulative metric that only increases, representing total number of events (e.g., total requests, total errors).',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is a gauge metric?',
    answer: 'A gauge is a metric that can go up or down, representing a current value (e.g., current CPU usage, active connections).',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is alert fatigue?',
    answer: 'Alert fatigue occurs when too many alerts are generated, causing teams to ignore or miss important alerts.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is alert grouping?',
    answer: 'Alert grouping combines related alerts into a single notification, reducing noise and making it easier to identify root causes.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is alert suppression?',
    answer: 'Alert suppression prevents duplicate or related alerts from being sent, typically when a parent alert is already firing.',
    difficulty: 'Medium'
  },
  {
    topic: 'Monitoring',
    question: 'What is a runbook?',
    answer: 'A runbook is a set of procedures for responding to alerts, providing step-by-step instructions for resolving common issues.',
    difficulty: 'Medium'
  },

  // High/Advanced Level (Questions 71-100)
  {
    topic: 'Monitoring',
    question: 'What is Prometheus federation?',
    answer: 'Prometheus federation allows one Prometheus server to scrape metrics from other Prometheus servers, enabling hierarchical monitoring architectures.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is Prometheus remote storage?',
    answer: 'Remote storage allows Prometheus to send samples to external systems (Thanos, Cortex, InfluxDB) for long-term retention beyond local storage limits.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is Prometheus high availability?',
    answer: 'Prometheus HA involves running multiple Prometheus instances with the same configuration, using Alertmanager for deduplication and external storage for consistency.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is cardinality in Prometheus?',
    answer: 'Cardinality is the number of unique time series. High cardinality (too many unique label combinations) can cause performance issues and increased storage.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is a Prometheus staleness?',
    answer: 'Staleness occurs when a target stops reporting metrics. Prometheus marks series as stale after 5 minutes without new data.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is Prometheus retention?',
    answer: 'Retention is how long Prometheus stores time series data locally. Default is 15 days, but can be configured based on storage capacity.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is a Prometheus scrape interval?',
    answer: 'Scrape interval is how often Prometheus collects metrics from targets. Default is 15 seconds, but can be configured per job.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is evaluation interval in Prometheus?',
    answer: 'Evaluation interval is how often Prometheus evaluates alerting and recording rules. Default is 15 seconds.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is Prometheus external labels?',
    answer: 'External labels are added to all time series and alerts, typically identifying the Prometheus instance (e.g., cluster, region).',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is Alertmanager silences?',
    answer: 'Silences suppress alerts for a specified duration, useful for planned maintenance or when issues are being investigated.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is Alertmanager inhibition?',
    answer: 'Inhibition suppresses alerts when other alerts are firing, preventing alert storms (e.g., suppress instance alerts when cluster is down).',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is Alertmanager routing?',
    answer: 'Routing determines which notification channel receives alerts based on labels and matchers, enabling different teams to receive relevant alerts.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is Grafana alerting?',
    answer: 'Grafana alerting allows creating alerts directly in Grafana dashboards, evaluating queries and sending notifications when conditions are met.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is Grafana provisioning?',
    answer: 'Provisioning allows configuring datasources, dashboards, and alerting rules via configuration files, enabling infrastructure as code.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is log sharding?',
    answer: 'Log sharding distributes logs across multiple storage nodes based on a key (e.g., service name), improving query performance and scalability.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is log indexing?',
    answer: 'Log indexing creates searchable structures from logs, allowing fast queries. Elasticsearch uses inverted indexes for this purpose.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is log correlation?',
    answer: 'Log correlation links related log entries across services using trace IDs or request IDs, helping understand request flow.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is trace sampling?',
    answer: 'Trace sampling collects only a percentage of traces to reduce overhead and storage costs while maintaining visibility into system behavior.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is adaptive sampling?',
    answer: 'Adaptive sampling adjusts sampling rates based on error rates or latency, sampling more traces when issues are detected.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is OpenTelemetry collector?',
    answer: 'OpenTelemetry collector receives, processes, and exports telemetry data, acting as a vendor-neutral agent for observability pipelines.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is OpenTelemetry auto-instrumentation?',
    answer: 'Auto-instrumentation automatically adds observability to applications without code changes, using language-specific agents or libraries.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is RED method?',
    answer: 'RED method focuses on three key metrics: Rate (requests per second), Errors (error rate), Duration (request latency). Popular for microservices monitoring.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is USE method?',
    answer: 'USE method focuses on Utilization (percentage busy), Saturation (queue length), Errors (error count). Popular for infrastructure monitoring.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is anomaly detection?',
    answer: 'Anomaly detection identifies unusual patterns in metrics that may indicate problems, using machine learning or statistical methods.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is predictive alerting?',
    answer: 'Predictive alerting uses machine learning to predict issues before they occur, alerting based on trends rather than thresholds.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is multi-dimensional monitoring?',
    answer: 'Multi-dimensional monitoring tracks metrics across multiple dimensions (service, environment, region), enabling detailed analysis and filtering.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is metric aggregation?',
    answer: 'Metric aggregation combines multiple metric values into summaries (sum, average, min, max) at different time intervals.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is downsampling?',
    answer: 'Downsampling reduces metric resolution over time (e.g., 1-minute data for 1 day, 1-hour data for 1 month) to save storage.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is metric cardinality explosion?',
    answer: 'Cardinality explosion occurs when too many unique label combinations create excessive time series, causing performance degradation and storage issues.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is a monitoring stack?',
    answer: 'A monitoring stack combines multiple tools (Prometheus + Grafana + Alertmanager) to provide comprehensive observability for applications and infrastructure.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is observability maturity model?',
    answer: 'Observability maturity model describes stages from basic monitoring to full observability: reactive monitoring, proactive monitoring, predictive analytics, and autonomous operations.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is distributed tracing overhead?',
    answer: 'Distributed tracing overhead refers to the performance impact of collecting and processing trace data, requiring careful sampling and optimization.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What is log aggregation scalability?',
    answer: 'Log aggregation scalability involves handling increasing log volumes through sharding, indexing, and distributed storage systems.',
    difficulty: 'Hard'
  },
  {
    topic: 'Monitoring',
    question: 'What are monitoring best practices?',
    answer: 'Best practices:\n- Monitor the four golden signals (latency, traffic, errors, saturation)\n- Use both blackbox and whitebox monitoring\n- Set up proper alerting with runbooks\n- Implement log aggregation and structured logging\n- Use distributed tracing for microservices\n- Monitor SLIs and track SLOs\n- Avoid alert fatigue with proper grouping\n- Use service discovery for dynamic environments\n- Implement proper retention and downsampling\n- Monitor monitoring systems themselves\n- Use infrastructure as code for monitoring config\n- Test alerting and on-call procedures\n- Document monitoring strategy and runbooks\n- Review and tune alerts regularly\n- Use correlation between metrics, logs, and traces',
    difficulty: 'Hard'
  }
]

