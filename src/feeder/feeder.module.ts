import { Module } from '@nestjs/common';
import { FeederController } from './feeder.controller';
import { MqttModule } from '../mqtt/mqtt.module';

@Module({
    imports: [MqttModule],
    controllers: [FeederController],
})
export class FeederModule {}
