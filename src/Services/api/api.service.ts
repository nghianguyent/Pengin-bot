import { HttpService } from '@nestjs/axios';

import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';

import { ForbiddenException } from '@nestjs/common/exceptions/forbidden.exception';

import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
    constructor(private readonly http: HttpService) {}

    async get(url: string, config?: any) {
        const { data } = await firstValueFrom(
            this.http.get(url, config).pipe(
                catchError(err => {
                    console.log(err);
                    throw new ForbiddenException('API not available');
                }),
            ),
        );
        return data;
    }

    async post(url: string, data: any, config?: any) {
        const { data: res } = await firstValueFrom(
            this.http.post(url, data, config).pipe(
                catchError(err => {
                    console.log(err);
                    throw new ForbiddenException('API not available');
                }),
            ),
        );
        return res;
    }

    async put(url: string, data: any, config?: any) {
        const { data: res } = await firstValueFrom(
            this.http.put(url, data, config).pipe(
                catchError(err => {
                    console.log(err);
                    throw new ForbiddenException('API not available');
                }),
            ),
        );
        return res;
    }

    async delete(url: string, config?: any) {
        const { data: res } = await firstValueFrom(
            this.http.delete(url, config).pipe(
                catchError(err => {
                    console.log(err);
                    throw new ForbiddenException('API not available');
                }),
            ),
        );
        return res;
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
