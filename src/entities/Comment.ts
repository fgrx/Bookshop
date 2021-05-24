import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";

import { Book } from "./Book";

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  content!: string;

  @ManyToOne(() => Book, (book) => book.comments)
  book!: Book;
}
