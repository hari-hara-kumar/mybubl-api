"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Logger_1 = require("../../decorators/Logger");
const OptionRepository_1 = require("../repositories/OptionRepository");
let OptionService = class OptionService {
    constructor(optionRepository, log) {
        this.optionRepository = optionRepository;
        this.log = log;
    }
    find(condition) {
        this.log.info('Find');
        return this.optionRepository.find(condition);
    }
    findOne(condition) {
        return this.optionRepository.findOne(condition);
    }
    create(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newPet = yield this.optionRepository.save(data);
            return newPet;
        });
    }
};
OptionService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [OptionRepository_1.OptionRepository, Object])
], OptionService);
exports.OptionService = OptionService;
//# sourceMappingURL=OptionService.js.map