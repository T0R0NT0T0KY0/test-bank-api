import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserInput } from "../inputs/create.user.input";
import { UserPasswordEntity } from "../entities/user.password.entity";
import { UpdateUserInput } from "../inputs/update.user.input";
import { logger } from "../../../utils/winston.logger";

@Injectable()
export class UserService {
	constructor (
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>,
		@InjectRepository(UserPasswordEntity)
		private readonly userPasswordRepository: Repository<UserPasswordEntity>,
	) {}

	async createUser (createUserInput: CreateUserInput): Promise<UserEntity> {
		const userEntity = await this.userRepository.save({
			username: createUserInput.username,
			displayName: createUserInput.displayName,
		});
		await this.userPasswordRepository.save({ password: createUserInput.password, user: userEntity });
		return userEntity;
	}
	async getUserById (userId: number): Promise<UserEntity> {
		return await this.userRepository.findOne({ where: { id: userId } });
	}

	async getAllUsers (): Promise<UserEntity[]> {
		return await this.userRepository.find();
	}

	async updateUser (updateUserInput: UpdateUserInput): Promise<UserEntity> {
		logger.info(JSON.stringify(updateUserInput));
		await this.userRepository
			.update({ id: updateUserInput.id }, { ...updateUserInput });
		return await this.getUserById(updateUserInput.id);
	}
}
