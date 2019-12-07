import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [NewsModule, UserModule, StudentModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
