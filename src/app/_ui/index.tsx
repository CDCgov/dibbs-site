interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ children, className = '' }: TextProps) => {
  return <h2 className={className}>{children}</h2>;
};

export const Paragraph = ({ children, className = '' }: TextProps) => {
  return <p className={className}>{children}</p>;
};
