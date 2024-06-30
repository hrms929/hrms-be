import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Test {
    @PrimaryColumn()
    test1: String;
}