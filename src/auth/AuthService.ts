import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { User } from '../api/models/User';
import { UserRepository } from '../api/repositories/UserRepository';
import { Logger, LoggerInterface } from '../decorators/Logger';
import * as jwt from 'jsonwebtoken';

@Service()
export class AuthService {

    constructor(
        @Logger(__filename) private log: LoggerInterface,
        @OrmRepository() private userRepository: UserRepository
    ) { }

    public async parseBasicAuthFromRequest(req: any): Promise<any> {
        const authorization = req.header('authorization');

        if (authorization && authorization.split(' ')[0] === 'Bearer') {
            this.log.info('Credentials provided by the client');
            const tokenDetails = await this.decryptToken(authorization.split(' ')[1]);
            const userDetails = await this.validateUser(tokenDetails.userId);
            if (userDetails) {
                req.user = userDetails;
                return userDetails;
            }
                }

        this.log.info('No credentials provided by the client');
        return undefined;
    }
    public async decryptToken(token: string): Promise<any> {
            const decode = await jwt.verify(token, '@#$#####@!#&*^%');
                    console.log(decode);
                    return decode;
    }

    public async validateUser(userId: string): Promise<User> {
        const user = await this.userRepository.findOne({ where: { userId, isDelete: 0}});
        if (user) {
            return user;
        }

        return undefined;
    }

}
