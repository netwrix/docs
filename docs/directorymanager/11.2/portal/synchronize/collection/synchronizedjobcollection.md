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

On the **Synchronized Jobs Collection** page, you view the list of jobs that you have added to the
collection and their information. You can add existing jobs or new jobs to the collections. You can
also rename, change the order, and remove jobs from the job collection.

1. On the **Synchronized Jobs Collection** page, add jobs to the collection.

- To add an existing job to the collection, select **Add Existing Job(s)**. Select the
  checkbox next to the name of each job to be added and click **Add in Collection**.
- To add a new job to the collection, select **Add New Job**. Follow the steps from
  [Create a Synchronize Job in Directory Manager](/docs/directorymanager/11.2/portal/synchronize/create/create.md).

2. Rename the jobs in the job collection by clicking the **three vertical dots** button and
click **Rename**.

3. Set the run order of an individual job by clicking the **three vertical dots** button and
then selecting **Move Up** or **Move Down**.

4. Set the action to take on the failure of a job by clicking its cell in the **On Failure**
column and then selecting one of the following:

- **Abort**: Stops the execution of the remaining jobs in the collection.
- **Continue**: Continues the execution of the next job in the collection.

5. If you want to remove a job from the job collection, select the required job and click
**Remove**.

6. Click **Next step** to continue.
