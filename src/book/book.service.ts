import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class BookService {
  [x: string]: any;
  constructor(
    @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>,
  ) {}

  //   get all books
  async findAll(): Promise<Book[]> {
    const books = await this.bookModel.find();
    return books;
  }

  //   create book
  async addedBook(book: Book): Promise<Book> {
    const res = await this.bookModel.create(book);
    return res;
  }

  //   get single book from param
  async findBook(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id);
    if (!book) {
      throw new NotFoundException('Book not found!');
    }
    return book;
  }

  //   update book from param
  async updateBookById(id: string, book: Book): Promise<Book> {
    return await this.bookModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true,
    });
  }

  //   delete book
  async deleteSingleBok(id: string): Promise<Book> {
    return await this.bookModel.findByIdAndDelete(id);
  }
}
