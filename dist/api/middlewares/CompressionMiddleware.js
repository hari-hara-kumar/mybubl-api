"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompressionMiddleware = void 0;
const tslib_1 = require("tslib");
const compression_1 = tslib_1.__importDefault(require("compression"));
const routing_controllers_1 = require("routing-controllers");
let CompressionMiddleware = class CompressionMiddleware {
    use(req, res, next) {
        return compression_1.default()(req, res, next);
    }
};
CompressionMiddleware = tslib_1.__decorate([
    routing_controllers_1.Middleware({ type: 'before' })
], CompressionMiddleware);
exports.CompressionMiddleware = CompressionMiddleware;
//# sourceMappingURL=CompressionMiddleware.js.map