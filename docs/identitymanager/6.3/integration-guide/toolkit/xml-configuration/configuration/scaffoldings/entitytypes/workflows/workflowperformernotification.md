---
title: "WorkflowPerformerNotification"
description: " "
sidebar_position: 10
---

 



## Examples


```xml
  <WorkflowPerformerNotification Workflow="Directory_User_ChangeName"/>
```


## Properties

|Property|Details|
|---|---|
| Workflow optional | **Type:** String **Description:** Identifier of the workflow involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<NotificationAspect Identifier="PerformerNotification_Directory_User_ChangeName" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="&lt;div&gt;
  &lt;div style=&quot;font-family:'Segoe UI','-apple-system','BlinkMacSystemFont','Roboto','Arial',sans-serif; color:#212121; font-size:14px; background:#f8f8f8&quot;&gt;
    &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot;&gt;
      &lt;tbody&gt;
        &lt;tr&gt;
          &lt;td class=&quot;x_mobile-hide&quot; style=&quot;background-color:white; border-bottom:solid #eaeaea 1px&quot;&gt;
          &lt;/td&gt;
          &lt;td class=&quot;x_content&quot; width=&quot;640&quot; style=&quot;padding:0px; max-width:640px; background-color:white; border-bottom:solid #eaeaea 1px&quot;&gt;
            &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot;&gt;
              &lt;tbody&gt;
                &lt;tr&gt;
                  &lt;td style=&quot;padding:20px 24px 25px 24px; background:white&quot;&gt;
                    &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;x_responsive-table&quot;&gt;
                      &lt;tbody&gt;
                        &lt;tr&gt;
                          &lt;td&gt;
                            &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; class=&quot;x_logo&quot; width=&quot;100%&quot;&gt;
                              &lt;tbody&gt;
                                &lt;tr&gt;
                                  &lt;td valign=&quot;middle&quot; style=&quot;vertical-align:middle&quot;&gt;
                                    &lt;img data-imagetype=&quot;External&quot; src=&quot;@(new System.Uri(Html.Context.ApplicationUri, &quot;logo.png&quot;).AbsoluteUri)&quot; height=&quot;34&quot; width=&quot;133&quot;&gt;
                                  &lt;/td&gt;
                                &lt;/tr&gt;
                              &lt;/tbody&gt;
                            &lt;/table&gt;
                          &lt;/td&gt;
                        &lt;/tr&gt;
                      &lt;/tbody&gt;
                    &lt;/table&gt;
                  &lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                  &lt;td class=&quot;x_hero&quot; style=&quot;padding:0px 24px&quot;&gt;
                    &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;x_responsive-table&quot; style=&quot;max-width:592px&quot;&gt;
                      &lt;tbody&gt;
                        &lt;tr&gt;
                          &lt;td&gt;
                            &lt;table width=&quot;100%&quot; border=&quot;0&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot;&gt;
                              &lt;tbody&gt;
                                &lt;tr&gt;
                                  &lt;td&gt;
                                    &lt;!-- HEADER START --&gt;
                                    &lt;table&gt;
                                      &lt;tbody&gt;
                                        &lt;tr&gt;
                                          &lt;td class=&quot;x_title&quot; style=&quot;padding:0 0 24px 0; color:#212121; font-size:28px; font-weight:bold; letter-spacing:-0.04em; line-height:40px; word-break:break-word&quot;&gt;
                                            @(Html.Context.MessageSubject ?? &quot;Request summary&quot;)
                                          &lt;/td&gt;
                                        &lt;/tr&gt;
                                        &lt;tr&gt;
                                          &lt;td class=&quot;x_message&quot; style=&quot;padding:0 0 24px 0&quot;&gt;
                                            &lt;div&gt;
                                              &lt;p&gt;Hello,&lt;/p&gt;
                                              &lt;p&gt;Your request has been taken into account&lt;/p&gt;
                                            &lt;/div&gt;
                                          &lt;/td&gt;
                                        &lt;/tr&gt;
                                        &lt;tr&gt;
                                          &lt;td style=&quot;padding:0 0 24px 0&quot;&gt;
                                            &lt;table width=&quot;100%&quot; border=&quot;0&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot;&gt;
                                              &lt;tbody&gt;
                                                &lt;tr&gt;
                                                  &lt;td&gt;
                                                    &lt;table border=&quot;0&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot;&gt;
                                                      &lt;tbody&gt;
                                                        &lt;tr&gt;
                                                          &lt;td align=&quot;center&quot; bgcolor=&quot;#007acc&quot; style=&quot;padding:8px 12px; border-radius:2px&quot;&gt;
                                                            &lt;a href=&quot;@(Html.Context.ApplicationUri.AbsoluteUri)&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; data-auth=&quot;NotApplicable&quot; class=&quot;x_mobile-button x_btn-primary&quot; style=&quot;font-weight:500; font-size:14px; text-decoration:none; padding:0px; display:inline-block; color:#ffffff&quot;&gt;
                                                              Connect to Usercube
                                                            &lt;/a&gt;
                                                          &lt;/td&gt;
                                                        &lt;/tr&gt;
                                                      &lt;/tbody&gt;
                                                    &lt;/table&gt;
                                                  &lt;/td&gt;
                                                &lt;/tr&gt;
                                              &lt;/tbody&gt;
                                            &lt;/table&gt;
                                          &lt;/td&gt;
                                        &lt;/tr&gt;
                                      &lt;/tbody&gt;
                                    &lt;/table&gt;
                                    &lt;!-- HEADER END --&gt;
                                  &lt;/td&gt;
                                &lt;/tr&gt;
                              &lt;/tbody&gt;
                            &lt;/table&gt;
                          &lt;/td&gt;
                        &lt;/tr&gt;
                      &lt;/tbody&gt;
                    &lt;/table&gt;
                  &lt;/td&gt;
                &lt;/tr&gt;
              &lt;/tbody&gt;
            &lt;/table&gt;
          &lt;/td&gt;
          &lt;td class=&quot;x_mobile-hide&quot; style=&quot;background-color:white; border-bottom:solid #eaeaea 1px&quot;&gt;
          &lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;td class=&quot;x_mobile-hide&quot; style=&quot;background:#f8f8f8&quot;&gt;&lt;/td&gt;
          &lt;td class=&quot;x_content&quot; width=&quot;640&quot; style=&quot;padding:0px; max-width:640px; background:#f8f8f8&quot;&gt;
            &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot;&gt;
              &lt;tbody&gt;
                &lt;tr&gt;
                  &lt;td style=&quot;padding:24px 24px 8px 24px; max-width:592px&quot;&gt;
                    &lt;table border=&quot;0&quot; width=&quot;100%&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; class=&quot;x_responsive-table&quot; style=&quot;vertical-align:middle; background-color:white&quot;&gt;
                      &lt;tbody&gt;
                        &lt;tr&gt;
                          &lt;td style=&quot;padding:16px 24px 24px 24px&quot;&gt;
                            @Html.WorkflowSummary(string.Empty, Model.InternalDisplayName)
                          &lt;/td&gt;
                        &lt;/tr&gt;
                      &lt;/tbody&gt;
                    &lt;/table&gt;
                  &lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                  &lt;td style=&quot;padding:24px 24px 24px 24px&quot;&gt;
                    &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;x_responsive-table&quot;&gt;
                      &lt;tbody&gt;
                        &lt;tr&gt;
                          &lt;td style=&quot;color:#666666; font-size:12px; line-height:18px&quot;&gt;
                            This email is automatically generated by usercube. Please do not reply.
                          &lt;/td&gt;
                        &lt;/tr&gt;
                      &lt;/tbody&gt;
                    &lt;/table&gt;
                  &lt;/td&gt;
                &lt;/tr&gt;
              &lt;/tbody&gt;
            &lt;/table&gt;
          &lt;/td&gt;
          &lt;td class=&quot;x_mobile-hide&quot; style=&quot;background:#f8f8f8&quot;&gt;&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;
  &lt;/div&gt;
