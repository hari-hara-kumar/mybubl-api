import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';

@Service()
export class UserService {

    constructor(
        @OrmRepository() private userRepository: UserRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(condition: any): Promise<User[]> {
        this.log.info('Find all users');
        return this.userRepository.find(condition);
    }

    public findOne(condition: any): Promise<any> {
        return this.userRepository.findOne(condition);
    }

    public async createOrUpdate(user: User): Promise<User> {
        const newUser = await this.userRepository.save(user);
        return newUser;
    }
}
