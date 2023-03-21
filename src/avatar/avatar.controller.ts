import { Controller } from '@nestjs/common';
import { AvatarServiceControllerMethods, Bird, BirdById } from './avatar';

@Controller()
@AvatarServiceControllerMethods()
export class AvatarController {
  
  getBird(data: Bird): Bird {
    const items = [
      { id: 1, name: 'Crow' },
      { id: 2, name: 'Eagle' },
    ];
    const item = items.find(({ id }) => id === data.id);
    console.log('BIRD', item)
    return item;
  }
}