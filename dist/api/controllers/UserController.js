"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const jwt = tslib_1.__importStar(require("jsonwebtoken"));
const User_1 = require("../models/User");
const UserService_1 = require("../services/UserService");
const ListRequest_1 = require("./requests/ListRequest");
const RegisterRequest_1 = require("./requests/RegisterRequest");
const LoginRequest_1 = require("./requests/LoginRequest");
const UserOption_1 = require("../models/UserOption");
const UserOptionService_1 = require("../services/UserOptionService");
const PrivateArea_1 = require("../models/PrivateArea");
const PrivateAreaService_1 = require("../services/PrivateAreaService");
let UserController = class UserController {
    constructor(userService, privateAreaService, userOptionService) {
        this.userService = userService;
        this.privateAreaService = privateAreaService;
        this.userOptionService = userOptionService;
    }
    /**
     * @api {post} /api/user/register Register
     * @apiGroup Authentication
     * @apiParam {String} firstName firstName
     * @apiParam {String} lastName lastName
     * @apiParam {String} phoneNumber phoneNumber
     * @apiParam {String} pinCode pinCode
     * @apiParam {String} email email
     * @apiParam {String} street street
     * @apiParam {String} doorNo doorNo
     * @apiParam {String} city city
     * @apiParam {String} companyName companyName
     * @apiParam {String} minOffPeak minOffPeak
     * @apiParam {String} minHrPeak minHrPeak
     * @apiParam {String} minHrXmas minHrXmas
     * @apiParam {String} remarks remarks
     * @apiParam {String} options options
     * @apiParam {String} privateArea privateArea
     * @apiParamExample {json} Input
     * {
     *      "firstName": ""
     *      "lastName": ""
     *       "options": ""
     *       "companyName": ""
     *       "minOffPeak": ""
     *      "minHrPeak": ""
     *       "minHrXmas": ""
     *         "remarks" : ""
     *       "options": ""
     *    "privateArea": "[{
     *           "noOfRoom": ""
     *            "noOfSeats": ""
     *              "areaName": ""
     * }]
     * }
     * @apiSuccessExample Success-Response
     *     HTTP/1.1 200 OK
     *     {
     *     }
     * @apiSampleRequest /api/user/register
     * @apiErrorExample Error-Response:
     * HTTP/1.1 404 Not Found
     */
    Register(params, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const checkUserExistOrNot = yield this.userService.findOne({ where: { email: params.email, isDelete: 0 } });
            if (checkUserExistOrNot) {
                return response.status(400).send({ status: 0, message: 'Email already exist. Try with another email.' });
            }
            const generator = require('generate-password');
            const generatePassword = generator.generate({
                length: 6,
                numbers: true,
            });
            const hashPassword = yield User_1.User.hashPassword(generatePassword);
            const user = new User_1.User();
            user.firstName = params.firstName;
            user.lastName = params.lastName;
            user.email = user.email;
            user.password = hashPassword;
            user.phoneNumber = params.phoneNumber;
            user.pinCode = params.pinCode;
            user.businessCity = params.businessCity;
            user.businessName = params.businessName;
            user.street = params.street;
            user.remarks = params.remarks;
            user.city = params.city;
            user.companyName = params.companyName;
            user.doorNo = params.doorNo;
            user.minOffPeak = params.minOffPeak;
            user.minHrXmas = params.minHrXmas;
            user.minHrPeak = params.minHrPeak;
            const saveUser = yield this.userService.createOrUpdate(user);
            if (saveUser) {
                const bulkData = [];
                const privateArea = [];
                // const areaList = params.privateArea ? params.privateArea : [];
                const mapList = params.privateArea.map((list) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const saveArea = new PrivateArea_1.PrivateArea();
                    saveArea.areaName = list.areaName;
                    saveArea.noOfRoom = list.noOfRoom;
                    saveArea.noOfSeats = list.noOfSeats;
                    saveArea.userId = saveUser.userId;
                    privateArea.push(saveArea);
                    return list;
                }));
                const finalResult = yield Promise.all(mapList);
                const options = params.options ? params.options.split(',') : [];
                const mapList2 = options.map((element) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const userOption = new UserOption_1.UserOption();
                    userOption.optionId = element;
                    userOption.userId = saveUser.userId;
                    bulkData.push(userOption);
                    return element;
                }));
                const finalResult2 = yield Promise.all(mapList2);
                if (finalResult && finalResult2) {
                    let userOptions = [];
                    let savePrivateArea = [];
                    if (bulkData.length > 0) {
                        userOptions = yield this.userOptionService.bulkCreate(bulkData);
                    }
                    if (privateArea.length > 0) {
                        savePrivateArea = yield this.privateAreaService.bulkCreate(privateArea);
                    }
                    const token = jwt.sign({ userId: saveUser.userId }, '@#$#####@!#&*^%');
                    // MAILService.registerMail(userMail);
                    const successResponse = {
                        status: 1,
                        message: 'Successfully got the list of users.',
                        data: {
                            userDetails: saveUser,
                            userOptions,
                            token,
                            privateArea: savePrivateArea,
                            generatePassword,
                        },
                    };
                    return response.status(200).send(successResponse);
                }
            }
            else {
                return response.status(400).send({ status: 0, message: 'Unable to create.' });
            }
        });
    }
    /**
     * @api {post} /api/user/login Login
     * @apiGroup Authentication
     * @apiParam {String} email email
     * @apiParam {String} password password
     * @apiParamExample {json} Input
     * {
     *    "email": ""
     *      "password": ""
     * }
     * @apiSuccessExample Success-Response
     *     HTTP/1.1 200 OK
     *     {
     *     }
     * @apiSampleRequest /api/user/login
     * @apiErrorExample Error-Response:
     * HTTP/1.1 404 Not Found
     */
    Login(params, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const checkUserExistOrNot = yield this.userService.findOne({ where: { email: params.email, isDelete: 0 } });
            if (!checkUserExistOrNot) {
                return response.status(400).send({ status: 0, message: 'Email not found.' });
            }
            const checkPassword = yield User_1.User.comparePassword(checkUserExistOrNot, params.password);
            if (checkPassword) {
                const token = jwt.sign({ userId: checkUserExistOrNot.userId }, '@#$#####@!#&*^%');
                const successResponse = {
                    status: 1,
                    message: 'Successfully got the list of users.',
                    data: {
                        userDetails: checkUserExistOrNot,
                        token,
                    },
                };
                return response.status(200).send(successResponse);
            }
            else {
                return response.status(400).send({ status: 0, message: 'Invalid password.' });
            }
        });
    }
    /**
     * @api {get} /api/user/user-list User List
     * @apiGroup User
     * @apiHeader {String} Authorization
     * @apiParam {String} limit limit
     * @apiParam {String} offset offet
     * @apiParamExample {json} Input
     * {
     *  "limit": ""
     *   "offset": ""
     * }
     * @apiSuccessExample Success-Response
     * HTTP/1.1 200 OK
     *     {
     *     }
     * @apiSampleRequest /api/user/user-list
     * @apiErrorExample Error-Response:
     * HTTP/1.1 404 Not Found
     */
    UsersList(params, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const order = params.orderBy === 1 ? 'ASC' : 'DESC';
            const userList = yield this.userService.find({ where: { isDelete: 0 },
                take: params.limit, skip: params.offset, order: { userId: order } });
            const userListCount = yield this.userService.find({ where: { isDelete: 0 } });
            const mapList = userList.map((list) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const userOptions = yield this.userOptionService.find({ where: { userId: list.userId }, relations: ['optionDetails'] });
                const privateArea = yield this.privateAreaService.find({ where: { userId: list.userId } });
                list.userOption = userOptions;
                list.privateArea = privateArea;
                return list;
            }));
            const finalResult = yield Promise.all(mapList);
            if (finalResult) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully got the list of users.',
                    data: {
                        userList,
                        userListCount: userListCount.length,
                    },
                };
                return response.status(200).send(successResponse);
            }
        });
    }
    /**
     * @api {get} /api/user/user-details/:userId User Detail
     * @apiGroup User
     * @apiHeader {String} Authorization
     * @apiSuccessExample Success-Response
     *     HTTP/1.1 200 OK
     *     {
     *     }
     * @apiSampleRequest /api/user/user-detail/:userId
     * @apiErrorExample Error-Response:
     * HTTP/1.1 404 Not Found
     */
    UserDetails(userId, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userDetail = yield this.userService.findOne({ where: { userId, isDelete: 0 } });
            if (!userDetail) {
                return response.status(400).send({ status: 0, message: 'User not found.' });
            }
            const userOptions = yield this.userOptionService.find({ where: { userId: userDetail.userId }, relations: ['optionDetails'] });
            const privateArea = yield this.privateAreaService.find({ where: { userId: userDetail.userId } });
            const successResponse = {
                status: 1,
                message: 'Successfully got the user details.',
                data: {
                    userDetail,
                    userOptions,
                    privateArea,
                },
            };
            return response.status(200).send(successResponse);
        });
    }
    /**
     * @api {delete} /api/user/delete-user/:userId Delete User
     * @apiGroup User
     * @apiHeader {String} Authorization
     * @apiSuccessExample Success-Response
     *     HTTP/1.1 200 OK
     *     {
     *     }
     * @apiSampleRequest /api/user/delete-user/:userId
     * @apiErrorExample Error-Response:
     * HTTP/1.1 404 Not Found
     */
    DeleteUser(userId, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userDetail = yield this.userService.findOne({ where: { userId, isDelete: 0 } });
            if (!userDetail) {
                return response.status(400).send({ status: 1, message: 'User not found' });
            }
            userDetail.isDelete = 0;
            const deleteUser = yield this.userService.createOrUpdate(userDetail);
            if (deleteUser) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted the user.',
                };
                return response.status(200).send(successResponse);
            }
            else {
                return response.status(400).send({ status: 0, message: 'Unable to delete.' });
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/register'),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [RegisterRequest_1.RegisterRequest, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "Register", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/login'),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [LoginRequest_1.LoginRequest, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "Login", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/user-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParams()), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ListRequest_1.ListRequest, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "UsersList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/user-detail/:userId'),
    tslib_1.__param(0, routing_controllers_1.Param('userId')), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "UserDetails", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-user/:userId'),
    tslib_1.__param(0, routing_controllers_1.Param('userId')), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "DeleteUser", null);
UserController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/user'),
    tslib_1.__metadata("design:paramtypes", [UserService_1.UserService,
        PrivateAreaService_1.PrivateAreaService,
        UserOptionService_1.UserOptionService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map