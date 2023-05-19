import { render, screen } from '@testing-library/react';

import { Button } from '../button';

describe('/PATH/Button', () => {
  it('Название', () => {
    render(<Button>test</Button>);
    const element = screen.getByTestId(/Button/i);
    expect(element).toBeInTheDocument();
    // expect(element).toMatchSnapshot();
  });
});
