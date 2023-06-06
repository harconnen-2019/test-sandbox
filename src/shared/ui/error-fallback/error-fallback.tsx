type Props = {
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
};

/**
 *
 * @param props пропсы
 * @param props.error текст ошибки
 * @param props.resetErrorBoundary перезагрузка
 * @returns JSX.Element
 */
function ErrorFallback({ error, resetErrorBoundary }: Props) {
  return (
    <>
      {/* сообщение об ошибке */}
      {error.message || 'Unknown error'}
      <button type="button" onClick={resetErrorBoundary}>
        Reload
      </button>
    </>
  );
}

export { ErrorFallback };
