---
inject: true
to: src/shared/ui/index.ts
append: true
skip_if: '<% if(locals.section) { -%>./<%= h.inflection.dasherize(section.toLowerCase()) %><% } else { -%>./<%= h.inflection.dasherize(name.toLowerCase()) %><%}-%>'
---
<% if(locals.section) { -%>
export * from './<%= h.inflection.dasherize(section.toLowerCase()) %>';
<% } else { -%>
export * from './<%= h.inflection.dasherize(name.toLowerCase()) %>';
<%}-%>
