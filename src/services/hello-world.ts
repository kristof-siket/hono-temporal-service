import { example } from '../workflows';
import runWorkflow from '../utils/run-workflow';

export default async function run() {
    return runWorkflow(example, 'World');
}
