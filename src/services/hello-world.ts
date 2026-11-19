import { example } from '../workflows/index.js';
import runWorkflow from '../utils/run-workflow.js';

export default async function run() {
    return runWorkflow(example, 'World');
}
