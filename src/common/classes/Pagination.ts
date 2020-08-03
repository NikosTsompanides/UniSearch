import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class Pagination {
	@Field((type) => Int)
	skip: number = 0;

	@Field((type) => Int)
	limit: number = 30;
}
