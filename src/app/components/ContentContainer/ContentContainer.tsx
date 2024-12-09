import classNames from 'classnames';

interface ContentContainerProps {
  children: React.ReactNode;
  align?: boolean;
  classes?: string;
  sectionClasses?: string;
}
export function ContentContainer({
  children,
  align = false,
  classes = '',
}: ContentContainerProps) {
  const defaultClasses =
    'ml-auto mr-auto flex max-w-[87.5rem] flex-col px-10 py-4 sm:px-14 sm:py-20';
  return (
    <div
      className={classNames(defaultClasses, classes, {
        'md:px-32': !align,
      })}
    >
      {children}
    </div>
  );
}
