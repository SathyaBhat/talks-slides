#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { DnsStack } from '../lib/dns-stack';

const app = new cdk.App();
new DnsStack(app, 'DnsStack');
