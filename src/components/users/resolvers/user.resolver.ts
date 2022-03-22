import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "../services/user.service";
import { UserEntity } from "../entities/user.entity";
import { CreateUserInput } from "../inputs/create.user.input";
import { UpdateUserInput } from "../inputs/update.user.input";
import { logger } from "../../../utils/winston.logger";

@Resolver("user")
export class UserResolver {
	constructor (
		private readonly userService: UserService,
	) {}

	@Mutation(() => UserEntity)
	async createUser (@Args("createUser") createUserInput: CreateUserInput): Promise<UserEntity> {
		return await this.userService.createUser(createUserInput);
	}

	@Mutation(() => UserEntity)
	async updateUser (@Args("updateUser") updateUserInput: UpdateUserInput): Promise<UserEntity> {
		return await this.userService.updateUser(updateUserInput);
	}

	@Query(() => UserEntity)
	async user (@Args("userId") userId: number): Promise<UserEntity> {
		logger.info(userId);
		return await this.userService.getUserById(userId);
	}

	@Query(() => [UserEntity])
	async users (): Promise<UserEntity[]> {
		return await this.userService.getAllUsers();
	}
}
