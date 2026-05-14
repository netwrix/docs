---
title: "Data Encryption at Rest and in Transit"
description: >-
  Netwrix Data Classification (NDC) supports encryption for sensitive data
  at rest and in transit, including credentials, tokens, and API keys.
  This article describes NDC's encryption methods, authentication support,
  and deployment considerations.
sidebar_label: "Data Encryption at Rest and in Transit"
keywords:
  - encryption
  - data at rest
  - data in transit
  - AES
  - TLS
  - HTTPS
  - credentials
  - Netwrix Data Classification
  - NDC
  - security
  - cryptography
  - certificates
products:
  - data_classification
tags:
  - kb
knowledge_article_id: kA0Qk000000XXXXKAA
---                                                                                                                               
                                                                                                                                                         
  # Data Encryption at Rest and in Transit                                                                                                               
                                                                                                                                                     
  ## Question

  Does Netwrix Data Classification (NDC) encrypt data at rest and in transit?
                                                                                                                                                         
  ## Answer                                                                                                                                              
                                                                                                                                                         
  Yes. NDC supports encryption for sensitive data both at rest and in transit, depending on deployment configuration.                                    
                                                                                                                                                     
  ### Data at Rest

  NDC encrypts sensitive stored data to protect it from unauthorized access. This includes:

  - System credentials
  - Connector secrets
  - OAuth tokens                                                                                                                                         
  - API keys                                                                                                                                             
  - Client secrets                                                                                                                                       
  - Private keys                                                                                                                                         
  - Passwords                                                                                                                                        
  - Certificate thumbprints

  NDC also supports optional encryption of extracted text data. Organizations can enable this when required by their security policy.

  ### Data in Transit
                                                                                                                                                         
  NDC supports secure communication methods to protect data in transit. This includes:                                                                   
                                                                                                                                                         
  - HTTPS for web application traffic                                                                                                                    
  - HTTPS for API communication                                                                                                                      
  - Encrypted database connections, where configured
  - HTTPS for supported cloud integrations
  - TLS/SSL for outbound SMTP, where configured                                                                                                          
  - Encrypted communication between internal services                                                                                                    
                                                                                                                                                         
  ### Authentication                                                                                                                                     
                                                                                                                                                     
  NDC supports the following authentication methods:

  - Windows Authentication
  - Forms Authentication
  - Azure AD
  - SAML

  Authentication-related data is protected using established platform security controls.
                                                                                                                                                         
  ### Cryptographic Standards                                                                                                                            
                                                                                                                                                         
  NDC includes standard cryptographic capabilities to support secure product operation:                                                                  
                                                                                                                                                     
  - AES encryption for sensitive stored data
  - SHA-256 for hashing operations
  - X.509 certificate support for certificate-based scenarios
  - Secure key exchange for distributed deployment scenarios                                                                                             
                                                                                                                                                         
  ### Deployment Considerations                                                                                                                          
                                                                                                                                                         
  Core encryption for sensitive data handling does not require additional configuration. Customers with specific security or compliance requirements 
  should review their deployment configuration to confirm that optional settings are enabled per organizational policy:

  - HTTPS enforcement
  - Database transport encryption                                                                                                                        
  - SMTP encryption                                                                                                                                      
  - Extracted text encryption                                                                                                                            
                                                                                                                                                         
  > **NOTE:** Actual encryption behavior may vary depending on deployment architecture and configuration. For environment-specific validation, review the
   deployed settings in your environment or contact Netwrix Support.
