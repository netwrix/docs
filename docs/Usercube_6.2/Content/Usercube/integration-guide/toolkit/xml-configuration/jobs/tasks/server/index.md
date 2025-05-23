---
sidebar_position: 777
title: Server Tasks
---

# Server Tasks

* [Build Role Model Task](buildrolemodeltask/index "Build Role Model Task")

  Applies the role naming rules, i.e. generates single roles and navigation rules based on resources matching a given pattern.
* [Compute Correlation Keys Task](computecorrelationkeystask/index "Compute Correlation Keys Task")

  The Compute Role Model correlation keys will pre-calculate all the keys needed by the Compute Role Model to match the resources.
* [Compute Risk Scores Task](computeriskscorestask/index "Compute Risk Scores Task")

  Update risk score with the risk settings.
* [Compute Role Model Task](computerolemodeltask/index "Compute Role Model Task")

  The Compute Role Model will calculate the role model of all whose EntityTypes sources are included in the list of EntityTypes given in the start of this job.
* [Deploy Configuration Task](deployconfigurationtask/index "Deploy Configuration Task")

  From a folder, retrieves all configuration xml files to calculate the configuration items to insert, update or delete.
* [Fulfill Task](fulfilltask/index "Fulfill Task")

  Retrieves provisioning orders from the informed connector generated by GenerateProvisioningOrdersTask to make changes in a system. Instead of a connector it is possible to launch it with a list of TaskResourceTypes.
* [Generate Provisioning Orders Task](generateprovisioningorderstask/index "Generate Provisioning Orders Task")

  The provisioning task will recover all resources whose provisioningState is at 1 to build a list of JSON files containing all provisioning orders.
* [Get Role Mining Task](getroleminingtask/index "Get Role Mining Task")

  Role mining is the process of analyzing user-to-resource mapping data to determine or modify user permissions for role-based access control (RBAC) in an enterprise. In a business setting, roles are defined according to job competency, authority and responsibility.
* [Invoke Expression Task](invokeexpressiontask/index "Invoke Expression Task")

  Launches on agent side a powershell script given as input.
* [Invoke Sql Command Task](invokesqlcommandtask/index "Invoke Sql Command Task")

  Takes as input an SQL file or an SQL command to output several CSV files that can be used by the collection.
* [Maintain Indexes Task](maintainindexestask/index "Maintain Indexes Task")

  Index maintenance and statistics update for all database tables.
* [Manage Configuration Indexes Task](manageconfigurationindexestask/index "Manage Configuration Indexes Task")

  Manage indexes for items from configuration.
* [Process Access Certification Items Task](processaccesscertificationitemstask/index "Process Access Certification Items Task")

  Process decisions on access certification items.
* [Reset Valid From Task](resetvalidfromtask/index "Reset Valid From Task")

  Initialize historization tables by setting each entity's first record `ValidFrom` value to 0001-01-01 00:00:00.00.
* [Save Pre-Existing Access Rights Task](savepreexistingaccessrightstask/index "Save Pre-Existing Access Rights Task")

  During an initial installation of Identity Manager, data normally provided by Identity Manager or through a derogation in the User Interface is already present in the application system.
* [Send Access Certification Notification Task](sendaccesscertificationnotificationtask/index "Send Access Certification Notification Task")

  Notify assigned users having pending access certification items in campaign marked with `NotificationNeeded`.
* [Send Notifications Task](sendnotificationstask/index "Send Notifications Task")

  Task that sends a notification to each configured recipient.
* [Send Role Model Notifications Task](sendrolemodelnotificationstask/index "Send Role Model Notifications Task")

  Task that sends a notification to all users who have pending roles to review, only for roles with a simple approval workflow, i.e. pending the validation 1 out of 1.
* [Set Access Certification Reviewer Task](setaccesscertificationreviewertask/index "Set Access Certification Reviewer Task")

  Assign access certification items to users according to their profiles and the access control rules.
* [Set Internal User Profiles Task](setinternaluserprofilestask/index "Set Internal User Profiles Task")

  Will execute the profile rules of the different resource types given in parameters to create, modify or delete profiles in automatic mode.
* [Set Recently Modified Flag Task](setrecentlymodifiedflagtask/index "Set Recently Modified Flag Task")

  When synchronizing in full or incremental mode, it is possible to optimize the compute performance of the role model by taking into account only the changes made by the synchronization.
* [Synchronize Task](synchronizetask/index "Synchronize Task")

  Retrieves the files generated by the prepare-synchronization task to insert the data into the Identity Manager database.
* [Update Access Certification Campaign Task](updateaccesscertificationcampaigntask/index "Update Access Certification Campaign Task")

  Starts or stops the access certification campaigns according to their `StartDate` and `EndDate`.
* [Update Classification Task](updateclassificationtask/index "Update Classification Task")

  Classifies a list of resources that are part of the resourceType data targets as an argument to this job.
* [Update Entity Property Expressions Task](updateentitypropertyexpressionstask/index "Update Entity Property Expressions Task")

  Calculates either for all entities or for a list of entities the expressions and inserts the values in the database.