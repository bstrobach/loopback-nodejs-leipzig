/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Pet
 * Pet
 */
@model({name: 'Pet'})
export class Pet {
  constructor(data?: Partial<Pet>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({required: true})
  id: number;

  /**
   * 
   */
  @property({required: true})
  name: string;

  /**
   * 
   */
  @property()
  tag?: string;

}

