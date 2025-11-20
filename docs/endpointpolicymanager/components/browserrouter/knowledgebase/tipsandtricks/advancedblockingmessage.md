---
title: "Which variables can I use in the Browser Router Advanced Blocking Message?"
description: "Which variables can I use in the Browser Router Advanced Blocking Message?"
sidebar_position: 10
---

# Which variables can I use in the Browser Router Advanced Blocking Message?

A customer blocking message is optional. If you don't make any changes at this point, the default looks like this:

![953_1_thumbnail_image001](/images/endpointpolicymanager/browserrouter/953_1_thumbnail_image001.webp)

However, you can change the default Endpoint Policy Manager Browser Router Block policy and use
variables we provide.

![953_2_image002](/images/endpointpolicymanager/browserrouter/953_2_image002.webp)

The advanced block message must support both the environment variables for the current user and the
context variables listed below:

1. `%COLLECTION_ID%`
2. `%COLLECTION_NAME%`
3. `%CSE_VERSION%`
4. `%DATE%`
5. `%DATE_UTC%`
6. `%GPO_ID%`
7. `%GPO_NAME%`
8. `%POLICY_ID%`
9. `%POLICY_NAME%`
10. `%TIME%`
11. `%TIME_UTC%`

The popup title must be set to **Notification** and the caption text must be set to **The site is
blocked by a corporate policy**.

The following is a sample of the code used for the default Advanced block message. You may use this
as a template and make your own:

```
The website is blocked due to a corporate policy.
Policy: %POLICY_NAME% ({%POLICY_ID%}).
Collection: %COLLECTION_NAME% ({%COLLECTION_ID%}).
GPO: %GPO_NAME% % ({%GPO_ID%}). 
Please contact your administrator to get more information.
```


