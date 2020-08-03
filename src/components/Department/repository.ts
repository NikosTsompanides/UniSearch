import { Repository, EntityRepository } from 'typeorm';
import { Department } from './entity';

@EntityRepository(Department)
export class DepartmentRepository extends Repository<Department> {
    
}
