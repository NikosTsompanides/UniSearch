import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType } from 'type-graphql';

@Entity()
@ObjectType()
export abstract class BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    updated_at: string

}