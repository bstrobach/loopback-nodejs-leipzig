import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {RestdsDataSource} from '../datasources';

export interface SwapiService {
  // this is where you define the Node.js methods that will be
  // mapped to the SOAP operations as stated in the datasource
  // json file.
  getCharacter(personId: number): Promise<User>;
}

export class SwapiServiceProvider implements Provider<SwapiService> {
  constructor(
    // restds must match the name property in the datasource json file
    @inject('datasources.restds')
    protected dataSource: RestdsDataSource = new RestdsDataSource(),
  ) {}

  value(): Promise<SwapiService> {
    return getService(this.dataSource);
  }
}

export interface User {
  name: string;
  height: string;
  mass: string;
}
