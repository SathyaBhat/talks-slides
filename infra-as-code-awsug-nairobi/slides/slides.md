---
theme: seriph
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Infrastructure as code and Getting Started with AWS CDK
drawings:
  persist: false

layout: cover
---
<!--
Thank you to the AWS User Group - Nairobi. I've given many talks across the globe, but this is the first time I'm talking with a UG from Africa. I'm honoured to be here.
-->

# Infrastructure as code and Getting started with AWS CDK

---

# Agenda

<!-- global-top.vue -->

* About me
* Infrastructure as Code - What, Why
* Options for Infra as Code
* Deep dive into AWS CDK
* Some examples

---

# About Me

* Sathyajith Bhat
* Senior Site Reliability Engineer, Adobe
* [AWS Community Hero](https://aws.amazon.com/developer/community/heroes/sathyajith-bhat/)
* Author, [Practical Docker with Python](https://bit.ly/practical-docker-2e)
* Co-author, [The CDK Book](https://thecdkbook.com)
* Co-organizer, various community events
  * AWS UG BLR, AWS Community Day(India, South Asia), CDK Day

---

# Some notes

* Feel free to stop me at any time!
* Slides & code on GitHub
* Bonus at the end!

---

# Infrastructure as Code. What & Why?

<v-clicks>

* Define any cloud resource as code
* DRY (Don't Repeat Yourself)
* Automation
* Consistency
* Versioning

</v-clicks>

---

# Options for IaC

<v-clicks>

* Scripted
  * boto / requests 

* Declarative
  * Terraform, CloudFormation

* Imperative
  * CDK, Pulumi
  * Trophosphere

</v-clicks>

---

# AWS CDK

<v-clicks>

- Cloud Development Kit
- Define cloud resources using code
- Not a DSL, same language that you might be familiar with
- CDK Supports
  - TypeScript
  - JavaScript
  - Python
  - .net
  - Go <sup><sup>in dev preview</sup></sup>

</v-clicks>

---

# Concepts

<v-clicks>

* App
  * Describes the entire infrastructure to be built
  * Collection of stacks

* Stack
  * Collection of constructs

* Construct
  * Heart and soul of CDK
  * Represents an abstraction of CloudFormation Resources

</v-clicks>

---
clicks: 2
---

# Constructs

<div grid="~ cols-2 gap-x-4">

```ts {1-10|12-15|17-18}
// L1 construct
const bucket = new s3.CfnBucket(this, "MyCfnBucket", {
  bucketName: "MyBucket",
  corsConfiguration: {
    corsRules: [{
          allowedOrigins: ["*"],
          allowedMethods: ["GET"]
    }]
  }
});

// L2 construct 
new s3.Bucket(this, 'MyCdkBucket', {
  versioned: true
});

// L3 construct
new NotifyingBucket(this, 'MyNotifyingBucket');
```

<div>

<v-clicks fade :at="0">

- L1: Raw CFN Resources
  - Represents a CFN resource
- L2: Curated constructs
  - Created by the CDK team to create common objects
- L3: Pattern constructs
  - Collections of constructs that define applications/org patterns

</v-clicks>

</div></div>

---

# Behind the scenes

<v-clicks>

* CloudFormation is still the foundation
* Apps, Stacks, Constructs defined in programming languages
* CDK Toolkit synthesizes these to CloudFormation teamplates

</v-clicks>

---

# Behind the scenes - jsii

<v-clicks>

* [jsii](https://aws.github.io/jsii/)
* Allows code in any language to interact with JavaScript classes
* Library bindings include the original JS code

</v-clicks>


---

# Behind the scenes - jsii-rosetta

<v-clicks>

* How are the bindings generated?
* Enter [jsii-rosetta](https://github.com/aws/jsii/tree/main/packages/jsii-rosetta) 
* Transpiles code snippets from TypeScript to other jsii languages
* jsii makes CDK possible! (and The CDK Book!)

</v-clicks>

---

# Assets

<v-clicks>

* What about the files required to support/run?
* Lambda Handlers, Docker Images, User data
* Where to store these?
* Assets handles these

</v-clicks>

---

# Bootstrap

<v-clicks>

* Provisioning of initial resources required by CDK
* When to bootstrap?
  * Asssets
  * CFN Templates > 50kB
  * CDK Pipelines

</v-clicks>

---
clicks: 3
---
# Demo - Install CDK + Getting started

<div grid="~ cols-2 gap-x-4">

```ts {1|2|4|5-9}
npm install typescript
npm install aws-cdk 

npx cdk init app --language typescript

const bucket = new s3.Bucket(this, 'AwsUgNairobi', {
  bucketName: 'awsugnairobi-cdk-demo',
  versioned: true
});
```

<div>

<v-clicks fade :at="0">

* Install Typescript
* Install CDK Toolkit
* Initialize a new app
* Create a new bucket

</v-clicks>
</div>
</div>

---
clicks: 3
---
# Construct object signature

<div grid="~ cols-2 gap-x-4">

```ts {1|2|3|5-9}
const bucket = new s3.Bucket(
    this, 
    'AwsUgNairobi', 
    { 
      bucketName: 'awsugnairobi-cdk-demo',
      versioned: true
    }
  );
```

<div>
<v-clicks fade :at="0">

* create a new Bucket
* scope
* id: logical id of the bucket, used to uniquely identify 
* props

</v-clicks>
</div>
</div>

---

# Live demo/coding.. 

* [code at](https://github.com/SathyaBhat/talks-slides)

---

# What next?

* Interested in learning more? check:
  * Do the [AWS CDK Workshop](https://cdkworkshop.com/)
  * Watch Matt Martz's video course on [CDK Crash Course](https://www.youtube.com/watch?v=T-H4nJQyMig)
  * (self plug) Read [The CDK Book](https://thecdkbook.com)
* Check out the [Construct Hub](https://constructs.dev/)
* Experiment! 
* Talk about your experiments at [The CDK Day](https://www.cdkday.com/)

---

# Q&A, Links

* [GitHub repo (slides + code)](https://github.com/SathyaBhat/talks-slides)
* [AWS CDK](https://aws.amazon.com/cdk)
* [The CDK Book](https://www.thecdkbook.com/)
* [The CDK Day](https://www.cdkday.com/))
* Catch me on [Twitter](https://twitter.com/sathyabhat), [GitHub](https://github.com/sathyabhat), [LinkedIn](https://www.linkedin.com/in/sathyabhat/) - sathyabhat
