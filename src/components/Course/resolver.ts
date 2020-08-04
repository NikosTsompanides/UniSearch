import { Resolver, Query, Args } from 'type-graphql';
import { Course } from './entity';
import { CourseRepository } from './repository';
import { GetCoursesFilter } from './DTO';
import { logger } from '../../utils/Logger';
import { getCustomRepository } from 'typeorm';

@Resolver((of) => Course)
export class CourseResolver {
	private readonly courseRepository: CourseRepository;
	constructor() {
		this.courseRepository = getCustomRepository(CourseRepository);
	}

	@Query((returns) => [Course!])
	async courses(@Args() args: GetCoursesFilter) {
		try {
			return await this.courseRepository.findMany(args);
		} catch (error) {
			logger.error(error);
		}
	}
}
