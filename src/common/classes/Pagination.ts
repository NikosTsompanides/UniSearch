import { InputType, Field, Int } from 'type-graphql';
import { Min, Max } from 'class-validator';

@InputType()
export class Pagination {
	@Field((type) => Int)
	skip: number = 0;

	@Field((type) => Int)
	@Min(0)
	@Max(1000)
	limit: number = 30;
}
