---
title: "Exchange2K: Options"
description: "Exchange2K: Options"
sidebar_position: 50
---

# Exchange2K: Options

The Options page provides additional configuration options for the query. Available options vary
depending on the category selected. It is a wizard page for all of the categories.

![Exchange 2K+ Data Collector Wizard Options page](/images/accessanalyzer/11.6/admin/datacollector/exchange2k/options.webp)

Configure the Options step using the following options:

- How to format collected – Select how the table will be formatted according to the return data

    - Return data as collected
    - Return each value of the following property in a separate row – Enabled for specific
      properties selected on the Results page
    - Return data in a separate row for each property set in the following group – Enabled for
      specific properties selected on the Results page

- How to return multi-valued properties – Select how the table will be formatted when the return
  data contains multi-valued properties

    - Concatenated – Return the data in a continuous string without gaps

        - Delimiter – Enter the desired delimiter to be used between values

    - First-value only – Only display the first value

- Message size units – Available for the Exchange Organization > Users, Mailbox Stores, and Public
  Stores categories. Choose between:

    - KB
    - MB
    - GB
