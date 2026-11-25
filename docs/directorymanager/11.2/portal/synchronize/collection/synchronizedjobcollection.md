---
title: "Add and Order Jobs in a Synchronize Job Collection"
description: "Add existing or new jobs to a job collection, rename and reorder them, and set whether the collection stops or continues when a job fails."
keywords:
  - add jobs to collection
  - job run order
  - On Failure action
  - Synchronized Jobs Collection
sidebar_position: 60
---

# Add and Order Jobs in a Synchronize Job Collection

On the **Synchronized Jobs Collection** page, you view the list of jobs that you have added to the collection and their information. You can add existing jobs or new jobs to the collections. You can also rename, change the order, and remove jobs from the job collection.

To add and order jobs:

1. On the **Synchronized Jobs Collection** page, add jobs to the collection:
   - To add an existing job, select **Add Existing Job(s)**. Select the checkbox next to the name of each job to add and click **Add in Collection**.
   - To add a new job, select **Add New Job**. Follow the steps in [Create a Synchronize Job in Directory Manager](/docs/directorymanager/11.2/portal/synchronize/create/create.md).
2. To rename a job, click the **three vertical dots** button and click **Rename**.
3. To set the run order of a job, click the **three vertical dots** button and select **Move Up** or **Move Down**.
4. To set the action to take when a job fails, click its cell in the **On Failure** column and select one of the following:
   - **Abort**: Stops the execution of the remaining jobs in the collection.
   - **Continue**: Continues the execution of the next job in the collection.
5. To remove a job from the job collection, select the job and click **Remove**.
6. Click **Next step** to continue.
