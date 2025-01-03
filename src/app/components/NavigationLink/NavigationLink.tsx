import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationLinkProps extends Pick<LinkProps, 'href' | 'onClick'> {
  children: React.ReactNode;
  isTopNav?: boolean;
}

export function NavigationLink({
  href,
  children,
  onClick,
  isTopNav = false,
}: NavigationLinkProps) {
  const isActive = useIsActive(href);

  return (
    <Link
      href={href}
      passHref
      onClick={onClick}
      {...(isActive ? { 'aria-current': 'page' } : {})}
    >
      <span
        className={classNames(
          "font-['Public Sans'] text-[1rem] font-bold not-italic leading-[1.4rem] underline-offset-8 hover:text-slate-200 hover:underline lg:text-white",
          {
            'underline decoration-[#82b4c9] underline-offset-8 active:text-slate-300':
              isActive && isTopNav,
            'lg:text-xl': isTopNav,
          },
        )}
      >
        {children}
      </span>
    </Link>
  );
}

/**
 * Given a nav Link URL, returns `true` if the current page in the application matches
 * the navigation Link's URL. If the user is on a subroute of a matching page, that will also match.
 * @param url URL of the navigation Link
 * @returns `true` if the current route matches the nav Link's URL, otherwise `false`
 */
function useIsActive(url: NavigationLinkProps['href']) {
  const pathname = usePathname();
  const urlStr = url.toString();
  return (
    pathname === urlStr ||
    (pathname.startsWith(urlStr) && (urlStr !== '/' || pathname === '/'))
  );
}
