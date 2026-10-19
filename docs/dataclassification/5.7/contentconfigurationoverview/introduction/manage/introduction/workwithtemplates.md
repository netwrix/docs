---
title: "Working with SharePoint templates"
description: "Working with SharePoint templates"
sidebar_position: 80
---

# Working with SharePoint templates

In SharePoint, a site template is like a blueprint for a site. Creating a site template lets you capture customizations and apply them to other SharePoint environments or use them as the basis for a business solution.

In Netwrix Data Classification, you can use the same tagging configuration for multiple site collections. Configure one source, save it as a template, then apply that template to other sources.

To get more details about the tagging function, review the
[Configuring Tagging](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/manage/introduction/spotagging.md) article.

This article covers:

- Setting up prerequisites
- Using SharePoint API
- Creating a new template
- Configuring a user account for provisioning
- Viewing auto-provisioned sites

## Setting up prerequisites

As part of configuring tagging, ensure you have set the prerequisites, specified in the
[Configuring Tagging](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/manage/introduction/spotagging.md) article.

## Using SharePoint API

You can create templates manually through the Apply Templates UI or you can call APIs (and also
register the site collection if required) so that you can automate NDC integration as part of their
site collection provisioning.

## Creating a new template

To create a template:

1. In Netwrix Data Classification, navigate to Content→ Sources→SharePoint→Templating→Templates.
2. Select Add to add a template.
3. Before adding, create a site collection in SharePoint for referral.
4. Specify the site collection and select Save.
