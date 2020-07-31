"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateAreaService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Logger_1 = require("../../decorators/Logger");
const PrivateAreaRepository_1 = require("../repositories/PrivateAreaRepository");
let PrivateAreaService = class PrivateAreaService {
    constructor(privateAreaRepository, log) {
        this.privateAreaRepository = privateAreaRepository;
        this.log = log;
    }
    find(condition) {
        this.log.info('Find all');
        return this.privateAreaRepository.find(condition);
    }
    findOne(condition) {
        return this.privateAreaRepository.findOne(condition);
    }
    bulkCreate(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newUser = yield this.privateAreaRepository.save(data);
            return newUser;
        });
    }
};
PrivateAreaService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [PrivateAreaRepository_1.PrivateAreaRepository, Object])
], PrivateAreaService);
exports.PrivateAreaService = PrivateAreaService;
//# sourceMappingURL=PrivateAreaService.js.map