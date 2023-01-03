import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class MatchRequest {
    @IsNotEmpty()
    username: string;

    @Type(() => Number)
    @IsNumber()
    miliseconds_reached: number;
}
