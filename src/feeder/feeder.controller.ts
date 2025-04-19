import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { MqttService } from '../mqtt/mqtt.service';

@Controller('feeder')
export class FeederController {
    constructor(private readonly mqttService: MqttService) {}

    @Post('feed')
    @HttpCode(HttpStatus.OK)
    async feed() {
        this.mqttService.publish('esp8266/feed', '1');
    }
}
