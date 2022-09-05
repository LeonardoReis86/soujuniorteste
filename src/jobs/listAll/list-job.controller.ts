import { Controller, Get } from '@nestjs/common';
import ListJobsService from './list-job.service';

@Controller('job')
export default class ListJobsController {
  constructor(private service: ListJobsService) {}

  @Get()
  async jobs(): ReturnType<ListJobsService['list']> {
    return this.service.list();
  }
}
