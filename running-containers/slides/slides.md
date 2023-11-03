---
theme: dracula
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

# Spot check

<v-clicks>

- How many are familiar with containers?
- How many services due to think exist for running containers?

</v-clicks>

--- 

# Container 101

- Standard way to package your application's code, configurations, and dependencies
- Share the same OS as the host and run as isolated processes
- Isolation is not limited to CPU
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

# AWS Alphabet Soup

<v-clicks>

- Lightsail
- Elastic Beanstalk
- EC2
- Lambda
- App Runner
- ECS
  * EC2
  * Fargate
- EKS
  * EC2
  * Fargate

</v-clicks>

---
layout: image-right
image: https://d2908q01vomqb2.cloudfront.net/da4b9237bacccdf19c0760cab7aec4a8359010b0/2020/10/22/2020-10-22_08-01-55-1.gif
---

# Lightsail Containers

<v-clicks depth="3">

- What you get 
  * Easiest way to get started
  * Predictive pricing and linear options (0.25 - 4vCPU, 512MB RAM - 8GB RAM)
- What you lose out on:
  * No integrations with other services in AWS

</v-clicks>

---
layout: default
---

# Elastic Beanstalk

- What you get 
  * Managed platform for running your application  
  * Resource control (EC2 instace type etc)
- Why not to choose?
  * Pretty old service, not recommended by most people

---

# EC2

- What you get 
  * A blank VM
- Why not to choose?
  * maintenance overheads:
    * hardware
    * OS
    * Patching
    * orchestration

---

# Lambda

- What you get 
  *  x
- Why not to choose?
  * region

---

# ECS

- What you get 
  *  
- Why not to choose?
  * region
  
---

# Kubernetes

- What you get 
  *  
- Why not to choose?
  * region

---

# AppRunner

- What you get 
  *  
- Why not to choose?
  * region

---

# Q&A 