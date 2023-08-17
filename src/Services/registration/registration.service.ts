import { SlashCommandPipe } from '@discord-nestjs/common';
import { Command, Handler, InteractionEvent } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { RegistrationDto } from 'DTO/registration.dto';

@Command({
	name: 'reg',
	description: 'User registration',
})
@Injectable()
export class BaseInfoCommand {
	@Handler()
	onRegistration(
		@InteractionEvent(SlashCommandPipe) options: RegistrationDto,
	): string {
		console.log(options);
		return `User was registered with name: ${options.name}, age ${options.age} and city ${options.city}`;
	}
}
