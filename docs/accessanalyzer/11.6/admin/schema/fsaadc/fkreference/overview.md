# Foreign Key Reference

## Complete Foreign Key Listing

| FK Name | Parent Table | Parent Columns | Referenced Table | Referenced Columns | On Delete |
|---|---|---|---|---|---|
| FK_SA_FSAA_ImportHistory_HOST | SA_FSAA_ImportHistory | HOST | SA_FSAA_Hosts | ID | CASCADE |
| FK_SA_FSAA_Trustees_HOST | SA_FSAA_Trustees | HOST | SA_FSAA_Hosts | ID | CASCADE |
| FK_SA_FSAA_LocalTrustees_ID | SA_FSAA_LocalTrustees | HOST, ID | SA_FSAA_Trustees | HOST, ID | CASCADE |
| FK_SA_FSAA_TrusteeEquivalence_TrusteeID | SA_FSAA_TrusteeEquivalence | HOST, TrusteeID | SA_FSAA_Trustees | HOST, ID | NO ACTION |
| FK_SA_FSAA_TrusteeEquivalence_EquivalentTrusteeID | SA_FSAA_TrusteeEquivalence | HOST, EquivalentTrusteeID | SA_FSAA_LocalTrustees | HOST, ID | CASCADE |
| FK_SA_FSAA_Rights_TrusteeID | SA_FSAA_Rights | HOST, TrusteeID | SA_FSAA_Trustees | HOST, ID | NO ACTION |
| FK_SA_FSAA_Tags_HOST | SA_FSAA_Tags | HOST | SA_FSAA_Hosts | ID | CASCADE |
| FK_SA_FSAA_TagKeys_HOST | SA_FSAA_TagKeys | HOST | SA_FSAA_Hosts | ID | CASCADE |
| FK_SA_FSAA_TagProxies_HOST | SA_FSAA_TagProxies | HOST | SA_FSAA_Hosts | ID | CASCADE |
| FK_SA_FSAA_TagProxies_TagProxyID | SA_FSAA_TagProxies | HOST, TagProxyID | SA_FSAA_TagKeys | HOST, TagProxyID | NO ACTION |
| FK_SA_FSAA_TagProxies_TagID | SA_FSAA_TagProxies | HOST, TagID | SA_FSAA_Tags | HOST, TagID | NO ACTION |
| FK_SA_FSAA_Resources_HOST | SA_FSAA_Resources | HOST | SA_FSAA_Hosts | ID | CASCADE |
| FK_SA_FSAA_Resources_ParentResourceID | SA_FSAA_Resources | HOST, ParentResourceID | SA_FSAA_Resources | HOST, ID | NO ACTION |
| FK_SA_FSAA_Resources_OwnerID | SA_FSAA_Resources | HOST, OwnerID | SA_FSAA_Trustees | HOST, ID | NO ACTION |
| FK_SA_FSAA_UnixRights_ResourceID | SA_FSAA_UnixRights | HOST, ResourceID | SA_FSAA_Resources | HOST, ID | CASCADE |
| FK_SA_FSAA_UnixRights_OwnerID | SA_FSAA_UnixRights | HOST, OwnerID | SA_FSAA_Trustees | HOST, ID | NO ACTION |
| FK_SA_FSAA_UnixRights_GroupID | SA_FSAA_UnixRights | HOST, GroupID | SA_FSAA_Trustees | HOST, ID | NO ACTION |
| FK_SA_FSAA_Gates_HOST | SA_FSAA_Gates | HOST | SA_FSAA_Hosts | ID | CASCADE |
| FK_SA_FSAA_Gates_ShareID | SA_FSAA_Gates | HOST, ShareID | SA_FSAA_Resources | HOST, ID | NO ACTION |
| FK_SA_FSAA_Gates_FolderID | SA_FSAA_Gates | HOST, FolderID | SA_FSAA_Resources | HOST, ID | NO ACTION |
| FK_SA_FSAA_Gates_PolicyID | SA_FSAA_Gates | HOST, PolicyID | SA_FSAA_Gates | HOST, ID | NO ACTION |
| FK_SA_FSAA_GatesProxy_GateID | SA_FSAA_GatesProxy | HOST, GateID | SA_FSAA_Gates | HOST, ID | CASCADE |
| FK_SA_FSAA_Policies_PolicyID | SA_FSAA_Policies | HOST, PolicyID | SA_FSAA_Gates | HOST, ID | CASCADE |
| FK_SA_FSAA_Policies_TrusteeID | SA_FSAA_Policies | HOST, TrusteeID | SA_FSAA_Trustees | HOST, ID | NO ACTION |
| FK_SA_FSAA_Exceptions_HOST | SA_FSAA_Exceptions | HOST | SA_FSAA_Hosts | ID | NO ACTION |
| FK_SA_FSAA_Exceptions_GateID | SA_FSAA_Exceptions | HOST, GateID | SA_FSAA_Gates | HOST, ID | CASCADE |
| FK_SA_FSAA_Exceptions_ResourceID | SA_FSAA_Exceptions | HOST, ResourceID | SA_FSAA_Resources | HOST, ID | NO ACTION |
| FK_SA_FSAA_Exceptions_TrusteeID | SA_FSAA_Exceptions | HOST, TrusteeID | SA_FSAA_Trustees | HOST, ID | NO ACTION |
| FK_SA_FSAA_Exceptions_SourceTrusteeID | SA_FSAA_Exceptions | HOST, SourceTrusteeID | SA_FSAA_Trustees | HOST, ID | NO ACTION |
| FK_SA_FSAA_ExceptionTypes_HOST | SA_FSAA_ExceptionTypes | HOST | SA_FSAA_Hosts | ID | CASCADE |
| FK_SA_FSAA_ProbableOwners_HOST | SA_FSAA_ProbableOwners | HOST | SA_FSAA_Hosts | ID | CASCADE |
| FK_SA_FSAA_ProbableOwners_ResourceID | SA_FSAA_ProbableOwners | HOST, ResourceID | SA_FSAA_Resources | HOST, ID | NO ACTION |
| FK_SA_FSAA_ProbableOwners_OwnerID | SA_FSAA_ProbableOwners | HOST, OwnerID | SA_FSAA_Trustees | HOST, ID | NO ACTION |
| FK_SA_FSAA_FileSizes_ResourceID | SA_FSAA_FileSizes | HOST, ResourceID | SA_FSAA_Resources | HOST, ID | CASCADE |
| FK_SA_FSAA_FileTypes_ResourceID | SA_FSAA_FileTypes | HOST, ResourceID | SA_FSAA_Resources | HOST, ID | CASCADE |
| FK_SA_FSAA_FileAges_ResourceID | SA_FSAA_FileAges | HOST, ResourceID | SA_FSAA_Resources | HOST, ID | CASCADE |
| FK_SA_FSAA_FileTags_ResourceID | SA_FSAA_FileTags | HOST, ResourceID | SA_FSAA_Resources | HOST, ID | CASCADE |
| FK_SA_FSAA_FileTags_TagProxyID | SA_FSAA_FileTags | HOST, TagProxyID | SA_FSAA_TagKeys | HOST, TagProxyID | NO ACTION |
| FK_SA_FSAC_ProcessNames_HOST | SA_FSAC_ProcessNames | HOST | SA_FSAA_Hosts | ID | CASCADE |
| FK_SA_FSAC_ActivityEvents_HOST | SA_FSAC_ActivityEvents | HOST | SA_FSAA_Hosts | ID | CASCADE |
| FK_SA_FSAC_ActivityEvents_PathID | SA_FSAC_ActivityEvents | HOST, PathID | SA_FSAA_Resources | HOST, ID | NO ACTION |
| FK_SA_FSAC_ActivityEvents_ProcessID | SA_FSAC_ActivityEvents | HOST, ProcessID | SA_FSAC_ProcessNames | HOST, ID | NO ACTION |
| FK_SA_FSAC_ActivityEvents_TrusteeID | SA_FSAC_ActivityEvents | HOST, TrusteeID | SA_FSAA_Trustees | HOST, ID | NO ACTION |
| FK_SA_FSAC_PermissionChanges_HOST | SA_FSAC_PermissionChanges | HOST | SA_FSAA_Hosts | ID | NO ACTION |
| FK_SA_FSAC_PermissionChanges_ActivityID | SA_FSAC_PermissionChanges | HOST, ActivityID | SA_FSAC_ActivityEvents | HOST, ID | NO ACTION |
| FK_SA_FSAC_PermissionChanges_TrusteeID | SA_FSAC_PermissionChanges | HOST, TrusteeID | SA_FSAA_Trustees | HOST, ID | NO ACTION |
| FK_SA_FSAC_OwnerChanges_HOST | SA_FSAC_OwnerChanges | HOST | SA_FSAA_Hosts | ID | NO ACTION |
| FK_SA_FSAC_OwnerChanges_ActivityID | SA_FSAC_OwnerChanges | HOST, ActivityID | SA_FSAC_ActivityEvents | HOST, ID | NO ACTION |
| FK_SA_FSAC_OwnerChanges_PreviousOwnerID | SA_FSAC_OwnerChanges | HOST, PreviousOwnerID | SA_FSAA_Trustees | HOST, ID | NO ACTION |
| FK_SA_FSAC_OwnerChanges_NewOwnerID | SA_FSAC_OwnerChanges | HOST, NewOwnerID | SA_FSAA_Trustees | HOST, ID | NO ACTION |
| FK_SA_FSAC_DailyActivity_HOST | SA_FSAC_DailyActivity | HOST | SA_FSAA_Hosts | ID | CASCADE |
| FK_SA_FSAC_DailyActivity_FolderID | SA_FSAC_DailyActivity | HOST, FolderID | SA_FSAA_Resources | HOST, ID | NO ACTION |
| FK_SA_FSAC_DailyActivity_TrusteeID | SA_FSAC_DailyActivity | HOST, TrusteeID | SA_FSAA_Trustees | HOST, ID | NO ACTION |
| FK_SA_FSAC_RenameTargets_HOST | SA_FSAC_RenameTargets | HOST | SA_FSAA_Hosts | ID | CASCADE |
| FK_SA_FSAC_RenameTargets_ActivityID | SA_FSAC_RenameTargets | HOST, ActivityID | SA_FSAC_ActivityEvents | HOST, ID | NO ACTION |
| FK_SA_FSAC_RenameTargets_TargetPathID | SA_FSAC_RenameTargets | HOST, TargetPathID | SA_FSAA_Resources | HOST, ID | NO ACTION |
| FK_SA_FSDLP_ImportHistory_HOST | SA_FSDLP_ImportHistory | HOST | SA_FSAA_Hosts | ID | CASCADE |
| FK_SA_FSDLP_Criteria_HOST | SA_FSDLP_Criteria | HOST | SA_FSAA_Hosts | ID | CASCADE |
| FK_SA_FSDLP_Matches_CriteriaId | SA_FSDLP_Matches | HOST, CriteriaId | SA_FSDLP_Criteria | HOST, ID | CASCADE |
| FK_SA_FSDLP_MatchHits_Match | SA_FSDLP_MatchHits | HOST, FileId, CriteriaId | SA_FSDLP_Matches | HOST, FileId, CriteriaId | CASCADE |
| FK_SA_FSDLP_MatchHits_SubjectProfile | SA_FSDLP_MatchHits_SubjectProfile | HOST, FileId, CriteriaId, ID | SA_FSDLP_MatchHits | HOST, FileId, CriteriaId, ID | CASCADE |
| FK_SA_FSDLP_MatchHits_SubjectProfile_Source | SA_FSDLP_MatchHits_SubjectProfile | SourceId | SA_SubjectProfile_Sources | Id | NO ACTION |
| FK_SA_FSDLP_MatchHits_SubjectProfile_Identity | SA_FSDLP_MatchHits_SubjectProfile | IdentityId | SA_SubjectProfile_Identities | Id | NO ACTION |
| FK_SA_FSDLP_MatchHits_SubjectProfile_Attribute | SA_FSDLP_MatchHits_SubjectProfile | IdentityId, AttributeId, Order | SA_SubjectProfile_AttributeValues | IdentityId, AttributeId, Order | CASCADE |
| FK_SA_FSDFS_Namespaces_Hosts | SA_FSDFS_Namespaces | RootHostID | SA_FSAA_Hosts | ID | CASCADE |
| FK_SA_FSDFS_Namespaces_GateID | SA_FSDFS_Namespaces | RootHostID, RootGateID | SA_FSAA_Gates | HOST, ID | NO ACTION |
| FK_SA_FSDFS_Links_NamespaceID | SA_FSDFS_Links | NamespaceID | SA_FSDFS_Namespaces | ID | CASCADE |
| FK_SA_FSDFS_Links_TargetHostID | SA_FSDFS_Links | TargetHostID | SA_FSAA_Hosts | ID | NO ACTION |
| FK_SA_FSDFS_Links_TargetGateID | SA_FSDFS_Links | TargetHostID, TargetGateID | SA_FSAA_Gates | HOST, ID | NO ACTION |
| FK_SA_FSDFS_Links_TargetResourceID | SA_FSDFS_Links | TargetHostID, TargetResourceID | SA_FSAA_Resources | HOST, ID | NO ACTION |
| FK_SA_FSDFS_Links_DfsResourceID | SA_FSDFS_Links | DfsHostID, DfsResourceID | SA_FSAA_Resources | HOST, ID | NO ACTION |
