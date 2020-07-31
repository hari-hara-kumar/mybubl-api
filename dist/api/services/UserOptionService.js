"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOptionService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Logger_1 = require("../../decorators/Logger");
const UserOptionRepository_1 = require("../repositories/UserOptionRepository");
let UserOptionService = class UserOptionService {
    constructor(userOptionRepository, log) {
        this.userOptionRepository = userOptionRepository;
        this.log = log;
    }
    find(condition) {
        this.log.info('Find all users');
        return this.userOptionRepository.find(condition);
    }
    findOne(condition) {
        return this.userOptionRepository.findOne(condition);
    }
    bulkCreate(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newUser = yield this.userOptionRepository.save(user);
            return newUser;
        });
    }
};
UserOptionService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [UserOptionRepository_1.UserOptionRepository, Object])
], UserOptionService);
exports.UserOptionService = UserOptionService;
//# sourceMappingURL=UserOptionService.js.map