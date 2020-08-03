import { Repository, EntityRepository } from 'typeorm';
import { Curriculum } from './entity';

@EntityRepository(Curriculum)
export class CurriculumRepository extends Repository<Curriculum> {
    
}
