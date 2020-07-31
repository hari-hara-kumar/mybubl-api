"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRequest = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class RegisterRequest {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], RegisterRequest.prototype, "firstName", void 0);
tslib_1.__decorate([
    class_validator_1.IsEmail(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], RegisterRequest.prototype, "email", void 0);
exports.RegisterRequest = RegisterRequest;
//# sourceMappingURL=RegisterRequest.js.map