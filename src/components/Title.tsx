type Props = {
  children: React.ReactNode;
  className?: string;
};

function Title({ children, className = '' }: Props) {
  return <h1 className={`text-light text-4xl ${className}`}>{children}</h1>;
}

export default Title;