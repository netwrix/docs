---
title: "WorkflowPerformerNotification"
description: "WorkflowPerformerNotification"
sidebar_position: 100
---

# WorkflowPerformerNotification

## Examples

```

**<WorkflowPerformerNotification Workflow="Directory_User_ChangeName"/>**

```

## Properties

| Property          | Details                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------- |
| Workflow optional | **Type** String **Description** Identifier of the workflow involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<NotificationAspect Identifier="PerformerNotification_Directory_User_ChangeName" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="<div>  <div style="font-family:'Segoe UI','-apple-system','BlinkMacSystemFont','Roboto','Arial',sans-serif; color:#212121; font-size:14px; background:#f8f8f8">    <table border="0" cellpadding="0" cellspacing="0" width="100%">      <tbody>        <tr>          <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px">          </td>          <td class="x_content" width="640" style="padding:0px; max-width:640px; background-color:white; border-bottom:solid #eaeaea 1px">            <table border="0" cellpadding="0" cellspacing="0" width="100%">              <tbody>                <tr>                  <td style="padding:20px 24px 25px 24px; background:white">                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table">                      <tbody>                        <tr>                          <td>                            <table border="0" cellpadding="0" cellspacing="0" class="x_logo" width="100%">                              <tbody>                                <tr>                                  <td valign="middle" style="vertical-align:middle">                                    <img data-imagetype="External" src="@(new System.Uri(Html.Context.ApplicationUri, "logo.webp").AbsoluteUri)" height="34" width="133">                                  </td>                                </tr>                              </tbody>                            </table>                          </td>                        </tr>                      </tbody>                    </table>                  </td>                </tr>                <tr>                  <td class="x_hero" style="padding:0px 24px">                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table" style="max-width:592px">                      <tbody>                        <tr>                          <td>                            <table width="100%" border="0" cellspacing="0" cellpadding="0">                              <tbody>                                <tr>                                  <td>                                    <!-- HEADER START -->                                    <table>                                      <tbody>                                        <tr>                                          <td class="x_title" style="padding:0 0 24px 0; color:#212121; font-size:28px; font-weight:bold; letter-spacing:-0.04em; line-height:40px; word-break:break-word">                                            @(Html.Context.MessageSubject ?? "Request summary")
                                          </td>                                        </tr>                                        <tr>                                          <td class="x_message" style="padding:0 0 24px 0">                                            <div>                                              <p>Hello,</p>                                              <p>Your request has been taken into account</p>                                            </div>                                          </td>                                        </tr>                                        <tr>                                          <td style="padding:0 0 24px 0">                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">                                              <tbody>                                                <tr>                                                  <td>                                                    <table border="0" cellspacing="0" cellpadding="0">                                                      <tbody>                                                        <tr>                                                          <td align="center" bgcolor="#007acc" style="padding:8px 12px; border-radius:2px">                                                            <a href="@(Html.Context.ApplicationUri.AbsoluteUri)" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" class="x_mobile-button x_btn-primary" style="font-weight:500; font-size:14px; text-decoration:none; padding:0px; display:inline-block; color:#ffffff">                                                              Connect to Usercube
                                                            </a>                                                          </td>                                                        </tr>                                                      </tbody>                                                    </table>                                                  </td>                                                </tr>                                              </tbody>                                            </table>                                          </td>                                        </tr>                                      </tbody>                                    </table>                                    <!-- HEADER END -->                                  </td>                                </tr>                              </tbody>                            </table>                          </td>                        </tr>                      </tbody>                    </table>                  </td>                </tr>              </tbody>            </table>          </td>          <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px">          </td>        </tr>        <tr>          <td class="x_mobile-hide" style="background:#f8f8f8"></td>          <td class="x_content" width="640" style="padding:0px; max-width:640px; background:#f8f8f8">            <table border="0" cellpadding="0" cellspacing="0" width="100%">              <tbody>                <tr>                  <td style="padding:24px 24px 8px 24px; max-width:592px">                    <table border="0" width="100%" cellpadding="0" cellspacing="0" class="x_responsive-table" style="vertical-align:middle; background-color:white">                      <tbody>                        <tr>                          <td style="padding:16px 24px 24px 24px">                            @Html.WorkflowSummary(string.Empty, Model.InternalDisplayName)
                          </td>                        </tr>                      </tbody>                    </table>                  </td>                </tr>                <tr>                  <td style="padding:24px 24px 24px 24px">                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table">                      <tbody>                        <tr>                          <td style="color:#666666; font-size:12px; line-height:18px">                            This email is automatically generated by usercube. Please do not reply.
                          </td>                        </tr>                      </tbody>                    </table>                  </td>                </tr>              </tbody>            </table>          </td>          <td class="x_mobile-hide" style="background:#f8f8f8"></td>        </tr>      </tbody>    </table>  </div></div>" RazorFile_L2="<div>  <div style="font-family:'Segoe UI','-apple-system','BlinkMacSystemFont','Roboto','Arial',sans-serif; color:#212121; font-size:14px; background:#f8f8f8">    <table border="0" cellpadding="0" cellspacing="0" width="100%">      <tbody>        <tr>          <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px">          </td>          <td class="x_content" width="640" style="padding:0px; max-width:640px; background-color:white; border-bottom:solid #eaeaea 1px">            <table border="0" cellpadding="0" cellspacing="0" width="100%">              <tbody>                <tr>                  <td style="padding:20px 24px 25px 24px; background:white">                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table">                      <tbody>                        <tr>                          <td>                            <table border="0" cellpadding="0" cellspacing="0" class="x_logo" width="100%">                              <tbody>                                <tr>                                  <td valign="middle" style="vertical-align:middle">                                    <img data-imagetype="External" src="@(new System.Uri(Html.Context.ApplicationUri, "logo.webp").AbsoluteUri)" height="34" width="133">                                  </td>                                </tr>                              </tbody>                            </table>                          </td>                        </tr>                      </tbody>                    </table>                  </td>                </tr>                <tr>                  <td class="x_hero" style="padding:0px 24px">                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table" style="max-width:592px">                      <tbody>                        <tr>                          <td>                            <table width="100%" border="0" cellspacing="0" cellpadding="0">                              <tbody>                                <tr>                                  <td>                                    <!-- HEADER START -->                                    <table>                                      <tbody>                                        <tr>                                          <td class="x_title" style="padding:0 0 24px 0; color:#212121; font-size:28px; font-weight:bold; letter-spacing:-0.04em; line-height:40px; word-break:break-word">                                            @(Html.Context.MessageSubject ?? "Request summary")
                                          </td>                                        </tr>                                        <tr>                                          <td class="x_message" style="padding:0 0 24px 0">                                            <div>                                              <p>Bonjour,</p>                                              <p>Votre demande a bien �t� prise en compte</p>                                            </div>                                          </td>                                        </tr>                                        <tr>                                          <td style="padding:0 0 24px 0">                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">                                              <tbody>                                                <tr>                                                  <td>                                                    <table border="0" cellspacing="0" cellpadding="0">                                                      <tbody>                                                        <tr>                                                          <td align="center" bgcolor="#007acc" style="padding:8px 12px; border-radius:2px">                                                            <a href="@(Html.Context.ApplicationUri.AbsoluteUri)" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" class="x_mobile-button x_btn-primary" style="font-weight:500; font-size:14px; text-decoration:none; padding:0px; display:inline-block; color:#ffffff">                                                              Je me connecte � Usercube
                                                            </a>                                                          </td>                                                        </tr>                                                      </tbody>                                                    </table>                                                  </td>                                                </tr>                                              </tbody>                                            </table>                                          </td>                                        </tr>                                      </tbody>                                    </table>                                    <!-- HEADER END -->                                  </td>                                </tr>                              </tbody>                            </table>                          </td>                        </tr>                      </tbody>                    </table>                  </td>                </tr>              </tbody>            </table>          </td>          <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px">          </td>        </tr>        <tr>          <td class="x_mobile-hide" style="background:#f8f8f8"></td>          <td class="x_content" width="640" style="padding:0px; max-width:640px; background:#f8f8f8">            <table border="0" cellpadding="0" cellspacing="0" width="100%">              <tbody>                <tr>                  <td style="padding:24px 24px 8px 24px; max-width:592px">                    <table border="0" width="100%" cellpadding="0" cellspacing="0" class="x_responsive-table" style="vertical-align:middle; background-color:white">                      <tbody>                        <tr>                          <td style="padding:16px 24px 24px 24px">                            @Html.WorkflowSummaryFR(string.Empty, Model.InternalDisplayName)
                          </td>                        </tr>                      </tbody>                    </table>                  </td>                </tr>                <tr>                  <td style="padding:24px 24px 24px 24px">                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table">                      <tbody>                        <tr>                          <td style="color:#666666; font-size:12px; line-height:18px">                            This email is automatically generated by usercube. Please do not reply.
                          </td>                        </tr>                      </tbody>                    </table>                  </td>                </tr>              </tbody>            </table>          </td>          <td class="x_mobile-hide" style="background:#f8f8f8"></td>        </tr>      </tbody>    </table>  </div></div>" CssFile="@media only screen and (max-width: 620px) {
    table[class=body] h1 {
        font-size: 28px !important;
        margin-bottom: 10px !important;
    }

    table[class=body] p,
    table[class=body] ul,
    table[class=body] ol,
    table[class=body] td,
    table[class=body] span,
    table[class=body] a {
        font-size: 16px !important;
    }

    table[class=body] .wrapper,
    table[class=body] .article {
        padding: 10px !important;
    }

    table[class=body] .content {
        padding: 0 !important;
    }

    table[class=body] .container {
        padding: 0 !important;
        width: 100% !important;
    }

    table[class=body] .main {
        border-left-width: 0 !important;
        border-radius: 0 !important;
        border-right-width: 0 !important;
    }

    table[class=body] .btn table {
        width: 100% !important;
    }

    table[class=body] .btn a {
        width: 100% !important;
    }

    table[class=body] .img-responsive {
        height: auto !important;
        max-width: 100% !important;
        width: auto !important;
    }
}
/* -------------------------------------
        PRESERVE THESE STYLES IN THE HEAD
    ------------------------------------- */
@media all {
    .ExternalClass {
        width: 100%;
    }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }

    .apple-link a {
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        text-decoration: none !important;
    }

    .btn-primary table td:hover {
        background-color: #34495e !important;
    }

    .btn-primary a:hover {
        background-color: #34495e !important;
        border-color: #34495e !important;
    }
}

body {
    background-color: #f6f6f6;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
    padding: 0;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
">    <PointCut Activity="Directory_User_ChangeName:Request" ActivityState="ActionWithRefine-Executed" />    <Recipient Activity="Directory_User_ChangeName:Request" ActivityState="ActionWithRefine-Executed" Type="Performer" />  </NotificationAspect>

```
