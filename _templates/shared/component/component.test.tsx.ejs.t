---
to: <% if(locals.test) { -%>src/shared/ui/<% if(locals.section) { -%><%= h.inflection.dasherize(section.toLowerCase()) %>/<%}-%><%= h.inflection.dasherize(name.toLowerCase()) %>/__test__/<%= h.inflection.dasherize(name.toLowerCase()) %>.test.tsx<% } else { null }-%>
---
<% ComponentName = h.inflection.camelize(name.split('-').join('_').split(' ').join('_')) -%>
import { render, screen } from '@testing-library/react';

import { <%= ComponentName %> } from '../<%= h.inflection.dasherize(name.toLowerCase()) %>';

describe('/shared/ui/<% if(locals.section) { -%><%= h.inflection.dasherize(section.toLowerCase()) %>/<%}-%><%= h.inflection.dasherize(name.toLowerCase()) %>', () => {
  it('Название', () => {
    render(<<%= ComponentName %>>test</<%= ComponentName %>>);
    const element = screen.getByTestId(/<%= ComponentName %>/i);
    expect(element).toBeInTheDocument();
    // expect(element).toMatchSnapshot();
  });
});
