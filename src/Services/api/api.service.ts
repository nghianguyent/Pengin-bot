import { HttpService } from '@nestjs/axios';

import { ForbiddenException, Injectable } from '@nestjs/common';

import { catchError, lastValueFrom, map } from 'rxjs';

@Injectable()
export class ApiService {
	constructor(private readonly http: HttpService) {}

	async get(url: string, config?: any) {
		return await this.http.get(url, config);
	}

	async getCoin(cookies: string) {
		const request = this.http
			.get('https://fap.fpt.edu.vn/Course/Groups.aspx?group=37543', {
				method: 'GET',
				headers: {
					cookie: cookies,
				},
			})
			.pipe(map(res => res.data?.fact))
			.pipe(
				catchError(() => {
					throw new ForbiddenException('API not available');
				}),
			);

		const fact = await lastValueFrom(request);
		return {
			data: {
				fact,
			},
		};
	}
}
