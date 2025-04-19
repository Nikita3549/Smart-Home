import { Injectable, OnModuleInit } from '@nestjs/common';
import mqtt, { MqttClient } from 'mqtt';
import { ConfigService } from '../config/config.service';

@Injectable()
export class MqttService implements OnModuleInit {
    private client: MqttClient;
    constructor(private readonly config: ConfigService) {}

    onModuleInit() {
        this.client = mqtt.connect(
            `mqtt://${this.config.get('MQTT_DOMAIN')}:${this.config.get('MQTT_PORT')}`,
            {
                username: this.config.get('MQTT_USER'),
                password: this.config.get('MQTT_PASSWORD'),
            },
        );

        this.client.on('error', (e: unknown) => {
            console.error('MQTT error: ', e);
        });
    }

    public publish(topic: string, message: string) {
        this.client.publish(topic, message);
    }
}
