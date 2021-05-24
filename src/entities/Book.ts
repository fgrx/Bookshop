import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";

import { Comment } from "./Comment";

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  content!: string;

  @Column()
  author!: string;

  @Column()
  image!: string;

  @Column()
  price!: number;

  @Column()
  quantity!: number;

  @Column({ enum: ["fr", "en"] })
  lang!: string;

  @Column()
  rating!: number;

  @Column({ nullable: true })
  top!: boolean;

  @Column({
    type: "int",
    nullable: true,
  })
  discount!: number;

  @OneToMany(() => Comment, (comment) => comment.book)
  comments!: Comment[];
}
