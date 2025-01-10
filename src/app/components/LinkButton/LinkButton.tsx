import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { LaunchIcon } from './LaunchIcon';

const commonStyles = 'usa-button leading-[140%] text-[1rem]';

const BUTTON_STYLES = {
  primary: {
    button: classNames(
      'text-white bg-violet-warm-60 hover:bg-violet-warm-50 active:bg-violet-warm-70 ',
      commonStyles,
    ),
  },
  secondary: {
    button: classNames(
      '!text-violet-warm-60 items-center gap-2.5 rounded border-2 border-violet-warm-60 hover:border-violet-warm-50 bg-white hover:border-violet-warm-50 hover:border-2 hover:bg-white active:border-violet-warm-70 hover:!text-violet-warm-50',
      commonStyles,
    ),
  },
  transparent: {
    button: classNames(
      'items-center gap-2.5 rounded border-2 border-blue-cool-5 bg-transparent hover:border-2 hover:bg-transparent active:border-blue-cool-30 hover:!text-blue-cool-20',
      commonStyles,
    ),
  },
} as const;

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'transparent';
  className?: string;
  disabled?: boolean;
  'aria-label'?: string;
  isExternal?: boolean;
}

export function LinkButton({
  children,
  variant,
  href,
  className = '',
  disabled = false,
  'aria-label': ariaLabel,
  isExternal = false,
  ...props
}: LinkButtonProps) {
  if (disabled) {
    return (
      <div
        className="usa-button usa-button--disabled self-end justify-self-start"
        aria-disabled="true"
        role="link"
        aria-label={ariaLabel}
      >
        <span className="font-bold text-black">{children}</span>
      </div>
    );
  }

  if (isExternal) {
    return (
      <Link
        href={href}
        className={classNames(BUTTON_STYLES[variant].button, className)}
        aria-label={ariaLabel}
        target="_blank"
        rel="noreferrer noopener"
        {...props}
      >
        <span className="flex items-center gap-2 text-center font-bold text-inherit">
          <span>{children}</span>
          <LaunchIcon />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={classNames(BUTTON_STYLES[variant].button, className)}
      aria-label={ariaLabel}
      {...props}
    >
      <span className="text-center font-bold text-inherit">{children}</span>
    </Link>
  );
}
