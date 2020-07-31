"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const bcrypt = tslib_1.__importStar(require("bcrypt"));
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
let User = class User {
    static hashPassword(password) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    return reject(err);
                }
                resolve(hash);
            });
        });
    }
    static comparePassword(user, password) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                resolve(res === true);
            });
        });
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'id' }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "userId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'first_name' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'last_name' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'email' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'password' }),
    class_transformer_1.Exclude(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'phone_number' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'business_name' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "businessName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'business_city' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "businessCity", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'company_name' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "companyName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'door_no' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "doorNo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'street' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "street", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'city' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "city", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'pin_code' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "pinCode", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'min_off_peak' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "minOffPeak", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'min_hr_peak' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "minHrPeak", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'min_hr_xmas' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "minHrXmas", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'remarks' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "remarks", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'is_delete' }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "isDelete", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'created_by' }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "createdBy", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'created_date' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "createdDate", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'modified_by' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "modifiedBy", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'modified_date' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "modifiedDate", void 0);
User = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'user' })
], User);
exports.User = User;
//# sourceMappingURL=User.js.map