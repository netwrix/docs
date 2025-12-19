---
title: "Working with SharePoint templates"
description: "Working with SharePoint templates"
sidebar_position: 70
---

# Working with SharePoint templates

In SharePoint, a site template is like a blueprint for a site. Creating a site template allows you
to capture your customizations, so that they can be quickly applied to other SharePoint environments
and even use the template as the basis for a business solution.

In Netwrix Data Classification, you may have site collections and want to use the same tagging
configuration for all of them. It allows you to effectively copy and paste the configuration for one
source onto others. First you manually configure one source. Then you save that as a template. Then
you apply that template to other sources.

To get more details about the tagging function, review the
[Configuring Tagging](/docs/dataclassification/5.6.2/contentconfigurationoverview/sourcesintro/sourcesmanage/managesharepoint/manage_configuring_tagging.md)
article.

In this article, we will cover:

- Setting up prerequisites
- Using SharePoint API
- Creating a new template
- Configuring a user account for provisioning
- Viewing auto-provisioned sites

## Setting up prerequisites

As part of configuring tagging, make sure you have set the prerequisites, specified in the
[Configuring Tagging](/docs/dataclassification/5.6.2/contentconfigurationoverview/sourcesintro/sourcesmanage/managesharepoint/manage_configuring_tagging.md)
article.

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
