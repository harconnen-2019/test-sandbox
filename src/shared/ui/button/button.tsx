import { ReactNode } from 'react';

import styles from './button.module.css';

type ButtonProps = {
  children: ReactNode;
};

/**
 *
 * @param root0 text
 * @param root0.children text
 * @returns JSX.Element
 */
function Button({ children }: ButtonProps) {
  return (
    <div className={styles.container} data-testid="Button">
      {children}
    </div>
  );
}

export { Button };
