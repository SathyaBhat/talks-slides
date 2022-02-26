import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';

export class AutoScalingStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "nairobivpc", {
        maxAzs: 2,
        vpcName: 'nairobi',
        cidr: '10.0.0.0/23',
        subnetConfiguration: [
            {
                name: "public",
                subnetType: ec2.SubnetType.PUBLIC
            },
            {
                name: "nat",
                subnetType: ec2.SubnetType.PRIVATE_WITH_NAT,
            },
            {
                name: "private",
                subnetType: ec2.SubnetType.PRIVATE_ISOLATED
            }
        ],
        enableDnsHostnames: true,
        enableDnsSupport: true
    });

    const asg = new autoscaling.AutoScalingGroup(this, "nairobiasg", {
        vpc: vpc,
        instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3_AMD, ec2.InstanceSize.MEDIUM),
        machineImage: ec2.MachineImage.latestAmazonLinux()
    });
  }
}

