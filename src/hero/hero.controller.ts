import { Controller } from '@nestjs/common';
import { Hero, HeroById, HeroServiceControllerMethods } from './hero';

@Controller()
@HeroServiceControllerMethods()
export class HeroController {
  
  findHero(data: HeroById): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    const item = items.find(({ id }) => id === data.id);
    console.log('HERO', item)
    return item;
  }
}