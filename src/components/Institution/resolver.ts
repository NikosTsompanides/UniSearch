import { Resolver } from 'type-graphql';
import { Institution } from './entity';
import { InstitutionRepository } from './repository';
import { getCustomRepository } from 'typeorm';

@Resolver((of) => Institution)
export class InstitutionResolver {
	private readonly institutionRepository: InstitutionRepository;
	constructor() {
		this.institutionRepository = getCustomRepository(InstitutionRepository);
	}
}
