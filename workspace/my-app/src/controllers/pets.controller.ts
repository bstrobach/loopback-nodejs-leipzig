/* eslint-disable @typescript-eslint/no-explicit-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Pets} from '../models/pets.model';
import {Pet} from '../models/pet.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by pets
 * 
 */
export class PetsController {
  constructor() {}

  /**
   * 
   * 

   * @param limit How many items to return at one time (max 100)
   * @returns A paged array of pets
   */
  @operation('get', '/pets')
  async listPets(@param({name: 'limit', in: 'query'}) limit: number): Promise<Pets> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   */
  @operation('post', '/pets')
  async createPets(): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param petId The id of the pet to retrieve
   * @returns Expected response to a valid request
   */
  @operation('get', '/pets/{petId}')
  async showPetById(@param({name: 'petId', in: 'path'}) petId: string): Promise<Pet> {
    throw new Error('Not implemented');
  }

}

