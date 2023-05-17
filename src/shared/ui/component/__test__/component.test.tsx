import { render, screen } from '@testing-library/react';

import { Component } from '../component';

describe('/shared/ui/component', () => {
  it('Название', () => {
    render(<Component>test</Component>);
    const element = screen.getByTestId(/Component/i);
    expect(element).toBeInTheDocument();
    // expect(element).toMatchSnapshot();
  });
});
