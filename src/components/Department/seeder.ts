import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Department } from './entity'

export default class CreateDepartment implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    
  }
}