import { Test, TestingModule } from '@nestjs/testing';
import { PlaylistCommandService } from './playlist-command.service';

describe('PlaylistCommandService', () => {
	let service: PlaylistCommandService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [PlaylistCommandService],
		}).compile();

		service = module.get<PlaylistCommandService>(PlaylistCommandService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
