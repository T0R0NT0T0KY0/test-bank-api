import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../../entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserInput } from "../../inputs/create.user.input";
import { UserPasswordEntity } from "../../entities/user.password.entity";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>,
		@InjectRepository(UserPasswordEntity)
		private readonly userPasswordRepository: Repository<UserPasswordEntity>,
	) {}

	async createUser(userInput: CreateUserInput): Promise<UserEntity> {
		const userEntity = await this.userRepository.save({
			username: userInput.username,
			displayName: userInput.displayName,
		});
		await this.userPasswordRepository.save({ password: userInput.password });
		return userEntity;
	}

	async getUserById(userId: number): Promise<UserEntity> {
		return await this.userRepository.findOne({ where: { id: userId } });
	}

	async getAllUsers(): Promise<UserEntity[]> {
		return await this.userRepository.find();
	}
}
