---
title: "How is Endpoint Policy Manager Cloud usage counted and calculated toward my True-Up?"
description: "How is Endpoint Policy Manager Cloud usage counted and calculated toward my True-Up?"
sidebar_position: 10
---

# How is Endpoint Policy Manager Cloud usage counted and calculated toward my True-Up?

If you chose the Netwrix Endpoint Policy Manager (formerly PolicyPak) Enterprise or Endpoint Policy
Manager Enterprise editions, which comes with entitlement to use Endpoint Policy Manager Cloud, then
Endpoint Policy Manager Cloud entitles you to Yearly Post-Pay Licensing. This allows you to install
the Endpoint Policy Manager Cloud client on as many computers as you wish.

During every month, each day we count number of computers consumed and produce an average across
that billing cycle.

Every month will have a highest number of computers used on any specific day. The highest number is
used as the monthly highest number.

For each month in your year, all the Monthly highest numbers are added together, then averaged over
12 months. You will then True up your usage for Endpoint Policy Manager Cloud.

You will also True up your usage (if any) for any Endpoint Policy Manager use with Active Directory,
SCCM, or MDM.

Here is an example showing only three months:

You start with Endpoint Policy Manager Cloud Enterprise Edition on April 15th.

April:

- On April 15 you install the Endpoint Policy Manager Cloud Client MSI on 100 computers, and have
  thus consumed 100 licenses on Day 1.
- On April 20 you install the Endpoint Policy Manager Cloud Client MSI on 200 more computers and
  have consumed 300 licenses total.
- On April 25 you install the Endpoint Policy Manager Cloud Client MSI on 500 more computers and
  have consumed 800 licenses total.
- On April 30 you un-install the Endpoint Policy Manager Cloud Client MSI on 100 computers, making
  your consumption 700 licenses total.

Your Monthly Highest number for April is 800.

May:

- On May 1 you install the Endpoint Policy Manager Cloud Client MSI on 300 more computers, and have
  thus consumed 1000 licenses total.
- On May 20 you install the Endpoint Policy Manager Cloud Client MSI on 200 more computers and have
  consumed 1200 licenses total.
- On May 25 you install the Endpoint Policy Manager Cloud Client MSI on 500 more computers and have
  consumed 1700 licenses total.
- On May 30 you UN-install the Endpoint Policy Manager Cloud Client MSI on 300 computers, making
  your consumption 1500 licenses total.

Your Monthly Highest number for May is 1700.

June:

- On June 1 you UN-install the Endpoint Policy Manager Cloud Client MSI on 1000 computers, reducing
  your license count to 700.
- In the remainder of June you neither consumed nor reduced your license usage.

Your Monthly Highest number for June is 700.

Then, assuming the Monthly Highest Numbers for each month was something like:

- April: 800
- May: 1700
- June: 700
- July: 1000
- August: 1200
- September: 900
- October: 1000
- November: 1500
- December: 1500
- January: 1000
- February: 800
- March: 900

Your average among the Monthly Highest Number would be 1083.


