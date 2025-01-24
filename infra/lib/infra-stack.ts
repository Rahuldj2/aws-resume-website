import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    // Explicitly specify the region in the props
    super(scope, id, {
      ...props,
      env: { account: '975050133293', region: 'us-east-2' }, // Specify region here
    });

    // Replace with your existing bucket name
    const bucketName = 'rahul-aws-resume-s3';

    // Reference the existing S3 bucket in the us-east-2 region
    const bucket = s3.Bucket.fromBucketName(this, 'ExistingBucket', bucketName);

    // Deploy the `out` folder to the S3 bucket
    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [s3deploy.Source.asset('../out')], // Path to the `out` folder relative to `infra/`
      destinationBucket: bucket,
      destinationKeyPrefix: '', // Optional: Folder inside bucket (empty means root)
    });
  }
}
