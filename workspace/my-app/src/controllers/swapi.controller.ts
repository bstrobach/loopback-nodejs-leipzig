import {inject} from '@loopback/core';

import {get, param} from '@loopback/rest';

import {SwapiService, User} from '../services';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

export class SwapiController {
  constructor(
    @inject('services.SwapiService')
    protected swapiService: SwapiService,
  ) {}

  @get('/swapi/people/{personId}')
  async getCharacter(
    @param.path.integer('personId') personId: number,
  ): Promise<User> {
    return await this.swapiService.getCharacter(personId);
  }
}
