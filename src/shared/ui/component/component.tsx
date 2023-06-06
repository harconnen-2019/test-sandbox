import { ReactNode } from 'react';

import styles from './component.module.scss';

type ComponentProps = {
  children: ReactNode;
};

/**
 * [ ] не выбран
 * [x] выбран
 * @param props ComponentProps
 * @param props.children ReactNode
 * @returns Компонент с параметрами 1
 */
function Component({ children }: ComponentProps) {
  return (
    <div className={styles.container} data-testid="Component">
      {children}
    </div>
  );
}

export { Component };
