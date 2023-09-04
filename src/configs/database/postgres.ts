import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
import 'dotenv/config';

const postgresConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  port: Number(process.env.POSTGRES_PORT || 5432),
  host: process.env.DB_HOST,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [path.join(__dirname, '../..', '/entities/*.entity{.ts,.js}')],
  migrations: [],
  synchronize: true,
  autoLoadEntities: true,
};

export default postgresConfig;
