import { Resolver } from 'type-graphql'
import { Department } from './entity'
import { DepartmentRepository } from './repository'


@Resolver(of => Department )
export class DepartmentResolver {

    private readonly departmentRepository : DepartmentRepository
    constructor () {
        this.departmentRepository = new DepartmentRepository()
    }

}
