import { Body, Controller, Post } from '@nestjs/common';
import CreateJobInput from './create-job.input';
import CreateJobService from './create-job.service';

@Controller('job')
export default class CreateJobController {
  constructor(private service: CreateJobService) {}

  @Post()
  async createJob(
    @Body() createJob: CreateJobInput,
  ): ReturnType<CreateJobService['create']> {
    return this.service.create(createJob);
  }
}
