---
description: >-
  Best practices for deploying NetApp FPolicy with Netwrix Activity Monitor,
  including Netwrix and NetApp recommendations, configuration tips, and relevant
  ONTAP commands for send-buffer-size and request abort timeout.
keywords:
  - Netwrix Activity Monitor
  - NetApp FPolicy
  - ONTAP
  - send-buffer-size
  - reqs-abort-timeout
  - LIF
  - SVM
  - FlexCache
products:
  - activitymonitor
sidebar_label: Netapp Fpolicy Deployments Best Practices for Netw
tags: []
title: "Netapp Fpolicy Deployments Best Practices for Netwrix Activity Monitor"
knowledge_article_id: kA04u000000LLQXCA4
---

# Netapp Fpolicy Deployments Best Practices for Netwrix Activity Monitor

## Netwrix Specific Recommendations

- **Netwrix Specific Recommendations**

  - Per Netwrix guidelines, ensure Netwrix version is up to date including the enhancements for this hotifx SAM_6.0_029.  
    https://files.mtstatic.com/site_13085/102679/0?Expires=1669664946&Signature=laWSub3qi2IDdz7MRLdrypEzNqzhyuiriw6yFnRZgDfzd-2-Qo6BJkPGdxDHQ7OaJll2SW45nvIRg~bBizGLguhZlMFrPQshSClty2JUosV3dM0RMLwteWtx5AXJnKprSN8xEIbCyHjeUjCzcwxOv0mfMkBV0oV23mWuF5IR5ZI_&Key-Pair-Id=APKAJ5Y6AV4GI7A555NA

  - The new version will handle burst of activity events better, optimized for improved processing of events and other enhancements.

## Other Netwrix specific Best Practices

- Consider using multiple primary servers for scale out and fault tolerance purposes.
- Use low-latency links between ONTAP and Activity Monitor Agent. For example, Activity Monitor Agents should be located in the same datacenter as the monitored NetApp appliances.
- Reduce the monitoring scope (what operations, shares, volumes are being monitored). It is not recommended to monitor Directory Read operations on loaded servers.
- Ensure that each ONTAP cluster node has a LIF per SVM to connect to Agents.

## NetApp Specific Recommendations

- Upgrade to the appropriate versions of ONTAP that have fixes for known Fpolicy related issues (1438207 - FPolicy might stop sending screen requests to the external engine if it enters a throttling state)  
  https://mysupport.netapp.com/site/bugs-online/product/ONTAP/BURT/1438207

- For Netwrix External Engines, set `send-buffer-size` to `7895160` (Netwrix best practice is to set to maximum value: "The FPolicy Send-Buffer size is set to 7895160")"

  Use the following command:

  ```bash
  vserver fpolicy policy external-engine modify -vserver <vserver> -engine-name <engine-name> send-buffer-size 7895160
  ```

- For more information on how to set send-buffer size:

  - How to calculate send buffer for ONTAP 9 FPolicy  
    https://kb.netapp.com/Advice_and_Troubleshooting/Data_Storage_Software/ONTAP_OS/How_to_calculate_send_buffer_for_ONTAP_9_FPolicy

  - Write EAGAIN errors found in EMS and Fpolicy.log  
    https://kb.netapp.com/Advice_and_Troubleshooting/Data_Storage_Software/ONTAP_OS/Write_EAGAIN_errors_found_in_EMS_and_Fpolicy.log

- To lessen the potential impact of latency, with Netwrix guidance, set abort timeout lower, for example: `10s`.

  If there is a large amount of latency between the Agent and the SVM, it can cause a delay in the TCP acknowledgements, and potential impact to latency in very rare occasions. To decrease end-user latency in cases where there are connection issues or CPU starvation on the Agent, it is recommended to lower the "Timeout for Aborting a Request" from 40 to 10 seconds.

  Use the following command:

  ```bash
  vserver fpolicy policy external-engine modify -vserver <vserver -engine-name <engine-name> -reqs-abort-timeout 10s
  ```

  Please refer to the following documentation: Vserver fpolicy policy external-engine commands - vserver fpolicy policy external-engine show  
  https://docs.netapp.com/ontap-9/index.jsp?topic=%2Fcom.netapp.doc.dot-cm-cmpr-910%2Fvserver__fpolicy__policy__external-engine__show.html

## General Recommendations

Review the following sections of the Technical Report. FPolicy Solution Guide for ONTAP:  
https://www.netapp.com/pdf.html?item=/media/17001-tr4696pdf.pdf

- Managing FPolicy Workflow and Dependency on Other Technologies (7.5)

NetApp recommends disabling an FPolicy policy before making any configuration changes. For example, if you want to add or modify an IP address in the external engine configured for the enabled policy, then first disable the policy.

If you configure FPolicy to monitor NetApp FlexCache® volumes, NetApp recommends that you do not configure FPolicy to monitor read and getattr file operations. Monitoring these operations in ONTAP requires the retrieval of inode-to-path (I2P) data. Because I2P data cannot be retrieved from FlexCache volumes, it must be retrieved from the origin volume. Therefore, monitoring these operations eliminates the performance benefits that FlexCache can provide.

When both FPolicy and an off-box antivirus (AV) solution are deployed, the AV solution receives notifications first. FPolicy processing starts only after AV scanning is complete. A slow AV scanner could affect overall performance, so AV solutions must be sized properly.

When defining the scope, add all the shares you want to monitor or audit into the share/include list. Turn off monitoring on the file server if you do not want to monitor the shares. Disabling FPolicy on the SVM is not helpful because the Netwrix Activity Monitor activity agent periodically checks on the file server and automatically disables or enables FPolicy if it notices a disconnection (if the Enable and connect FPolicy option was selected).

- Sizing Considerations (7.6)

FPolicy performs inline monitoring of CIFS operations, sends notifications to the external server, and waits for a response, depending on the mode of external engine communication (synchronous or asynchronous). This process affects the performance of CIFS access and CPU resources. To mitigate any issues, NetApp recommends assessing and sizing the environment before enabling FPolicy.

Performance is affected by the number of users, workload characteristics such as operations per user, data size, and network latency.

- Netwrix File Activity Monitor Best Practices (8)

The following best practices are recommended when using the Netwrix File Activity Monitor with a NetApp file server:
- Restrain the FPolicy configuration to specific volumes, shares, and operations to decrease the impact on the SVM.
- Consider deploying multiple Netwrix Activity Monitor activity agents for load balancing and fault tolerance.
- Use the Enable and Connect FPolicy option to keep the SVM connected and consistently sending events to the Netwrix Activity Monitor activity agents.
