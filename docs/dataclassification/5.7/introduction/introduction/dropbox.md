---
title: "Configure Dropbox for Crawling"
description: "Configure Dropbox for Crawling"
sidebar_position: 20
---

# Configure Dropbox for Crawling

Netwrix Data Classification connects to and crawls a Dropbox source via a custom Dropbox app,
created within Dropbox management console.

You will need to create a Dropbox App and authorize it. Do the following:

1. Select Create apps.
2. Generate Access token

**To create a new app**

To create a new app, you should sign in to Dropbox cloud using a Dropbox Business account with
administrative rights. Refer to
[Dropbox documentation](https://developer.box.com/guides/authentication/#dropbox-documentation) for
more information on the accounts and rights.

1. Navigate to
   [https://www.dropbox.com/developers/apps/create](https://www.dropbox.com/developers/apps/create)
2. Select **Create apps**.
3. On the Choose an API step, select Scoped Access.
4. On the Choose the type of access you needstep, select Full Dropbox type.
5. Provide a name for your App. For example, Netwrix Data Classification.

    :::note
    Remember to agree with Dropbox API Terms and Conditions.
    :::


6. Click Create app.

**To authorize your app**

1. Once your App has been created, navigate to the Permissions tab.
2. Select the following permissions and click submit.

    - account_info.read
    - files.metadata.write
    - files.metadata.read
    - files.content.write
    - files.content.read
    - sharing.read
    - team_info.read
    - team_data.member
    - team_data.team_space
    - files.team_metadata.write
    - members.read

![dropbox_authorize_app](/images/dataclassification/5.7/configuration/configinfrastructure/dropbox_authorize_app.webp)
