import { Module } from '@nestjs/common';
import { TicketsModule } from './tickets/tickets.module.js';
import 'dotenv/config';

@Module({
  imports: [TicketsModule],
})
export class AppModule {}
