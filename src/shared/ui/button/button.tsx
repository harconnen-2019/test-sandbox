import { ReactNode } from 'react';

import styles from './button.module.css';

type ButtonProps = {
  children: ReactNode;
};

// BUG: test
// HACK: test
// FIXME: test
// TODO: test
// XXX: test
// [x]: test
// [ ]: test

// ! тестируем 😗😈
// * тестируем 😡🐛👀
// ? тестируем

/**
 * ! test
 * ? test
 * test
 * todo: test
 * fixme test
 * bug test
 * [ ] test
 * xxx test
 * [x] test
 */

/**
 * Тестируем комменты
 * ? test вот такая строчка
 * @param root0 text
 * @param root0.children text
 * @returns JSX.Element
 * Сюда прописываем комментарий, чтобы отделить параметры
 */
function Button({ children }: ButtonProps) {
  return (
    <div className={styles.container} data-testid="Button">
      {children}
    </div>
  );
}

export { Button };
