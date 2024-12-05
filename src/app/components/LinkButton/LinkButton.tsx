import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';

const BUTTON_STYLES = {
  primary: {
    button:
      'text-white usa-button bg-violet-warm-60 hover:bg-violet-warm-50 active:bg-violet-warm-70',
  },
  secondary: {
    button:
      'usa-button !text-violet-warm-60 items-center gap-2.5 rounded border-2 border-violet-warm-60 hover:border-violet-warm-50 bg-white px-5 py-3 hover:border-violet-warm-50 hover:border-2 hover:bg-white active:border-violet-warm-70 hover:!text-violet-warm-50',
  },
  transparent: {
    button:
      'usa-button items-center gap-2.5 rounded border-2 border-white bg-transparent px-5 py-3 hover:border-2 hover:bg-transparent',
  },
} as const;

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'transparent';
  className?: string;
  disabled?: boolean;
  'aria-label'?: string;
}

export function LinkButton({
  children,
  variant,
  href,
  className = '',
  disabled = false,
  'aria-label': ariaLabel,
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
        <span className="text-base font-bold text-black">{children}</span>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={classNames(BUTTON_STYLES[variant].button, className)}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Link>
  );
}
