import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

export default class CreateCourse implements Seeder {
	public async run(factory: Factory, connection: Connection): Promise<any> {}
}
