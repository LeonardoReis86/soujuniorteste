import { Body, Controller, Put } from '@nestjs/common';
import UpdateJobInput from './update-job.input';
import UpdateJobService from './update-job.service';

@Controller('job')
export default class UpdateJobController {
  constructor(private service: UpdateJobService) {}

  @Put()
  async updateJob(
    @Body() input: UpdateJobInput,
  ): ReturnType<UpdateJobService['update']> {
    return this.service.update(input);
  }
}
