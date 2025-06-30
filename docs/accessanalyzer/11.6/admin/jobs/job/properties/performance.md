# Performance Tab

The Performance tab provides options that can be used to improve job performance and runtime.

![Performance tab of Job Properties](/img/product_docs/accessanalyzer/11.6/admin/jobs/job/properties/performance.webp)

Adjust the following settings by sliding the needle up and down the line:

- Concurrent Worker Threads – The number of worker threads selected equals the number of hosts being
  queried concurrently. If needed, this value can be increased.
- Skip Hosts that do not respond to PING – Selected by default. Deselect if a target host has been
  configured to not respond to PING requests, allowing Enterprise Auditor to scan the target host
  without a PING response.

    **NOTE:** In most cases, it is not recommend to deselect this option, as it causes the job to
    continue querying offline hosts until the job timeout value is reached, set by default to 20
    minutes.

- PING Timeout – The PING timeout value is the number of seconds before a host is identified as
  offline for not responding to PING

Click **OK** to save configuration changes and close the Job Properties window. Click **Cancel** if
no changes were made.
