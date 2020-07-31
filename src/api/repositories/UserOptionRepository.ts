import { EntityRepository, Repository } from 'typeorm';

import { UserOption } from '../models/UserOption';

@EntityRepository(UserOption)
export class UserOptionRepository extends Repository<UserOption> {

}
