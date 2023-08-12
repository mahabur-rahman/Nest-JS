import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Category } from '../schemas/book.schema';

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
}
