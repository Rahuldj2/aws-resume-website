import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deployment from 'aws-cdk-lib/aws-s3-deployment';

export class S3DeploymentStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Replace with your existing bucket name
    const bucketName = 'rahul-aws-resume-s3';

    // Reference the existing S3 bucket
    const existingBucket = s3.Bucket.fromBucketName(this, 'ExistingBucket', bucketName);

    // Deploy the contents of the 'out' directory to the S3 bucket
    new s3Deployment.BucketDeployment(this, 'DeployFiles', {
      sources: [s3Deployment.Source.asset('../out')], // Path to your Next.js build directory
      destinationBucket: existingBucket,
      destinationKeyPrefix: '', // Optional: specify a folder prefix inside the bucket
    });

    new cdk.CfnOutput(this, 'BucketName', {
      value: existingBucket.bucketName,
    });
  }
}
