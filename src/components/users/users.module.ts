import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { UserService } from "./services/user.service";
import { UserResolver } from "./resolvers/user.resolver";
import { UserPasswordEntity } from "./entities/user.password.entity";

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity, UserPasswordEntity])],
	providers: [UserService, UserResolver],
})
export class UsersModule {}
