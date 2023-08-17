import { Test, TestingModule } from '@nestjs/testing';
import { BotGatewayService } from './bot-gateway.service';

describe('BotGatewayService', () => {
	let service: BotGatewayService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [BotGatewayService],
		}).compile();

		service = module.get<BotGatewayService>(BotGatewayService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
