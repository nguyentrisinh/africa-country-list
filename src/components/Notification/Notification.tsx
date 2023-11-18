import './Notification.css';

import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';

import Portal from '../Portal/Portal.tsx';

export type NotificationProps = PropsWithChildren<{
  timeout?: number;
}>;

const Notification: FC<NotificationProps> = ({ children, timeout = 3000 }) => {
  const timeoutRef = useRef<null | number>(null);
  const [visible, setVisible] = useState<boolean>(!!children);
  console.log({
    visible,
  });
  useEffect(() => {
    if (children) {
      setVisible(true);
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, timeout);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [children]);
  return visible && <Portal>{children && <div className="Notification">{children}</div>}</Portal>;
};

export default Notification;
