#!/usr/bin/env python3
import os
import shutil
import re

# Define the categories and their files
categories = {
    "deployment-and-installation": [
        "activating_the_mail_add-in_for_domain_allowlist_in_outlook_classic_for_windows.md",
        "add_an_ssl_certificate.md",
        "check_the_client_version_installed_on_your_computer.md",
        "deploy_clients_via_group_policy.md",
        "deploying-endpoint-protector-agents.md",
        "deploy-the-client-on-macos-through-intune-with-full-disk-access.md",
        "download-the-intune-mdm-deployment-guide.md",
        "enable_full_disk_access_when_deploying_on_macos_using_kandji.md",
        "how_to_change_root_password.md",
        "how_to_deploy_the_client_using_sccm_or_msiexec.md",
        "how_to_find_the_cososys_team_id_and_bundle_id_for_client_deployment_on_macos.md",
        "how_to_increase_disk_space.md",
        "how_to_manually_uninstall_the_agent.md",
        "how_to_stage_the_endpoint_protector_server.md",
        "how-to-install-client-without-user-interaction.md",
        "how-to-install-the-client-on-macos-monterey.md",
        "how-to-deploy-the-windows-endpoint-protector-agent.md",
        "install_client_on_macos_with_deep_packet_inspection_and_vpn_traffic_intercept.md",
        "install_the_linux_client.md",
        "install-globalsign-and-digicert-root-certificates-on-windows.md",
        "installing_the_agent_with_proxy_settings_on_linux.md",
        "installing-a-monitoring-agent-on-the-virtual-appliance.md",
        "installing-the-agent-with-proxy-settings-on-macos.md",
        "installing-the-agent-with-proxy-settings-on-windows.md",
        "migrate_the_endpoint_protector_server_to_a_new_virtual_machine.md",
        "reinstalling-the-endpoint-protector-client-via-linux-terminal.md",
        "uninstall-the-client-from-a-mac-computer.md",
        "upgrade_linux_clients_without_uninstalling_and_reinstalling.md",
        "upgrade_to_client_version_5.9.4.3.md",
    ],
    "device-control-and-access-management": [
        "are_ios_devices_recognized_when_connected_to_a_windows_pc.md",
        "can-endpoint-protector-block-internal-card-readers-on-mac.md",
        "can-you-block-an-internal-card-reader-on-mac.md",
        "configuring-rights-for-outside-hours-and-outside-network.md",
        "error_devices_not_visible_in_list_of_devices.md",
        "how_easylock_software_works_with_the_endpoint_protector_server_and_client_software.md",
        "how_to_add_specific_devices_to_the_allow_list.md",
        "how_to_control_idevices_on_endpoint_protector_for_mac.md",
        "how_to_whitelist_a_device_for_global_access.md",
        "how-to-charge-an-iphone-on-a-computer-controlled-by-endpoint-protector.md",
        "how-to-configure-deny-access-but-allow-charging-for-ios-devices.md",
        "how-to-configure-user-remediation-for-device-control.md",
        "how-to-set-access-rights-for-an-iphone.md",
        "managing-network-share-rights-in-device-control.md",
        "missing-devices-in-the-client-list.md",
        "read_only_access_not_working_after_rights_change.md",
        "resolve-wifi-connection-issues-when-rights-are-set-to-allow-access.md",
        "set-rights-for-a-specific-device.md",
        "understanding-the-rights-hierarchy-for-devices.md",
        "why_does_an_iphone_remain_blocked_despite_having_allow_access_rights.md",
        "why_endpoint_protector_detects_cameras_as_digital_cameras_or_windows_portable_devices_(mtp).md",
        "why-is-a-printer-detected-as-an-usb-storage-device.md",
        "why-smartphones-are-detected-as-multiple-device-types.md",
        "device-control-sections-overview.md",
        "blocking-easylock-folder-access-on-machines-without-the-endpoint-protector-agent.md",
        "block-file-transfers-to-or-from-network-shares.md",
        "how_to_view_a_scanner_in_the_controlled_device_list.md",
        "global-rights-option-not-displayed-when-easylock-role-is-assigned-to-administrator.md",
        "how-to-back-up-data-from-a-usb-drive-when-experiencing-easylock-issues.md",
        "error-failed-to-initiate-usb-device.md",
        "error-cannot-execute-command-an-error-occurred.md",
    ],
    "content-aware-protection-and-dpi": [
        "allowing-chatgpt-access-via-deep-packet-inspection-allowlist.md",
        "can-content-aware-protection-detect-sensitive-content-in-archived-files.md",
        "can-optical-character-recognition-be-enabled-for-file-inspection.md",
        "configure_content_aware_policy_priorities.md",
        "content_aware_protection_tab_missing.md",
        "content-aware-policy-configuration.md",
        "create_exceptions_for_specific_file_extensions.md",
        "dpi-certificate-not-available-in-the-browser.md",
        "enable-deep-packet-inspection-for-instant-messaging-applications.md",
        "enabling-advanced-printer-and-mtp-scanning.md",
        "enabling-deep-packet-inspection-and-intercepting-vpn-traffic-on-macos-clients.md",
        "enabling-user-remediation-in-content-aware-protection-policies.md",
        "how_to_block_source_code_using_ocr.md",
        "how_to_use_the_content_detection_summary.md",
        "how-does-the-file-size-threshold-apply-to-uploads.md",
        "how-the-file-size-threshold-applies-to-uploads.md",
        "how-to-block-whatsapp-application-from-launching.md",
        "how-to-collect-extended-deep-packet-inspection-logs-for-mac-os.md",
        "how-to-collect-extended-deep-packet-inspection-logs-for-windows.md",
        "how-to-monitor-webmail-for-gmail-outlook-and-yahoo.md",
        "optical_character_recognition_(ocr)_not_working.md",
        "printing_jobs_not_being_blocked_or_reported.md",
        "reduce-the-number-of-false-positives.md",
        "resolve_hsts_web_browser_errors_when_accessing_websites.md",
        "resolve-black-screen-issues-during-remote-access.md",
        "set_up_a_report_only_content_aware_protection_policy.md",
        "set-up-url-allowlists-and-denylists.md",
        "utilize-the-monitor-webmail-setting-for-subject-and-body-scanning.md",
        "whitelisting-authentication-servers-for-deep-packet-inspection.md",
        "why_dpi_does_not_inspect_content_when_vpn_add-ons_are_installed_on_browsers.md",
        "does-endpoint-protector-inspect-content-sent-through-thunderbird.md",
        "does_the_uninstall_attempt_event_confirm_agent_removal_from_the_client_machine.md",
        "how-to-apply-real-time-data-validation.md",
        "will-content-aware-protection-block-sensitive-content-in-files-from-the-allowed-file-allowlist.md",
        "enable-sensitive-data-protection.md",
        "how_to_add_a_new_entry_to_the_justification_list.md",
    ],
    "enforced-encryption-and-easylock": [
        "enable_easylock_updates_and_file_shadowing_for_removable_drives.md",
        "error-failed-to-initiate-usb-device.md",
        "file-shadow-format-for-documents-sent-to-printers.md",
        "how_to_reassign_a_valid_enforced_encryption_license_to_a_usb_storage_device.md",
        "how-to-use-easylock-without-endpoint-protector-software.md",
        "managing-enforced-encryption-and-file-tracing-settings.md",
        "can-the-easylock-app-be-opened-without-the-endpoint-protector-agent-installed.md",
        "protect-the-client-from-unauthorized-uninstallation.md",
        "how-to-set-an-uninstall-protection-password.md",
        "restart_the_client_without_restarting_the_computer.md",
        "create_a_system_backup_v2.md",
        "create_exceptions_for_specific_file_extensions.md",
        "how_to_perform_a_backup_restore.md",
        "what_is_a_file_read-write_event.md",
        "enable_easylock_updates_and_file_shadowing_for_removable_drives.md",
        "locate-logs-in-content-aware-report-when-using-partitions.md",
        "determine-the-recommended-number-of-endpoints-for-file-tracing-and-file-shadowing.md",
        "system-backup-v2-not-showing-in-the-endpoint-protector-console.md",
    ],
    "administration-security-and-monitoring": [
        "ad_admins_not_able_to_log_in.md",
        "configure-session-timeout-in-the-administration-interface.md",
        "configure-session-timeout-settings-for-the-administration-interface.md",
        "enable_two-factor_authentication_for_system_admins_with_google_authenticator_app.md",
        "error-computers-displayed-as-unlicensed-under-list-of-computers.md",
        "export-event-logs-from-reports-and-analysis.md",
        "how_to_block_specific_ip_addresses_from_accessing_the_console.md",
        "how_to_increase_the_200_entries_display_limitation.md",
        "how_to_locate_and_change_the_default_credentials_for_the_console.md",
        "how_to_select_multiple_computers_and_users_within_groups.md",
        "how_to_set_up_e-mail_alerts.md",
        "how_to_set_up_active_directory_administrator_synchronization.md",
        "how_to_set_up_external_storage.md",
        "how_to_set_up_smtp_with_gmail.md",
        "how-to-check-the-history-and-email-status-of-alerts.md",
        "how-to-identify-and-remove-duplicate-computers.md",
        "how-to-set-fqdn-in-server-certificate-subject.md",
        "how-to-update-endpoint-protector-or-unify-server.md",
        "managing-system-administrators-and-administrator-groups.md",
        "resetting-an-administrator-password.md",
        "review_administrator_activity_in_the_console.md",
        "secure_endpoint_protector_web_console_with_an_ssl_certificate.md",
        "set_password_validity_or_remove_password_expiration_for_administrators.md",
        "set_up_a_siem_integration.md",
        "set_up_automatic_license_release.md",
        "troubleshoot_two-factor_authentication_issues.md",
        "update-the-endpoint-protector-server-ip-address-on-a-windows-endpoint.md",
        "how-to-export-the-list-of-computers,_users,_or_devices.md",
        "how_to_set_up_active_directory_administrator_synchronization.md",
    ],
    "troubleshooting-and-errors": [
        "ad_admins_not_able_to_log_in.md",
        "destination_details_tab_is_missing_in_the_reports_and_analysis_section.md",
        "error_devices_not_visible_in_list_of_devices.md",
        "error_server_user_interface_only_accessible_with_safari_on_vm-hosted_servers.md",
        "error-cannot-execute-command-an-error-occurred.md",
        "error-computers-displayed-as-unlicensed-under-list-of-computers.md",
        "error-failed-to-initiate-usb-device.md",
        "error-secure-connection-failed-invalid-certificate-error-in-mozilla-firefox.md",
        "global-rights-option-not-displayed-when-easylock-role-is-assigned-to-administrator.md",
        "greyed-out-computer-in-the-client-software-upgrade.md",
        "how_to_manually_activate_debugging_logs_on_windows.md",
        "how_to_manually_generate_logs_for_mac_endpoint_protector_agents_via_terminal.md",
        "how_to_remotely_activate_and_collect_client_logs_from_the_server_interface.md",
        "how_to_resolve_reports_and_analysis_logs_not_loading.md",
        "how_to_handle_the_111.33.33.111_ip_address_on_the_server.md",
        "how_to_upgrade_when_apply_updates_button_is_grayed_out.md",
        "how_to_generate_a_memory_dump.md",
        "how-to-check-the-client-to-server-connection-status.md",
        "how-to-collect-extended-deep-packet-inspection-logs-for-mac-os.md",
        "how-to-collect-extended-deep-packet-inspection-logs-for-windows.md",
        "locate-logs-in-content-aware-report-when-using-partitions.md",
        "missing-devices-in-the-client-list.md",
        "optical_character_recognition_(ocr)_not_working.md",
        "printing_jobs_not_being_blocked_or_reported.md",
        "read_only_access_not_working_after_rights_change.md",
        "resolve_hsts_web_browser_errors_when_accessing_websites.md",
        "resolve-black-screen-issues-during-remote-access.md",
        "resolve-wifi-connection-issues-when-rights-are-set-to-allow-access.md",
        "user_interface_performance_issues.md",
        "why_is_the_serial_number_not_correctly_identified_for_my_iphone.md",
        "system-backup-v2-not-showing-in-the-endpoint-protector-console.md",
    ],
    "features-and-operations": [
        "can-the-easylock-app-be-opened-without-the-endpoint-protector-agent-installed.md",
        "client_integrity_fail_events.md",
        "client-modes-overview.md",
        "creating-ediscovery-policies-and-scans.md",
        "does-endpoint-protector-inspect-content-sent-through-thunderbird.md",
        "impact-of-spectre-and-meltdown-on-endpoint-protector-deployments.md",
        "locating-the-default-username-and-password-for-the-reporting-and-administration-tool.md",
        "network-ports-for-endpoint-protector-server-and-client.md",
        "otp_device_code_compatibility.md",
        "overview_of_remediation_actions_in_ediscovery.md",
        "recommendations_for_endpoint_protector_interaction_with_security_vendors,_proxies,_casbs,_and_browse.md",
        "supported_platforms_for_endpoint_protector_server_installation.md",
        "understanding-the-rights-hierarchy-for-devices.md",
        "user_remediation_reporting.md",
        "using-smart-groups-for-automatic-computer-and-user-assignment.md",
        "what_are_cryptographic_hashes.md",
        "what_is_a_file_read-write_event.md",
        "what-do-the-colors-represent-in-endpoint-protector-server-and-client.md",
        "whitelist_or_exclude_endpoint_protector_processes_in_crowdstrike.md",
        "why_endpoint_protector_detects_cameras_as_digital_cameras_or_windows_portable_devices_(mtp).md",
        "why-is-a-printer-detected-as-an-usb-storage-device.md",
        "why-smartphones-are-detected-as-multiple-device-types.md",
        "why-do-various-linux-system-users-appear-in-the-endpoint-protector-user-interface.md",
        "why_does_the_ediscovery_scanning_status_progress_bar_drop_to_a_lower_percentage.md",
    ],
}

