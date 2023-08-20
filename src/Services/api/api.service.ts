import { HttpService } from '@nestjs/axios';

import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { ForbiddenException } from '@nestjs/common/exceptions/forbidden.exception';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
	constructor(private readonly http: HttpService) {}

	async get(url: string, config?: any) {
		return await this.http.get(url, config);
	}

	async getFapClass(cookies: string) {
		const { data } = await firstValueFrom(
			this.http
				.get('https://fap.fpt.edu.vn/Course/Groups.aspx?group=37543', {
					method: 'GET',
					headers: {
						cookie: cookies,
					},
				})
				.pipe(
					catchError(err => {
						console.log(err);
						throw new ForbiddenException('API not available');
					}),
				),
		);
		return data;
	}
}
