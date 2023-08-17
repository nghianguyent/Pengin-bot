import { Test, TestingModule } from '@nestjs/testing';
import { BaseInfoCommand } from './registration.service';

describe('RegistrationService', () => {
	let service: BaseInfoCommand;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [BaseInfoCommand],
		}).compile();

		service = module.get<BaseInfoCommand>(BaseInfoCommand);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
