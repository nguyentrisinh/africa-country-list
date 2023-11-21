import './Notification.css';

import { FC, PropsWithChildren } from 'react';

import { classNames } from '../../utils/classNames.ts';

export enum ENotificationVariant {
  Success = 'Success',
  Error = 'Error',
}

export type NotificationProps = PropsWithChildren<{
  variant?: ENotificationVariant;
}>;

const Notification: FC<NotificationProps> = ({ children, variant }) => {
  return (
    <div
      className={classNames('Notification', {
        'Notification--Success': variant === ENotificationVariant.Success,
        'Notification--Error': variant === ENotificationVariant.Error,
      })}
    >
      <div>{children}</div>
    </div>
  );
};

export default Notification;
