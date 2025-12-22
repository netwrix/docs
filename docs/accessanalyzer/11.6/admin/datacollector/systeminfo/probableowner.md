---
title: "SystemInfo: Probable Owner"
description: "SystemInfo: Probable Owner"
sidebar_position: 40
---

# SystemInfo: Probable Owner

On the Probable Owner page, select options for determining the owner using weighted calculations.
This page is enabled when the **Probable Owner** property is selected on the Results page.

![System Info Data Collector Wizard Probable Owner page](/images/accessanalyzer/11.6/admin/datacollector/systeminfo/probableowner.webp)

**Determine owner**

In the Determine owner section, select from the following options:

- Determine owner from User Profile Last Modified Date
- Determine owner from User Profile Size
- Determine owner from Current User
- Determine owner from Last User
- Custom weights – Select this radio button to use custom weights to determine the probable owner.
  These weights can be set by clicking the ellipsis next to the Result weights box to open the
  Probable Owner Settings window.

![Custom weights Probable Owner Settings window](/images/accessanalyzer/11.6/admin/datacollector/systeminfo/customweights.webp)

The Result weights box displays the custom weights set in the Probable Owner Settings window.

**Exclude users list**

In the Exclude users list section, select from the following checkboxes:

- Exclude users by list – Enables the **Set List of Users to Exclude** button
- Exclude locked out users
- Exclude disabled users

![Exclude users Probable Owner Settings window](/images/accessanalyzer/11.6/admin/datacollector/systeminfo/excludeusers.webp)

Click **Set Users to Exclude** to open the Probable Owner Settings window:

- User – Enter users in the following format: `Domain\Username`
- Add user – Click **Add user** to add the users entered in the User box to the excluded users list
- Removed selected – Select a user and click **Removed selected** to remove the user
- Clear list – Click **Clear list** to remove the list of excluded users
- Select users or groups – Click **Select users or groups** to open the Select User or Group window
  and select users or groups to add the excluded users list
- Import from file – Select **Import from file** to open the Import File Dialog and import files to
  add to the excluded users list

**Output options**

In the Output options section, select from the following options:

- Get the most probable owner(s)
- Get probable owners with relative deviation to the most probable owner – Enables the following
  option:

    - Maximum deviation: **[number]** percents

- Get probable owners limited by probability – Enables the following options:

    - Probability threshold **[number]** percents
    - Return at least one probable owner regardless of probability

Select the following checkbox if desired:

- Return the top **[number]** ranked probable owners
