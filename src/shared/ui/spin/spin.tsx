import { ReactNode } from 'react';

import styles from './spin.module.scss';

type SpinProps = {
  children: ReactNode;
};

function Spin({ children }: SpinProps) {
  return (
    <div className={styles.container} data-testid="Spin">
      {children}
    </div>
  );
}

export { Spin };
