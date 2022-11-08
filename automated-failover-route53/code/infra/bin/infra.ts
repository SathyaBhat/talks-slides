#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { InfraStack } from "../lib/infra-stack";
import { Tags } from "aws-cdk-lib";
const app = new cdk.App();
const euWest = new InfraStack(app, "InfraStack", {
  env: {
    region: "eu-west-1",
  },
});
const apNorthEast = new InfraStack(app, "InfraStackAPNE", {
  env: {
    region: "ap-northeast-1",
  },
});

// Tags.of(euWest).add("used_for", "talks");
// Tags.of(euWest).add("event", "acd2022");
// Tags.of(euWest).add("created_by", "sathyabhat");
// Tags.of(euWest).add("generator", "CDK");
