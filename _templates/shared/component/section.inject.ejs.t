---
inject: true
to: <% if(locals.section) { -%>src/shared/ui/<%= h.inflection.dasherize(section.toLowerCase()) %>/index.ts<% } else { null }-%>
append: true
skip_if: './<%= h.inflection.dasherize(name.toLowerCase()) %>'
---
export * from './<%= h.inflection.dasherize(name.toLowerCase()) %>'
