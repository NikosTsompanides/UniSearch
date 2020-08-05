import { Resolver } from 'type-graphql';
import { Curriculum } from './entity';
import { CurriculumRepository } from './repository';
import { getCustomRepository } from 'typeorm';

@Resolver((of) => Curriculum)
export class CurriculumResolver {
	private readonly curriculumRepository: CurriculumRepository;
	constructor() {
		this.curriculumRepository = getCustomRepository(CurriculumRepository);
	}
}
