import { Aspect, AspectContext } from '@arekushii/ts-aspect';
import { Exception } from '@core/classes/exception.class';


export class ExceptionActionAspect implements Aspect {

    async execute(ctx: AspectContext): Promise<void> {
        await this.runException(ctx.error);

        if (ctx.params) {
            throw ctx.error;
        }
    }

    runException = async (e: any, target?: any, ...args: any[]): Promise<void> => {
        if (e instanceof Exception) {
            await e.action({ target, args });
        } else if (e instanceof Error) {
            console.log(e);
        } else {
            console.log(e);
        }
    };
    
}
