import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common/decorators';
import { ApiService } from 'Services/api/api.service';

@Module({
    imports: [HttpModule],
    providers: [ApiService],
    exports: [ApiService],
})
export class ApiModule {}
