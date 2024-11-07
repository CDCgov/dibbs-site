import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationLinkProps extends Pick<LinkProps, 'href' | 'onClick'> {
  children: React.ReactNode;
}

export function NavigationLink({
  href,
  children,
  onClick,
}: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} passHref onClick={onClick}>
      <span
        className={classNames('text-white', {
          underline: isActive,
        })}
      >
        {children}
      </span>
    </Link>
  );
}
