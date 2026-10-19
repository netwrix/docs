import React from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {translate} from '@docusaurus/Translate';
import IconDarkMode from '@theme/Icon/DarkMode';
import IconLightMode from '@theme/Icon/LightMode';
import styles from './styles.module.css';

/**
 * Swizzled ColorModeToggle.
 *
 * Docusaurus default shows the current-mode icon (sun in light, moon in dark).
 * This version shows the target-mode icon instead:
 * - Light mode → moon ("switch to dark")
 * - Dark mode  → sun  ("switch to light")
 */
export default function ColorModeToggle({className, buttonClassName, value, onChange}) {
  const isBrowser = useIsBrowser();
  const title = translate(
    {
      message: 'Switch between dark and light mode (currently {mode})',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the navbar color mode toggle',
    },
    {
      mode:
        value === 'dark'
          ? translate({
              message: 'dark mode',
              id: 'theme.colorToggle.ariaLabel.mode.dark',
              description: 'The name for the dark color mode',
            })
          : translate({
              message: 'light mode',
              id: 'theme.colorToggle.ariaLabel.mode.light',
              description: 'The name for the light color mode',
            }),
    },
  );

  return (
    <div className={clsx(styles.toggle, className)}>
      <button
        className={clsx('clean-btn', buttonClassName, styles.toggleButton, {
          [styles.toggleButtonDisabled]: !isBrowser,
        })}
        type="button"
        onClick={() => onChange(value === 'dark' ? 'light' : 'dark')}
        disabled={!isBrowser}
        title={title}
        aria-label={title}
        aria-live="polite">
        {/* Moon shown in light mode → "click to switch to dark" */}
        <IconDarkMode className={clsx(styles.icon, styles.lightModeIcon)} />
        {/* Sun shown in dark mode → "click to switch to light" */}
        <IconLightMode className={clsx(styles.icon, styles.darkModeIcon)} />
      </button>
    </div>
  );
}
