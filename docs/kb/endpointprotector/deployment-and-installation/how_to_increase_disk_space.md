---
description: >-
  This article explains how to boot the Endpoint Protector On-Prem appliance into
  single-user (recovery) mode and safely expand disk space by resizing partitions
  and the file system after increasing virtual disk capacity.
keywords:
  - Endpoint Protector
  - disk expansion
  - increase disk space
  - recovery mode
  - single-user mode
  - GRUB
  - fdisk
  - parted
  - resize2fs
  - on-prem appliance
sidebar_label: How to expand Disk Space on Endpoint Protector On-Prem Appliance
tags:
  - deployment-and-installation
  - maintenance
title: "How to expand Disk Space on Endpoint Protector On-Prem Appliance"
knowledge_article_id: 
products:
  - endpoint-protector
---


This article outlines the steps to boot into single-user (recovery) mode and expand disk space on the EPP appliance.

1.  Go to your VM manager, shut down the VM, increase the disk space, and reboot the EPP appliance.  
    While it reboots, press the \`Esc\` button on your keyboard to go into the GRUB boot menu, and select ‘Advanced options for Ubuntu’

    ![](./../0-images/43258ddd17f53d209349a9757595552d.png)

2.  Choose the first entry labeled (recovery mode)

    ![](./../0-images/cb6a560ea7bc3e35cd3c0a30978e4dc7.png)

3.  Press ‘Enter’ when prompted.

    ![](./../0-images/221e2f00e49f44fffcf64957a74adf46.png)

4.  To increase the disk space, we must check the partitions available by using the command:  
    \`fdisk -l\`  
    Review the output and identify the last partition.  
    ![](./../0-images/a05c59666d4d5d06b571009b1e7309e5.png)Note: it will be either sda3 or sda5, depending on the server version
5.  To unlock the partition, let’s first stop all EPP related services:  
    ```service nginx stop  
    service cron stop  
    service mysql stop  
    service php-fpm stop  
    service alt-php56-fpm  
    service eppcloudsync stop  
    service awslogs stop  
    service syslog-ng stop  
    pkill -f run_workers.php
    ```  
    Note: If a service isn’t running, continue to the next command.
6.  Unmount the identified partition:  
    \`umount /dev/sda3\`  
    or  
    \`umount /dev/sda5\`
7.  Increase the partition size and edit the master boot record:  
    \`parted /dev/sda\`  
    ![](./../0-images/25e977352dd52f7cc1a0a099749039d7.png)  
    \`p\` - display current partitions and their sizes  
    ![](./../0-images/b811ee14df77d6d8e87b48fcd284db80.png)  
    Resize the last partition to the maximum allocated space:  
    \`resizepart 3 100%\`  
    Note: If prompted with a warning for available space, choose "fix" to proceed.

    \`p\` - to see the new size of the partition  
    ![](./../0-images/e82dd4c71e1388608816abea6c906ae2.png)  
    \`quit\` - to exit the partition manager  
    \`partprobe\` - refresh kernel partition table for all disks

8.  Check the file system (replace with your partition if needed):  
    \`e2fsck –f /dev/sda3\` - forces a file system check  
    ![](./../0-images/91cd45f8016ad9a0a33eed482d054fbf.png)
9.  Resize the file system:  
    \`resize2fs /dev/sda3\`  
    ![](./../0-images/7aabf76b61247cd7022988b79a06e3e8.png)
10. Remount Partition and Confirm Disk Size:  
    \`mount -a\` - mount all partitions  
      
    \`df -h\` - check available disk space  
    ![](./../0-images/866c775d49c0cbef0864bd4cf7b06015.png)
11. Restart the appliance. The disk space increase is now reflected on your EPP appliance.
