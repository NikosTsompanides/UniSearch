import Faker from 'faker';
import { define, factory } from 'typeorm-seeding';
import { Curriculum } from './entity';
import { Course } from '../Course/entity';

define(Curriculum, (faker: typeof Faker) => {
	const curriculum = new Curriculum();
	curriculum.courses = factory(Course)().createMany(50) as any;
	return curriculum;
});
