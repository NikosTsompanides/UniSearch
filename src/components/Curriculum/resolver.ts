import { Resolver } from 'type-graphql'
import { Curriculum } from './entity'
import { CurriculumRepository } from './repository'


@Resolver(of => Curriculum )
export class CurriculumResolver {

    private readonly curriculumRepository : CurriculumRepository
    constructor () {
        this.curriculumRepository = new CurriculumRepository()
    }

}
