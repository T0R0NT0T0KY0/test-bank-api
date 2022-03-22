import {
	Column,
	CreateDateColumn,
	Entity, JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { UserEntity } from "./user.entity";

@ObjectType()
@Entity("ds_users")
export class UserPasswordEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@OneToOne(() => UserEntity, {nullable: false, })
	@JoinColumn()
	user: UserEntity;

	@Field()
	@Column({ type: "text" })
	password: string;

	@Field()
	@UpdateDateColumn({ name: "updated_at" })
	updatedAt: Date;

	@Field()
	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;
}
