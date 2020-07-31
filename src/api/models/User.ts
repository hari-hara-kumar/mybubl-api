import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'user'})
export class User {

    public static hashPassword(password: string): Promise<string> {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    return reject(err);
                }
                resolve(hash);
            });
        });
    }

    public static comparePassword(user: User, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                resolve(res === true);
            });
        });
    }

    @PrimaryGeneratedColumn({name: 'id'})
    public userId: number;

    @Column({ name: 'first_name' })
    public firstName: string;

    @Column({ name: 'last_name' })
    public lastName: string;

    @Column({ name: 'email' })
    public email: string;

    @Column({ name: 'password' })
    @Exclude()
    public password: string;

    @Column({ name: 'phone_number' })
    public phoneNumber: string;

    @Column({ name: 'business_name' })
    public businessName: string;

    @Column({ name: 'business_city' })
    public businessCity: string;

    @Column({ name: 'company_name' })
    public companyName: string;

    @Column({ name: 'door_no' })
    public doorNo: string;

    @Column({ name: 'street' })
    public street: string;

    @Column({ name: 'city' })
    public city: string;

    @Column({ name: 'pin_code' })
    public pinCode: string;

    @Column({ name: 'min_off_peak' })
    public minOffPeak: string;

    @Column({ name: 'min_hr_peak' })
    public minHrPeak: string;

    @Column({ name: 'min_hr_xmas' })
    public minHrXmas: string;

    @Column({ name: 'remarks' })
    public remarks: string;

    @Column({ name: 'is_delete' })
    public isDelete: number;

    @Column({ name: 'created_by' })
    public createdBy: number;

    @Column({ name: 'created_date' })
    public createdDate: string;

    @Exclude()
    @Column({ name: 'modified_by' })
    public modifiedBy: string;

    @Exclude()
    @Column({ name: 'modified_date' })
    public modifiedDate: string;
}
