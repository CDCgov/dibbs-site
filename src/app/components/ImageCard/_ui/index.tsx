interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-4 xl:grid-cols-[2fr_1fr] xl:justify-items-start xl:gap-0">
      {children}
    </div>
  );
};

interface ChildrenProps {
  children: React.ReactNode;
}

export const ImageContainer = ({ children }: ChildrenProps) => (
  <div className="order-1 overflow-hidden rounded-tl-[2.5rem] sm:w-[30rem] xl:order-2">
    {children}
  </div>
);

export const TextContainer = ({ children }: ChildrenProps) => (
  <div className="order-2 flex flex-col gap-5 xl:order-1">{children}</div>
);
