---
description: This article describes how to boot the Endpoint Protector On-Prem appliance into recovery mode to change the epproot user password and optimize the appliance configuration for Nginx, MySQL, and PHP-FPM. These steps apply only to on-premises deployments.
keywords:
  - Endpoint Protector
  - epproot password
  - recovery mode
  - GRUB
  - appliance optimization
  - Nginx
  - MySQL
  - PHP-FPM
  - Ubuntu
sidebar_label: How to Change epproot Password and Optimize Endpoint Protector On-Prem Appliance
title: How to Change epproot Password and Optimize Endpoint Protector On-Prem Appliance
knowledge_article_id: kA0Qk000000XXXXKAA
products:
  - endpoint-protector
---

| The procedures and instructions provided in this document are intended for use by experienced administrators. Proceeding with these steps is done entirely at your own risk. Netwrix is not responsible for any data loss, system instability, or other issues that may arise from following these instructions. Ensure that you have a complete backup of your system before making any changes. |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

## Overview

This article outlines the steps to boot the Endpoint Protector (EPP) On-Prem appliance into single-user (recovery) mode to change the `epproot` user password and optimize appliance performance. These steps apply only to **on-premises** deployments.  
They do **not** work for appliances hosted in cloud environments.

---

## Instructions

1. Go to your VM manager and **reboot** the EPP appliance.  
   While it reboots, press the `Esc` key on your keyboard to access the **GRUB** boot menu, and select **Advanced options for Ubuntu**.

   ![GRUB boot menu screenshot](./../0-images/43258ddd17f53d209349a9757595552d.png)

2. Choose the first entry labeled **(recovery mode)**.

   ![Recovery mode selection screenshot](./../0-images/cb6a560ea7bc3e35cd3c0a30978e4dc7.png)

3. Press **Enter** when prompted.

   ![Boot confirmation screenshot](./../0-images/221e2f00e49f44fffcf64957a74adf46.png)

4. Change the password for the `epproot` user using the command:

   ```bash
   passwd epproot
   ```

   > **NOTE:** When requested, input the new password.

5. Reboot the appliance with the command:

   ```bash
   reboot
   ```

6. Once the system restarts, connect to the appliance via **SSH** using your preferred application.

7. To reduce the number of password prompts, elevate privileges to root using:

   ```bash
   sudo su
   ```

   > **NOTE:** When requested, use the password for the `epproot` user.

8. Backup the **Nginx**, **MySQL**, and **PHP-FPM** configuration files:

   ```bash
   cp -p /etc/nginx/nginx.conf{,.bkp}
   cp -p /etc/mysql/mysql.conf.d/mysqld.cnf{,.bkp}
   cp -p /opt/alt/php56/etc/php-fpm.conf{,.bkp}
   ```

   > **NOTE:** The `{,.bkp}` syntax creates a copy of each file in the same location with `.bkp` appended, preserving metadata (permissions, ownership, and timestamps).

9. Run the following command and note down the number of CPU cores and the memory assigned to the VM:

   ```bash
   htop
   ```

10. Edit the Nginx configuration file:

    ```bash
    vim /etc/nginx/nginx.conf
    ```

    - Press **Insert** to edit.  
    - Set `worker_processes` to the number of CPU cores.  
    - Change the values of `error_log` and `access_log` from `off` to `/dev/null`.  
    - To save and quit, press **Esc**, type `:wq`, and press **Enter**.

11. Edit the MySQL configuration file:

    ```bash
    vim /etc/mysql/mysql.conf.d/mysqld.cnf
    ```

    - Press **Insert** to edit.  
    - Ensure or update the following parameters:

      ```text
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
      ```

    - Adjust `max_connections` based on system memory:

      | **RAM** | **max_connections** |
      |----------|---------------------|
      | ≤4 GB    | 75                  |
      | 8 GB     | 100                 |
      | 16 GB    | 150                 |
      | 32 GB    | 250                 |
      | 64 GB    | 500                 |
      | 128 GB   | 1000                |

    - Set `innodb_buffer_pool_size` to ~60% of total memory.  
      Example (72 GB RAM):

      ```text
      innodb_buffer_pool_size = 44236M
      ```

    - Set `innodb_log_file_size` to ~12.5% of the buffer pool size.  
      Example (72 GB RAM):

      ```text
      innodb_log_file_size = 5G
      ```

    - Set `innodb_buffer_pool_instances` to the approximate number of gigabytes of buffer pool size.  
      Example:

      ```text
      innodb_buffer_pool_instances = 43
      ```

    - Set `innodb_thread_concurrency` to the number of CPU cores.  
      Example (8 cores):

      ```text
      innodb_thread_concurrency = 8
      ```

    - Ensure the following parameters exist or add them if missing:

      ```text
      innodb_file_per_table = 1
      innodb_flush_log_at_trx_commit = 0
      innodb_log_buffer_size = 16M
      innodb_lock_wait_timeout = 300
      innodb_flush_method = O_DIRECT
      innodb_autoinc_lock_mode = 1
      innodb_fast_shutdown = 1
      innodb_max_purge_lag = 0
      innodb_max_dirty_pages_pct = 60
      ```

    - To save and quit, press **Esc**, type `:wq`, and press **Enter**.

12. Edit the PHP-FPM configuration file:

    ```bash
    vim /opt/alt/php56/etc/php-fpm.conf
    ```

    - Press **Insert** to edit.
    - Update the following parameters based on total RAM:

      | **Total RAM** | **pm.max_children** | **pm.start_servers** | **pm.min_spare_servers** | **pm.max_spare_servers** |
      |---------------|--------------------|----------------------|--------------------------|--------------------------|
      | ≤2 GB         | 10                 | 5                    | 1                        | 5                        |
      | ≤4 GB         | 50                 | 6                    | 3                        | 8                        |
      | ≤8 GB         | 100                | 8                    | 5                        | 12                       |
      | ≤16 GB        | 200                | 12                   | 8                        | 20                       |
      | ≤32 GB        | 400                | 20                   | 12                       | 40                       |
      | ≤64 GB        | 800                | 28                   | 18                       | 70                       |
      | ≤128 GB       | 1600               | 40                   | 28                       | 100                      |
      | >128 GB       | Scale using the formula, then round down ~10–15% | — | — | — |

    - To save and quit, press **Esc**, type `:wq`, and press **Enter**.

13. Restart the services:

    ```bash
    systemctl restart nginx
    systemctl restart mysql
    systemctl restart alt-php56-fpm
    ```

14. If any of the services fail to start, review the relevant configuration files for errors.  

    > **NOTE:** You can restore the backup files created in Step 8 if necessary.

---
