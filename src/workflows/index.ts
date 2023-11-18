import * as workflow from '@temporalio/workflow';
import type * as activities from '../activities/greet';

const { greet } = workflow.proxyActivities<typeof activities>({
    startToCloseTimeout: '1 minute',
});

/** A workflow that simply calls an activity */
export async function example(name: string): Promise<string> {
    return await greet(name);
}
