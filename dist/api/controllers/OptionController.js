"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const OptionService_1 = require("../services/OptionService");
const ListRequest_1 = require("./requests/ListRequest");
let OptionController = class OptionController {
    constructor(optionService) {
        this.optionService = optionService;
    }
    /**
     * @api {get} /api/option/list Options List
     * @apiGroup Option
     * @apiHeader {String} Authorization
     * @apiParam {String} limit limit
     * @apiParam {String} offset offset
     * @apiParamExample {json} Input
     *  {
     *      "limit": ""
     *      "offset": ""
     * }
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     *     {
     *     }
     * @apiSampleRequest /api/option/list
     * @apiErrorExample {json} Error-Response:
     * HTTP/1.1 404 Not Found
     */
    OptionsList(params, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const optionList = yield this.optionService.find({});
            const optionListCount = yield this.optionService.find({});
            const successResponse = {
                status: 0,
                message: 'Successfully got the list of options',
                data: {
                    optionList,
                    optionListCount: optionListCount.length,
                },
            };
            return response.status(200).send(successResponse);
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get('/list'),
    tslib_1.__param(0, routing_controllers_1.QueryParams()), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ListRequest_1.ListRequest, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OptionController.prototype, "OptionsList", null);
OptionController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/option'),
    tslib_1.__metadata("design:paramtypes", [OptionService_1.OptionService])
], OptionController);
exports.OptionController = OptionController;
//# sourceMappingURL=OptionController.js.map