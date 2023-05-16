---
to: <% if(locals.module) { -%>src/shared/ui/<% if(locals.section) { -%><%= h.inflection.dasherize(section.toLowerCase()) %>/<%}-%><%= h.inflection.dasherize(name.toLowerCase()) %>/<%= h.inflection.dasherize(name.toLowerCase()) %>.module.css<% } else { null }-%>
---
.container {
  width: 100%;
}