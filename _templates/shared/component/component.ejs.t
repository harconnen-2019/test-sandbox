---
to: src/shared/ui/<% if(locals.section) { -%><%= h.inflection.dasherize(section.toLowerCase()) %>/<%}-%><%= h.inflection.dasherize(name.toLowerCase()) %>/<%= h.inflection.dasherize(name.toLowerCase()) %>.tsx
---
<% ComponentName = h.inflection.camelize(name.split('-').join('_').split(' ').join('_')) -%>
import { ReactNode } from 'react';
<% if(locals.module) { -%>

import styles from './<%= h.inflection.dasherize(name.toLowerCase()) %>.module.css';
<%}-%>

type <%= ComponentName %>Props = {
  children: ReactNode;
};

function <%= ComponentName %>({ children }: <%= ComponentName %>Props) {
  return <div<% if(locals.module) { -%> className={styles.container}<%}-%><% if(locals.test) { -%> data-testid="<%= ComponentName %>"<%}-%>>{children}</div>;
}

export { <%= ComponentName %> };
