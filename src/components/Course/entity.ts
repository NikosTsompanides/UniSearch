import { BaseEntity } from '../../common/classes/BaseEntity';

import { Entity, ManyToOne, Column } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Curriculum } from '../Curriculum/entity';

@Entity()
@ObjectType()
export class Course extends BaseEntity {
	@Column('text')
	@Field((type) => String!)
	title: string;

	@Column('text')
	@Field((type) => String!)
	description: string;

	@ManyToOne((type) => Curriculum, (curriculum) => curriculum.courses)
	@Field((type) => Curriculum)
	curriculum: Curriculum;
}
