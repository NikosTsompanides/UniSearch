import { ArgsType, InputType, Field } from 'type-graphql';

import { BaseQueryArgs } from '../../../common/classes/BaseQueryArgs';
import { Order } from '@src/common/classes/Order';

@InputType()
class FilterCourse {
	@Field({ description: 'Creates a Like query on the title of Course' })
	title: string;
}

@ArgsType()
export class GetCoursesFilter extends BaseQueryArgs {
	@Field((type) => FilterCourse, { nullable: true })
	filter: FilterCourse;

	private static query: {} = {};
	public static builder() {
		const title = (title: string = null) => {
			if (title) {
				this.query = { ...this.query, title };
			}
			return this.builder();
		};

		const take = (limit: number) => {
			if (limit) {
				this.query = { ...this.query, take: limit };
			}
			return this.builder();
		};

		const skip = (skip: number) => {
			if (skip) {
				this.query = { ...this.query, skip };
			}
			return this.builder();
		};

		const order = (order: Order) => {
			if (order?.property && order?.sortMethod) {
				this.query = { ...this.query, order: { [order.property]: order.sortMethod } };
			}
			return this.builder();
		};

		const build = () => this.query;

		return {
			title,
			take,
			skip,
			order,
			build,
		};
	}
}
