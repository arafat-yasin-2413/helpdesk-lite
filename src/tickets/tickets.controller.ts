import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';
import { FilterTicketsQueryDto } from './dto/filter-tickets-query.dto.js';

@Controller('tickets')
export class TicketsController {

    constructor(private readonly ticketService: TicketsService) {}

    @Get()
    findAll(@Query() filters: FilterTicketsQueryDto){
        return this.ticketService.findAll(filters.status, filters.priority);
    }

    @Get(':id')
    findOne( @Param('id', ParseIntPipe) id:number ) {
        return this.ticketService.findOne(id);
    }

    @Post()
    create (@Body() createTicketDto: CreateTicketDto) {
        return this.ticketService.create(createTicketDto)
    }


}
