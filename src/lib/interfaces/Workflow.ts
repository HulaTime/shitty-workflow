import WorkflowStep from './WorkflowStep';

interface Workflow {
  addStep(priority: number, step: WorkflowStep): this;
  run(): Promise<void>;
}

export default Workflow;
