import { EntityRepository, Repository } from 'typeorm';

import { Option } from '../models/Option';

@EntityRepository(Option)
export class OptionRepository extends Repository<Option> {

}
