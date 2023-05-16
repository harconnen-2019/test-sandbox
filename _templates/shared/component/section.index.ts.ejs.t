---
to: <% if(locals.section) { -%>src/shared/ui/<%= h.inflection.dasherize(section.toLowerCase()) %>/index.ts<% } else { null }-%>
unless_exists: true
---
<% ComponentName = h.inflection.camelize(name.split('-').join('_').split(' ').join('_')) -%>
export * from './<%= h.inflection.dasherize(name.toLowerCase()) %>';
