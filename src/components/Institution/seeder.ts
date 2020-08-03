import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Institution } from './entity'

export default class CreateInstitution implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    
  }
}