import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { UserOption } from '../models/UserOption';
import { UserOptionRepository } from '../repositories/UserOptionRepository';

@Service()
export class UserOptionService {

    constructor(
        @OrmRepository() private userOptionRepository: UserOptionRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(condition: any): Promise<UserOption[]> {
        this.log.info('Find all users');
        return this.userOptionRepository.find(condition);
    }

    public findOne(condition: any): Promise<any> {
        return this.userOptionRepository.findOne(condition);
    }

    public async bulkCreate(user: UserOption[]): Promise<UserOption[]> {
        const newUser = await this.userOptionRepository.save(user);
        return newUser;
    }
}
