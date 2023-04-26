import { EventEmitter } from 'events';

import DefaultWorkflow from '../../src/lib/DefaultWorkflow';
import LogInputStep from '../../src/lib/LogInputStep';
import WaitForSomething from '../../src/lib/WaitForSomething';

const wait = (time: number): Promise<void> => new Promise((res) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTimeout(() => {}, time);
});

describe('', function () {
  test('', async () => {
    const logInputStep = new LogInputStep();
    const logInputStep2 = new LogInputStep();
    const waitEmitter = new EventEmitter();
    const waitForMeStep = new WaitForSomething(waitEmitter);
    const defaultWorkflow = new DefaultWorkflow();
    defaultWorkflow.addStep(1, logInputStep);
    defaultWorkflow.addStep(2, waitForMeStep);
    defaultWorkflow.addStep(3, logInputStep2);

    await defaultWorkflow.run(10);
    setTimeout(() => {
      waitEmitter.emit('funky event');
    }, 2000);
    await wait(4000);
    console.log('+++++++++++++++++++ test done ++++++++++++++++++');
  });
});
