import { Handler, SubCommand } from '@discord-nestjs/core';

import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';

import { FapService } from 'Services/fap-services/fap.service';

@SubCommand({ name: 'get', description: 'get class info' })
@Injectable()
export class FapClassGetCommand {
	constructor(private readonly fapService: FapService) {}

	@Handler()
	async onGetClass(): Promise<any> {
		const classData = await this.fapService.getClassInfo();
		return classData;
	}
}
