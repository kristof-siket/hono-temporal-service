// @@@SNIPSTART typescript-hello-client
import { Connection, Client } from '@temporalio/client';
import { nanoid } from 'nanoid';
import { TEMPORAL_NAMESPACE, TEMPORAL_SERVER_URL } from '../constants';

const run = async <ArgsType = {}, ReturnType = void>(workflow: (args: ArgsType) => Promise<ReturnType>, args: ArgsType): Promise<ReturnType> => {
    // Connect to the default Server location
    const connection = await Connection.connect({ address: TEMPORAL_SERVER_URL });

    const client = new Client({
        connection,
        namespace: TEMPORAL_NAMESPACE,
    });


    const handle = await client.workflow.start<(args: ArgsType) => Promise<ReturnType>>(workflow, {
        taskQueue: 'hello-world',

        args: [args],
        // in practice, use a meaningful business ID, like customerId or transactionId
        workflowId: 'workflow-' + nanoid(),
    });

    console.log(`Started workflow ${handle.workflowId}`);

    return handle.result()
}

export default run
