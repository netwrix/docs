---
title: "PostMan: Adding Users/Groups to Linux System Inventory"
description: "PostMan: Adding Users/Groups to Linux System Inventory"
sidebar_position: 20
---

# PostMan: Adding Users/Groups to Linux System Inventory

PostMan: Adding Users/Groups to Linux System Inventory

# PostMan: Adding Users/Groups to Linux System Inventory

Once a Linux endpoint has been added to Privilege Secure's inventory, it sometimes becomes necessary
to add additional Light AD-Bridged groups or users to an endpoints inventory.  To accomplish this,
locate the unique Mongo ID for the endpoint in question using the Postman Computers > Computer List
query.  Using the **?cn=`<endpoint CN>`** addition, Postman will return a list of computer objects
with a regex match of the specified attribute:

![Screen_Shot_2020-03-04_at_9.35.L39_AM.webp](/images/privilegesecure/4.2/discovery/integrations/api/360044464293_screen_shot_2020-03-04_at_9.35.39_am.webp)

The **_id** value is the **unique Mongo ID**of the endpoint to be used in the following query:

![Screen_Shot_2020-03-04_at_9.48.L51_AM.webp](/images/privilegesecure/4.2/discovery/integrations/api/360044464293_screen_shot_2020-03-04_at_9.48.51_am.webp)

Using this ID, craft the following string in the Postman **POST**
field:  **\{\{base_url\}\}/api/v1/computers/\{_id}/admins** (see example at the end).  You will
also need to locate the Mongo ID of the group or user value in question, using the Groups/Users
options.  The example below is searching for a User, Mongo ID, but the process is the same for
a Group:

![Screen_Shot_2020-03-04_at_10.06.L53_AM.webp](/images/privilegesecure/4.2/discovery/integrations/api/360044464293_screen_shot_2020-03-04_at_10.06.53_am.webp)

Take the **unique Mongo ID** of the User or Group identified above, and add this to the **_id**
"Value" field.  Once both the **endpoint Mongo ID** is in the Post line and the User/Group Mongo ID
is in the **_id** "Value" field, select the blue "Send" button to submit the request.  Example full
submission:

![Screen_Shot_2020-03-04_at_10.16.L48_AM.webp](/images/privilegesecure/4.2/discovery/integrations/api/360044464293_screen_shot_2020-03-04_at_10.16.48_am.webp)

Example response output in Postman:

![Screen_Shot_2020-03-04_at_10.27.L26_AM.webp](/images/privilegesecure/4.2/discovery/integrations/api/360044464293_screen_shot_2020-03-04_at_10.27.26_am.webp)

Before snapshot in the UI for this endpoint:

![Screen_Shot_2020-03-04_at_10.20.L05_AM.webp](/images/privilegesecure/4.2/discovery/integrations/api/360044464293_screen_shot_2020-03-04_at_10.20.05_am.webp)

After **Kevin** (kgarrett) AD User account is added to the inventory:

![Screen_Shot_2020-03-04_at_10.29.L34_AM.webp](/images/privilegesecure/4.2/discovery/integrations/api/360044464293_screen_shot_2020-03-04_at_10.29.34_am.webp)

Now, the **Kevin (kgarrett)**Active Directory identity can log into Privilege Secure and request
access and it will be granted to the endpoint.  Once this access is properly requested, Privilege
Secure will insert the user with admin privileges into the endpoint on a time-boxed basis. 
The **kevin** user can then SSH to the endpoint, and connect with their AD credentials.
