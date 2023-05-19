import { ReactNode } from 'react';

import styles from './component.module.scss';

type ComponentProps = {
  children: ReactNode;
};

/**
 * @param props object
 * @param props.children ReactNode
 * @returns JSX.Element
 */
function Component({ children }: ComponentProps) {
  return (
    <div className={styles.container} data-testid="Component">
      {children}
    </div>
  );
}

export { Component };
