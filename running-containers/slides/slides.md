---
theme: dracula
# theme: seriph
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Running containers on AWS
drawings:
  persist: false
# defaults:
#   layout: quote

title: Running containers on AWS
---

# Running containers on AWS

---
src: ../../about.md
---

---

# Spot check

<v-clicks>

- How many are familiar with containers?
- How many services do you think exists for running containers?
- How many times have I had to correct Amazon/AWS on the service names?

</v-clicks>

--- 

# Container 101

- Standard way to package your application's code, configurations, and dependencies
- Share the same OS and kernel as the host and run as isolated processes
- Isolation is not limited to just CPU
  - Memory
  - Network
  - Filesystems


--- 

# Container 101

![][containers-vs-vm]

[containers-vs-vm]: https://www.docker.com/wp-content/uploads/2021/11/docker-containerized-and-vm-transparent-bg.png

---

# Orchestrators - what & how?

* Orchestrators automate container lifecycle
  * Provisioning and deploying containers
  * Monitoring the health of containers and hosts
  * Auto scaling containers in response to changes in application load
  * Performing load balancing and service discovery between containers
  * Managing persistent storage for containerized applications

---

# What options are there?

<v-clicks>

- Amazon Lightsail Containers
- AWS Elastic Beanstalk
- Amazon EC2
- AWS Lambda
- Amazon ECS
  * Amazon EC2
  * AWS Fargate
- Amazon EKS
  * Amazon EC2
  * AWS Fargate
- AWS AppRunner

</v-clicks>

---
layout: image-right
image: images/lightsail.svg
---

# Amazon Lightsail Containers

- What you get 
  * Easiest way to get started
  * Predictive pricing and linear options (0.25 - 4vCPU, 512MB RAM - 8GB RAM)
- What you lose out on:
  * No integrations with other services in AWS

---
layout: image-right
image: images/elasticbeanstalk.svg
---

# AWS Elastic Beanstalk

- What you get 
  * Managed platform for running your application  
  * Resource control (EC2 instace type etc)
- Why not to choose?
  * Pretty old service, not recommended by most people

---
layout: image-right
image: images/ec2.svg
---

# Amazon EC2

- What you get 
  * A blank VM
- Why not to choose?
  * maintenance overheads:
    * Hardware
    * Software
    * OS
    * Patching
    * Orchestration

---
layout: image-right
image: images/lambda.svg
---
# AWS Lambda

- What you get 
  * Managed compute runtime, billed to 1ms granularity!
    * Base images for Node, Python, Java, Go, .NET, Ruby or Amazon Linux 2-based custom runtime
  * Support for image sizes up to 10GB
- Why not to choose?
  * Workloads taking more time to process than Lambda runtime limit
  * Non-event driven workloads

---
image: images/ecs.svg
layout: image-right
---

# Amazon ECS

- Managed container *orchestration* service
   - Supports running containers on capacity providers
    * EC2
    * Fargate
- What you get
  * All the bells and whistles:
    * autoscaling, integration with load balancers, networking, logging

---
image: images/fargate.svg
layout: image-right
---

# AWS Fargate

- What do you get?
  * Serverless, pay-as-you-go compute enginer focusing on building applications, than managing servers
  * Run shortlived tasks or long running services
  * Support for stateful data via EFS 
  * Support for spot 

- Why not to choose?
  * Need EBS or GPU 

---
image: images/eks.svg
layout: image-right
---

# Amazon EKS

- What you get 
  * Managed Kubernetes service that lets you run Kubernetes based workloads
  * All the bells and whistles of k8s, minus the operational overhead of running the control plane
- Why not to choose?
  * If you're not running hundreds or thousands of containers

---
image: images/apprunner.svg
layout: image-right
---

# AWS AppRunner

- What you get 
  * Fully managed service that
    * builds images from Dockerfile/source code
  * Auto scales per incoming request
  * Fully integrated with AWS services

- Why not to choose?
  * Available in only a few regions
  * Application is not optimized for Request/Response cycles

---
layout: default
---

# Choosing your container environment

* Starting to experiment with containers?
  * Amazon Lightsail Containers
* Are they event-driven & can fit in Lambda's runtime limits?
  * AWS Lambda
* Are they optimized for request/response cycles?
  * AWS App Runner
* Do they perform background jobs?
  * AWS Fargate

---

# Choosing your container environment

* High throughput, highly concurrent applications?
  * AWS Fargate
* Run k8s-native applications, or run many thousands of containers?
  * Amazon EKS
* Want to control each and every aspect?
  * Amazon EC2

---

# Takeaways

* AWS has an offering for you, regardless your scale
* Focus on application, not infra.
  * Let AWS handle the infrastructure overheads

---

# Further reading

* [Nathan Peck](https://nathanpeck.com/) - [Choosing your container environment](https://nathanpeck.com/choosing-container-environment-on-aws-lightsail-ecs-eks-lambda-fargate/)
* [Choosing an AWS container service](https://aws.amazon.com/getting-started/decision-guides/containers-on-aws-how-to-choose/)
* Workshops:
  * [ECS Workshop](https://ecsworkshop.com/)
  * [AWS AppRunner Workshop](https://www.apprunnerworkshop.com/)

