import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Option } from '../models/Option';
import { OptionRepository } from '../repositories/OptionRepository';

@Service()
export class OptionService {

    constructor(
        @OrmRepository() private optionRepository: OptionRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(condition: any): Promise<Option[]> {
        this.log.info('Find');
        return this.optionRepository.find(condition);
    }

    public findOne(condition: any): Promise<any> {
        return this.optionRepository.findOne(condition);
    }

    public async create(data: Option): Promise<Option> {
        const newPet = await this.optionRepository.save(data);
        return newPet;
    }
}
