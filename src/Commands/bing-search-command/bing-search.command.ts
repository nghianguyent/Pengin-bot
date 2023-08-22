import { Command, Handler } from '@discord-nestjs/core';

import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';

import { BingSearchService } from 'Services/bing-search-service/bing-search.service';

import { Logger } from '@nestjs/common/services/logger.service';

import { CommandInteraction } from 'discord.js';

@Command({
    name: 'bing',
    description: 'Searches Bing for a query.',
})
@Injectable()
export class BingsearchCommand {
    private readonly logger = new Logger(BingsearchCommand.name);

    constructor(private readonly bingSearchService: BingSearchService) {}

    @Handler()
    async handle(interaction: CommandInteraction) {
        interaction.deferReply();
        const result = await this.bingSearchService.search();
        if (!result) {
            interaction.editReply('Search failed');
        }
        interaction.editReply('Search completed');
        return 'hello';
    }
}
