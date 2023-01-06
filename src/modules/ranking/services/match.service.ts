import { MatchResponse } from '@ranking/response/match.response';
import { MatchRequest } from '@ranking/requests/match.request';
import { PrismaService } from '@core/services/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MatchService {

    constructor(
        public readonly prisma: PrismaService
    ) { }

    async postMatch(match: MatchRequest): Promise<void> {
        await this.prisma.match.create({
            data: {
                time_reached: match.time_reached,
                username: match.username
            }
        })
    }

    async getHiScores(limit: number): Promise<MatchResponse[]> {
        const matches = await this.prisma.match.findMany({
            take: limit,
            orderBy: [
                {
                    time_reached: 'desc'
                },
                {
                    created_at: 'desc'
                }
            ],
            select: {
                created_at: true,
                time_reached: true,
                username: true
            }
        })

        return matches.map(m => {
            return {
                time_reached: Number(m.time_reached.toString()),
                username: m.username
            }
        })
    }
}
