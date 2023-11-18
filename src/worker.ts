import { NativeConnection, Worker } from '@temporalio/worker';
import * as activities from './activities/greet';
import { TEMPORAL_NAMESPACE, TEMPORAL_SERVER_URL } from './constants';

async function run() {
    const connection = await NativeConnection.connect({
        address: TEMPORAL_SERVER_URL,
    });
    const worker = await Worker.create({
        connection,
        namespace: TEMPORAL_NAMESPACE,
        taskQueue: 'hello-world',
        workflowsPath: require.resolve('./workflows'),
        activities,
    });

    await worker.run();
}

run().catch((err) => {
    console.error(err);
    process.exit(1);
});
