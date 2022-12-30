import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class MatchRequest {
    @IsNotEmpty()
    username: string;

    @Type(() => Number)
    @IsInt()
    miliseconds_reached: number;
}
