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

- for connecting on premise to cloud
- doesn't support access from multiple locations simultaneously
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
- **HDD**
  - large, sequential operations
  - can't be used as boot volume
  - streaming data workloads
  - low cost
  - mostly for throughput
- **SSD**
  - small, random operations
  - can be used as boot volume
  - moderate / high cost
  - for IOPS

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
- Can set alarms to perform actions such as invoking actions to start/stop EC2 instances
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
- **DynamoDB stream** is an ordered flow of information that changes to items in a DDB table

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
- highly available
- managed for you by aws
- charged hourly

## Internet gateway

- Allows connection from the internet to the VPC
- horizontally scaled, redundant, highly available

## AWS direct connect

- establish dedicated network connection from premise to AWS
- for high throughput workloads
- more consistent than internet-based connections
- not for VPC's

## Egress-only internet gateway

- allows only IPV6 internet connection from VPC to internet
- denies internet traffic initiating ipv6 connection with VPC

## AWS DataSync

- Simple way to move large amounts of data from on-premises storage and S3, EFS, or FSx
- Used for migrating data (**not databases**)

## AWS global accelerator

- provides static ip address that act as a fixed entry point to your application endpoint
- single/multiple AWS regions such as ALB, NLB, or EC2 instances

## Lambda

- Environment variables are encrypted at rest (after deployment)
- **Canary** deployment ensures deployments are shifted in increments

## EC2

- When doing maintenance, put EC2 on **standby** state (will still be charged)
- **InsufficientInstanceCapacity** when AWS does not have enough on-demand instances available
- **InstanceLimitExceeded** when limit on number of instances launched in a region is met
- Can use **launch templates** to store settings such as AMI ID, instance type, key pairs, and security groups
- **auto scaling**
  - use **launch configurations** to specify what AMI to launch
    - must create a new launch config when making changes to AMI
  - Performs rebalancing when number of instances accross AZ's are not balanced
  - Can send an SNS email
- **Dedicated instance**: instance that runs in a VPC for a single customer
- **AWS Opswork**
  - provides automatic configuration of servers through chef and puppet
- **AWS runcommand**
  - allows ad-hoc commands to be run across EC2 instances
- **AWS userdata**
  - allows setup scripts to be ran when EC2 instance first launches
- **AWS codedeploy**
  - allows automatic software deployments to EC2, lambda, or servers
- **instance store** volumes can only be attached when instance is first launched

## Endpoints

- **Gateway endpoint"**
  - gateway that is target for a specific route
  - Amazon S3, DynamoDB
  - VPC endpoint policies
- **Interface endpoint**
  - elastic network interface with private endpoints
  - APIG, CloudFormation, cloudwatch
  - Security groups
  - uses privatelink

## VPC

- **Security groups** act as virtual firewalls for an instance
  - Only has allow rules
  - stateful
  - evaluates all rules
  - default of deny all inbound, allow all outbound
- **Network ACLs** act as virtual firewalls within a subnet
  - Can have allow/deny rules
  - stateless
  - process rules in order
  - default of allow all inbound, allow all outbound
  - custom of deny all inbound, deny all outbound
- **VPC peering** allows networking connection between two VPCs
- subnets are associated with route tables when created
- must provice **security group ID** and **subnet ID** when enabling access to resources inside private VPC
- **Default VPC** will be assinged with both a public and private DNS when launched
- **Non-default VPC** will be assigned only a private DNS when launched
- **transit gateways** allows a centralized place to conenct to all VPCs
- **flow logs** is used to capture traffic information to and from network interfaces in VPC

## Elastic load balancer (ELB)

- **Application load balancer (ALB):**
  - layer 7 load balancing
  - Can enable **access logs** to get information about requester and store data in s3
  - for HTTP/HTTPS traffic
- **Network load balancer (NLB):**
  - layer 4 load balancing
  - for UDP / TCP traffic
- closes connections cleanly via **connection draining**

## Load balancing

- **Weighted routing route53**: when you want to unevenly split traffic based on route53
- **Cross zone load balancing**: when you want to evenly split traffic between all EC2 instances (if there are more instances in one AZ than the other, traffic will still be evenly split among all instances)

## EC2 networking

- **ENI**: Basic networking
- **ENA**: elastic network adapter: betwen 10gbps or 100gbps
- **EFA**: lastic fabric adapter: for HPC or OS by-pass

## AWS batch

- used for batch processing operations without need to manage servers

## AWS Elastic beanstalk

- Deploys and scales web applications and services developed in Java, .NET, python, ruby, and others.
- Deploys, load balances, auto-scales, and health monitors for you
- is a platform-as-a-service (PaaS) - means that scaling is handled for us
- different from cloudFormation in that we don't need to manage scaling ourselves

## AWS step functions

- Cordinates workflows to sequence lambda functions and multiple AWS services into business-critical applications

## AWS config

- assess and evaluate configurations of AWS resources

## RDS

- Snapshot encryption is only available if the database itself is encrypted or the encrypt database option is selected when first created
- ACID compliant

## AWS EMR

- process vast amounts of data
- uses hadoop
- on demand
- elasticity is important
- can access ec2 instances that were created by EMR
- **Hive** uses SQL queries to interact with data

## AWS kinesis

- **Kinesis data streams**: collect log events in real time
- **Kinesis data firehose**: reliably load data into datalakes

## SQS

- Queue for processing information or decoupling stacks
- defaults with **short polling** so only samples a subset of servers to find messages
- **long polling** will query all servers for messages until timeout expires

## Misc

- **AWS Macie:** ML powered security service that helps prevent data loss in S3
- **AWS directory service AD connector:** easy integration with microsoft AD
- **AWS shield:** DDOS protection at no additional cost
- **AWS x-ray:** helps developers analyze and debug distributed applications built using the microservice architecture
- **AWS SWF:** able to coordinate work across distributed application components
- **Decoupled architecture** requres **SQS** and **SWF**

