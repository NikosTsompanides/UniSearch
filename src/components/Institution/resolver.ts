import { Resolver } from 'type-graphql'
import { Institution } from './entity'
import { InstitutionRepository } from './repository'


@Resolver(of => Institution )
export class InstitutionResolver {

    private readonly institutionRepository : InstitutionRepository
    constructor () {
        this.institutionRepository = new InstitutionRepository()
    }

}
