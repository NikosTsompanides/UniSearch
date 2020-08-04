import Faker from 'faker';
import { define, factory } from 'typeorm-seeding';
import { Department } from './entity';
import { Curriculum } from '../Curriculum/entity';

define(Department, (faker: typeof Faker) => {
	const department = new Department();
	department.name = Faker.lorem.words(3);
	department.curriculum = factory(Curriculum)().create() as any;
	return department;
});
