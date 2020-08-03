import { Repository, EntityRepository } from 'typeorm';
import { Course } from './entity';

@EntityRepository(Course)
export class CourseRepository extends Repository<Course> {
    
}
