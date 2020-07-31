import { IsNotEmpty, IsEmail } from 'class-validator';

export class RegisterRequest {

    @IsNotEmpty()
    public firstName: string;

    public lastName: string;
    @IsEmail()
    @IsNotEmpty()
    public email: string;

    public phoneNumber: string;

    public businessName: string;

    public businessCity: string;

    public companyName: string;

    public doorNo: string;

    public street: string;

    public city: string;

    public pinCode: string;

    public remarks: string;

    public options: string;

    public minOffPeak: string;

    public minHrPeak: string;

    public minHrXmas: string;

    public privateArea: [];

}
