import { Construct } from 'constructs';
import { Stack, StackProps } from 'aws-cdk-lib';
import  * as ecs from 'aws-cdk-lib/aws-ecs';
import { DockerImageAsset } from 'aws-cdk-lib/aws-ecr-assets';


export class FargateStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);

    const dockerImage = new DockerImageAsset(this, 'Docker', {
      directory: "src/"
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