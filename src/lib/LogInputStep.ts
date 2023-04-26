import WorkflowStep from './interfaces/WorkflowStep';

export default class LogInputStep implements WorkflowStep<number, void> {
  async execute(done: (input: unknown) => Promise<void>, input: number): Promise<void> {
    console.log('+++++++++++++++++++ input ++++++++++++++++++', input);
    await done(input + 1);
  }
}
