---
title: "ExchangePS: Options"
description: "ExchangePS: Options"
sidebar_position: 110
---

# ExchangePS: Options

The Options page is used to configure additional options. It is a wizard page for all of the
categories.

![ExchangePS Data Collector Wizard Options page](/images/accessanalyzer/12.0/admin/datacollector/exchangeps/options.webp)

The following options can be configured:

- Message size units - Select the message size for the query:

    - KB
    - MB
    - GB

- How to format collected results – Select how table will be formatted according to the return data:

    - Return data as collected
    - Return each value of the following property in a separate row – Enabled for specific
      properties selected on the Results page
    - Return data in a separate row for each property set in the following group – Enabled for
      specific properties selected on the Results page

- How to return multi-valued properties – Select how the table will be formatted when the return
  data contains multi-valued properties:

    - Concatenated

        - Delimiter – Enter the desired delimiter to be used between values

    - First-value only
