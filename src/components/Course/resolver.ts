import { Resolver, Query, Args } from 'type-graphql';
import { Course } from './entity';
import { CourseRepository } from './repository';
import { GetCoursesDTO } from './dto/GetCoursesDTO';
import { logger } from '../../utils/Logger';
import { getCustomRepository } from 'typeorm';

@Resolver((of) => Course)
export class CourseResolver {
	private readonly courseRepository: CourseRepository;
	constructor() {
		this.courseRepository = getCustomRepository(CourseRepository);
	}

	@Query((returns) => [Course!])
	courses(@Args() args: GetCoursesDTO) {
		try {
			return this.courseRepository.find();
		} catch (error) {
			logger.error(error);
		}
	}
}
