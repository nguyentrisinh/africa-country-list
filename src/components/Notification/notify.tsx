import './notify.css';

import { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';

import Notification, { NotificationProps } from './Notification.tsx';

const notify = (
  message: ReactNode,
  config?: NotificationProps & {
    timeout?: number;
  }
) => {
  const container = document.createElement('div');
  container.setAttribute('data-name', 'Notification item');
  const renderRoot = ReactDOM.createRoot(container);
  document.getElementById('NotificationContainer')!.appendChild(container);
  renderRoot.render(<Notification variant={config?.variant}>{message}</Notification>);

  setTimeout(
    () => {
      container?.remove();
    },
    config?.timeout || 3000
  );
};

export default notify;
