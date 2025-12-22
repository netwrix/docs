---
title: "Editing the HTML Templates"
description: "Editing the HTML Templates"
sidebar_position: 70
---

# Editing the HTML Templates

Password Reset's user interface is built with customizable templates. You can easily modify the user
interface by editing the templates. The templates are written in HTML5 and formatted with CSS3, so
they work with all modern web browsers. Older browsers such as Internet Explorer 8 may work, but the
pages may be badly formatted. Please [contact Netwrix support](mailto:support@netwrix.com) if you
need to use Password Reset with older web browsers.

## User Interface Files

Password Reset installs seven `.htm` files for every language. Each filename starts with a language
code. The files for the US English language are:

| Filename          | Content                              |
| ----------------- | ------------------------------------ |
| `en_default.htm`  | Static HTML for the menu page        |
| `en_enroll.htm`   | Template for the Enroll page         |
| `en_reset.htm`    | Template for the Reset pages         |
| `en_unlock.htm`   | Template for the Unlock pages        |
| `en_change.htm`   | Template for the Change pages        |
| `en_finished.htm` | Template for the Finished page       |
| `en_error.htm`    | Template for the Critical Error page |

The formatting information is in `apr.css`, and the image files are in the images folder. These
files are installed into the `\Inetpub\wwwroot\pwreset\` folder by default.

:::note
Always backup the user interface files before and after editing them. Your changes may be
overwritten when Password Reset is upgraded, and some changes could stop Password Reset from working
correctly. Having a backup allows you to quickly revert to a working setup.
Web browsers display pages differently, so test your changes with several versions of the most
popular browsers to ensure compatibility.
:::


### Ranges and Fields

`en_default.htm` contains static HTML, but the other .htm files contain special comment tags that
are used to prepare the pages. Some of these comments define ranges. A range looks like this:

**<!--RANGE_NAME-->Some text or HTML<!--/RANGE_NAME-->**

The Web Interface deletes ranges (and the text inside them) when they are not needed. Some ranges
span only one word, while others span several lines. The other type of comment tag is called a
field.

**<!--USERNAME-->**

Fields are replaced by some other information. For example, the field above is replaced with a
username.

### Resource Strings

Each template ends with a resource string section.

`{/*RESOURCE_STRINGS*/}{/*`

`@RES_EMPTY_FIELD_USERNAME: Enter your username in the Username box. @RES_EMPTY_FIELD_DOMAIN: Enter your domain name in the Domain box.`

`*/}{/*/RESOURCE_STRINGS*/}`

Resource strings are mostly validation error messages, but they can contain any text Password Reset
may need to build the page. Do not modify the identifiers on the left, only edit the text on the
right. Resource strings are always inside a range called RESOURCE_STRINGS. Password Reset deletes
this range before sending the page to the user's web browser. See the
[Error Messages](using_password_reset.md#error-messages) topic for additional information.

### Responsive Content

Password Reset's templates are responsive. The page layout and content changes to suit the user's
screen size. The layout is defined in the CSS file, and the content in the HTML files. The
text_short and text_long classes are used to display different content depending on the screen size.
text_short elements are shown on small screens (up to 420 pixels wide). text_long elements are shown
on larger screens.

:::warning
You may rebrand the Password Reset user interface, but it is a violation of the License
Agreement to modify, remove or obscure any copyright notice.
:::


## Examples

This section contains examples of common customizations. Use these examples to gain a better
understanding of Password Reset's templates. You don't need to be an expert in HTML to follow these
examples, but a basic understanding of HTML will help.

Work through them carefully, and backup files before you edit them. The examples in this section are
from the US English files, but the format is the same for all languages.

### Replace the Netwrix Logo

The Netwrix logo is shown at the top of the page. The logo is installed into the
`\Inetpub\wwwroot\pwreset\images\` folder by default, and it is called logo.svg. You can replace
this file with one containing your organization's logo.

You will also need to edit the HTML files if your logo is not in SVG format, or if it has a
different aspect ratio to the Netwrix logo. Open every HTML file in a text editor such as Notepad,
and search for the line shown below. Change the filename (logo.svg), height (70 pixels) and width
(116 pixels) to suit your logo.

`<img class="logo" src="images/logo.svg" height="70" width="116" alt="NETWRIX" onerror="this.style.display='none';">`

### Edit Page Instructions

Instructions appear at the top of each page. You can edit the instructions by opening the relevant
.htm file and searching for the text you wish to modify.

Instructions are often inside a range called SECTION_A, SECTION_B, SECTION_C, or SECTION_D. Each
section contains instructions for the different pages in the template. Make sure you edit the
instructions in the correct section, or they may be displayed on the wrong page. The text_long and
text_short classes are used in page instructions to tailor content to the screen size.

`{/*SECTION_A*/}`

`<p>Enter your username and domain, and then click Next to continue…`

`<p class="text_long">Use the reset feature if you have forgotten y…`

`{/*/SECTION_A*/}`

`{/*SECTION_B*/}`

`<p>Answer the question below to confirm your identity. Your answer…`

`<p class="text_long">You may need to answer additional questions b…`

`{/*/SECTION_B*/}`

### Edit Validation Error Messages

Validation error messages are shown in a red box below the page instructions. Validation errors are
normally caused by invalid user input.

![using_npr_12](/images/passwordpolicyenforcer/11.0/passwordreset/administration/using_npr_12.webp)

Validation error messages are defined in the relevant template (en_enroll.htm, en_reset.htm,
en_unlock.htm, or en_change.htm). The error messages are in the resource strings section near the
end of the file. Some messages are defined in more than one file, so you may need to edit several
files to change all instances of a message. See the Resource Strings topic for more information.

You may see placeholders like %1 and %2 in some error messages. These are replaced with more
information about the error. You should keep these, but you can delete them if you do not want them.

| String                      | Message                                         |
| --------------------------- | ----------------------------------------------- |
| `@RES_EMPTY_FIELD_EMAIL`    | `Enter your e-mail address in the E-mail box.`  |
| `@RES_EMPTY_FIELD_QUESTION` | `Select a question from the Question %1 list.`  |
| `@RES_IDENTICAL_QUESTIONS`  | `Question %1 and %2 are the same. Select a di…` |

### Edit Critical Error Messages

All the critical error messages are defined in en_error.htm. The messages are in the resource
strings section near the end of the file. See the Resource Strings topic for more information.

![using_npr_13](/images/passwordpolicyenforcer/11.0/passwordreset/administration/using_npr_13.webp)

You may see placeholders like %1 and %2 in some error messages. These are replaced with more
information about the error. You should keep these, but you can delete them if you do not want them.

| String                | Message                                               |
| --------------------- | ----------------------------------------------------- |
| `@RES_LOCKED_OUT`     | `This feature has been disabled because too many qu…` |
| `@RES_LOCKED_OUT_AD`  | `Your account is locked because an incorrect passwo…` |
| `@RES_REQUEST_FAILED` | `The server %1 could not handle your request. Pleas…` |

If you want to display some text for all error messages, then insert your text above or below the
`<p>{/*ERROR*/}</p>` line. For example:

```html
<p>{/*ERROR*/}</p>
<p>The help desk phone number is 555-555-5555.</p>
```

### Edit Finished Messages

Finished messages are shown after users successfully complete an enroll, reset, unlock, or change.
These messages are defined in the Resource Strings section near the end of `en_finished.htm`. See
the Resource Strings topic for more information.

![using_npr_9](/images/passwordpolicyenforcer/11.0/passwordreset/administration/using_npr_9.webp)

`en_finished.htm` has two resource strings for password changes (RES_FINISHED_CHANGE and
RES_FINISHED_CHANGE_INVITE). The first is shown when a user who has enrolled into NPR changes their
password. The second is shown when a user who has not enrolled changes their password. The second
message invites the user to enroll so they can also use the reset and unlock features in future.

### Replace Enroll Question Lists with Text Boxes

When users enroll into Password Reset, they choose their questions from the Question List. You can
replace some or all of the question lists with text boxes so users can enter their own questions.
See the [Question List](/docs/passwordreset/3.3/administration/configuringpasswordreset/enroll_tab.md#question-list) topic for additional information.

The lines you need to edit in en_enroll.htm look like this:

`<select class="field_question_list" name="q1" id="q1">{/*QL1*/}</select>`

There are ten of these lines in en_enroll.htm, each with their own question number (the number after
the q). You do not have to edit all ten lines. If users will be allowed to enter two questions, then
only edit the q1 and q2 lines. Replace these lines with a line like this:

`<input class="field_question" name="q1" id="q1" value="{/*Q1*/}" maxlength="64">`

Change the three question numbers on each line so they match the original numbers, otherwise
Password Reset will not work correctly. You should also edit the validation error messages in
`en_enroll.htm` as some of them make reference to selecting questions from a list.

:::note
Users may not choose appropriate security questions, so it is advisable to leave the
question lists for some of the enrollment questions.
:::


### Change Font Sizes and Colors

apr.css contains the user interface formatting information. You can change font sizes and colors by
editing this file. You can even reposition and resize items, but you will need some understanding of
CSS to do this. For example, this is the CSS for the validation error box:

```css
.apr_form .error {
    background-color: #ce482f;
    border-radius: 5px;
    color: #fff;
    margin: 0 15px 15px;
    padding: 10px 13px;
}
```

Edit these properties to change the appearance of the error box. You may need to clear your web
browser's cache to see the changes.

### Change Icon Colors

The Web Interface icons are in Scalable Vector Graphics (SVG) format. Vector graphics maintain their
sharpness when resized. You can easily change the colors of the icons with a text editor. Open the
SVG file with a text editor like Notepad, and edit this section of the file:

`fill="#FF7F00"`

Replace the hexadecimal color code with your desired color code. You can use a color picker like
this one to generate the color code:
[https://www.w3schools.com/colors/colors_picker.asp](https://www.w3schools.com/colors/colors_picker.asp)

:::note
Some old web browsers with basic HTML5 support cannot display SVG images. Password Reset
works with these browsers, but the SVG images are not shown. You can convert the icons to GIF or PNG
format if you want them shown on these older browsers.

:::
