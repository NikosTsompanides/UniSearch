---
to: "src/components/<%= name.charAt(0).toUpperCase() + name.slice(1) %>/seeder.ts"
arbitrary: <% entityName = name.charAt(0).toUpperCase() + name.slice(1) %>
---

import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { <%= entityName %> } from './entity'

export default class Create<%= entityName %> implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    
  }
}