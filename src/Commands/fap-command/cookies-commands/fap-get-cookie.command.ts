import { Handler, SubCommand } from '@discord-nestjs/core';

import { FapService } from '../../../Services/fap-services/fap.service';

@SubCommand({ name: 'get', description: 'set cookie' })
export class FapGetCookieCommand {
    constructor(private readonly fapService: FapService) {}

    @Handler()
    async onGetCookie(): Promise<any> {
        return this.fapService.getCookies();
    }
}
