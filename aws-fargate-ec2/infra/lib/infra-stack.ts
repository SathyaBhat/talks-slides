import * as cdk from '@aws-cdk/core';
import * as ecs from '@aws-cdk/aws-ecs'
import { DockerImageAsset } from '@aws-cdk/aws-ecr-assets';

export class InfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const dockerImage = new DockerImageAsset(this, 'Docker', {
      directory: "docker"
    })
    
    const taskDefinition = new ecs.FargateTaskDefinition(this, "taskDef", 
    {
      cpu: 256,
      memoryLimitMiB: 1024
    })

    taskDefinition.addContainer("Task", {
      image: ecs.ContainerImage.fromDockerImageAsset(dockerImage)
    })
  }
}
