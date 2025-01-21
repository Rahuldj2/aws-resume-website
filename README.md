# Cloudfront and S3 Static hosting

![Screenshot 2025-01-21 203255](https://github.com/user-attachments/assets/9141eb7a-d42e-4e85-99a6-b0bec567f1bb)


## Steps to Host a Static Website on S3 with CloudFront
Example: https://d1sl3oemog6niy.cloudfront.net/
### 1. Configure S3 Bucket
1. **Create an S3 Bucket**:
   - Name your bucket (e.g., `my-static-site`).
   - Ensure the region is appropriate for your needs.

2. **Block All Public Access**:
   - Go to the S3 bucket settings.
   - Enable **"Block all public access"** to prevent direct access to S3 objects.

3. **Enable Static Website Hosting**:
   - Go to the **Properties** tab of the bucket.
   - Enable **Static Website Hosting** and set:
     - Index Document: `index.html`
     - Error Document: `error.html`

4. **Run Your Build Command**:
   - For a TypeScript project, run:
     ```bash
     npm run build
     ```
   - This will generate an output folder (e.g., `dist` or `out`).

5. **Upload Files to S3**:
   - Upload the generated files (e.g., from the `out` folder) to the S3 bucket.
   - Ensure that files are uploaded with the correct content types.

---

### 2. Create CloudFront Distribution
1. **Create a CloudFront Distribution**:
   - Go to the AWS Management Console > CloudFront.
   - Click **Create Distribution**.

2. **Specify the S3 Bucket as the Origin**:
   - Origin Domain: Select your S3 bucket from the dropdown.
   - Enable **Origin Access Identity (OAI)**:
     - Select "Create a new OAI".
     - Save and associate the OAI with the S3 bucket.

3. **Restrict S3 Bucket Access**:
   - CloudFront will generate a policy. Copy this policy.
   - Go to your S3 bucket > Permissions > Bucket Policy.
   - Paste the generated policy to allow CloudFront to access the bucket securely( This is an important step).

4. **Customize Cache Behavior (Optional)**:
   - Set Default Root Object: `index.html`.
   - Enable HTTPS.
---

### 3. Test the Setup
1. **Wait for CloudFront Deployment**:
   - It may take a few minutes for the CloudFront distribution to deploy.

2. **Access Your Website**:
   - Use the CloudFront URL (e.g., `https://<cloudfront-id>.cloudfront.net`) to access your website.

3. **Verify Security**:
   - Ensure S3 bucket URLs are inaccessible.
   - Confirm that the website loads only through CloudFront.

---

### Notes
- **Cache Invalidation**:
  - To update content quickly, use the **Invalidations** feature in CloudFront.
- **Custom Domain** (Optional):
  - Use Route 53 or another DNS provider to map your custom domain to the CloudFront distribution.
