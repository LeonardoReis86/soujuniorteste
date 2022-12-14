import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Dates from './dates.model';

@Entity()
export class Job extends Dates {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column('text')
  password: string;
}
