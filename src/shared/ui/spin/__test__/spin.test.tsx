import { render, screen } from '@testing-library/react';

import { Spin } from '../spin';

describe('/PATH/Spin', () => {
  it('Название', () => {
    render(<Spin>test</Spin>);
    const element = screen.getByTestId(/Spin/i);
    expect(element).toBeTruthy();
    // expect(element).toBeInTheDocument();
    // expect(element).toMatchSnapshot();
  });
});
