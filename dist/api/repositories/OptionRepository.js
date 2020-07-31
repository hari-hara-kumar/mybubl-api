"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Option_1 = require("../models/Option");
let OptionRepository = class OptionRepository extends typeorm_1.Repository {
};
OptionRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Option_1.Option)
], OptionRepository);
exports.OptionRepository = OptionRepository;
//# sourceMappingURL=OptionRepository.js.map