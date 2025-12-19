---
title: "Monitoring Scope"
description: "Monitoring Scope"
sidebar_position: 40
---

# Monitoring Scope

Review a full list of all events Netwrix Auditor can collect on Qumulo Cluster.

| Event                                  | Description                                                          |
| -------------------------------------- | -------------------------------------------------------------------- |
| fs_create_directory                    | A new directory was created.                                         |
| fs_create_file                         | A new file was created.                                              |
| fs_create_hard_link                    | A new hard link was created.                                         |
| fs_create                              | A filetype other than one of the types captured above was created.   |
| fs_delete                              | An entity (file, link, directory) was deleted from the file storage. |
| fs_rename                              | An entity (file, link, directory) from the file storage was renamed. |
| fs_read_data                           | Read operation was performed.                                        |
| fs_write_data                          | Write operation was performed.                                       |
| fs_write_metadata                      | Write operation was performed (metadata was written).                |
| nfs_create_export                      | Created NFS Export that the client will mount to.                    |
| nfs_delete_export                      | Removed NFS Export that the client will mount to.                    |
| nfs_modify_export                      | Modified NFS Export that the client will mount to.                   |
| nfs_mount                              | Mount to NFS share.                                                  |
| replication_create_source_relationship | A replication object was created.                                    |
| replication_delete_source_relationship | A replication object was deleted.                                    |
| replication_modify_source_relationship | A replication object was modified.                                   |
| smb_create_share                       | A new SMB file share was created.                                    |
| smb_delete_share                       | An SMB file share was deleted.                                       |
| smb_modify_share                       | An SMB file share was modified.                                      |
| snapshot_create_snapshot               | A snapshot was created.                                              |
| snapshot_delete_snapshot               | A snapshot was deleted.                                              |
| snapshot_modify_snapshot               | A snapshot was modified.                                             |
