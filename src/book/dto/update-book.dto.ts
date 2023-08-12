import { IsEmpty, IsEnum, IsOptional, IsString } from 'class-validator';
import { Category } from '../schemas/book.schema';
import { User } from '../../auth/schemas/user.schema';

export class UpdateBookDto {
  @IsString()
  @IsOptional()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsString()
  @IsOptional()
  readonly author: string;

  @IsString()
  @IsOptional()
  readonly price: number;

  @IsOptional()
  @IsEnum(Category, { message: 'enter correct category!' })
  readonly category: Category;

  @IsEmpty({ message: 'You can not pass user id' })
  readonly user: User;
}
