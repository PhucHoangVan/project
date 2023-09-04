import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import postgresConfig from './configs/database/postgres';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory() {
        return postgresConfig;
      },
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
