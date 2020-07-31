import {
     Get, JsonController, QueryParams, Res
} from 'routing-controllers';
import { OptionService } from '../services/OptionService';
import { ListRequest } from './requests/ListRequest';

@JsonController('/option')
export class OptionController {

    constructor(
        private optionService: OptionService
    ) { }

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
    @Get('/list')
    public async OptionsList(@QueryParams() params: ListRequest, @Res() response: any): Promise<any> {
        const optionList = await this.optionService.find({});
        const optionListCount = await this.optionService.find({});
        const successResponse = {
            status: 0,
            message: 'Successfully got the list of options',
            data: {
                optionList,
                optionListCount: optionListCount.length,
            },
        };
        return response.status(200).send(successResponse);
    }
}
