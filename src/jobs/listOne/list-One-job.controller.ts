import { Controller, Get, Param } from '@nestjs/common';
import { Job } from '../../database/models/job.model';
import GetOneJobService from './get-one-job.service';

@Controller('job')
export default class GetOneJobController {
  constructor(private service: GetOneJobService) {}

  @Get(':id')
  async job(@Param('id') id: Job['id']): ReturnType<GetOneJobService['get']> {
    return this.service.get(id);
  }
}
