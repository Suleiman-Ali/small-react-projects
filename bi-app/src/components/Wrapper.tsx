import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  cls: string;
}

function Wrapper({ children, cls }: WrapperProps): JSX.Element {
  return <div className={cls}>{children}</div>;
}

export default Wrapper;
