# Recommended Configurations for the Open Access Job Group

Dependencies

None

Targeted Hosts

All Windows Servers

Connection Profile

Configure a Connection Profile that is not part of the Domain Admin group. The report should be run with a non-privileged user account.

Schedule Frequency

This job in this job group should be scheduled to run daily.

Workflow

__Step 1 –__ Configure a Connection Profile that is not part of the Domain Admin group.

__Step 2 –__ Assign All Windows Servers under Hosts List Assignment.

__Step 3 –__ (Optional) Configure the subfolder depth in the OpenAccess query.

__Step 4 –__ Schedule the Open Access job group to run daily.

__Step 5 –__ Review the reports generated by the jobs.
