import WorkflowStep from './interfaces/WorkflowStep';
import Workflow from './interfaces/Workflow';

export default class DefaultWorkflow implements Workflow {
  stepsToRun: Map<number, WorkflowStep> = new Map();

  stepsThatHaveRun: Map<number, WorkflowStep> = new Map();

  addStep(priority: number, step: WorkflowStep): this {
    this.stepsToRun.set(priority, step);
    return this;
  }

  async run(input?: unknown): Promise<void> {
    const stepOrder = Array.from(this.stepsToRun.keys()).sort((a, b) => b - a);
    const stepToRun = this.stepsToRun.get(stepOrder[0]);
    if (!stepToRun) {
      return;
    }
    this.stepsThatHaveRun.set(stepOrder[0], stepToRun);
    this.stepsToRun.delete(stepOrder[0]);
    await stepToRun.execute(this.run.bind(this), input);
  }
}
