# Scenario 2B: Block Powershell.exe Completely, but Allow Local System to Run a Specific .PS1 Script

In the previous example, we blocked PowerShell (or PSEXEC, etc.) from all user and system processes.

However, you might need to run some PowerShell scripts as SYSTEM to perform some maintenance tasks.  Since PowerShell is now being blocked for all Computer side processes, you cannot run a specific script with PowerShel.

[![A screen shot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/scopefilters/scenario_2b_block_powershell.png)](https://hf-files-oregon.s3-us-west-2.amazonaws.com/hdppolicypak_kb_attachments/2019/06-26/9895d264-88a5-409f-ad07-a186e17b0879/faq-img-09.png)

To enable this, simply add another rule to ALLOW AND LOG, for example, C:\SCRIPTS\ITSCRIPT1.ps1, and set the scope to User and System processes, but use the scope Filter to SYSTEM.

[![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/scopefilters/scenario_2b_block_powershell_1.png)](https://hf-files-oregon.s3-us-west-2.amazonaws.com/hdppolicypak_kb_attachments/2019/06-26/e9ca4cbd-2ef0-4107-a591-6bdce217988d/faq-img-10.png)

Result:

[![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/scopefilters/scenario_2b_block_powershell_2.png)](https://hf-files-oregon.s3-us-west-2.amazonaws.com/hdppolicypak_kb_attachments/2019/06-26/643b88d5-93bc-482f-889e-93c5d12307f3/faq-img-11.png)
