import {
	Column,
	CreateDateColumn,
	Entity,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { UserEntity } from "./user.entity";
import { JoinColumn } from "typeorm/browser";

@ObjectType()
@Entity("ds_users")
export class UserPasswordEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	@OneToOne(() => UserEntity)
	@JoinColumn()
	userId: UserEntity;

	@Field()
	@Column({ type: "text" })
	password: string;

	@Field()
	@CreateDateColumn()
	createdAt: Date;

	@Field()
	@UpdateDateColumn()
	updatedAt: Date;
}
