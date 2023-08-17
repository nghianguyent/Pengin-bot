import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { ApiModule } from 'Modules/api/api.module';
import { BaseInfoCommand } from 'Services/registration/registration.service';
import { InjectDynamicProviders } from 'nestjs-dynamic-providers';
import { BotGatewayService } from 'services/bot-gateway/bot-gateway.service';

@InjectDynamicProviders('dist/services/**/*.service.ts')
@Module({
	imports: [DiscordModule.forFeature(), ApiModule],
	providers: [BotGatewayService, BaseInfoCommand],
})
export class BotGatewayModule {
	constructor(private readonly botGatewayService: BotGatewayService) {
		this.botGatewayService.onReady();
	}
}
