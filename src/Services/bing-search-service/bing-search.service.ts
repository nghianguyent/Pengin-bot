import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';

import { ConfigService } from '@nestjs/config';

import { ApiService } from 'Services/api/api.service';

import { randomUUID } from 'crypto';

@Injectable()
export class BingSearchService {
    private readonly SEACH_PATH = 'https://www.bing.com/search';

    constructor(
        private readonly apiService: ApiService,
        private readonly configService: ConfigService,
    ) {}

    async query() {
        const uuid = randomUUID();
        return await this.apiService.get(
            `${
                this.SEACH_PATH
            }?q=${uuid}&qs=n&form=QBRE&sp=-1&lq=0&pq=%22%C3%A1df%C3%A1df%E1%BA%A7d%C3%A1adf%22&sc=0-14&sk=&cvid=${this.configService.get<string>(
                'bing.cvid',
            )}&ghsh=0&ghacc=0&ghpl=`,
            {
                headers: {
                    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                    'sec-ms-gec':
                        '06CE86F15D23C22EB0C0D3FF16F7056F7FF8283FE12B9186E12CD7CB75359FE7',
                    'x-client-data':
                        this.configService.get<string>('bing.client-data'),
                    'x-edge-shopping-flag': '1',
                    cookie: this.configService.get<string>('bing.cookies'),
                },
            },
        );
    }

    async search() {
        const arr = Array.from({ length: 30 }, (e, i) => i);
        for (const i of arr) {
            await this.query();
        }
        return true;
    }
}
