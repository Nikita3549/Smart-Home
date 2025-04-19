import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeederModule } from './feeder/feeder.module';
import { MqttModule } from './mqtt/mqtt.module';
import { ConfigModule } from './config/config.module';

@Module({
    imports: [FeederModule, MqttModule, ConfigModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
