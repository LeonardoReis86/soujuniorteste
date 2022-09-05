import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from '../../database/models/job.model';
import { Repository } from 'typeorm';

@Injectable()
export default class GetOneJobService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

  async get(id: Job['id']): Promise<Job> {
    return this.jobRepository.findOne(id);
  }
}
