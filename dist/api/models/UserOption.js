"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOption = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Option_1 = require("./Option");
let UserOption = class UserOption {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'id' }),
    tslib_1.__metadata("design:type", Number)
], UserOption.prototype, "userOptionId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'option_id' }),
    tslib_1.__metadata("design:type", Number)
], UserOption.prototype, "optionId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'user_id' }),
    tslib_1.__metadata("design:type", Number)
], UserOption.prototype, "userId", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(optionDetails => Option_1.Option, optionDetails => optionDetails.userOptionDetails),
    typeorm_1.JoinColumn({ name: 'option_id' }),
    tslib_1.__metadata("design:type", Option_1.Option)
], UserOption.prototype, "optionDetails", void 0);
UserOption = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'user_option' })
], UserOption);
exports.UserOption = UserOption;
//# sourceMappingURL=UserOption.js.map