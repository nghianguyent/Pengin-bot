import { SlashCommandPipe } from '@discord-nestjs/common';
import { Handler, IA, SubCommand } from '@discord-nestjs/core';

import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { FapDTO } from 'DTO/fap.dto';
import { FapService } from 'Services/fap-services/fap.service';

@SubCommand({ name: 'set', description: 'set cookie' })
@Injectable()
export class FapSetCookieCommand {
	constructor(private readonly fapService: FapService) {}

	@Handler()
	async onSetCookie(@IA(SlashCommandPipe) fap: FapDTO): Promise<any> {
		this.fapService.setCookies(fap.cookies);
		return 'Saved Cookies';
	}
}
