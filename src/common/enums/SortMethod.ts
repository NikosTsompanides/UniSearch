import { registerEnumType } from 'type-graphql';

export enum SortMethod {
	ASC = 'asc',
	DESC = 'desc',
}

registerEnumType(SortMethod, {
	name: 'SortMethod', // this one is mandatory
	description: 'Sort Methods', // this one is optional
});
