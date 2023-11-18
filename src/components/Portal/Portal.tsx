import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export type PortalProps = PropsWithChildren<{}>;

const Portal: FC<PortalProps> = ({ children }) => {
  const domElement = document.getElementById('portal')!;
  return createPortal(children, domElement);
};

export default Portal;
