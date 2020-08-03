import { BaseEntity } from '../../common/classes/BaseEntity';

import { Entity, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Institution } from '../Institution/entity';
import { Curriculum } from '../Curriculum/entity';

@Entity()
@ObjectType()
export class Department extends BaseEntity {
	@Column('text')
	@Field((type) => String)
	name: string;

	@ManyToOne((type) => Institution, (institution) => institution.departments)
	@Field((type) => Institution)
	institution: Institution;

	@OneToOne((type) => Curriculum)
	@JoinColumn()
	@Field((type) => Curriculum)
	curriculum: Curriculum;
}
