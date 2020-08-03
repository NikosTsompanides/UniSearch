---
to: "src/components/<%= name.charAt(0).toUpperCase() + name.slice(1) %>/entity.ts"
arbitrary: <% entityName = name.charAt(0).toUpperCase() + name.slice(1) %>
---
<% if (extendsBaseEntity) { %>
import { BaseEntity } from '../../common/classes/BaseEntity'
<% } %>
import { Entity } from 'typeorm'
import { ObjectType } from 'type-graphql'

@Entity()
@ObjectType()
export class <%= entityName %> <%= extendsBaseEntity? 'extends BaseEntity': '' %> {

}
