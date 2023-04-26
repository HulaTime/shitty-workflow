import { EventEmitter } from 'events';

import WorkflowStep from './interfaces/WorkflowStep';

export default class WaitForSomething implements WorkflowStep {
  emitter: EventEmitter;

  constructor(e: EventEmitter) {
    this.emitter = e;
  }

  async execute(done: (input: unknown) => Promise<void>, input: number): Promise<void> {
    this.emitter.on('funky event', async () => {
      console.log('+++++++++++++++++++ I waited my turn ++++++++++++++++++', input);
      await done(input + 1);
    });
  }
}
