import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { BingSearchModule } from 'Modules/bing-search-command/bing-search.module';
import { FapCommandModule } from 'Modules/fap-command/fap-command.module';
import { BotGatewayService } from 'Services/bot-gateway/bot-gateway.service';

@Module({
    imports: [DiscordModule.forFeature(), FapCommandModule, BingSearchModule],
    providers: [BotGatewayService],
})
export class BotGatewayModule {
    constructor(private readonly botGatewayService: BotGatewayService) {
        this.botGatewayService.onReady();
    }
}
