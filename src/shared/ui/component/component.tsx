import { ReactNode } from 'react';

import styles from './component.module.css';

type ComponentProps = {
  children: ReactNode;
};

function Component({ children }: ComponentProps) {
  return <div className={styles.container} data-testid="Component">{children}</div>;
}

export { Component };
