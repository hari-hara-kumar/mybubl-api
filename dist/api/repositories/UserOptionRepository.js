"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOptionRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const UserOption_1 = require("../models/UserOption");
let UserOptionRepository = class UserOptionRepository extends typeorm_1.Repository {
};
UserOptionRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(UserOption_1.UserOption)
], UserOptionRepository);
exports.UserOptionRepository = UserOptionRepository;
//# sourceMappingURL=UserOptionRepository.js.map