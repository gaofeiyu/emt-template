import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: '文章ID' })
  id: string;

  @Column('text', { comment: '文章正文' })
  content: string;

  @Column('text', { comment: '文章标题' })
  title: string;

  @Column('text', { comment: '作者' })
  author: string;

  @CreateDateColumn({ comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ comment: '更新时间' })
  updateTime: Date;
}
