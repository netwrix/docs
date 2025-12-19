---
title: "User Guide"
description: "User Guide"
sidebar_position: 20
---

# User Guide

Identity Manager's User Guide leads the reader through all the necessary steps to autonomously build
an IGA solution based on Identity Manager, either from scratch or using Identity Manager's IGA Core
Solution, with the aim of quickly delivering value.

## Target Audience

This guide is intended to be read by Identity Manager administrators, i.e. power users who configure
Identity Manager to match their company's needs.

## Prior Knowledge

This guide presumes some knowledge of Identity Manager on the part of the reader who should have
previously read the [Introduction Guide](/docs/identitymanager/6.2/introduction-guide/index.md) in order to be aware of the
main purposes, principles and capabilities of Identity Manager.

Using this guide does not require any advanced IT skills. All the configuration steps take place
through Identity Manager's UI or MS Excel files.

Netwrix Identity Manager (formerly Usercube)strongly recommends starting from the
[Introduction Guide](/docs/identitymanager/6.2/introduction-guide/index.md) to fully benefit from the User Guide's content.

## Overview

This guide is made of step-by-step procedures that take the reader through setting up Identity
Manager from scratch and creating IGA value as quickly as possible.

The procedures are meant to guide the reader through a standard setup, based on Identity Manager's
IGA Core Solution, and with Netwrix Identity Manager (formerly Usercube) suggestions and
recommendations. Any advanced configuration can be performed later using the content of the
[Integration Guide](/docs/identitymanager/6.2/integration-guide/index.md).

Thus, even when having very specific needs, Netwrix Identity Manager (formerly Usercube) still
recommends starting the project with the basics presented in this guide. The IGA solution can be
enhanced later on with the help of our experts. This way, IGA value can already be delivered while
the project continues for optimization purposes.

## Content

This guide is organized into activities, each activity containing an overview, the input, output,
and participants as well as step-by-step procedures and a way to verify the outcome.

Some activities are grouped together when they depend on each other to create value or when they
contribute to a same goal.

While some activities must be carried out before others for technical and/or functional reasons, the
order is not absolute. Please follow the instructions and recommendations detailed with the
[Global Process](/docs/identitymanager/6.2/user-guide/global-process/index.md).

All activities are organized into bigger sections which are distinguishable by their functional
intent: set up; administrate; optimize; deploy and maintain.

### Set up

Learn how to configure a working environment, how to set up identity lifecycles, and how to build a
catalog of roles for entitlement management, in order to configure the Minimum Viable Product.

### Administrate

Learn how to enforce your security policies through access certification, or resource/role
reconciliation, provisioning review, etc.

### Optimize

Learn how to enhance the IGA solution through automation and model optimization.

> For example, learn how to adjust the identity model and the role model in order to make them
> resemble the company's reality, learn how to improve the data quality by automating entitlement
> assignment decisions, or by automatically provisioning assignments to the managed systems. Learn
> how to push the automation wall thanks to Identity Manager's AI with role mining.

### Deploy

Learn how to deploy the solution to a production environment.

### Maintain

Learn how to maintain the solution, because the project is iterative. Learn how to keep the data
model up to date according to the company's changes, or how to add new systems to the loop, while
Identity Manager is already running in production.

## How to Use this Guide

Start by studying the [Global Process](/docs/identitymanager/6.2/user-guide/global-process/index.md). that details every activity in
their respective sections and how they relate to one another. You will get a good view of the steps
to take from start to finish.

Follow the path, stop at each activity, and go check out the details on the matching page of the
guide, in the corresponding section. There you will find recommendations and practical steps to
complete the activity and test it. Then you can resume following the path.

At any step along the way, once you feel comfortable, you can decide to take another direction than
the recommended process, as long as you take into account the input artifacts specified in each
activity page, which represent actual technical dependencies. You can start an activity only if all
the previous technical dependencies are met.

Keep in mind that completing sections one by one is the quickest way to deliver value. Nevertheless,
they are not rigorously dependent on each other. You do not have to complete one entirely in order
to go to the next. But they are not rigorously independent either. There are some activities in the
first one that are required for activities in the second. Read the input artifacts to choose the
correct order.

> For example, if you are looking forward to fixing non authorized account (from the
> **Administrate** section) you do not have to complete the **Set Up** section entirely. You just
> have to complete the **Categorize Resources** activity, and all the activities connected to it
> upstream . You do not have to complete other activities such as the **Create Roles in the Role
> Catalog** activity.
