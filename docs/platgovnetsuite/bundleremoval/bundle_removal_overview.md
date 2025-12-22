---
title: "Bundle Removal Overview"
description: "Bundle Removal Overview"
sidebar_position: 80
---

# Bundle Removal Overview

We can help you remove bundles from NetSuite in the safest and best possible manner by using mass
updates and saved searches, leaving you with an efficient use of time and effort. By following the
bundle removal process, the current functionality in your account keeps working as expected.

Customizations that are built on top of a bundle can cause issues or break when the bundle is
removed. We help you determine what could cause issues or break if you remove the bundle by:

- Safely and easily recognizing which customizations are built on top of the bundle.
- Seeing how customizations relate to different components.
- Detecting all the components that do not connect to any object in your NetSuite account.
- Identifying and separating objects that have the possibility of breaking.
- Creating an alternative for how your account would function when you remove the bundle.

To remove a bundle:

1. Determine timelines and resources:

    **Timeline**: Each object should take approximately 30 minutes to review. This includes the time
    it takes to do the impact analysis on the object and allows for time to identify whether the
    object should be kept, removed, or recreated.

    **Resources**:  
    **Project Manager**: You should appoint a project manager, you can assign an internal technical
    resource if available or NetSuite can provide you with a Technical Account Manager (TAM). There
    is a cost for hiring a TAM if it is not included in your NetSuite support package. You may need
    more than one TAM resource depending on how heavily customized your bundle is. If a TAM is not
    available, NetSuite can also provide you with a resource from professional services. When
    possible, it is recommended that you find a TAM resource that is familiar with Platform
    Governance for NetSuite as well as is familiar with the bundle type that you are trying to
    remove.  
    **Developer and/or Administrator**: Depending on how your business processes are built around
    your scripts, when you remove the bundle the associated scripts will be removed as well. A
    developer and/or administrator should be assigned to investigate the scripts, see what scripts
    need to be recreated and rebuild them.

2. Document your account. If Platform Governance for NetSuite is already installed and running in
   your account, you can run a manual spider to update your account. If you have a new account,
   install Platform Governance for NetSuite and complete the initial spider.
3. Create Mass Updates.
4. Create a Custom List and Custom Fields.
5. Create Saved Searches and export/import CSV files (where applicable).
6. Export the information to Excel.

The process should be completed in your sandbox environment to see how it affects your other
environments (production).
