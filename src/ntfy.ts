import axios from 'axios';
import { NTFY_URL } from './config';

export type NtfyAlertType = 'solana';

export async function sendNtfyNotification({
  topic,
  alertType,
  message,
  timestamp,
}: {
  topic: string;
  alertType: NtfyAlertType;
  message: string;
  timestamp: string;
}) {
  const title = `[${alertType.toUpperCase()}] New Alert`;
  const body = `${message}\n🕑Time: ${timestamp}\n`;
  try {
    await axios.post(`${NTFY_URL}/${topic}`, body, {
      headers: { Title: title },
    });
  } catch (err) {
    console.error('Failed to send NTFY notification:', err);
  }
} 