---
title: How to Fix WordPress Refresh and Redirect Issue
schematype: TechArticle
date: 2013-08-30 00:03:34
description: WordPress login issues can be caused by various different errors such as error establishing database connection, internal server error or white screen of death. Another type of login error is when your login page keeps refreshing and redirecting it back to the login screen. In this article I will show you how to fix the WordPress login page refreshing and redirecting issue.
categories:
- WordPress
tags:
- refresh
- redirect
keywords:
---
**Backup files before attempting these steps !**
### Deactivate All Plugins

Sometimes WordPress plugins can cause this issue specially if there is a conflict between two plugins. To deactivate all your WordPress plugins, connect to your web hosting using an FTP client. Rename `/wp-content/plugins/` directory to plugins_backup. This will deactivate all WordPress plugins installed on your website. We also have a detailed tutorial on how to deactivate all WordPress plugins when unable to access WP-Admin. Once you have deactivated all plugins, try to logging in to your WordPress site. If you succeed, then this means that one of your plugins was causing the issue.
<!-- more -->
### Revert Back to the Default Theme

WordPress themes can also cause conflicts after upgrading to a newer version of WordPress or the theme itself. To find out whether the problem is being caused by your theme, you need to deactivate your theme. The process is similar to deactivating the plugins. Connect to your website using an FTP client. Go to `/wp-content/themes/` directory and rename your current theme directory to anything. WordPress will look for your current theme and will fall back to the default theme. Once you have done that, then try logging in again. If you succeed, then this means your theme was causing the issue.

If you are already using the default theme as your current theme, then you can still rename it and try to login. If you are able to successfully login then this means that your default theme may have been corrupted. Download a fresh copy of the default theme from WordPress theme repository and upload it to your website.

### Clear Cookies to Resolve Login Issues

WordPress uses cookies for login authentication, so the first step in troubleshooting WordPress login issues is the simplest one. Clear your browser cookies and cache. Also make sure that your browser has cookies enabled. After doing that restart your browser and then try to login. This should fix the issue for most folks.

### Delete .htaccess File(Be Careful !)

Sometimes .htaccess file can get corrupted which can result in internal server errors or login page refreshing error. Simply access your website through FTP. Backup the .htaccess file in your computer and then delete it from your website’s root directory. You may want to delete .htaccess file in wp-admin directory as well if it exist. Try logging in again. If you succeed, then this means that your `.htaccess` file were stopping you from logging into WordPress. Once you are logged in, simply go to `Settings » Permalinks` and click Save. This will generate a new .htaccess file.

### Update Site URL

In some cases defining the site URL seems to fix the issue. To do this, you need to login to your site using FTP and edit the `wp-config.php` file. Simply add these two lines of code in your `wp-config.php` file and don’t forget to replace the example.com with your own URL. Also if your site have `www`. then make sure you add that.
```
define('WP_HOME','http://example.com');
define('WP_SITEURL','http://example.com');```
Save changes, and hopefully that will fix the login page refreshing issue.
