"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateArea = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let PrivateArea = class PrivateArea {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'id' }),
    tslib_1.__metadata("design:type", Number)
], PrivateArea.prototype, "privateAreaId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'area_name' }),
    tslib_1.__metadata("design:type", String)
], PrivateArea.prototype, "areaName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'no_of_room' }),
    tslib_1.__metadata("design:type", String)
], PrivateArea.prototype, "noOfRoom", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'user_id' }),
    tslib_1.__metadata("design:type", Number)
], PrivateArea.prototype, "userId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'no_of_seats' }),
    tslib_1.__metadata("design:type", Number)
], PrivateArea.prototype, "noOfSeats", void 0);
PrivateArea = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'private_area' })
], PrivateArea);
exports.PrivateArea = PrivateArea;
//# sourceMappingURL=PrivateArea.js.map