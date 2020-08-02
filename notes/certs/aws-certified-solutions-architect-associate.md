# AWS Certified Solutions architect associate notes

## Identiy Access Management (IAM)

- Users
- Groups
- Roles
- Policies - Stored as a JSON
- IAM is universal
- New users have **NO** permissions when first created
- Always setup MFA on root account

## S3

- Object based, 0 - 5TB files
- Read after write consistency for **PUTS** of new objects (can be read right after being created)
- Overwrite **PUTS** and **DELETES** are eventual consistency (will have to wait a bit)
- Bucket names **must** be unique (global namespace)
- Uploading objects to s3 will return **HTTP 200** Code
- Control access to buckets using either **bucket ACL** or **bucket policies**
  - Bucket Policies operate control down to the bucket level
  - Access control Lists (ACL) for individual S3 objects
- Can setup access logs for S3 buckets
- Object options:
  - Key (name of object)
  - Value (sequence of bytes for object)
  - Version ID (for versioning)
  - Metadata (Data about object)

### Types of S3 Buckets

- S3 Standard.
  - 99.99% availability
  - 99.(11x 9's) durability
  - Stored redundantly across multiple devices
  - Designed to sustain loss of 2 facilities concurrently
- S3 Infrequent Access (S3-IA)
  - Data accessed less frequency
  - Rapid access when needed
  - Lower fee than S3 but charged retrieval fee
- S3 One Zone - IE
  - Lower cost option for IA
  - Don't require multiple availability zone
- S3 - Intelligent Tiering
  - Moves object around different tiers of S3 using machine learning
- S3 - Glacier
  - Low cost storage class for data archiving
  - Retrieval can be from minutes to hours
- S3 - Glacier Deep Archive
  - Lowest-cost storage system
  - Retrieval time of 12 hours is acceptable

### S3- Encryption

- Encryption in transit
  - SSL/TLS
- Encryption at rest (server side)
  - S3 Managed Keys - SSE(server side encryption)-S3
  - Managed keys - SSE-KMS
  - Server sided Encryption with Customer Provided Keys - SSE-C
  - Client side Encryption

### Versioning

- Stores all versions of an object
- Good for backup
- Cannot be disabled once enabled
- Comes with **MFA DELETE** capability (multi-factor to delete a file for additional layer of security)
- Lifecycle rules:
  - Automate transitions between tiers of storage depending on time
  - Can expire an object after some duration from creation

### Cross-region replication

- Does not replicate **DELETE** markers or deleting individual versions
- Versioning must be enabled on both source or destination
- Files in existing bucket are not replicated automatically

## CloudFront

- Is a content delivery network (CDN)
- **Edge Location**: Location where content will be cached when pulled. Seperate to AWS Region / Access Zone
  - Can be written to as well
  - Objects are cached until TTL (Time to live)
  - Can clear (invalidate) cached objects and paths, but will be charged
- **Origin**: Origin of files that the CDN will distribute (EC2 / S3 / ELB / Route 53)
- Two types of distributions: RTMP (real time messaging protocol) and Web protocol
- Can restrict access using signed URLs / Cookies

## Storage Gateway

- **File Gateway**: For flat files, stored directly on S3
- **Volume Gateway**
  - **Stored Volumes**: Entire Dataset is stored on site and is asyncrhonously backed up to S3
  - **Cached Volumes**: Only most frequency accessed data on site and entire dataset stored on S3

## Elastic Compute Cloud (EC2)

- Provides resizable compute capacity in the cloud
- Instance Types:
  1. **F** - FPGA (field-programmable gate array)
  2. **I** - IOPS (input/output operations per second)
  3. **G** - Graphics
  4. **H** - High Disk Throughput
  5. **T** - Cheap, general purpose
  6. **D** - Dense storage
  7. **R** - RAM (memory optimized)
  8. **M** - Main choice for general purpose apps
  9. **C** - Compute optimized
  10. **P** - Graphics (PCIE)
  11. **X** - Extreme memory
  12. **Z** - Extreme Memory and CPU
  13. **A** - ARM-based workloads
  14. **U** - Bare Metal
- Termination protection is turned off by default
- amazon machine image (AMI)

### Security Groups

- security rule takes effect immediately
- Inbound / Outbound rule are **stateful** (means having an inbound will have a corresponding outbound rule automatically)
- All **inbound** traffic is blocked by default
- All **outbound** traffic is allowed by default
- Can have multiple security groups for an EC2 instance
- Can have multiple EC2 instances with 1 security group
- No *deny* rules, only *allow* rules

### EBS

- Will be in the same availablity zone as the EC2 instance
- root EBS volume is deleted when EC2 instance is terminated
- Can change EBS volume type on the fly without shutting it off
- additional EBS volumes that are not the root EBS volume **will not** be automatically deleted when EC2 instance is terminated
- **Snapshots** exists on S3
  - Can create AMI's from snapshots
- **EBS Optimization**:
  - Optimizes network traffic to the EBS volume

#### Types of EBS Volumes

- General Purpose SSD (GP2)
  - For most workloads
- Povisioned IOPS SSD (IO1)
  - For databases
- Throuput Optimized HDD (ST1)
  - For big data & data warehouses
- Cold HDD (SC1)
  - For File servers
- EBS Magnetic (Standard)
  - For infrequenly accessed data

### Instance Store

- High speed storage physically attached to the EC2 instance
- Ephemeral storage
- Instance store volumes cannot be stopped. If uderlying host fails, you will lose data
- Can be rebooted
- Can't keep after EC2 instance termination like EBS

### Encryption

- Can make an encrypted root device volume by:
  1. Create a snapshot of EC2 instance
  2. Copy the created snapshot select the encrypt option
  3. Create an AMI from the snapshot
  4. launch an EC2 instance as an encrypted root device volume
- Encryption can also be configured at EC2 instance launch
- Snapshot of encrypted volumes are encrypted automatically
- Volumes restored from encrypted snapshots are encrypted automatically

### EC2 Q&A

- **Q**: How to move EC2&EBS to another region?
- **A**: Create a snapshot, then create an amazon machine image (AMI) from the snapshot, copy the AMI from one region to the other, then create a new EC2 instance with the copied AMI.

## Placement groups (EC2)

- **Cluster**: places EC2 instances inside an AZ for low latency communication usually used for high performance compute
- **Partition**: To seperate underlying hardware for groups of instances in a partition typically used by large distributed and replicated workloads
- **Spread placement group**: places EC2 instances across **distinct** underlying hardware to reduce correlated failures

## CloudWatch

- Monitors performance and metrics
- **Standard monitoring** monitors events every 5 minutes by default
- **Detailed monitoring** will have 1 minute intervals

## CloudTrail

- Audits account actions
- Increased visibility on AWS account logs (IE. who made the S3 bucket)
- For monitoring API calls as well

## Redshift

- SQL based data warehouse for analytics
- Ideal for processing large amounts of data
- No multi-AZ deployments
- Backups to s3

## Athena

- serverless query service to analyze data in S3 via SQL queries
- integrates with AWS glue

## FSx

- Fast performance of commercially available file systems
- **FSx windows file server**:
  - built on AD and SMB
  - for business applications
- **FSx luster**:
  - High performance storage

## ECS

- Fully managed container orchestration service
- **Task definition**:
  - Required to run docker containers in ECS
    - Needs to specify docker image to use with each instance in your task
    - How much CPU and memory for each task
    - The launch type
    - IAM role tasks in this task definition should use

## DynamoDB

- Scalable NoSQL database
- **Amazon DynamoDB Accelerator (DAX)**:
  - fully managed in memory cache for dynamoDB
  - highly scalable
- No read replicas (doesn't need them)

## AWS Shield

- DDOS protection
- No additional cost

## AWS Web Application Firewall (WAF)

- Blocks common attack patterns ie. SQL injections, XSS, and other custom rules
- Can be deployed in cloudfront, ALB, or EC2/APIG.

## AWS privatelink

- Private connection between VPC's, AWS services, and on-premise applications
- Connect services across different accounts and VPC's
- Can use **VPC endpoints** with privatelink to privately connect to VPC without the need for internet gateways, NAT devices, VPN connections, or AWS direct connect connections

## NAT gateway

- network addrses translation table
- enable instances inside a private subnet to connect to the internet or other AWS services
- prevents internet from initiating a connection with those instances
- charged hourly

## Internet gateway

- Allows connection from the internet to the VPC

## AWS direct connect

- establish dedicated network connection from premise to AWS
- more consistent than internet-based connections
