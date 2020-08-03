import { ArgsType, Field } from 'type-graphql';
import { Pagination } from '../../../common/classes/Pagination';
import { Order } from '../../../common/classes/Order';

@ArgsType()
export class GetCoursesDTO {
	@Field((type) => Pagination)
	pagination: Pagination;

	@Field((type) => Order)
	order: Order;
}
