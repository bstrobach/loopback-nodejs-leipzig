import {get} from '@loopback/rest';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

export class HelloController {
  constructor() {}

  @get('/hello')
  hello(): object {
    return {greet: 'Hello Leipzig'};
  }
}
