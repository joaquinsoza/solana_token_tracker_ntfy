import { NTFY_TOPIC } from './config.js';
import { sendNtfyNotification } from './ntfy.js';
import { monitorSolana } from './solanaTracker.js';

console.log('Starting MMD Monitor...');

(async () => {
  await monitorSolana(async (event) => {
    await sendNtfyNotification({
      topic: NTFY_TOPIC,
      alertType: 'solana',
      message: event.message,
      timestamp: event.timestamp,
    });
    console.log('Solana alert sent:', event.message);
  });
})(); 