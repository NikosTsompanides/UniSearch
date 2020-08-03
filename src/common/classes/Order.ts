import { InputType, Field } from 'type-graphql';
import { SortMethod } from '../enums/SortMethod';

@InputType()
export class Order {
	@Field((type) => String, {
		description: 'Property of object to order',
	})
	property: string;

	@Field((type) => SortMethod)
	sortMethod: SortMethod;
}
