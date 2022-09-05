import { Field, InputType } from '@nestjs/graphql';
import { Job } from '../../database/models/job.model';

@InputType()
export default class CreateJobInput {
  @Field(() => String)
  name: Job['name'];

  @Field(() => String)
  email: Job['email'];

  @Field(() => String)
  password: Job['password'];
}
