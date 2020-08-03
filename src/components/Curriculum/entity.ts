import { BaseEntity } from '../../common/classes/BaseEntity';

import { Entity, OneToMany } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Course } from '../Course/entity';

@Entity()
@ObjectType()
export class Curriculum extends BaseEntity {
	@OneToMany((type) => Course, (course) => course.curriculum)
	@Field((type) => [Course])
	courses: Course[];
}
