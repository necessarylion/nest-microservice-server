import { AvatarController } from './avatar/avatar.controller';
import { Module } from '@nestjs/common';
import { HeroController } from './hero/hero.controller';

@Module({
  imports: [],
  controllers: [AvatarController, HeroController],
  providers: [],
})
export class AppModule {}
