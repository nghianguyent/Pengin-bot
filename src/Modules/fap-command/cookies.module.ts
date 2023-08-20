import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common/decorators/modules/module.decorator';

import { FapGetCookieCommand } from 'Commands/fap-command/cookies-commands/fap-get-cookie.command';
import { ApiModule } from 'Modules/api/api.module';

import { FapSetCookieCommand } from 'Commands/fap-command/cookies-commands/fap-set-cookie.command';
import { FapCommand } from 'Commands/fap-command/fap.command';

import { FapClassGetCommand } from 'Commands/fap-command/class-commands/class.commands';
import { FapService } from 'Services/fap-services/fap.service';

@Module({
    imports: [ApiModule, DiscordModule.forFeature()],
    providers: [
        FapCommand,
        FapGetCookieCommand,
        FapSetCookieCommand,
        FapClassGetCommand,
        FapService,
    ],
})
export class FapCookiesCommandModule {}
