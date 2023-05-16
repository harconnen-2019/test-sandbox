---
to: src/shared/ui/index.ts
unless_exists: true
---
<% ComponentName = h.inflection.camelize(name.split('-').join('_').split(' ').join('_')) -%>
<% if(locals.section) { -%>
export * from './<%= h.inflection.dasherize(section.toLowerCase()) %>';
<% } else { -%>
export * from './<%= h.inflection.dasherize(name.toLowerCase()) %>';
<%}-%>
