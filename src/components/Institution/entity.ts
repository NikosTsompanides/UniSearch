import { BaseEntity } from '../../common/classes/BaseEntity';

import { Entity, Column, OneToMany } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Department } from '../Department/entity';

@Entity()
@ObjectType()
export class Institution extends BaseEntity {
	@Column('text')
	@Field((type) => String)
	name: string;

	@OneToMany((type) => Department, (department) => department.institution)
	@Field((type) => [Department])
	departments: Department[];
}
