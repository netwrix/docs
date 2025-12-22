---
title: "Creating Debugging Logs"
description: "Creating Debugging Logs"
sidebar_position: 40
---

# Creating Debugging Logs

To generate debugging logs for a script:

1. Open **Customization** > **Scripting** > **Scripts**
2. Set the filter for **Type**, enter the **Name** and/or **ScriptID**.  
   This example generates logs for an Agent scheduled run:

    1. Filter **Type** to **Workflow Action** scripts
    2. Search for Name **Strongpoint Agent Control** and ScriptID
       **customscript_flo_send_email_cust_search**

3. Set the deployment log of the script to **DEBUG**

When the error occurs, you can view or download the debugging log:

1. Open **Customization** > **Scripting** > **Script Execution Logs**
2. Filter the **Script**. For example, **Strongpoint Agent Control**
3. Filter the **Date** to the date specified in the error message.
4. Filter the **Log Level** to **DEBUG**
5. Download the log transcript as a CSV file or to Excel using the buttons on the form.
