import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'private_area'})
export class PrivateArea {

    @PrimaryGeneratedColumn({name: 'id'})
    public privateAreaId: number;

    @Column({name: 'area_name'})
    public areaName: string;

    @Column({name: 'no_of_room'})
    public noOfRoom: string;

    @Column({name: 'user_id'})
    public userId: number;

    @Column({name: 'no_of_seats'})
    public noOfSeats: number;
}
