# Proposal: a carve-out in the Dale passive-voice rule

## Why

During the Threat Manager 3.4 restyle pass, agents cleared Dale's passive-voice findings by rewriting old sentences with an actor the page never named. 50 lines turned a past or completed action into "you ..." or "someone ...", and 12 more named the product as the actor, across 33 pages. The rewrites change what the sentence says: "This was pre-created in the Credential Profiles page" is a statement about a state. "You pre-created this" says the reader did it, and they may not have.

The rule gives agents no way out. Its whole text is:

```yaml
message: "Don't use passive voice. Use active voice instead."
level: warning
reason: "This rule should trigger when the user or agent writes a sentence or clause in passive voice."
```

The style guide says only "Always use active voice rather than passive voice", with an example where the actor is known ("The audit logs are retrieved by the Data Collection Account").

## Examples from the pilot

| Where | Original | Rewritten by the agent |
|---|---|---|
| `administration/configuration/integrations/activedirectorysync.md:268` | dropdown menu. This was pre-created in the Credential Profiles page. | dropdown menu. You pre-created this in the Credential Profiles page. |
| `administration/configuration/integrations/credentialprofile.md:116` | The Credential Profile name and/or description have been modified. | You have modified the Credential Profile name and/or description. |
| `administration/configuration/integrations/netwrixintegrations.md:20` | - Name – The name of the integration, as supplied when it was added | - Name – The name of the integration, as you supplied when you added it |
| `administration/configuration/integrations/foldersettings.md:96` | The specified shared folder has been configured for subscription exports. | You have configured the specified shared folder for subscription exports. |
| `administration/configuration/integrations/page/radius.md:93` | The Users/Groups tab displays users and groups that are assigned to this authentication | The Users/Groups tab displays users and groups that you assigned to this authentication |
| `administration/configuration/integrations/page/radius.md:84` | - Prefix for Response Text – This value is added to the start of the responses. The value will vary | - Prefix for Response Text – The application adds this value to the start of the responses. The value will vary |

## Proposed change to `.claude/skills/dale/rules/passive-voice.yml`

Replace `message` and `reason`. Keep `level`. The rule carries one test and no examples, so the model has nothing to copy the shape of:

```yaml
message: "Rewrite in active voice: as a command if it tells the reader what to do, otherwise only if the actor is already stated."
level: warning
reason: >-
  Flag a passive sentence only if it can be rewritten in active voice without changing its meaning.
  The reader counts as the actor when the sentence tells them what to do, so rewrite it as a command.
  If the rewrite would need any other actor the sentence doesn't state, don't flag it.
```

## Proposed addition to `netwrix_style_guide.md`, under "Active voice"

Written for people, so it keeps the usual Do and Don't pair:

> **Exception.** Keep the passive when it reports a past or completed action, or the state it left, and the actor is unknown or irrelevant. Do not add "you" or "someone" to make it active.
> - Do: "This profile was pre-created in the Credential Profiles page."
> - Don't: "You pre-created this profile in the Credential Profiles page."

## How to check it

1. Apply the change on a branch.
2. Run Dale twice on `docs/threatmanager/3.4/administration/configuration/integrations/activedirectorysync.md` and on a few other pages with restored wording. Dale is model-based, so its verdicts vary between runs.
3. Expect three outcomes: an instruction in the passive ("the installer should be run") is flagged and becomes a command; a passive with a named actor is flagged; a passive with an unstated actor that is not an instruction ("This was pre-created in the Credential Profiles page", "Roles can be assigned to users") is not flagged.
4. If the verdicts are unstable, add one example to `reason` and rerun. Start without examples so a bias toward them can't hide.

## Pages where original wording was restored (47)

Two passes: lines where an actor was invented for a past action, and lines where "X can be done" became "you can".

- `administration/configuration/integrations/activedirectorysync.md`
- `administration/configuration/integrations/apptoken.md`
- `administration/configuration/integrations/credentialprofile.md`
- `administration/configuration/integrations/entraidsync.md`
- `administration/configuration/integrations/foldersettings.md`
- `administration/configuration/integrations/netwrixintegrations.md`
- `administration/configuration/integrations/page/openid/entraidopenid.md`
- `administration/configuration/integrations/page/openid/openid.md`
- `administration/configuration/integrations/page/radius.md`
- `administration/configuration/integrations/page/saml.md`
- `administration/configuration/policies/honeytoken.md`
- `administration/configuration/policies/policiesconfiguration.md`
- `administration/configuration/systemhealth/agents.md`
- `administration/configuration/systemsettings/useraccess.md`
- `administration/configuration/threatdetection/threatconfiguration.md`
- `administration/investigations/options/overview.md`
- `administration/playbooks/action/activedirectory.md`
- `administration/playbooks/action/localhost.md`
- `administration/playbooks/action/overview.md`
- `administration/playbooks/action/thirdparty.md`
- `administration/playbooks/action/windowsfileserver.md`
- `administration/playbooks/action/windowsserver.md`
- `administration/playbooks/importsteps.md`
- `administration/playbooks/overview.md`
- `administration/playbooks/save.md`
- `administration/threats/entraidobjects/entraidapplication.md`
- `administration/threats/entraidobjects/entraidgroup.md`
- `administration/threats/entraidobjects/entraiduser.md`
- `administration/threats/threats.md`
- `index.md`
- `install/actionservice.md`
- `install/application.md`
- `install/appsettings.md`
- `install/database.md`
- `install/firstlaunch/firstlaunch.md`
- `install/integration/accessanalyzer.md`
- `install/integration/activitymonitor.md`
- `install/integration/overview.md`
- `install/integration/threatprevention/threatmanagerconfiguration.md`
- `install/proxy.md`
- `install/upgrade/upgrade_pg14_to_pg18.md`
- `requirements/overview.md`
- `threats/certificateservices.md`
- `threats/custom.md`
- `threats/entraid.md`
- `threats/filesystem.md`
- `threats/general.md`
