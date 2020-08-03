import { buildSchema } from 'type-graphql';

import { CourseResolver } from '../components/Course/resolver';

export const getSchema = () =>
	buildSchema({
		resolvers: [CourseResolver],
		emitSchemaFile: true,
	});
