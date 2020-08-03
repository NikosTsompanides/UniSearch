import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Course } from './entity'

export default class CreateCourse implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    
  }
}