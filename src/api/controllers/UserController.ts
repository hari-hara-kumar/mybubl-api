import {
    Body, Delete, Get, JsonController, Param, Post, Req, QueryParams, Res
} from 'routing-controllers';
import * as jwt from 'jsonwebtoken';
import { User } from '../models/User';
import { UserService } from '../services/UserService';
import { ListRequest } from './requests/ListRequest';
import { RegisterRequest } from './requests/RegisterRequest';
import { LoginRequest } from './requests/LoginRequest';
import { UserOption } from '../models/UserOption';
import { UserOptionService } from '../services/UserOptionService';
import { PrivateArea } from '../models/PrivateArea';
import { PrivateAreaService } from '../services/PrivateAreaService';

@JsonController('/user')
export class UserController {

    constructor(
        private userService: UserService,
        private privateAreaService: PrivateAreaService,
        private userOptionService: UserOptionService
    ) { }
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
    @Post('/register')
    public async Register(@Body({validate: true}) params: RegisterRequest, @Res() response: any): Promise<any> {
        const checkUserExistOrNot = await this.userService.findOne({where: {email: params.email, isDelete: 0}});
        if (checkUserExistOrNot) {
            return response.status(400).send({status: 0, message: 'Email already exist. Try with another email.'});
        }
        const generator = require('generate-password');
        const generatePassword = generator.generate({
            length: 6,
            numbers: true,
        });
        const hashPassword = await User.hashPassword(generatePassword);
            const user = new User();
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
            const saveUser = await this.userService.createOrUpdate(user);
            if (saveUser) {
                const bulkData = [];
                const privateArea = [];
                // const areaList = params.privateArea ? params.privateArea : [];
                const mapList = params.privateArea.map(async (list: any) => {
                    const saveArea = new PrivateArea();
                    saveArea.areaName = list.areaName;
                    saveArea.noOfRoom = list.noOfRoom;
                    saveArea.noOfSeats = list.noOfSeats;
                    saveArea.userId = saveUser.userId;
                    privateArea.push(saveArea);
                    return list;
                });
                const finalResult = await Promise.all(mapList);
                const options = params.options ? params.options.split(',') : [];
                const mapList2 = options.map(async (element: any) => {
                    const userOption = new UserOption();
                    userOption.optionId = element;
                    userOption.userId = saveUser.userId;
                    bulkData.push(userOption);
                    return element;
                });
                const finalResult2 = await Promise.all(mapList2);
                if (finalResult && finalResult2) {
                    let userOptions = [];
                    let savePrivateArea = [];
                    if (bulkData.length > 0) {
                        userOptions = await this.userOptionService.bulkCreate(bulkData);
                    }
                    if (privateArea.length > 0) {
                        savePrivateArea = await this.privateAreaService.bulkCreate(privateArea);
                    }
                const token = jwt.sign({userId: saveUser.userId}, '@#$#####@!#&*^%');
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
            } else {
                return response.status(400).send({status: 0, message: 'Unable to create.'});
            }
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
        @Post('/login')
        public async Login(@Body({validate: true}) params: LoginRequest, @Res() response: any): Promise<any> {
            const checkUserExistOrNot = await this.userService.findOne({where: {email: params.email, isDelete: 0}});
            if (!checkUserExistOrNot) {
                return response.status(400).send({status: 0, message: 'Email not found.'});
            }
            const checkPassword = await User.comparePassword(checkUserExistOrNot, params.password);
            if (checkPassword) {
                const token = jwt.sign({userId: checkUserExistOrNot.userId}, '@#$#####@!#&*^%');
                 const successResponse = {
                        status: 1,
                        message: 'Successfully got the list of users.',
                        data: {
                            userDetails: checkUserExistOrNot,
                            token,
                        },
                 };
                return response.status(200).send(successResponse);
                } else {
                    return response.status(400).send({status: 0, message: 'Invalid password.'});
                }
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
    @Get('/user-list')
    public async UsersList(@QueryParams() params: ListRequest, @Res() response: any): Promise<any> {
        const order = params.orderBy === 1 ? 'ASC' : 'DESC';
        const userList =  await this.userService.find({where: {isDelete: 0},
             take: params.limit, skip: params.offset, order: {userId: order}});
        const userListCount =  await this.userService.find({where: {isDelete: 0}});
        const mapList = userList.map(async (list: any) => {
            const userOptions = await this.userOptionService.find({where: {userId: list.userId}, relations: ['optionDetails']});
            const privateArea = await this.privateAreaService.find({where: {userId: list.userId}});
           list.userOption = userOptions;
           list.privateArea = privateArea;
           return list;
        });
        const finalResult = await Promise.all(mapList);
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
    @Get('/user-detail/:userId')
    public async UserDetails(@Param('userId') userId: number, @Req() request: any, @Res() response: any): Promise<any> {
        const userDetail = await this.userService.findOne({where: {userId, isDelete: 0}});
        if (!userDetail) {
            return response.status(400).send({status: 0, message: 'User not found.'});
        }
        const userOptions = await this.userOptionService.find({where: {userId: userDetail.userId}, relations: ['optionDetails']});
        const privateArea = await this.privateAreaService.find({where: {userId: userDetail.userId}});
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
    @Delete('/delete-user/:userId')
    public async DeleteUser(@Param('userId') userId: number, @Res() response: any): Promise<any> {
        const userDetail = await this.userService.findOne({where: {userId, isDelete: 0}});
        if (!userDetail) {
            return response.status(400).send({status: 1, message: 'User not found'});
        }
        userDetail.isDelete = 0;
        const deleteUser = await this.userService.createOrUpdate(userDetail);
        if (deleteUser) {
        const successResponse = {
            status: 1,
            message: 'Successfully deleted the user.',
        };
        return response.status(200).send(successResponse);
    } else {
        return response.status(400).send({status: 0, message: 'Unable to delete.'});
    }
}

}
