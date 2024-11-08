import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}
export function LinkButton({
  children,
  variant,
  href,
  className = '',
  disabled = false,
  ...props
}: LinkButtonProps) {
  if (variant === 'secondary') {
    return (
      <Link
        href={href}
        className={classNames(
          'usa-button hover:bg-red items-center gap-2.5 rounded border-2 border-[#224a58] bg-white px-5 py-3 hover:border-2',
          className,
        )}
        {...props}
      >
        <span className="text-center text-base font-bold leading-none text-[#224a58]">
          {children}
        </span>
      </Link>
    );
  }

  if (disabled) {
    return <DisabledPrimaryLink>{children}</DisabledPrimaryLink>;
  }

  return (
    <Link
      href={href}
      className={classNames(
        'usa-button hover:bg-green bg-[#224a58]',
        className,
      )}
      {...props}
    >
      <span className="text-center text-base font-bold text-white">
        {children}
      </span>
    </Link>
  );
}

type DisabledLinkProps = Pick<LinkButtonProps, 'children'>;

function DisabledPrimaryLink({ children }: DisabledLinkProps) {
  return (
    <div
      className="usa-button usa-button--disabled self-end justify-self-start bg-[#224a58]"
      aria-disabled
    >
      <span className="text-base font-bold text-black">{children}</span>
    </div>
  );
}
