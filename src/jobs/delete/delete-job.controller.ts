import { Controller, Delete, Param } from '@nestjs/common';
import { Job } from '../../database/models/job.model';
import DeleteJobService from './delete-job.service';

@Controller('job')
export default class DeleteJobController {
  constructor(private service: DeleteJobService) {}

  @Delete(':id')
  async deleteFii(
    @Param('id') id: Job['id'],
  ): ReturnType<DeleteJobService['delete']> {
    return this.service.delete(id);
  }
}
