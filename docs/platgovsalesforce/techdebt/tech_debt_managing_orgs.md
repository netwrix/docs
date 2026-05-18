---
title: "Managing Orgs in the Real World"
description: "Managing Orgs in the Real World"
sidebar_position: 10
---

# Managing Orgs in the Real World

In a perfect world, there's time and resources to employ best practices with an experienced team
in every situation. However, the world isn't perfect, and technical debt accumulates, adding
difficulty and complexity to making enhancements and managing your orgs.

Platform Governance for Salesforce is designed for a real world where:

- Documentation is incomplete, non-existent or out of date.
- Customizations have not been tightly managed.
- Multiple administrators or developers have made changes without coordination.
- Orgs have been over-customized, poorly customized, or customizations have accumulated over time
  and now interfere with each other.
- Turnover of critical Salesforce (SFDC) team members has adversely affected tribal knowledge.
- Mergers and acquisitions have influenced the scope or objectives of each team and their orgs.

This situation can be daunting given the dependencies and complexities involved. Progress is achievable in steps rather than reaching for immediate perfection. Follow this path to realize progress quickly:

1. **Install** the managed package in each org.
2. **Initiate** the Scanner systematically in each org to generate automated documentation. The
   results provide visibility into the dependencies between all components of the org, what is used,
   unused and the risk posed by changes.
3. **Activate** Change Monitoring to alert stakeholders of risky changes. Platform Governance for
   Salesforce warns org owners and admins about risk at very granular levels.
4. **Plan** the clean up of unused, defunct, and redundant customizations using the powerful search
   capabilities.
5. **Implement** Automated Risk Management to guide all change agents to make enhancements in a
   structured, safe, and efficient manner.

This table describes the critical stages and how Platform Governance for Salesforce helps at each
stage.

:::tip
Each stage delivers benefits to significantly improve your ability to manage technical debt. Take your time and adjust the order based on your workload or priorities. The customer support team is available to assist in implementing Intelligent Change Enablement quickly to meet your immediate needs.
:::

| Stage                                        | Automated Documentation                                                            | Change Monitoring                                                        | Org Clean Up                                                                                | Change Enablement                                                                                                                                       |
| -------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Benefit**                                      | Plan your changes confidently with a firm understanding of what is in use          | Monitor all changes in all orgs for technical and organizational risk    | Simplify and maintain your orgs for future success                                          | Improve time to value with automated tools that assess risk and intelligently distribute work within your team                                          |
| **How Platform Governance for Salesforce Helps** | Creates visual, searchable documentation making it easy to understand complex orgs | Instantiates policies to mitigate risky changes before they are deployed | Simplifies clean up with a combination of automated tools, dependency models and usage data | Ensures changes are made properly, safely, and efficiently, resulting in up to 80% reduction in enhancement requests that require a Center of Excellence (CoE) or CI/CD process |

**Next Technical Debt Topic:** [Automated Documentation](/docs/platgovsalesforce/techdebt/tech_debt_auto_documentation.md)
