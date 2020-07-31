"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const UserRepository_1 = require("../api/repositories/UserRepository");
const Logger_1 = require("../decorators/Logger");
const jwt = tslib_1.__importStar(require("jsonwebtoken"));
let AuthService = class AuthService {
    constructor(log, userRepository) {
        this.log = log;
        this.userRepository = userRepository;
    }
    parseBasicAuthFromRequest(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const authorization = req.header('authorization');
            if (authorization && authorization.split(' ')[0] === 'Bearer') {
                this.log.info('Credentials provided by the client');
                const tokenDetails = yield this.decryptToken(authorization.split(' ')[1]);
                const userDetails = yield this.validateUser(tokenDetails.userId);
                if (userDetails) {
                    req.user = userDetails;
                    return userDetails;
                }
            }
            this.log.info('No credentials provided by the client');
            return undefined;
        });
    }
    decryptToken(token) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const decode = yield jwt.verify(token, '@#$#####@!#&*^%');
            console.log(decode);
            return decode;
        });
    }
    validateUser(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ where: { userId, isDelete: 0 } });
            if (user) {
                return user;
            }
            return undefined;
        });
    }
};
AuthService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, Logger_1.Logger(__filename)),
    tslib_1.__param(1, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__metadata("design:paramtypes", [Object, UserRepository_1.UserRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map