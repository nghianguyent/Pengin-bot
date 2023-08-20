import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { FapCommandModule } from 'Modules/fap-command/fap-command.module';
import { BotGatewayService } from 'Services/bot-gateway/bot-gateway.service';

@Module({
	imports: [DiscordModule.forFeature(), FapCommandModule],
	providers: [BotGatewayService],
})
export class BotGatewayModule {
	constructor(private readonly botGatewayService: BotGatewayService) {
		this.botGatewayService.onReady();
	}
}
