import { EntityRepository, Repository } from 'typeorm';

import { PrivateArea } from '../models/PrivateArea';

@EntityRepository(PrivateArea)
export class PrivateAreaRepository extends Repository<PrivateArea> {

}
