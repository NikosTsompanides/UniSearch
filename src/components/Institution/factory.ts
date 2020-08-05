import Faker from 'faker';
import { define, factory } from 'typeorm-seeding';
import { Institution } from './entity';
import { Department } from '../Department/entity';

define(Institution, (faker: typeof Faker) => {
	const institution = new Institution();
	institution.name = Faker.lorem.words(3);
	institution.departments = factory(Department)().createMany(30) as any;
	return institution;
});
