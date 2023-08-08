import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  // get all books
  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  // create book
  @Post()
  async createBook(
    @Body()
    book: CreateBookDto,
  ): Promise<Book> {
    return this.bookService.addedBook(book);
  }

  // get single book from param
  @Get(':id')
  async getSingleBook(
    @Param('id')
    id: string,
  ): Promise<Book> {
    return this.bookService.findBook(id);
  }

  // update book from param
  @Put(':id')
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    book: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.updateBookById(id, book);
  }

  // delete book
  @Delete(':id')
  async deleteBook(
    @Param('id')
    id: string,
  ): Promise<Book> {
    return this.bookService.deleteSingleBok(id);
  }
}
