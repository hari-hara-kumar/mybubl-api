"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEventSubscriber = void 0;
const tslib_1 = require("tslib");
const event_dispatch_1 = require("event-dispatch");
const logger_1 = require("../../lib/logger");
const User_1 = require("../models/User");
const events_1 = require("./events");
const log = new logger_1.Logger(__filename);
let UserEventSubscriber = class UserEventSubscriber {
    onUserCreate(user) {
        log.info('User ' + user.toString() + ' created!');
    }
};
tslib_1.__decorate([
    event_dispatch_1.On(events_1.events.user.created),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User]),
    tslib_1.__metadata("design:returntype", void 0)
], UserEventSubscriber.prototype, "onUserCreate", null);
UserEventSubscriber = tslib_1.__decorate([
    event_dispatch_1.EventSubscriber()
], UserEventSubscriber);
exports.UserEventSubscriber = UserEventSubscriber;
//# sourceMappingURL=UserEventSubscriber.js.map