---
title: "Dictionary Rule"
description: "Dictionary Rule"
sidebar_position: 60
---

# Dictionary Rule

The Dictionary rule rejects passwords that are vulnerable to guessing, hybrid, and precomputed
attacks. These attacks can crack weak passwords in seconds, and they can be very effective if
passwords are based on common words.

There are two Dictionary rules in each password policy. You can use the second rule with a different
dictionary file, or to enforce a more tolerant policy for passphrases by disabling the primary rule
for long passwords.

- Enable the **Dictionary** button to enable the Dictionary rule.
- The Dictionary file box displays name **Dict.txt** of a sample file, it is installed in the
  **\Program Files\Password Policy Enforcer** folder. This file is sorted and ready to use. It
  contains approximately 257,000 words, names, and acronyms.
- If you wish to add a secondary dictionary, **Click** +Add Dictionary to add a secondary
  dictionary.
- **Type** a path of the secondary dictionary file in the Secondary dictionary box.  
  You can specify rules for both the dictionaries as follows:

    - Select the **Detect inclusion of non-alpha characters** check box if Password Policy Enforcer
      should remove all non-alphabetic characters during analysis. This allows Password Policy
      Enforcer to reject passwords such as "myp8asswor8d."
    - Select the **Detect character substitution** check box if Password Policy Enforcer should
      reject passwords that rely on character substitution to comply with this rule.
    - Select the **Bi-directional analysis** check box if Password Policy Enforcer should
      additionally test passwords with their characters reversed. Enabling bi-directional analysis
      stops users from circumventing this rule by reversing the order of characters in their
      password. For example, a user may enter "drowssapym" instead of "mypassword".
    - Select the **Wildcard analysis** check box if Password Policy Enforcer should search for
      wildcard templates in the dictionary file. Wildcard templates are specially formatted
      dictionary words that Password Policy Enforcer uses to reject a range of passwords. The
      Dictionary rule supports two wildcard template formats:

<table>
<thead>
<tr>
<th>Format</th>
			    <th>Example</th>
			    <th>Description</th>
		    </tr>
	  </thead>
	    <tbody>
		  <tr>
			  <td valign="top">Prefix</td>
			  <td>
			    <table>
			      <tbody>
						  <tr>
							  <td>!!BAN*!!</td>
						  </tr>
						  <tr>
							  <td>!!2*!!</td>
						  </tr>
			      </tbody>
			    </table>
			  </td>
			  <td>
				  <table>
				    <tbody>
					    <tr>
					      <td>Rejects passwords that start with BAN. For example:&#160;band, banish, ban, bank, etc.</td>
					    </tr>
					    <tr>
						    <td>Rejects passwords that start with the numeric character 2. For example: 2ABC, 2123, etc. </td>
					    </tr>
					  </tbody>
				  </table>
			  </td>
		  </tr>
		<tr>
			<td valign="Top">
				Suffix
			</td>
			<td valign="Top">
				!!*ING!!
			</td>
			<td>
				Rejects passwords that end with ING. For example:&#160;pushing, howling, trying, etc.
			</td>
		</tr>
	</tbody>
</table>


        Partial matching is performed even if Wildcard analysis is disabled. For example, the
        dictionary word "password" will reject the passwords "My**Password**$", "**Password**100",
        and "12**password**34" even if Wildcard analysis is disabled.

        Wildcard analysis should only be used to limit matching to the characters at the start or
        end of a password.

        Enabling Wildcard analysis slightly increases search times, so only enable this option if
        the dictionary file contains wildcard templates. The sample dictionary file included with
        Password Policy Enforcer does not contain any wildcard templates.

    - Choose a value from the Tolerance drop-down list to specify the maximum number of consecutive
      matching characters that Password Policy Enforcer will tolerate before rejecting a password.
      For example, the dictionary word "**sword**", and the password "4my**sword**%" contain five
      consecutive matching characters (shown in bold type). Password Policy Enforcer will reject
      this password if the tolerance is four (or lower), and accept it if the tolerance is five (or
      higher).
