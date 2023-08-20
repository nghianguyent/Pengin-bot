import { Command, Handler, UseGroup } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { ApiService } from 'Services/api/api.service';
import { ApplicationCommandType } from 'discord.js';
import { FapService } from '../../Services/fap-services/fap.service';
import { FapClassGetCommand } from './class-commands/class.commands';
import { FapGetCookieCommand } from './cookies-commands/fap-get-cookie.command';
import { FapSetCookieCommand } from './cookies-commands/fap-set-cookie.command';

@Command({
    name: 'fap',
    description: 'Get fap class',
    include: [
        UseGroup(
            {
                name: 'cookies',
                description: 'set fap cookie',
            },
            FapSetCookieCommand,
            FapGetCookieCommand,
        ),
        UseGroup(
            {
                name: 'class',
                description: 'set fap cookie',
            },
            FapClassGetCommand,
        ),
    ],
    type: ApplicationCommandType.ChatInput,
})
@Injectable()
export class FapCommand {
    constructor(
        private readonly apiService: ApiService,
        private readonly fapServive: FapService,
    ) {}

    @Handler()
    async onGetData(): Promise<any> {
        const cookie = this.fapServive.getCookies();
        if (cookie) {
            const data = await this.apiService.getFapClass(cookie);
            return data;
        }
        return 'No cookie provided';
    }
}
