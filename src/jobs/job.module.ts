import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from 'src/database/models/job.model';

//realizar os imports
@Module({
  imports: [TypeOrmModule.forFeature([Job])],
  controllers: [
    CreateJobController,
    ListJobsController,
    GetOneJobController,
    UpdateJobController,
    DeleteJobController,
  ],
  providers: [
    CreateJobService,
    ListJobsService,
    GetOneJobService,
    UpdateJobService,
    DeleteJobService,
  ],
})
export default class JobModule {}
