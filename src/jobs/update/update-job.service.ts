import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from '../../database/models/job.model';
import { Repository } from 'typeorm';
import UpdateJobInput from './update-job.input';

@Injectable()
export default class UpdateJobService {
  constructor(
    @InjectRepository(Job)
    private repository: Repository<Job>,
  ) {}

  async update(input: UpdateJobInput): Promise<Job> {
    const job = await this.repository.findOneOrFail(input.id);
    const jobToUpdate = Object.assign(job, input);
    const jobSaved = this.repository.save(jobToUpdate);
    return jobSaved;
  }
}
