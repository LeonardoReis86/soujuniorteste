import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from '../../database/models/job.model';
import { Repository } from 'typeorm';

@Injectable()
export default class DeleteJobService {
  constructor(
    @InjectRepository(Job)
    private repository: Repository<Job>,
  ) {}

  async delete(id: Job['id']): Promise<true> {
    const job = await this.repository.findOneOrFail(id);
    await this.repository.remove(job);
    return true;
  }
}
