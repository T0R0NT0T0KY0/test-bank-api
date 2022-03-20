import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity("users")
export class UserEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ type: "text" })
	username: string;

	@Field()
	@Column({ type: "text" })
	displayName: string;

	@Field()
	@CreateDateColumn()
	createdAt: Date;

	@Field()
	@UpdateDateColumn()
	updatedAt: Date;
}
