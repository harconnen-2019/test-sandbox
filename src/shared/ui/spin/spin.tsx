import { ReactNode } from 'react';

import styles from './spin.module.scss';

type SpinProps = {
  children: ReactNode;
};

/**
 * Doca
 * @param root0 test
 * @param root0.children test
 * @returns JavaScript
 */
function Spin({ children }: SpinProps) {
  return (
    <div className={styles.container} data-testid="Spin">
      {children}
    </div>
  );
}

export { Spin };
