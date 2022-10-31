import { aws_apprunner, Duration, Stack, StackProps } from "aws-cdk-lib";
import * as apprunner from "@aws-cdk/aws-apprunner-alpha";
import * as assets from "aws-cdk-lib/aws-ecr-assets";
import * as route53 from "aws-cdk-lib/aws-route53";
import { Construct } from "constructs";
import * as path from "path";

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const imageAsset = new assets.DockerImageAsset(this, "route53demo", {
      directory: path.join(__dirname, "../../app/"),
    });

    const service = new apprunner.Service(this, "Route53Demo", {
      source: apprunner.Source.fromAsset({
        asset: imageAsset,
        imageConfiguration: { port: 5000 },
      }),
    });
  }
}
