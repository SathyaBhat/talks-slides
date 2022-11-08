import { Stack, StackProps } from 'aws-cdk-lib';
import * as hc from '@pepperize/cdk-route53-health-check'
import { Construct } from 'constructs';


export class DnsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const regions = ['eu', 'ap']

    for (const region of regions) {
      const check = new hc.EndpointHealthCheck(this, `${region}-HC`, {
        domainName: `r53-${region}.aws.sathyabh.at`,
        healthCheckName: `${region}healthcheck`,
        searchString: 'Healthy',
        latencyGraphs: true,
        resourcePath: 'healthz',
        protocol: hc.Protocol.HTTPS
      })
    }
  }
}
