---
title: "MIP Labels"
description: "Set Up MIP Integration"
sidebar_position: 70
---

# Set Up MIP Integration

To integrate Netwrix Data Classification with MIP technology, you need to perform the following
steps:

- Set up application registration in Microsoft Azure
- Load your certificate to Internet Information Services (IIS) Manager
- Export the certificate as .CER file
- Upload the .CER file to Azure

To configure IT infrastructure for MIP integration

Review the following for additional information:

| To...                                              | Do...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Set up application registration in Microsoft Azure | Run through the steps described in the following Microsoft article: [Register a client application with Azure Active Directory](https://docs.microsoft.com/en-us/information-protection/develop/setup-configure-mip#register-a-client-application-with-azure-active-directory). Make sure that the following API permissions are set (and have been granted for the tenant): - Azure Rights Management Services - Content.DelegatedWriter - Content.Writer - Microsoft.Graph - User.Read - Microsoft Information Protection Sync Service - UnifiedPolicy.Tenant.Read |
| Import certificate in IIS                          | You can generate custom certificate in IIS which is enough for test and evaluation purposes. However, for production environments, Netwrix recommends importing certificate used by your company. Contact your security administrator to get the certificate. **NOTE:** This certificate need to be installed to the computer where Netwrix Data Classification and all its services run.                                                                                                                                                                            |
| Export .CER file                                   | 1. In Internet Information Services (IIS) Manager, select the certificate you loaded. 2. Select View under Actions. 3. Go to Details tab and select Copy to File. 4. Proceed with Certificate Export wizard. 5. On the Export Private Key step, select Do not export the private key. 6. On the Export File Format step, select DER encoded binary (.CER). 7. On the File to Export step, select path to store the file. 8. Review export settings and click Finish.                                                                                                 |
| Upload the .CER file to Azure                      | 1. Open [Microsoft Azure portal](https://azure.microsoft.com/en-gb/features/azure-portal/) and navigate to Azure Active Directory → App Registrations. 2. Select application you registered on the Set up application registration in Microsoft Azure step. 3. Navigate to Certificates & secrets on the left. 4. Click Upload certificate. 5. Browse for .CER file you exported and click Add. 6. Copy certificate thumbprint to a known location as it will be required later.                                                                                     |
