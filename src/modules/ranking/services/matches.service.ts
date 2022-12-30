import { MatchResponse } from '@ranking/response/match.response';
import { MatchRequest } from '@ranking/requests/match.request';
import { PrismaService } from '@core/services/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MatchesService {

    constructor(
        public readonly prisma: PrismaService
    ) { }

    async postMatch(match: MatchRequest): Promise<void> {
        await this.prisma.matches.create({
            data: {
                miliseconds_reached: match.miliseconds_reached,
                username: match.username
            }
        })
    }

    async getTop(limit: number): Promise<MatchResponse[]> {
        const matches = await this.prisma.matches.findMany({
            take: limit,
            orderBy: [
                {
                    miliseconds_reached: 'desc'
                },
                {
                    created_at: 'desc'
                }
            ],
            select: {
                created_at: true,
                miliseconds_reached: true,
                username: true
            }
        })

        return matches.map(m => {
            return {
                created_at: m.created_at,
                miliseconds_reached: Number(m.miliseconds_reached.toString()),
                username: m.username
            }
        })
    }
}
