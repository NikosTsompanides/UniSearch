---
to: "src/components/<%= name.charAt(0).toUpperCase() + name.slice(1) %>/resolver.ts"
arbitrary: <% entityName = name.charAt(0).toUpperCase() + name.slice(1) %>
---

import { Resolver } from 'type-graphql'
import { <%= entityName %> } from './entity'
import { <%= entityName %>Repository } from './repository'


@Resolver(of => <%= entityName %> )
export class <%= entityName %>Resolver {

    private readonly <%= name.toLowerCase() %>Repository : <%= entityName %>Repository
    constructor () {
        this.<%= name.toLowerCase() %>Repository = new <%= entityName %>Repository()
    }

}
