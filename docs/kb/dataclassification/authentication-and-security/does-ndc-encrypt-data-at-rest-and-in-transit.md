# Does Netwrix Data Classification (NDC) encrypt data at rest and in transit?

## Summary

Yes. Netwrix Data Classification (NDC) supports encryption for sensitive data both at rest and in transit.

NDC encrypts sensitive stored data such as credentials, secrets, tokens, and other confidential configuration values before storage. NDC also supports secure communication for web traffic, APIs, database connections, cloud integrations, and outbound email, depending on deployment configuration.

## Applies To

- Netwrix Data Classification (NDC)

## Information

### Data at Rest

NDC encrypts sensitive stored data to help protect it from unauthorized access.

Examples include:
- System credentials
- Connector secrets
- OAuth tokens
- API keys
- Client secrets
- Private keys
- Passwords
- Certificate thumbprints

NDC also supports optional encryption of extracted text data. This feature can be enabled when required by an organization’s security policy.

### Data in Transit

NDC supports secure communication methods to protect data in transit.

This includes:
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

### Cryptographic Support

NDC includes standard cryptographic capabilities to support secure product operation, including:
- AES encryption for sensitive stored data
- SHA-256 for hashing-related operations
- X.509 certificate support for certificate-based scenarios
- Secure key exchange support for distributed deployment scenarios

## Resolution

No action is required to enable core encryption support for sensitive data handling in NDC.

Customers with specific security or compliance requirements should review their deployment configuration to confirm that optional settings such as HTTPS enforcement, database transport encryption, SMTP encryption, and extracted text encryption are enabled according to organizational policy.

## Additional Information

Actual encryption behavior may vary depending on deployment architecture and configuration. For environment-specific validation, review the deployed settings in your environment or contact Netwrix Support.
