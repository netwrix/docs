---
description: >-
  Steps to generate an access token in Dropbox to use when adding a Dropbox
  source in Netwrix Data Classification.
keywords:
  - Dropbox
  - access token
  - Netwrix Data Classification
  - Dropbox API
  - Authorization Code
  - Create app
  - Full Dropbox access
  - generate token
products:
  - auditor
  - data-classification
sidebar_label: How to Generate an Access Token for a DropBox Sour
tags: []
title: "How to Generate an Access Token for a DropBox Source in Netwrix Data Classification"
knowledge_article_id: kA00g000000PbctCAC
---

# How to Generate an Access Token for a DropBox Source in Netwrix Data Classification

## Question

How can you generate an Access Token for a DropBox source in Netwrix Data Classification?

## Answer

When adding a Dropbox source in Netwrix Data Classification you are asked for an “Access Token”. These are the steps to generate the required Access Token:

1. Go to https://www.dropbox.com/developers/apps/create.
2. Authorize, if prompted.
3. Choose **Dropbox API** on the first step.
4. Choose **Full Dropbox access** in the second step.
5. Name the app. This name will become a folder in your Dropbox account.
6. Click the **Create app** button.
7. You’ll be presented with your app’s settings.
8. Click the **Generate** button next to **Authorization Code** and follow the prompts on the screen.
9. After the token is generated, you’ll see a string of letters and numbers: this is the access token that is required to add to the DropBox source.
