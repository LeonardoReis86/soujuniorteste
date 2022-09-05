import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from '../../database/models/job.model';
import { Repository } from 'typeorm';

@Injectable()
export default class ListJobsService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

  async list(): Promise<Job[]> {
    return this.jobRepository.find();
  }
}