# Get the base directory
base_dir = os.path.dirname(os.path.abspath(__file__))

# Statistics
total_moved = 0
total_tagged = 0
errors = []

# Process each category
for category, files in categories.items():
    category_dir = os.path.join(base_dir, category)

    for filename in files:
        source_path = os.path.join(base_dir, filename)
        dest_path = os.path.join(category_dir, filename)

        # Check if source file exists
        if not os.path.exists(source_path):
            errors.append(f"Source file not found: {filename}")
            continue

        try:
            # Read the file
            with open(source_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Replace tags: [] with tags:\n  - category-name
            # First, find and replace the tags line
            updated_content = re.sub(
                r'tags: \[\]',
                f'tags:\n  - {category}',
                content
            )

            # Write to destination
            with open(dest_path, 'w', encoding='utf-8') as f:
                f.write(updated_content)

            # Remove source file
            os.remove(source_path)

            total_moved += 1
            total_tagged += 1
            print(f"Moved and tagged: {filename} -> {category}/")

        except Exception as e:
            errors.append(f"Error processing {filename}: {str(e)}")
            print(f"Error processing {filename}: {str(e)}")

# Print summary
print("\n" + "="*80)
print("SUMMARY")
print("="*80)
print(f"Total files moved: {total_moved}")
print(f"Total files tagged: {total_tagged}")
if errors:
    print(f"\nErrors encountered ({len(errors)}):")
    for error in errors:
        print(f"  - {error}")
else:
    print("No errors encountered!")
