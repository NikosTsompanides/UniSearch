import { Repository, EntityRepository } from 'typeorm';
import { Course } from './entity';
import { GetCoursesFilter } from './DTO';

@EntityRepository(Course)
export class CourseRepository extends Repository<Course> {
	findMany(args: GetCoursesFilter): Promise<Course[]> {
		const query = GetCoursesFilter.builder()
			.title(args?.filter?.title)
			.take(args?.pagination?.limit)
			.skip(args?.pagination?.skip)
			.order(args?.order)
			.build();
		return this.find(query);
	}
}
