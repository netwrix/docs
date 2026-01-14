---
description: >-
  This article describes how to boot the Endpoint Protector On-Prem appliance into recovery mode
  to change the epproot user password. These steps apply only to on-premises deployments.
keywords:
  - Endpoint Protector
  - epproot password
  - recovery mode
  - GRUB
  - appliance optimization
  - Nginx
  - MySQL
  - PHP-FPM
sidebar_label: How to change epproot Password and Optimize Endpoint Protector On-Prem Appliance"
tags:
  - deployment-and-installation
  - maintenance
title: "How to change epproot Password and Optimize Endpoint Protector On-Prem Appliance"
knowledge_article_id: 
products:
  - endpoint-protector
---

| The procedures and instructions provided in this document are intended for use by experienced administrators. Proceeding with these steps is done entirely at your own risk. Netwrix is not responsible for any data loss, system instability, or other issues that may arise from following these instructions. Ensure that you have a complete backup of your system before making any changes. |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

This document outlines the steps to boot into single-user (recovery) mode, change the elevated user password and optimise the EPP appliance hosted On-Prem. The steps will not work if the appliance is hosted in a cloud environment.

1.  Go to your VM manager and reboot the EPP appliance.  
    While it reboots, press the \`Esc\` button on your keyboard to go into the GRUB boot menu, and select \`Advanced options for Ubuntu\`

    ![](./../0-images/43258ddd17f53d209349a9757595552d.png)

2.  Choose the first entry labeled (recovery mode)

    ![](./../0-images/cb6a560ea7bc3e35cd3c0a30978e4dc7.png)

3.  Press \`Enter\` when prompted.

    ![](./../0-images/221e2f00e49f44fffcf64957a74adf46.png)

4.  The first thing you need to do is change the password for the user \`epproot\` using the command:

    passwd epproot

    :::note
    When requested, input the new password
    :::

5.  Next, reboot the appliance with the command:

    reboot

6.  At this point, using the preferred application, you can SSH into the appliance.
7.  To reduce the number of times you need to input the password, elevate to root using:

    sudo su

    :::note
    When requested, use the password for the epproot user.
    :::

8.  Backup the Nginx, MySQL, and PHP-fpm configuration files using the following commands:

    ```cp -p /etc/nginx/nginx.conf{,.bkp}  
    cp -p /etc/mysql/mysql.conf.d/mysqld.cnf{,.bkp}

    cp -p /opt/alt/php56/etc/php-fpm.conf{,.bkp}
    ```

    :::note
    The extension `{,.bkp}` is going to copy the file to the same location, appending .bkp to the file name, basically creating a copy preserving the metadata (permissions, ownership, timestamps).
    :::

9.  Use the command:  
    htop  
    and note down the number of CPU cores and the Memory assigned to the VM.
10. Edit the Nginx config file using the command:

    vim /etc/nginx/nginx.conf

-   To edit, press the \`insert\` key on the keyboard
-   Set worker_processes to the number of CPU cores
-   Change the values of error_log and access_log from off to /dev/null;
-   To save and quit, press the \`esc\` button, type :wq and press \`Enter\`
11. Edit the MySQL config file using the command:  
    vim /etc/mysql/mysql.conf.d/mysqld.cnf
-   To edit, press the \`insert\` key on the keyboard
-   Check the following lines and change the values accordingly, or add them if there are some missing:  
    max_allowed_packet = 8M  
    thread_stack = 256K  
    read_buffer_size = 128K  
    read_rnd_buffer_size = 256K  
    join_buffer_size = 128K  
    key_buffer_size = 16M  
    tmp_table_size = 256M  
    sort_buffer_size = 2M  
    thread_cache_size = 64M  
    query_cache_type = 0  
    query_cache_limit = 1M  
    query_cache_size = 0  
    transaction_isolation = READ-COMMITTED  
    expire_logs_days = 5  
    max_binlog_size = 128M
-   Change the value of max_connections based on the Memory assigned, as follows:

    75 for ≤4 GB RAM

    100 for 8 GB RAM

    150 for 16 GB RAM

    250 for 32 GB RAM

    500 for 64 GB RAM

    1000 for 128 GB RAM

-   Set innodb_buffer_pool_size to \~60% of the memory assigned  
    *Example: For 72 GB RAM, put 44236M, which results from: (60/100)\*(72\*1024)*  
    innodb_buffer_pool_size = 44236M
-   Set innodb_log_file_size to \~12.5% of the innodb_buffer_pool_size value.  
    *Example: For 72 GB RAM, put 5G, which results from rounding: (12.5/100)\*(44236/1024)*  
    innodb_log_file_size= 5G
-   Set innodb_buffer_pool_instances to the number of Gs at innodb_buffer_pool_size.  
    *Example: For 44236M (which is approximately 43 GB, obtained by dividing 44236 by 1024) set the value to 43 here*  
    innodb_buffer_pool_instances = 43
-   Set innodb_thread_concurrency to the number of CPU cores  
    Example: For 8 CPU cores, use the value 8  
    innodb_thread_concurrency = 8
-   Set innodb_file_per_table = 1
-   Check the following lines and add them if there are some missing:  
    innodb_file_per_table = 1  
    innodb_buffer_pool_size = 2G  
    innodb_log_file_size = 256M  
    innodb_buffer_pool_instances = 2  
    innodb_flush_log_at_trx_commit = 0  
    innodb_log_buffer_size = 16M  
    innodb_lock_wait_timeout = 300  
    innodb_flush_method = O_DIRECT  
    innodb_thread_concurrency = 4  
    innodb_autoinc_lock_mode = 1  
    innodb_fast_shutdown = 1  
    innodb_max_purge_lag = 0  
    innodb_max_dirty_pages_pct = 60
-   To save and quit, press the \`esc\` button, type :wq and press \`Enter\`
12. Edit the PHP config file using the command:  
    vim /opt/alt/php56/etc/php-fpm.conf
-   To edit, press the \`insert\` key on the keyboard
-   Change the attribute values as follows:

| **Total RAM** | **pm.max_children**                          | **pm.start_servers** | **pm.min_spare_servers** | **pm.max_spare_servers** |
|---------------|----------------------------------------------|----------------------|--------------------------|--------------------------|
| ≤2 GB         | **10** (kept)                                | 5                    | 1                        | 5                        |
| ≤4 GB         | **50**                                       | 6                    | 3                        | 8                        |
| ≤8 GB         | **100**                                      | 8                    | 5                        | 12                       |
| ≤16 GB        | **200**                                      | 12                   | 8                        | 20                       |
| ≤32 GB        | **400**                                      | 20                   | 12                       | 40                       |
| ≤64 GB        | **800**                                      | 28                   | 18                       | 70                       |
| ≤128 GB       | **1600**                                     | 40                   | 28                       | 100                      |
| \>128 GB      | scale with formula, then round down \~10–15% |                      |                          |                          |

-   To save and quit, press the \`esc\` button, type :wq and press \`Enter\`
13. The last step requires the services to be restarted:

    systemctl restart nginx  
    systemctl restart mysql  
    systemctl restart alt-php56-fpm

14. If any of the commands mentioned do not work, return to the relevant configuration section for the service and check for any errors that might have occurred while changing the values.  
    :::note
    For assistance, the backup files previously created in step 8 can be used.
    ::::
