export interface QueryBuilder {
	paginate(limit: number, offset: number): {};
	order(property: string, method: string): {};
}
