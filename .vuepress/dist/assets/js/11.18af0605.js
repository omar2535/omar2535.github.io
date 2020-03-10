(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{216:function(e,t,i){"use strict";i.r(t);var a=i(28),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"aws-certified-solutions-architect-associate-notes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#aws-certified-solutions-architect-associate-notes"}},[e._v("#")]),e._v(" AWS Certified Solutions architect associate notes")]),e._v(" "),i("h2",{attrs:{id:"identiy-access-management-iam"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#identiy-access-management-iam"}},[e._v("#")]),e._v(" Identiy Access Management (IAM)")]),e._v(" "),i("ul",[i("li",[e._v("Users")]),e._v(" "),i("li",[e._v("Groups")]),e._v(" "),i("li",[e._v("Roles")]),e._v(" "),i("li",[e._v("Policies - Stored as a JSON")]),e._v(" "),i("li",[e._v("IAM is universal")]),e._v(" "),i("li",[e._v("New users have "),i("strong",[e._v("NO")]),e._v(" permissions when first created")]),e._v(" "),i("li",[e._v("Always setup MFA on root account")])]),e._v(" "),i("h2",{attrs:{id:"s3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#s3"}},[e._v("#")]),e._v(" S3")]),e._v(" "),i("ul",[i("li",[e._v("Object based, 0 - 5TB files")]),e._v(" "),i("li",[e._v("Read after write consistency for "),i("strong",[e._v("PUTS")]),e._v(" of new objects (can be read right after being created)")]),e._v(" "),i("li",[e._v("Overwrite "),i("strong",[e._v("PUTS")]),e._v(" and "),i("strong",[e._v("DELETES")]),e._v(" are eventual consistency (will have to wait a bit)")]),e._v(" "),i("li",[e._v("Bucket names "),i("strong",[e._v("must")]),e._v(" be unique (global namespace)")]),e._v(" "),i("li",[e._v("Uploading objects to s3 will return "),i("strong",[e._v("HTTP 200")]),e._v(" Code")]),e._v(" "),i("li",[e._v("Control access to buckets using either "),i("strong",[e._v("bucket ACL")]),e._v(" or "),i("strong",[e._v("bucket policies")]),e._v(" "),i("ul",[i("li",[e._v("Bucket Policies operate control down to the bucket level")]),e._v(" "),i("li",[e._v("Access control Lists (ACL) for individual S3 objects")])])]),e._v(" "),i("li",[e._v("Can setup access logs for S3 buckets")]),e._v(" "),i("li",[e._v("Object options:\n"),i("ul",[i("li",[e._v("Key (name of object)")]),e._v(" "),i("li",[e._v("Value (sequence of bytes for object)")]),e._v(" "),i("li",[e._v("Version ID (for versioning)")]),e._v(" "),i("li",[e._v("Metadata (Data about object)")])])])]),e._v(" "),i("h3",{attrs:{id:"types-of-s3-buckets"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#types-of-s3-buckets"}},[e._v("#")]),e._v(" Types of S3 Buckets")]),e._v(" "),i("ul",[i("li",[e._v("S3 Standard.\n"),i("ul",[i("li",[e._v("99.99% availability")]),e._v(" "),i("li",[e._v("99.(11x 9's) durability")]),e._v(" "),i("li",[e._v("Stored redundantly across multiple devices")]),e._v(" "),i("li",[e._v("Designed to sustain loss of 2 facilities concurrently")])])]),e._v(" "),i("li",[e._v("S3 Infrequent Access (S3-IA)\n"),i("ul",[i("li",[e._v("Data accessed less frequency")]),e._v(" "),i("li",[e._v("Rapid access when needed")]),e._v(" "),i("li",[e._v("Lower fee than S3 but charged retrieval fee")])])]),e._v(" "),i("li",[e._v("S3 One Zone - IE\n"),i("ul",[i("li",[e._v("Lower cost option for IA")]),e._v(" "),i("li",[e._v("Don't require multiple availability zone")])])]),e._v(" "),i("li",[e._v("S3 - Intelligent Tiering\n"),i("ul",[i("li",[e._v("Moves object around different tiers of S3 using machine learning")])])]),e._v(" "),i("li",[e._v("S3 - Glacier\n"),i("ul",[i("li",[e._v("Low cost storage class for data archiving")]),e._v(" "),i("li",[e._v("Retrieval can be from minutes to hours")])])]),e._v(" "),i("li",[e._v("S3 - Glacier Deep Archive\n"),i("ul",[i("li",[e._v("Lowest-cost storage system")]),e._v(" "),i("li",[e._v("Retrieval time of 12 hours is acceptable")])])])]),e._v(" "),i("h3",{attrs:{id:"s3-encryption"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#s3-encryption"}},[e._v("#")]),e._v(" S3- Encryption")]),e._v(" "),i("ul",[i("li",[e._v("Encryption in transit\n"),i("ul",[i("li",[e._v("SSL/TLS")])])]),e._v(" "),i("li",[e._v("Encryption at rest (server side)\n"),i("ul",[i("li",[e._v("S3 Managed Keys - SSE(server side encryption)-S3")]),e._v(" "),i("li",[e._v("Managed keys - SSE-KMS")]),e._v(" "),i("li",[e._v("Server sided Encryption with Customer Provided Keys - SSE-C")]),e._v(" "),i("li",[e._v("Client side Encryption")])])])]),e._v(" "),i("h3",{attrs:{id:"versioning"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#versioning"}},[e._v("#")]),e._v(" Versioning")]),e._v(" "),i("ul",[i("li",[e._v("Stores all versions of an object")]),e._v(" "),i("li",[e._v("Good for backup")]),e._v(" "),i("li",[e._v("Cannot be disabled once enabled")]),e._v(" "),i("li",[e._v("Comes with "),i("strong",[e._v("MFA DELETE")]),e._v(" capability (multi-factor to delete a file for additional layer of security)")]),e._v(" "),i("li",[e._v("Lifecycle rules:\n"),i("ul",[i("li",[e._v("Automate transitions between tiers of storage depending on time")]),e._v(" "),i("li",[e._v("Can expire an object after some duration from creation")])])])]),e._v(" "),i("h3",{attrs:{id:"cross-region-replication"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cross-region-replication"}},[e._v("#")]),e._v(" Cross-region replication")]),e._v(" "),i("ul",[i("li",[e._v("Does not replicate "),i("strong",[e._v("DELETE")]),e._v(" markers or deleting individual versions")]),e._v(" "),i("li",[e._v("Versioning must be enabled on both source or destination")]),e._v(" "),i("li",[e._v("Files in existing bucket are not replicated automatically")])]),e._v(" "),i("h2",{attrs:{id:"cloudfront"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cloudfront"}},[e._v("#")]),e._v(" CloudFront")]),e._v(" "),i("ul",[i("li",[e._v("Is a content delivery network (CDN)")]),e._v(" "),i("li",[i("strong",[e._v("Edge Location")]),e._v(": Location where content will be cached when pulled. Seperate to AWS Region / Access Zone\n"),i("ul",[i("li",[e._v("Can be written to as well")]),e._v(" "),i("li",[e._v("Objects are cached until TTL (Time to live)")]),e._v(" "),i("li",[e._v("Can clear (invalidate) cached objects and paths, but will be charged")])])]),e._v(" "),i("li",[i("strong",[e._v("Origin")]),e._v(": Origin of files that the CDN will distribute (EC2 / S3 / ELB / Route 53)")]),e._v(" "),i("li",[e._v("Two types of distributions: RTMP (real time messaging protocol) and Web protocol")]),e._v(" "),i("li",[e._v("Can restrict access using signed URLs / Cookies")])]),e._v(" "),i("h2",{attrs:{id:"storage-gateway"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#storage-gateway"}},[e._v("#")]),e._v(" Storage Gateway")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("File Gateway")]),e._v(": For flat files, stored directly on S3")]),e._v(" "),i("li",[i("strong",[e._v("Volume Gateway")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Stored Volumes")]),e._v(": Entire Dataset is stored on site and is asyncrhonously backed up to S3")]),e._v(" "),i("li",[i("strong",[e._v("Cached Volumes")]),e._v(": Only most frequency accessed data on site and entire dataset stored on S3")])])])]),e._v(" "),i("h2",{attrs:{id:"elastic-compute-cloud-ec2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#elastic-compute-cloud-ec2"}},[e._v("#")]),e._v(" Elastic Compute Cloud (EC2)")]),e._v(" "),i("ul",[i("li",[e._v("Provides resizable compute capacity in the cloud")]),e._v(" "),i("li",[e._v("Instance Types:\n"),i("ol",[i("li",[i("strong",[e._v("F")]),e._v(" - FPGA (field-programmable gate array)")]),e._v(" "),i("li",[i("strong",[e._v("I")]),e._v(" - IOPS (input/output operations per second)")]),e._v(" "),i("li",[i("strong",[e._v("G")]),e._v(" - Graphics")]),e._v(" "),i("li",[i("strong",[e._v("H")]),e._v(" - High Disk Throughput")]),e._v(" "),i("li",[i("strong",[e._v("T")]),e._v(" - Cheap, general purpose")]),e._v(" "),i("li",[i("strong",[e._v("D")]),e._v(" - Dense storage")]),e._v(" "),i("li",[i("strong",[e._v("R")]),e._v(" - RAM (memory optimized)")]),e._v(" "),i("li",[i("strong",[e._v("M")]),e._v(" - Main choice for general purpose apps")]),e._v(" "),i("li",[i("strong",[e._v("C")]),e._v(" - Compute optimized")]),e._v(" "),i("li",[i("strong",[e._v("P")]),e._v(" - Graphics (PCIE)")]),e._v(" "),i("li",[i("strong",[e._v("X")]),e._v(" - Extreme memory")]),e._v(" "),i("li",[i("strong",[e._v("Z")]),e._v(" - Extreme Memory and CPU")]),e._v(" "),i("li",[i("strong",[e._v("A")]),e._v(" - ARM-based workloads")]),e._v(" "),i("li",[i("strong",[e._v("U")]),e._v(" - Bare Metal")])])]),e._v(" "),i("li",[e._v("Termination protection is turned off by default")]),e._v(" "),i("li",[e._v("amazon machine image (AMI)")])]),e._v(" "),i("h3",{attrs:{id:"security-groups"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#security-groups"}},[e._v("#")]),e._v(" Security Groups")]),e._v(" "),i("ul",[i("li",[e._v("security rule takes effect immediately")]),e._v(" "),i("li",[e._v("Inbound / Outbound rule are "),i("strong",[e._v("stateful")]),e._v(" (means having an inbound will have a corresponding outbound rule automatically)")]),e._v(" "),i("li",[e._v("All "),i("strong",[e._v("inbound")]),e._v(" traffic is blocked by default")]),e._v(" "),i("li",[e._v("All "),i("strong",[e._v("outbound")]),e._v(" traffic is allowed by default")]),e._v(" "),i("li",[e._v("Can have multiple security groups for an EC2 instance")]),e._v(" "),i("li",[e._v("Can have multiple EC2 instances with 1 security group")]),e._v(" "),i("li",[e._v("No "),i("em",[e._v("deny")]),e._v(" rules, only "),i("em",[e._v("allow")]),e._v(" rules")])]),e._v(" "),i("h3",{attrs:{id:"ebs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ebs"}},[e._v("#")]),e._v(" EBS")]),e._v(" "),i("ul",[i("li",[e._v("Will be in the same availablity zone as the EC2 instance")]),e._v(" "),i("li",[e._v("root EBS volume is deleted when EC2 instance is terminated")]),e._v(" "),i("li",[e._v("Can change EBS volume type on the fly without shutting it off")]),e._v(" "),i("li",[e._v("additional EBS volumes that are not the root EBS volume "),i("strong",[e._v("will not")]),e._v(" be automatically deleted when EC2 instance is terminated")]),e._v(" "),i("li",[i("strong",[e._v("Snapshots")]),e._v(" exists on S3\n"),i("ul",[i("li",[e._v("Can create AMI's from snapshots")])])])]),e._v(" "),i("h4",{attrs:{id:"types-of-ebs-volumes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#types-of-ebs-volumes"}},[e._v("#")]),e._v(" Types of EBS Volumes")]),e._v(" "),i("ul",[i("li",[e._v("General Purpose SSD (GP2)\n"),i("ul",[i("li",[e._v("For most workloads")])])]),e._v(" "),i("li",[e._v("Povisioned IOPS SSD (IO1)\n"),i("ul",[i("li",[e._v("For databases")])])]),e._v(" "),i("li",[e._v("Throuput Optimized HDD (ST1)\n"),i("ul",[i("li",[e._v("For big data & data warehouses")])])]),e._v(" "),i("li",[e._v("Cold HDD (SC1)\n"),i("ul",[i("li",[e._v("For File servers")])])]),e._v(" "),i("li",[e._v("EBS Magnetic (Standard)\n"),i("ul",[i("li",[e._v("For infrequenly accessed data")])])])]),e._v(" "),i("h3",{attrs:{id:"instance-store"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#instance-store"}},[e._v("#")]),e._v(" Instance Store")]),e._v(" "),i("ul",[i("li",[e._v("Ephemeral storage")]),e._v(" "),i("li",[e._v("Instance store volumes cannot be stopped. If uderlying host fails, you will lose data")]),e._v(" "),i("li",[e._v("Can be rebooted")]),e._v(" "),i("li",[e._v("Can't keep after EC2 instance termination like EBS")])]),e._v(" "),i("h3",{attrs:{id:"encryption"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#encryption"}},[e._v("#")]),e._v(" Encryption")]),e._v(" "),i("ul",[i("li",[e._v("Can make an encrypted root device volume by:\n"),i("ol",[i("li",[e._v("Create a snapshot of EC2 instance")]),e._v(" "),i("li",[e._v("Copy the created snapshot select the encrypt option")]),e._v(" "),i("li",[e._v("Create an AMI from the snapshot")]),e._v(" "),i("li",[e._v("launch an EC2 instance as an encrypted root device volume")])])]),e._v(" "),i("li",[e._v("Encryption can also be configured at EC2 instance launch")]),e._v(" "),i("li",[e._v("Snapshot of encrypted volumes are encrypted automatically")]),e._v(" "),i("li",[e._v("Volumes restored from encrypted snapshots are encrypted automatically")])]),e._v(" "),i("h3",{attrs:{id:"ec2-q-a"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ec2-q-a"}},[e._v("#")]),e._v(" EC2 Q&A")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Q")]),e._v(": How to move EC2&EBS to another region?")]),e._v(" "),i("li",[i("strong",[e._v("A")]),e._v(": Create a snapshot, then create an amazon machine image (AMI) from the snapshot, copy the AMI from one region to the other, then create a new EC2 instance with the copied AMI.")])]),e._v(" "),i("h3",{attrs:{id:"cloudwatch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cloudwatch"}},[e._v("#")]),e._v(" CloudWatch")]),e._v(" "),i("ul",[i("li",[e._v("Monitors performance")]),e._v(" "),i("li",[i("strong",[e._v("Standard monitoring")]),e._v(" monitors events every 5 minutes by default")]),e._v(" "),i("li",[i("strong",[e._v("Detailed monitoring")]),e._v(" will have 1 minute intervals")])]),e._v(" "),i("h3",{attrs:{id:"cloudtrail"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cloudtrail"}},[e._v("#")]),e._v(" CloudTrail")]),e._v(" "),i("ul",[i("li",[e._v("Audits account actions")]),e._v(" "),i("li",[e._v("Increased visibility on AWS account logs (IE. who made the S3 bucket)")])])])}),[],!1,null,null,null);t.default=s.exports}}]);