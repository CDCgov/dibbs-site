import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';

const BUTTON_STYLES = {
  primary: {
    button: 'usa-button bg-[#224a58] hover:bg-green',
    text: 'text-white',
  },
  secondary: {
    button:
      'usa-button hover:bg-red items-center gap-2.5 rounded border-2 border-[#224a58] bg-white px-5 py-3 hover:border-2',
    text: 'text-[#224a58]',
  },
} as const;

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
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
        className="usa-button usa-button--disabled self-end justify-self-start bg-[#224a58]"
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
      <span
        className={classNames(
          'text-center text-base font-bold',
          BUTTON_STYLES[variant].text,
        )}
      >
        {children}
      </span>
    </Link>
  );
}
