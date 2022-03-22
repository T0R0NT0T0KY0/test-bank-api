import { Field, ID, ObjectType } from "@nestjs/graphql";
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { QuestsTypeEntity } from "./quests.type.entity";

@ObjectType()
@Entity("quest")
export class QuestsEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@OneToOne(() => QuestsTypeEntity, { nullable: false })
	@JoinColumn()
	questType: QuestsTypeEntity;

	@Field()
	@Column({ type: "text", name: "display_name" })
	name: string;

	@Field()
	@Column({ type: "text" })
	description: string;

	@Field()
	@Column({ type: "float" })
	prize: number;

	@Field()
	@Column({ type: "text", name: "prize_description" })
	prizeDescription: string;

	@Field()
	@UpdateDateColumn({ name: "updated_at" })
	updatedAt: Date;

	@Field()
	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;
}