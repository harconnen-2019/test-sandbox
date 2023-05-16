---
to: src/shared/ui/<% if(locals.section) { -%><%= h.inflection.dasherize(section.toLowerCase()) %>/<%}-%><%= h.inflection.dasherize(name.toLowerCase()) %>/index.ts
---
<% ComponentName = h.inflection.camelize(name.split('-').join('_').split(' ').join('_')) -%>
export * from './<%= h.inflection.dasherize(name.toLowerCase()) %>';
