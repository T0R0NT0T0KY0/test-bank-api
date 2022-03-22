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
	@Column({ type: "text", name: "display_name" })
	displayName: string;

	@Field()
	@UpdateDateColumn({ name: "updated_at" })
	updatedAt: Date;

	@Field()
	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;
}

//query {
//   user {
//     id
//     username
//     team {
//       id
//       name
//       points
//       users {
//         id
//         name
//         team {
//           id
//           name
//         }
//       }
//     }
//   }
// }
