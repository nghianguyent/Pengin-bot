import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { BingsearchCommand } from 'Commands/bing-search-command/bing-search.command';
import { ApiModule } from 'Modules/api/api.module';
import { BingSearchService } from 'Services/bing-search-service/bing-search.service';

@Module({
    imports: [ApiModule, DiscordModule.forFeature()],
    providers: [BingsearchCommand, BingSearchService],
})
export class SearchModule {}
