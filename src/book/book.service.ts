import { Injectable } from '@nestjs/common';
import *as mongoose from 'mongoose';
import { Book } from './schemas/book.schema';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name) private bookModel: mongoose.Model<Book>
    ){}

    async FindAll():Promise<Book[]>{
        const books=await this.bookModel.find()
        return books
    }

    async Create(book:Book):Promise<Book>{
        const newBook=await this.bookModel.create(book)
        return newBook
    }
    async FindById(id:string):Promise<Book>{
        const book= this.bookModel.findById(id)
        return book
    }
    UpdateBook(id:string,book:Book):Promise<Book>{
    return this.bookModel.findByIdAndUpdate(id,book,{new:true,runValidators:true})
    }
    DelkeleteBook(id:string):Promise<Book>{
        return this.bookModel.findByIdAndDelete(id)
    }

}
