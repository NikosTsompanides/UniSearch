---
to: "src/components/<%= name.charAt(0).toUpperCase() + name.slice(1) %>/factory.ts"
arbitrary: <% entityName = name.charAt(0).toUpperCase() + name.slice(1) %>
---
import Faker from 'faker'
import { define } from 'typeorm-seeding'
import { <%= entityName %> } from './entity'

define(<%= entityName %>, (faker: typeof Faker) => {
  
})