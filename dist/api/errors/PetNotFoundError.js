"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetNotFoundError = void 0;
const routing_controllers_1 = require("routing-controllers");
class PetNotFoundError extends routing_controllers_1.HttpError {
    constructor() {
        super(404, 'Pet not found!');
    }
}
exports.PetNotFoundError = PetNotFoundError;
//# sourceMappingURL=PetNotFoundError.js.map