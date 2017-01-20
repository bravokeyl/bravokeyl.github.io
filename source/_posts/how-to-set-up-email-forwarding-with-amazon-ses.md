---
title: How to set up email forwarding with Amazon SES
schematype: TechArticle
date: 2017-01-20 12:20:50
description: In this article you will see how to set up email forwarding with Amazon SES using Amazon S3 and AWS Lambda.
categories:
- AWS
- SES
tags:
keywords: email forwarding, amazon ses, lambda
---
In this article you will see how to set up email forwarding with Amazon SES using Amazon S3 and AWS Lambda.

**What are you going to do ?**

Let's say you own a domain `bravokeyl.com` and you want to send and receive emails using b@bravokeyl.com or whatever@bravokeyl.com. To acheive this you can leverage AWS services like Amazon SES, Amazon S3 and AWS Lambda.

**Amazon SES:** It is a mail server that can both send and receive mail on behalf of your domain.

**Amazon S3:** It is storage for the Internet. It is designed to make web-scale computing easier for developers.

**AWS Lambda:** It is a compute service that lets you run code without provisioning or managing servers.

Steps involved to set up email forwarding:

- [Set up SES to recieve emails for a domain](/how-to-set-up-email-forwarding-with-amazon-ses/#Set-up-SES-to-recieve-emails-for-a-domain)
- [Store recieved emails to S3 bucket](/how-to-set-up-email-forwarding-with-amazon-ses/#Store-recieved-emails-to-S3-bucket)
- [Create a Lambda function to forward recieved email](/how-to-set-up-email-forwarding-with-amazon-ses/#Create-a-Lambda-function-to-forward-recieved-email)
<!--more -->
----
### Set up SES to recieve emails for a domain ###

Before you start recieving emails for a domain using Amazon SES, you must verify the ownership of the domain. You can do this by adding **TXT** record to the domain's DNS settings. To automatically route emails sent to your domain to Amazon SES, you need to add **MX** record to your domain settings. So sign into your AWS account and open SES console and go through this [tutorial](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-getting-started-verify.html). Once you have verified your domain and enabled DKIM settings, proceed to next step.

### Store recieved emails to S3 bucket ###

You need to have atleast one active reciept rule set to use SES as email reciever. These rules specify SES what to do when an email is recieved for your domain. So let's create one rule to store emails recieved to an S3 bucket. Fill the bucket name in the below fig. I used `ses-bravokeyl` as S3 bucket and `emails` as object prefix which is a folder I created inside the bucket.
<amp-img src="/how-to-set-up-email-forwarding-with-amazon-ses/ses-ruleset.png" width="650" height="395" alt="Amazon SES - Ruleset" layout="responsive"></amp-img>

With the S3 rule setup, whenever someone sends an email that gets stored in the S3 bucket, you can test it by sending an email to the domain email address and checking the ** emails** (Object key prefix) folder of the **ses-bravokeyl** (S3 bucket) you created. For more details check the embedded [video](https://www.youtube.com/watch?v=tEFKJeAtGqk) or the [AWS developer guide](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-getting-started-receipt-rule.html).
<br/>
<amp-youtube data-videoid="tEFKJeAtGqk" layout="responsive" width="640" height="360"></amp-youtube><br/>
### Create a Lambda function to forward recieved email ###

Now that we have successfully stored sent emails to an S3 bucket, it's time to process the email stored using AWS Lambda. To do this you need to create a lambda function and use [AWS Lambda SES Forwarder](https://github.com/arithmetric/aws-lambda-ses-forwarder) module. So go to AWS Lambda console and add [download this code](https://s3.amazonaws.com/blog.bravokeyl.com/aws-ses-forwarder.zip), unzip it open `index.js` file and change the following configuration to reflect your details then zip it and upload it to Lambda.

```
// Configure the S3 bucket and key prefix for stored raw emails, and the
// mapping of email addresses to forward from and to.
//
// Expected keys/values:
// - fromEmail: Forwarded emails will come from this verified address
// - emailBucket: S3 bucket name where SES stores emails.
// - emailKeyPrefix: S3 key name prefix where SES stores email.
//   Include the trailing slash.
// - forwardMapping: Object where the key is the email address from
//  which to forward and the value is an array of email addresses
//  to which to send the message.

var overrides = {
    config: {
      fromEmail: "no-reply@bravokeyl.com",
      subjectPrefix: "",
      emailBucket: "ses-bravokeyl",
      emailKeyPrefix: "emails/",
      forwardMapping: {
        "b@bravokeyl.com": [
          "bravokeyl@gmail.com"
        ]
      }
    }
  };

```
<br/>The critical part is when you creating lambda function create a custom role with the following policy document.

```
{
  "Version": "2012-10-17",
  "Statement": [
     {
        "Effect": "Allow",
        "Action": [
           "logs:CreateLogGroup",
           "logs:CreateLogStream",
           "logs:PutLogEvents"
        ],
        "Resource": "arn:aws:logs:*:*:*"
     },
     {
        "Effect": "Allow",
        "Action": "ses:SendRawEmail",
        "Resource": "*"
     },
     {
        "Effect": "Allow",
        "Action": [
           "s3:GetObject",
           "s3:PutObject"
        ],
        "Resource": "arn:aws:s3:::S3-BUCKET-NAME/*"
     }
  ]
}
```
<br/>That's it, now test this by sending an email to the verified address under domain.
