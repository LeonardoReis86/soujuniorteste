import { Injectable } from '@nestjs/common';
import CreateJobInput from './create-job.input';

@Injectable()
export default class CreateJobService {
  constructor(
    @InjectRepository(Job)
    private repository: Repository<Job>,
  ) {}

  async create(input: CreateJobInput): Promise<Job> {
    const jobToCreate = this.repository.create(input);
    const jobSaved = this.repository.save(jobToCreate);
    return jobSaved;
  }
}
