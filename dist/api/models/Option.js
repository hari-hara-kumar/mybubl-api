"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const UserOption_1 = require("./UserOption");
let Option = class Option {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'id' }),
    tslib_1.__metadata("design:type", Number)
], Option.prototype, "optionId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'option_name' }),
    tslib_1.__metadata("design:type", String)
], Option.prototype, "optionName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'slug_name' }),
    tslib_1.__metadata("design:type", String)
], Option.prototype, "slugName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'is_active' }),
    tslib_1.__metadata("design:type", Number)
], Option.prototype, "isActive", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(userOptionDetails => UserOption_1.UserOption, userOptionDetails => userOptionDetails.optionDetails),
    tslib_1.__metadata("design:type", UserOption_1.UserOption)
], Option.prototype, "userOptionDetails", void 0);
Option = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'm_option' })
], Option);
exports.Option = Option;
//# sourceMappingURL=Option.js.map