&lt;/div&gt;
" RazorFile_L2="&lt;div&gt;
  &lt;div style=&quot;font-family:'Segoe UI','-apple-system','BlinkMacSystemFont','Roboto','Arial',sans-serif; color:#212121; font-size:14px; background:#f8f8f8&quot;&gt;
    &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot;&gt;
      &lt;tbody&gt;
        &lt;tr&gt;
          &lt;td class=&quot;x_mobile-hide&quot; style=&quot;background-color:white; border-bottom:solid #eaeaea 1px&quot;&gt;
          &lt;/td&gt;
          &lt;td class=&quot;x_content&quot; width=&quot;640&quot; style=&quot;padding:0px; max-width:640px; background-color:white; border-bottom:solid #eaeaea 1px&quot;&gt;
            &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot;&gt;
              &lt;tbody&gt;
                &lt;tr&gt;
                  &lt;td style=&quot;padding:20px 24px 25px 24px; background:white&quot;&gt;
                    &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;x_responsive-table&quot;&gt;
                      &lt;tbody&gt;
                        &lt;tr&gt;
                          &lt;td&gt;
                            &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; class=&quot;x_logo&quot; width=&quot;100%&quot;&gt;
                              &lt;tbody&gt;
                                &lt;tr&gt;
                                  &lt;td valign=&quot;middle&quot; style=&quot;vertical-align:middle&quot;&gt;
                                    &lt;img data-imagetype=&quot;External&quot; src=&quot;@(new System.Uri(Html.Context.ApplicationUri, &quot;logo.png&quot;).AbsoluteUri)&quot; height=&quot;34&quot; width=&quot;133&quot;&gt;
                                  &lt;/td&gt;
                                &lt;/tr&gt;
                              &lt;/tbody&gt;
                            &lt;/table&gt;
                          &lt;/td&gt;
                        &lt;/tr&gt;
                      &lt;/tbody&gt;
                    &lt;/table&gt;
                  &lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                  &lt;td class=&quot;x_hero&quot; style=&quot;padding:0px 24px&quot;&gt;
                    &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;x_responsive-table&quot; style=&quot;max-width:592px&quot;&gt;
                      &lt;tbody&gt;
                        &lt;tr&gt;
                          &lt;td&gt;
                            &lt;table width=&quot;100%&quot; border=&quot;0&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot;&gt;
                              &lt;tbody&gt;
                                &lt;tr&gt;
                                  &lt;td&gt;
                                    &lt;!-- HEADER START --&gt;
                                    &lt;table&gt;
                                      &lt;tbody&gt;
                                        &lt;tr&gt;
                                          &lt;td class=&quot;x_title&quot; style=&quot;padding:0 0 24px 0; color:#212121; font-size:28px; font-weight:bold; letter-spacing:-0.04em; line-height:40px; word-break:break-word&quot;&gt;
                                            @(Html.Context.MessageSubject ?? &quot;Request summary&quot;)
                                          &lt;/td&gt;
                                        &lt;/tr&gt;
                                        &lt;tr&gt;
                                          &lt;td class=&quot;x_message&quot; style=&quot;padding:0 0 24px 0&quot;&gt;
                                            &lt;div&gt;
                                              &lt;p&gt;Bonjour,&lt;/p&gt;
                                              &lt;p&gt;Votre demande a bien été prise en compte&lt;/p&gt;
                                            &lt;/div&gt;
                                          &lt;/td&gt;
                                        &lt;/tr&gt;
                                        &lt;tr&gt;
                                          &lt;td style=&quot;padding:0 0 24px 0&quot;&gt;
                                            &lt;table width=&quot;100%&quot; border=&quot;0&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot;&gt;
                                              &lt;tbody&gt;
                                                &lt;tr&gt;
                                                  &lt;td&gt;
                                                    &lt;table border=&quot;0&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot;&gt;
                                                      &lt;tbody&gt;
                                                        &lt;tr&gt;
                                                          &lt;td align=&quot;center&quot; bgcolor=&quot;#007acc&quot; style=&quot;padding:8px 12px; border-radius:2px&quot;&gt;
                                                            &lt;a href=&quot;@(Html.Context.ApplicationUri.AbsoluteUri)&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; data-auth=&quot;NotApplicable&quot; class=&quot;x_mobile-button x_btn-primary&quot; style=&quot;font-weight:500; font-size:14px; text-decoration:none; padding:0px; display:inline-block; color:#ffffff&quot;&gt;
                                                              Je me connecte à Usercube
                                                            &lt;/a&gt;
                                                          &lt;/td&gt;
                                                        &lt;/tr&gt;
                                                      &lt;/tbody&gt;
                                                    &lt;/table&gt;
                                                  &lt;/td&gt;
                                                &lt;/tr&gt;
                                              &lt;/tbody&gt;
                                            &lt;/table&gt;
                                          &lt;/td&gt;
                                        &lt;/tr&gt;
                                      &lt;/tbody&gt;
                                    &lt;/table&gt;
                                    &lt;!-- HEADER END --&gt;
                                  &lt;/td&gt;
                                &lt;/tr&gt;
                              &lt;/tbody&gt;
                            &lt;/table&gt;
                          &lt;/td&gt;
                        &lt;/tr&gt;
                      &lt;/tbody&gt;
                    &lt;/table&gt;
                  &lt;/td&gt;
                &lt;/tr&gt;
              &lt;/tbody&gt;
            &lt;/table&gt;
          &lt;/td&gt;
          &lt;td class=&quot;x_mobile-hide&quot; style=&quot;background-color:white; border-bottom:solid #eaeaea 1px&quot;&gt;
          &lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;td class=&quot;x_mobile-hide&quot; style=&quot;background:#f8f8f8&quot;&gt;&lt;/td&gt;
          &lt;td class=&quot;x_content&quot; width=&quot;640&quot; style=&quot;padding:0px; max-width:640px; background:#f8f8f8&quot;&gt;
            &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot;&gt;
              &lt;tbody&gt;
                &lt;tr&gt;
                  &lt;td style=&quot;padding:24px 24px 8px 24px; max-width:592px&quot;&gt;
                    &lt;table border=&quot;0&quot; width=&quot;100%&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; class=&quot;x_responsive-table&quot; style=&quot;vertical-align:middle; background-color:white&quot;&gt;
                      &lt;tbody&gt;
                        &lt;tr&gt;
                          &lt;td style=&quot;padding:16px 24px 24px 24px&quot;&gt;
                            @Html.WorkflowSummaryFR(string.Empty, Model.InternalDisplayName)
                          &lt;/td&gt;
                        &lt;/tr&gt;
                      &lt;/tbody&gt;
                    &lt;/table&gt;
                  &lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                  &lt;td style=&quot;padding:24px 24px 24px 24px&quot;&gt;
                    &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;100%&quot; class=&quot;x_responsive-table&quot;&gt;
                      &lt;tbody&gt;
                        &lt;tr&gt;
                          &lt;td style=&quot;color:#666666; font-size:12px; line-height:18px&quot;&gt;
                            This email is automatically generated by usercube. Please do not reply.
                          &lt;/td&gt;
                        &lt;/tr&gt;
                      &lt;/tbody&gt;
                    &lt;/table&gt;
                  &lt;/td&gt;
                &lt;/tr&gt;
              &lt;/tbody&gt;
            &lt;/table&gt;
          &lt;/td&gt;
          &lt;td class=&quot;x_mobile-hide&quot; style=&quot;background:#f8f8f8&quot;&gt;&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;
  &lt;/div&gt;
&lt;/div&gt;
" CssFile="@media only screen and (max-width: 620px) {
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
">
    <PointCut Activity="Directory_User_ChangeName:Request" ActivityState="ActionWithRefine-Executed" />
    <Recipient Activity="Directory_User_ChangeName:Request" ActivityState="ActionWithRefine-Executed" Type="Performer" />
  </NotificationAspect>

```