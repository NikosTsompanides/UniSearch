import { Resolver } from 'type-graphql';
import { Department } from './entity';
import { DepartmentRepository } from './repository';
import { getCustomRepository } from 'typeorm';

@Resolver((of) => Department)
export class DepartmentResolver {
	private readonly departmentRepository: DepartmentRepository;
	constructor() {
		this.departmentRepository = getCustomRepository(DepartmentRepository);
	}
}
