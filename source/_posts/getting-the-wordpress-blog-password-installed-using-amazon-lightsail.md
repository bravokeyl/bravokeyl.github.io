---
title: Getting the WordPress blog password installed using Amazon Lightsail
thumbnail: /getting-the-wordpress-blog-password-installed-using-amazon-lightsail/wp-password-lightsail.png
date: 2016-12-04 18:12:04
description: In this article I will show you how to retrieve default password created by Lightsail while installing WordPress using the Bitnami pre-configured image with screenshots.
categories: aws, wordpress
tags: lightsail, wordpress
keywords: lightsail, wordpress, login,  change password
---
In the previous [article](/installing-wordpress-on-aws-amazon-lightsail-witn-in-five-mintues/), I showed you the steps to install [WordPress](/famous-5-minute-wordpress-installation/) on Amazon Lightsail. After installing WordPress we need to login into administration area and change the **`default password`** or entirely delete the **`default user`** and create a new user, in this article I will show you how we can login into WordPress and do that.

The WordPress image or the other images that are available on Amazon Lightsail while creating an instance are basically **Bitnami** powered apps. Bitnami makes pre-configured, ready to run image for running WordPress on Lightsail.

<!-- more -->

Password is stored on the image and we can retrieve it by connecting to our instance using SSH client. There are two ways to connect to our server - **Browser based SSH client** or **via Terminal**. Easiest way is to connect using browse based SSH, in this article I will show you that.

**Go to the Lightsail home page and find the WordPress instance that you want to connect to.**

![AWS Lighsail - Lightsail home page](/installing-wordpress-on-aws-amazon-lightsail-witn-in-five-mintues/resource.png "AWS Lighsail - Lightsail home page")

**You'll need to connect to your instance either on the home page or the instance management page. Click on the three vertical dots icon on the homepage and then click on connect or manage**
![AWS Lighsail - Lightsail home page](connect.png "AWS Lighsail - Lightsail home page")
**If you click manage you will see the page like below, just click Connect using SSH**
![AWS Lighsail - Lightsail Instance page](instance-page.png "AWS Lighsail - Lightsail Instance page")

**Type the following in the terminal:**<br/>**```cat bitnami_application_password```**<br/>
![AWS Lighsail - Browser SSH](browser-ssh.png "AWS Lighsail - Browser SSH")
<br/>Now copy the password and save it safely, in my case it's `JhrcomMRk4ED`. Go to your site admin (eg: `http://example.com/wp-login.php`) and use `user` as username and the password you copied as password. That's it, be sure to create **`different user`** and delete default user.
