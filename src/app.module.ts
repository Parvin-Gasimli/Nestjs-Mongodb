import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookService } from './book/book.service';
import { BookController } from './book/book.controller';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [ ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }),MongooseModule.forRoot(process.env.DB_URL),
   BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
