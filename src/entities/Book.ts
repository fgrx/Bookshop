import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

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
}
