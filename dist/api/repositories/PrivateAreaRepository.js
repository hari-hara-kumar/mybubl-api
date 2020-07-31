"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateAreaRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const PrivateArea_1 = require("../models/PrivateArea");
let PrivateAreaRepository = class PrivateAreaRepository extends typeorm_1.Repository {
};
PrivateAreaRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(PrivateArea_1.PrivateArea)
], PrivateAreaRepository);
exports.PrivateAreaRepository = PrivateAreaRepository;
//# sourceMappingURL=PrivateAreaRepository.js.map