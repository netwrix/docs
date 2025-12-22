---
title: "Getting to Know Browser Router"
description: "Getting to Know Browser Router"
sidebar_position: 10
---

# Getting to Know Browser Router

Endpoint Policy Manager Browser Router editor is located in the Endpoint Policy Manager node.
Endpoint Policy Manager Browser Router enables you to create a new Endpoint Policy Manager Browser
Router policy or collection.

:::note
The Browser Router node is only visible with the latest Admin Console MSI installed on
your management station.
:::


![about_policypak_browser_router](/images/endpointpolicymanager/browserrouter/about_endpointpolicymanager_browser_router.webp)

All Endpoint Policy Manager Browser Router policies must always reside within collections. There are
two steps for this.

![about_policypak_browser_router_1](/images/endpointpolicymanager/browserrouter/about_endpointpolicymanager_browser_router_1.webp)

**Step 1 –** Create and name a collection.

**Step 2 –** Put Browser Router policies (or other collections) inside the collection.

![about_policypak_browser_router_2](/images/endpointpolicymanager/browserrouter/about_endpointpolicymanager_browser_router_2.webp)

You can create collections and policies within collections on either the User or Computer side (or
both). Endpoint Policy Manager Browser Router has a precedence order if you decide to have multiple
policies, collections, or GPOs, or when you choose to use a "on-Group Policy method to deliver
settings.

For more in formation on this, please see the section on
[Understanding Processing Order and Precedence](../configuration/processorderprecedence.md).

To complete the Quickstart examples, we recommend creating a collection on the User side. Next,,
create a new Browser Router policy, similar to the one shown below. In this example, we are routing
all requests for www.microsoft.com to Internet Explorer.

![about_policypak_browser_router_3](/images/endpointpolicymanager/browserrouter/about_endpointpolicymanager_browser_router_3.webp)

Once you click **OK**, you'll get an entry such as the one shown below.

![about_policypak_browser_router_4](/images/endpointpolicymanager/browserrouter/about_endpointpolicymanager_browser_router_4.webp)

If you'd like to follow along, create two more Browser Router policies in the same collection. In
the next example, we will route www.GPanswers.com to Firefox.

![about_policypak_browser_router_5](/images/endpointpolicymanager/browserrouter/about_endpointpolicymanager_browser_router_5.webp)

Click OK to save the entry.

Create another policy to route \*.policypak.com to Edge.

![about_policypak_browser_router_6](/images/endpointpolicymanager/browserrouter/about_endpointpolicymanager_browser_router_6.webp)

Last, create an entry for **New Default Browser**.

![about_policypak_browser_router_7](/images/endpointpolicymanager/browserrouter/about_endpointpolicymanager_browser_router_7.webp)

After you do this, a dialog box with limited options appear. You can only choose a default browser,
which will be Chrome.

![about_policypak_browser_router_8](/images/endpointpolicymanager/browserrouter/about_endpointpolicymanager_browser_router_8.webp)

When you've finished these actions, your entries will resemble these.

![about_policypak_browser_router_9](/images/endpointpolicymanager/browserrouter/about_endpointpolicymanager_browser_router_9.webp)

Below is an explanation of each column in the editor:

- Setting - This is the name you gave the policy. The default browser is always named Default
  Browser.
- Enabled (True/False) - A policy entry can be enabled, which means it will go to work. If you need
  to temporarily stop a policy entry from applying, you can disable it (set it to False).
- Scope - This is either User or Computer, depending on what side of the GPO you are on.
- Item-Level Targeting (No/Yes) - See the section on "Using Item-Level Targeting with Collections
  and Policies"for mre information on this.
- Browser - This column lists what browser a particular entry will route to.
- Pattern - Explains what type of pattern (rules) we are following. The types are URL, Wildcard,
  RegEx, and Internet Security Zone.

On the endpoint, log on as a user who gets the GPO (or run GPupdate if the user is already logged
on). Make sure that Internet Explorer, Firefox, and Chrome are all installed. You will be ready to
go if you followed along with the Endpoint Policy Manager Browser Router Quickstart, created a new
Wordpad document, and typed in each URL (www.microsoft.com, www.gpanswers.com,
[www.policypak.com](https://technet.microsoft.com/en-us/library/dn321432.aspx)). Next, type in a URL
that is unrelated to anything, such as www.abc.com. Based on the rules, the correct browser is
opened for each URL.

![about_policypak_browser_router_10](/images/endpointpolicymanager/browserrouter/about_endpointpolicymanager_browser_router_10.webp)

Notice that since there was no rule for www.abc.com, the overriding Default Browser rule took effect
and launched Internet Explorer.


