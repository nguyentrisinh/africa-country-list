import './Container.css';

import { FC, PropsWithChildren } from 'react';

export type ContainerProps = PropsWithChildren<{}>;

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="Container">{children}</div>;
};

export default Container;
