import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { ApiService } from 'Services/api/api.service';
import { parse } from 'node-html-parser/dist/nodes/html';

@Injectable()
export class FapService {
	private cookies: string;

	constructor(private readonly apiService: ApiService) {}

	setCookies(cookies: string) {
		this.cookies = cookies;
	}

	getCookies() {
		if (!this.cookies) {
			return 'no thing to return';
		}
		return this.cookies;
	}
	async getClassInfo() {
		const data = await this.apiService.getFapClass(this.cookies);
		const dom = parse(data);
		try {
			const table = dom.getElementById('id');
			const rows = table.querySelectorAll('tr').length;
			console.log(rows);
			return 'Class info: ' + rows;
		} catch (err) {
			return "can't get class info: cookies expired";
		}
	}
}
