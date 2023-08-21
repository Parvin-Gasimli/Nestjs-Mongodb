import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
    constructor(private readonly bookService:BookService){}

    @Get()
    async GetAllBooks():Promise<any>{
        const books=await this.bookService.FindAll()
        return books
    }
    @Get(':id')
    async GetBookById(@Param("id") id:string):Promise<Book>{
        const book=await this.bookService.FindById(id)
        if(!book){
        throw new NotFoundException("Book not found")
        }
        return book
    }
    @Put(':id')
    async UpdateBook(@Param("id") id:string , @Body() book:UpdateBookDto ):Promise<Book>{
       return this.bookService.UpdateBook(id,book)
    }
    @Post()
    async CreateBook(@Body() book:CreateBookDto):Promise<Book>{
       return this.bookService.Create(book)
    }
    @Delete(':id')
    async DeleteBook(@Param("id") id:string):Promise<Book>{
        return this.bookService.DelkeleteBook(id)
    }
    
}
