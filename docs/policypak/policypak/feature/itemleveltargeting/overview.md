# Using Item-Level Targeting with Collections and Policies

Item-Level Targeting is used in Microsoft Group Policy Preferences and other areas of Netwrix Endpoint Policy Manager (formerly PolicyPak) to target or filter where specific items will apply. With Endpoint Policy Manager Feature Manager for Windows, Item-Level Targeting can be placed on collections, as well as policies within collections.

A collection enables you to group together Endpoint Policy Manager Feature Manager for Windows policies so they can act together. For instance, you might create a collection for only East Sales Computers and another for West Sales Computers. Or you might create one for Windows Server 2016 servers with Exchange, and one for Windows 10 laptops in Sales.

![using_item_level_targeting](/static/img/product_docs/policypak/policypak/remoteworkdelivery/using_item_level_targeting.png)

You can also right-click any Endpoint Policy Manager Feature Manager for Windows policy, and select __Edit Item Level Targeting__.

![using_item_level_targeting_1](/static/img/product_docs/policypak/policypak/remoteworkdelivery/using_item_level_targeting_1.png)

You can also select Item-Level Targeting when a policy is created using the wizard.

The __Edit Item Level Targeting__ menu item brings up the __Targeting Editor__. You can select any combination of characteristics you want to test for. Administrators familiar with Group Policy Preferences' Item-Level Targeting will be at home in this interface as it is functionally equivalent.

You can apply one or more targeting items to a policy, which enables targeting items to be joined logically. You can also add targeting collections, which group together targeting items in much the same way parentheses are used in an equation. In this way, you can create a complex determination about where a policy will be applied. Collections may be set to __And__, __Or__ __Is__, or __Is Not__.

![using_item_level_targeting_2](/static/img/product_docs/policypak/policypak/remoteworkdelivery/using_item_level_targeting_2.png)

Below are some real-world examples of how you can use Item-Level Targeting.

- Software prerequisites - If you want to configure an application's settings, first make sure the application is installed on the user's computer before configuring it. You can use File Match or Registry Match targeting items (or both) to verify a specific version of a file, or a registry entry is present. (For an example of this, look in the Uninstall registry key.)
- Mobile computers - If you want to deploy settings exclusively for users on mobile PCs, filter the rule to apply only to mobile PCs by using the __Portable Computer__ targeting item.
- Operating system version - You can specify different settings for applications based on the operating system version. To do this, create one rule for each operating system. Then, filter each rule using the __Operating System__ targeting item.
- Group membership - You can link the Group Policy Object (GPO) to the whole domain or organizational unit (OU), but only members within a specific group will pick up and process the rule settings.
- IP range - You can specify different settings for various IP ranges, like different settings for the home office and each field office.

After you're done editing, close the editor. Note that the icon of the policy or collection has changed to orange, which shows that it now has Item-Level Targeting.

![using_item_level_targeting_3](/static/img/product_docs/policypak/policypak/remoteworkdelivery/using_item_level_targeting_3.png)

When Item-Level Targeting is on, the policy won't apply unless the conditions are __True__. If Item-Level Targeting is on a collection, then none of the items in the collection will apply unless the Item-Level Targeting on the collection evaluates to __True__.
