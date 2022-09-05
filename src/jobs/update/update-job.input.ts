import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { Job } from '../../database/models/job.model';
import CreateJobInput from '../create-job/create-job.input';

@InputType()
export default class UpdateJobInput extends PartialType(CreateJobInput) {
  @Field(() => ID)
  id: Job['id'];
}
