#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsStack } from '../lib/aws-stack';

const app = new cdk.App();
new AwsStack(app, 'LpPortfolio', {
    env: {
        account: '028071413917',
        region: 'us-east-1'
    }
});
