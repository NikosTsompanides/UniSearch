---
to: "src/components/<%= name.charAt(0).toUpperCase() + name.slice(1) %>/repository.ts"
arbitrary: <% entityName = name.charAt(0).toUpperCase() + name.slice(1) %>
---

import { Repository, EntityRepository } from 'typeorm';
import { <%= entityName %> } from './entity';

@EntityRepository(<%= entityName %>)
export class <%= entityName %>Repository extends Repository<<%= entityName %>> {
    
}
