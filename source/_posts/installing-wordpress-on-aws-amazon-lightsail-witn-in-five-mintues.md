---
title: How to install WordPress on AWS Amazon Lightsail within in five mintues
date: 2016-12-02 18:07:19
schematype: TechArticle
categories:
- aws
- lightsail
tags:
- wordpress
- lightsail
thumbnail: /installing-wordpress-on-aws-amazon-lightsail-witn-in-five-mintues/lightsail.png
description: AWS launched Amazon Lightsail, a virtual private server service just like DigitalOcean offerings with a starting price of $5 per month. And they are marketing it as The Power of AWS, the Simplicity of a VPS which I think aptly suits, it takes all the hard work on creating an instance and setting up with correct inbound/outbound rules, creating and assigning elastic IP to an instance, setting up firewall, SSH login, taking snapshots.
---
### Amazon Lightsail

AWS launched Amazon Lightsail, a virtual private server service just like **DigitalOcean** offerings with a starting price of $5 per month. And they are marketing it as **The Power of AWS, the Simplicity of a VPS** which I think aptly suits, it takes all the hard work on creating an instance and setting up with correct inbound/outbound rules,  creating and assigning elastic IP to an instance, setting up firewall, SSH login, taking snapshots.

### Features of Amazon Lightsail

- Lightsail Virtual Private Server (VPS)
- Powerful API
- Highly available storage
- Speedy & secure networking
- Snapshots
- Access to AWS Services


So let's setup a WordPress installation on AWS Amazon Lightsail with in a matter of minutes without any technical knowledge.

Just login to [AWS console](https://console.aws.amazon.com/) and click on the services pages check for Lightsail or just go to [Lightsail home page](https://lightsail.aws.amazon.com/) after login.
<!-- more -->
<amp-img src="lightsail-1.png" width="650" height="300" alt="AWS Lighsail - Create a resource" layout="responsive"></amp-img>
We will see a screen like the above image just click on create instance then under pick your instance image make sure that **APP+OS** is selected then select **WordPress** image.
<amp-img src="pick-wordpress-image.png" width="650" height="300" alt="AWS Lighsail - Pick WordPress Image" layout="responsive"></amp-img>
---
Then choose your instance plan accordingly for a small blog which gets less traffic **$5 plan** is enough.
<amp-img src="plan-lightsail.png" width="650" height="300" alt="AWS Lighsail - Choose Instance Plan" layout="responsive"></amp-img>

Then just hit create after naming your iresource, let's say **my-wordpress-blog**, just after few seconds you see that image status will be running and you get one **public IP**, in my case it's **54.152.125.99**

<amp-img src="resource.png" width="650" height="300" alt="AWS Lighsail - Create Resource" layout="responsive"></amp-img>

That's it, we are done with installation, yay!. Just go to the url.

<amp-img src="installed.png" width="650" height="300" alt="AWS Lighsail - WordPress Installed" layout="responsive"></amp-img>
