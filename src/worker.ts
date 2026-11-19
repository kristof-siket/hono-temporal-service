import { createRequire } from 'node:module';
import { NativeConnection, Worker } from '@temporalio/worker';
import * as activities from './activities/greet.js';
import { TEMPORAL_NAMESPACE, TEMPORAL_SERVER_URL } from './constants.js';

const require = createRequire(import.meta.url);

async function run() {
    const connection = await NativeConnection.connect({
        address: TEMPORAL_SERVER_URL,
    });
    const worker = await Worker.create({
        connection,
        namespace: TEMPORAL_NAMESPACE,
        taskQueue: 'hello-world',
        workflowsPath: require.resolve('./workflows/index.js'),
        activities,
    });

    await worker.run();
}

run().catch((err) => {
    console.error(err);
    process.exit(1);
});
