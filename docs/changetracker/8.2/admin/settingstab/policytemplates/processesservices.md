---
title: "Policy Templates: Processes and Services"
description: "Policy Templates: Processes and Services"
sidebar_position: 80
---

# Policy Templates: Processes and Services

The **Processes** and **Services** tab allows Processes and/or Services (Windows only) and their
states to be defined within your **Configuration Policy** as either Whitelisted or Blacklisted.

A key indicator of breach or malware activity is the existence of new processes or services.
Likewise, configuration hardening and vulnerability mitigation always requires unnecessary services
and daemons to be removed or disabled. Therefore, it is important to track process lists and
services and their states.

Any non-necessary Services or Services you are generally unconcerned about should be marked as
**Ignore State**.

![PolicyTemplatesProcessesServices](/images/changetracker/8.1/admin/settings/policytemplates/policytemplatesprocessesservices2.webp)

- \_**\_Uncategorized Process/Service Action\_\_** - Use this option if you want to be alerted to
  the presence of any new, uncategorized processes or services. This is an option as in some
  situations it may be convenient to be alerted to missing, key processes.

- \_**\_Polling Frequency\_\_** - See previous Change Tracker notes.

- Define Process (Service) Name - Processes/Services can be defined as either Required, Blacklisted,
  Whitelisted or Graylisted.

    - \_**\_Required\_\_** - The Process/Service must be in the state required and an alert will be
      raised if this is not the case.
    - Whitelisted - The Process/Service is allowed to be present, but this is not mandatory.
    - Blacklisted - The Process/Service is never allowed to be present, and an alert will be raised
      if this is not the case.
    - Graylisted- The process/service has not yet been allocated to another category.
