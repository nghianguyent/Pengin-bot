import { Module } from '@nestjs/common';

import { FapCookiesCommandModule } from './cookies.module';

@Module({
	imports: [FapCookiesCommandModule],
})
export class FapCommandModule {}
