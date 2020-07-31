import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Option } from './Option';

@Entity({name: 'user_option'})
export class UserOption {

    @PrimaryGeneratedColumn({name: 'id'})
    public userOptionId: number;

    @Column({name: 'option_id'})
    public optionId: number;

    @Column({name: 'user_id'})
    public userId: number;

    @ManyToOne(optionDetails => Option, optionDetails => optionDetails.userOptionDetails)
    @JoinColumn({name: 'option_id'})
    public optionDetails: Option;
}
