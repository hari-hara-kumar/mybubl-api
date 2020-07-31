import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserOption } from './UserOption';

@Entity({name: 'm_option'})
export class Option {

    @PrimaryGeneratedColumn({name: 'id'})
    public optionId: number;

    @Column({name: 'option_name'})
    public optionName: string;

    @Column({name: 'slug_name'})
    public slugName: string;

    @Column({name: 'is_active'})
    public isActive: number;

    @OneToMany(userOptionDetails => UserOption, userOptionDetails => userOptionDetails.optionDetails)
    public userOptionDetails: UserOption;
}
