import { Field, ArgsType } from 'type-graphql';
import { Pagination } from './Pagination';
import { Order } from './Order';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class BaseQueryArgs {
	@Field((type) => Pagination, { nullable: true })
	@ValidateNested()
	pagination: Pagination;

	@Field((type) => Order, { nullable: true })
	order: Order;
}
