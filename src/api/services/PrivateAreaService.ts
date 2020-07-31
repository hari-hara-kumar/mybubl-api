import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { PrivateArea } from '../models/PrivateArea';
import { PrivateAreaRepository } from '../repositories/PrivateAreaRepository';

@Service()
export class PrivateAreaService {

    constructor(
        @OrmRepository() private privateAreaRepository: PrivateAreaRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(condition: any): Promise<PrivateArea[]> {
        this.log.info('Find all');
        return this.privateAreaRepository.find(condition);
    }

    public findOne(condition: any): Promise<any> {
        return this.privateAreaRepository.findOne(condition);
    }

    public async bulkCreate(data: PrivateArea[]): Promise<PrivateArea[]> {
        const newUser = await this.privateAreaRepository.save(data);
        return newUser;
    }
}
