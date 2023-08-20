import { Param } from '@discord-nestjs/core';

export class FapDTO {
	@Param({ description: 'cookies', required: true })
	cookies: string;
}
