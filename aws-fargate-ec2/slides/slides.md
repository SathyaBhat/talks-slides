---
theme: seriph
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Fargate instead of EC2 Instances for one-off tasks
  Presented at JAWS Pankration 2021
drawings:
  persist: false
background: images/wallpaper.png
layout: cover
---

<!--
SS
-->

<!--
Thank you to the Japan AWS Group for running the event  They also sent a translation device I will try to use it.
-->

--- 
# Fargate as a taskrunner

---

# Agenda

<!-- global-top.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Your Name</footer>
</template>

* About me
* Problems at hand
* What is Fargate?
* Why Not Lambda
* Code 

---

# About Me

* Sathyajith Bhat
* Site Reliability Engineer, API Platform, Adobe
* AWS Community Hero
* Author:
  * [Practical Docker with Python](https://link.springer.com/book/10.1007/978-1-4842-3784-7) 
  * [The CDK Book](https://thecdkbook.com)
* Co-organizer, AWS User Group Bangalore.

---

# Problems at hand

* Operational tasks
* One-off tasks
* Random database exports, cache exports

<!--
operational tasks:

* for example, in case of databases:

* devs need to test database migrations
* database exports from VPC will need either instance in the VPC, or ssh tunneling 
*
-->

---

# Problems at hand

* Let's consider MySQL database export:

<v-clicks>

  * spin up an EC2 instance
  * Wait for an instance to be ready
  * Fumble with SSH keys
  * Fumble with mysqldump command
  * Wait for data to be exported
  * Fumble with scp

</v-clicks>

---
layout: image-right
image: images/fargate.png
---

# AWS Fargate

Advantages

<v-clicks>

* Managed Container service
* ECS mode – “Fargate launch type”
* No cluster to manage, no nodes to run
  * You still must create a “cluster” but don’t have to manage the underlying infrastructure. 
* Provide a Docker image, CPU & memory specs
* Define networking, IAM
* Launch a task

</v-clicks>

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

<!-- 

Actual definition: compute engine for Amazon ECS that allows you to run containers without having to manage servers or clusters”)

-->

---
layout: image-right
image: images/fargate.png
---

# AWS Fargate

Advantages

<v-clicks>

* BYOD(aka Bring Your Own Docker image) with support for private registries 
* Run in VPC
* Invoke when required
* Per usage billing
  * Starts from image pull, ends until the task terminates.
  * Run as task instead of service
  * Let the container exit when done
* Export logs to CloudWatch, Splunk, FireLens, fluentd
* Higher ephemeral storage space
* Persistent storage via EFS

</v-clicks>

---

# AWS Fargate 

Disadvantages

<v-clicks>

* No free tier (#AWSWishlist, anyone?)  & minimum billing is 1 minute
* Environment variable values listed on AWS Console
* Use SSM Parameter store for secrets
* No support for [EBS storage][ebs] yet, but on the roadmap
* Play [CPU/Memory][efs-combo] combo bingo

</v-clicks>

[ebs]: https://github.com/aws/containers-roadmap/issues/64
[efs-combo]: images/efs_cpu_memory_combo.jpg

---

# Why not Lambda?

<v-clicks>

* Write a Lambda function which does equivalent of mysqldump
  * Wasted time in re-engineering the equivalent of mysqldump
* Add mysqldump binary to package
  * system("mysqldump…")
  * Eh…
* Lambda Containers
  * still need to build a Lambda Container
* Problems?
  * Lambda limits to only 512 MB on /tmp
  * Lambda runtime limits(15 minutes currently, was 5 minutes earlier)

</v-clicks>

---

# Show me the code!

```ts

const dockerImage = new DockerImageAsset(this, 'Docker', {
  directory: "docker"
})

const taskDefinition = new ecs.FargateTaskDefinition(this, "taskDef", {
  cpu: 256,
  memoryLimitMiB: 1024
})

taskDefinition.addContainer("Task", {
  image: ecs.ContainerImage.fromDockerImageAsset(dockerImage)
})
```

---

# Q&A, Links

* GitHub repo (slides + code) - https://github.com/SathyaBhat/jaws-pankration-2021
* [AWS Fargate](https://aws.amazon.com/fargate/)
* [AWS CDK](https://aws.amazon.com/cdk)
* [The CDK Book](https://www.thecdkbook.com/)
* Catch me on [Twitter](https://twitter.com/sathyabhat), [GitHub](https://github.com/sathyabhat), [LinkedIn](https://www.linkedin.com/in/sathyabhat/) - sathyabhat

<!--
Here are the slide notes
-->
