import { createLogger } from 'bunyan';

import app from './src/server';

const logger = createLogger({ name: 'service' });

app.listen(3000, () => {
  logger.info('service started on port 3000');
});
