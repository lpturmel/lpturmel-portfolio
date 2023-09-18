import * as cdk from 'aws-cdk-lib';
import { HostedZone } from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dnsZone = HostedZone.fromLookup(this, 'dnsZone', {
        domainName: 'louisphilippeturmel.com'
    });

    const certificate = new cdk.aws_certificatemanager.Certificate(this, 'certificate', {
        domainName: '*.louisphilippeturmel.com',
        validation: cdk.aws_certificatemanager.CertificateValidation.fromDns(dnsZone),
    });


    const bucket = new cdk.aws_s3.Bucket(this, 'bucket', {
        bucketName: 'louisphilippeturmel.com',
        websiteIndexDocument: 'index.html',
        websiteErrorDocument: 'index.html',
        publicReadAccess: true,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ACLS,
        accessControl: cdk.aws_s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL,
        autoDeleteObjects: true,
    });

    const cdn = new cdk.aws_cloudfront.Distribution(this, 'cdn', {
        defaultBehavior: { origin: new cdk.aws_cloudfront_origins.S3Origin(bucket) },
        domainNames: ['www.louisphilippeturmel.com'],
        certificate: certificate,
        defaultRootObject: 'index.html',
        errorResponses: [
            {
                httpStatus: 404,
                responseHttpStatus: 200,
                responsePagePath: '/index.html',
                ttl: cdk.Duration.seconds(0),
            },
        ],

        priceClass: cdk.aws_cloudfront.PriceClass.PRICE_CLASS_100,
    });

    new cdk.aws_route53.ARecord(this, 'alias', {
        zone: dnsZone,
        target: cdk.aws_route53.RecordTarget.fromAlias(new cdk.aws_route53_targets.CloudFrontTarget(cdn)),
    });
    new cdk.aws_route53.CnameRecord(this, 'cname', {
        zone: dnsZone,
        domainName: cdn.domainName,
        recordName: 'www.louisphilippeturmel.com',
    });

    new cdk.aws_s3_deployment.BucketDeployment(this, 'deployWebsite', {
        sources: [cdk.aws_s3_deployment.Source.asset('../dist/')],
        destinationBucket: bucket,
        distribution: cdn,
        distributionPaths: ['/index.html'],
    });

  }
}
