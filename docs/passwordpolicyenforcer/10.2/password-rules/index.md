# Rules

Netwrix Password Policy Enforcer uses rules to decide if it should accept or reject a password. Each
policy has rules that are configured independently of the rules in other policies. To display the
rules for a policy:

**Step 1 –** Click the Policies item to display the Policies view.

**Step 2 –** Double-click the desired policy in the right pane of the management console.

Rules are shown in the right pane of the management console. A check mark beside a rule indicates
that the rule is enabled (being enforced). Double-click a rule to show the rule's properties.

## Detecting Character Substitution

Character substitution is a technique used by some users to improve password quality. They replace
some alphabetic characters with non-alphabetic characters that have a similar appearance. For
example, "sold" becomes "$old". Many of these substitutions are well known and do little to improve
password strength.

Some Password Policy Enforcer rules have a Detect Character Substitution check box. When this check
box is selected, Password Policy Enforcer tests passwords with, and without character substitution.
This stops users from circumventing the rule by substituting some characters. Password Policy
Enforcer detects these common character substitutions:

| Original |     | Substituted       |
| -------- | --- | ----------------- |
| A        | a   | ^ @               |
| B        | b   | 8                 |
| C        | c   | ( or \{ or < or [ |
| D        | d   | ) or \} or > or ] |
| E        | e   | 3                 |
| G        | g   | 6 or 9            |
| I        | i   | ! or \| or 1      |
| O        | o   | 0 or (zero)       |
| S        | s   | $ or 5            |
| T        | t   | + or 7            |
| Z        | z   | 2                 |

## Tolerance

Some Password Policy Enforcer rules have a Tolerance drop-down list that allows you to control how
strictly the rule is enforced. Tolerance is normally expressed as the maximum allowable number of
consecutive matching characters in the password and some other parameter. Password Policy Enforcer
rejects a password if the specified tolerance is exceeded. For example, the logon name
"mary**jones**", and the password "**Jones**town" contain five consecutive matching characters
(shown in bold type). Password Policy Enforcer will reject this password if the tolerance for the
User Logon Name rule is four (or lower), and accept it if the tolerance is five (or higher).

The User Logon Name, User Display Name, Similarity, and Character Patter rules have an Auto
tolerance option. Setting the tolerance to Auto instructs Password Policy Enforcer to only reject
passwords that contain the entire parameter being compared. This is very useful when the length of
the comparison parameter is unknown. For example, if you want Password Policy Enforcer to reject
passwords that contain the user's entire logon name, then you cannot specify a fixed tolerance
unless all logon names have the same length. Setting the tolerance to Auto allows Password Policy
Enforcer to calculate an appropriate tolerance during every password change.

Password Policy Enforcer sets the tolerance to the length of the comparison parameter minus one. The
table below shows some parameter values and the calculated tolerance. Password Policy Enforcer
rejects a password if it contains all the text in the Value column (or a derivative of it if
character substitution detection or bi-directional analysis is enabled).

| Rule              | Parameter         | Value      | Tolerance |
| ----------------- | ----------------- | ---------- | --------- |
| User Logon Name   | Logon name        | maryjones  | 8         |
| User Display Name | Display name      | Mary Jones | 9         |
| Similarity        | Current password  | oldpass    | 6         |
| Character Pattern | Character pattern | abcdefgh   | 7         |

Password Policy Enforcer's Auto tolerance calculation has a minimum limit to stop passwords from
being rejected when the comparison parameter is very short. The limit is set to two characters by
default, so Password Policy Enforcer will accept passwords that contain the parameter value if the
comparison parameter only contains one or two characters. Contact Netwrix support if you need to
change the minimum limit.
