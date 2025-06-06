# Scenario 3: Running or Elevating Applications or Installers, but Blocking Other Admins from Running Them

__NOTE:__ For an overview video of this section, see the [Elevate apps as standard user, BLOCK other Admins](/docs/product_docs/policypak/policypak/video/leastprivilege/bestpractices/appblock.md) video .

In this scenario you want to do work with Endpoint Policy Manager Least Privilege Manager (Elevate, Allow, or Block) but prevent other admins (local admins or domain admins) from overcoming your rule.

To perform this, you’ll need to do the following:

Two rules:

- First one BLOCKS ABC.EXE or ABC.CMD or ABC.MSI. This must be done on the COMPUTER side with SCOPE = USER AND SYSTEM. Then, filter the scope by group (more on this in a second.)
- Second rule ALLOWS or ELEVATES ABC.EXE or ABC.CMD or ABC.MSI. Scope doesn’t matter. You can do this on the COMPUTER or USER side. (leaving the default filters in place.)

If you want to block only local admins (but not domain admins), then Rule #1 needs to look like this.

__NOTE:__ This group is not available when editing a GPO from a DC, and only available when creating the GPO from a Windows endpoint computer.)

[![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/scopefilters/scenario_3_running_or_elevating.png)](https://hf-files-oregon.s3-us-west-2.amazonaws.com/hdppolicypak_kb_attachments/2019/06-26/ce88d965-2aff-401b-a047-2d2c69524baa/faq-img-12.png)

If you want toblock both local admins and domain administrators, then Rule #1 needs to look like this.

[![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/scopefilters/scenario_3_running_or_elevating_1.png)](https://hf-files-oregon.s3-us-west-2.amazonaws.com/hdppolicypak_kb_attachments/2019/06-26/9a934a56-093e-469e-a219-8ad7d55db212/faq-img-13.png)

Again, rule 2, the rule that does the ELEVATE or ALLOW, is just a standard rule, and can be done on the user or computer side.

[![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/scopefilters/scenario_3_running_or_elevating_2.png)](https://hf-files-oregon.s3-us-west-2.amazonaws.com/hdppolicypak_kb_attachments/2019/06-26/e00cf7ba-90b8-451a-9e47-a895e08e3bd9/faq-img-14.png)
