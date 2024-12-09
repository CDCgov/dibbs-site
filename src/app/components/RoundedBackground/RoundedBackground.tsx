import classNames from 'classnames';

interface RoundedBackgroundProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

export const RoundedBackground = ({
  children,
  className,
  ...props
}: RoundedBackgroundProps) => {
  return (
    <div
      {...props}
      className={classNames(
        'rounded-br-[2.5rem] rounded-tl-[2.5rem] border-2 border-[#82b4c9] bg-white/50',
        className,
      )}
    >
      {children}
    </div>
  );
};
