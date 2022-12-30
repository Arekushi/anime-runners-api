import { Aspect, AspectContext } from '@arekushii/ts-aspect';


export class LogRequestAspect implements Aspect {

    execute(ctx: AspectContext): void {
        const method = ctx.params.method.toUpperCase();
        const route = ctx.functionParams[0];
        const date = new Date().toTimeString();

        console.log(`${method} - ${route} - ${date}`);
    }
}
