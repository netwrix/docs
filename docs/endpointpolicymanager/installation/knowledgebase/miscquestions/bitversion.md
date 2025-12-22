---
title: "What if I accidentally install the 32 bit version of Endpoint Policy Manager on a 64 bit machine or vice versa?"
description: "What if I accidentally install the 32 bit version of Endpoint Policy Manager on a 64 bit machine or vice versa?"
sidebar_position: 10
---

# What if I accidentally install the 32 bit version of Endpoint Policy Manager on a 64 bit machine or vice versa?

The Netwrix Endpoint Policy Manager (formerly PolicyPak) MSIs will not allow you to do so.If you are
utilizing Group Policy to push out the Endpoint Policy Manager Client Side Extension installation,
you can even configure a GPO to automatically deliver the correct version to each computer by using
the WMI filters option that is built into Group Policy.But even if you don't — nothing "bad" will
happen. The installation simply won't "incorrectly" occur.

