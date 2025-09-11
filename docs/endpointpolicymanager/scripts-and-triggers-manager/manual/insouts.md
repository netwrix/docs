---
title: "Scripts and Triggers Manager Ins and Outs"
description: "Understanding the ins and outs of Scripts and Triggers Manager"
sidebar_position: 40
---

# Scripts and Triggers Manager Ins and Outs

Netwrix Endpoint Policy Manager Scripts and Triggers Manager provides comprehensive script management capabilities for enterprise environments. This guide covers the essential aspects of configuration and deployment.

## Key Configuration Options

Scripts and Triggers Manager offers flexible configuration options to meet various enterprise requirements:

### Script Types Supported
- **PowerShell Scripts**: Modern Windows automation
- **Batch Files**: Traditional Windows batch processing  
- **VBScript**: Legacy Visual Basic scripting
- **JavaScript**: Cross-platform scripting support

### Execution Contexts
- **User Context**: Scripts run with user permissions
- **Computer Context**: Scripts run with system permissions
- **Elevated Privileges**: Administrative execution when required

## Deployment Scenarios

### Group Policy Integration
Scripts can be deployed through traditional Group Policy mechanisms, providing familiar management workflows for IT administrators.

### Cloud-Based Management
Integration with Endpoint Policy Manager Cloud enables modern management approaches for hybrid and remote environments.

### Hybrid Deployments
Combine on-premises and cloud management for maximum flexibility across diverse infrastructure configurations.

## Best Practices

1. **Test Thoroughly**: Always test scripts in development environments before production deployment
2. **Use Proper Logging**: Implement comprehensive logging for troubleshooting and compliance
3. **Security Considerations**: Follow principle of least privilege when configuring execution contexts
4. **Version Control**: Maintain proper version control for script deployments
5. **Documentation**: Document script purpose, requirements, and expected outcomes

## Troubleshooting

For troubleshooting guidance, refer to the Technical Notes section which provides detailed information on common issues and their resolutions.