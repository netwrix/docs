# Scenario 2: Specific Rule to Block an App from Being Run, Even as Local System

**NOTE:** For an overview of this scenario, see the
[Block PowerShell in General, Open up for specific items](/docs/endpointpolicymanager/video/leastprivilege/bestpractices/powershellblock.md)
video demo.

You might want to explicitly block attack vectors such as PSEXEC (which was used in WannaCry) or
entirely block PowerShell.  If you specify to do this only on the User side (or set Computer side
scope to User processed only), then only user processes will be affected.

![A screenshot of a computer Description automatically generated](/img/product_docs/endpointpolicymanager/endpointpolicymanager/leastprivilege/scopefilters/scenario_2_specific_rule_to.webp)

You can shore up this attack vector by making the explicit deny rule on the Computer side.

![A screenshot of a computer Description automatically generated](/img/product_docs/endpointpolicymanager/endpointpolicymanager/leastprivilege/scopefilters/scenario_2_specific_rule_to_1.webp)

When you do, PowerShell is blocked for Standard and System.

![A screenshot of a computer Description automatically generated](/img/product_docs/endpointpolicymanager/endpointpolicymanager/leastprivilege/scopefilters/scenario_2_specific_rule_to_2.webp)
