---
to: <% if(locals.readme) { -%>src/shared/ui/<% if(locals.section) { -%><%= h.inflection.dasherize(section.toLowerCase()) %>/<%}-%><%= h.inflection.dasherize(name.toLowerCase()) %>/README.md<% } else { null }-%>
---
# <%= h.capitalize(Name) %>


## Props
| Свойство | Тип | Опционально | По умолчанию | Описание |
| ---------|-----|-------------|--------------|----------|


## Example
