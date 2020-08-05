import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Course } from './entity';

define(Course, (faker: typeof Faker) => {
	const course = new Course();
	course.title = Faker.lorem.words(3);
	course.description = Faker.lorem.sentences(2);
	return course;
});
