import {DefaultCrudRepository} from '@loopback/repository';
import {Hero, HeroRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HeroRepository extends DefaultCrudRepository<
  Hero,
  typeof Hero.prototype.id,
  HeroRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Hero, dataSource);
  }
}
