"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Logger_1 = require("../../decorators/Logger");
const UserRepository_1 = require("../repositories/UserRepository");
let UserService = class UserService {
    constructor(userRepository, log) {
        this.userRepository = userRepository;
        this.log = log;
    }
    find(condition) {
        this.log.info('Find all users');
        return this.userRepository.find(condition);
    }
    findOne(condition) {
        return this.userRepository.findOne(condition);
    }
    createOrUpdate(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newUser = yield this.userRepository.save(user);
            return newUser;
        });
    }
};
UserService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [UserRepository_1.UserRepository, Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map