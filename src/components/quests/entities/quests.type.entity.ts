import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity("question_type")
export class QuestsTypeEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ type: "text" })
	name: string;

	@Field()
	@Column({ type: "text" })
	description: string;

	@Field()
	@UpdateDateColumn({ name: "updated_at" })
	updatedAt: Date;

	@Field()
	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;
}
