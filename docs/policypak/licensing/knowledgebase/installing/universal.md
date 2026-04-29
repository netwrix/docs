---
title: "What is the best way to roll out New Universal licenses if I already have Original licenses?"
description: "What is the best way to roll out New Universal licenses if I already have Original licenses?"
sidebar_position: 10
---

# What is the best way to roll out New Universal licenses if I already have Original licenses?

The ideal way to transition between new Universal licenses and Original licenses is the following:

**Step 1 –** Create two GPOs.

1. One GPO to contain the original licenses and
2. One GPO to contain the new / Universal licenses.

**Step 2 –** Deploy these GPOs everywhere, such that the machines embrace both policies.

Then, as you transition from old CSE (before year 2021) to new CSE (year 2021 and later) your
machines with the PolicyPak CSE will:

1. Get old license GPO.
2. Get new license GPO.
3. Get both GPOs applied to the same machine.
4. If machine has old CSE: The CSE is licensed.
5. If machine has new CSE: The CSE is licensed.

:::warning
Only remove the old Licensing GPO when you are sure you have rolled out a CSE 2687 and
later (anything from year 2021 and later).

:::

