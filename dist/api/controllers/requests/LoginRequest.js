"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequest = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class LoginRequest {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], LoginRequest.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], LoginRequest.prototype, "password", void 0);
exports.LoginRequest = LoginRequest;
//# sourceMappingURL=LoginRequest.js.map