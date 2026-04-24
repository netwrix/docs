
## NPS-D Authorization Group(s) Feature (Additional Insight / Use)
<img width="1421" height="751" alt="image" src="https://github.com/user-attachments/assets/2519f529-9fe0-4e31-8066-4ac1e4c9ec63" />

### Overview

The **Authorization Group(s)** feature is available in the UI and was introduced in version **2.20.5**.

It is associated with migration **47**:
- **Name:** `service_account_group_strategy`  
- **Description:** Service Account Authorization Strategy  

This feature requires a database toggle to be enabled after the migration is applied during an upgrade.

---

### Enable the Feature

1. Verify migration status:
   ```bash
   s1 migrate status


2. If migration 47 is present but the feature is not enabled, connect to the database via CLI and run:

   ```javascript
   db.release_toggles.updateOne(
     { "name": "service_account_group_strategy" },
     { $set: { "enabled": true } },
     { upsert: false }
   )
   ```

---

### Feature Behavior

Originally, this feature was designed to:

* Persist (lock down) AD groups that contain **Protect Mode** accounts

When configured:

1. Set **Authorization Strategy** to `Group Account`
2. Add groups to the **Authorization Group(s)** field
3. Click **Save** under Domain Configuration

---

### Resulting Behavior

After systems are refreshed/rescanned:

* Groups are set to:

  * `onSystem = True`
  * `Persistent = True`
* In the UI:

  * The **Action** button is removed
  * No modifications can be made by users or admins
* Account type is set to **SecureONE** (service account)

⚠️ Important:

* This effectively grants **full access to all members of the group**
* Using this feature outside its intended purpose is **not recommended**

---

### Known Limitations

This feature is being used beyond its original design, so limitations are not fully defined. Current features:

* Unknown maximum number of groups supported
* Behavior depends on system refresh/rescan
* Locks configuration, preventing further UI changes

---

### Testing: Group/Account Update Steps

1. Log in to the UI using an AD account
2. Navigate to:

   ```
   Configure → Server
   ```
3. Expand **Domain Configuration**
4. Ensure:

   ```
   Authorization Strategy = Group Account
   ```

---

### Bulk Group Testing

Groups were added in batches using the format:

```
DOMAIN\GroupName
```

Tested batch sizes:

* 30 groups
* 60 groups
* 90 groups
* 200 groups

Steps:

1. Copy group list from a text editor
2. Paste into **Authorization Group(s)** field
3. Scroll down
4. Click **Save**

This process was repeated for each batch size.

---

### Summary

* Feature is powerful but risky if misused
* Designed for service account protection scenarios
* Can unintentionally grant broad access if applied incorrectly
* Use with caution and proper validation

