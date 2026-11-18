export interface ReturnDeadlineSummary {
  daysRemaining: number;
  isPassed: boolean;
  isToday: boolean;
}

function parseCalendarDate(value: string): number | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const time = Date.UTC(year, month - 1, day);
  const date = new Date(time);

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return time;
}

export function getReturnDeadlineSummary(
  deadline: string,
  currentDate: string,
): ReturnDeadlineSummary | null {
  const deadlineTime = parseCalendarDate(deadline);
  const currentTime = parseCalendarDate(currentDate);

  if (deadlineTime === null || currentTime === null) return null;

  const daysRemaining = Math.round((deadlineTime - currentTime) / 86_400_000);

  return {
    daysRemaining,
    isPassed: daysRemaining < 0,
    isToday: daysRemaining === 0,
  };
}

export const shoppingIssues = [
  "Order not received",
  "Delayed delivery",
  "Return request",
  "Refund question",
  "Damaged or incorrect item",
  "Payment question",
  "Other",
] as const;

export const preferredOutcomes = [
  "Delivery update",
  "Return instructions",
  "Refund status",
  "Replacement information",
  "Further clarification",
] as const;

export function buildSupportMessage(
  issue: string,
  description: string,
  orderReference: string,
  preferredOutcome: string,
): string {
  const referenceLine = orderReference.trim()
    ? `My order reference is ${orderReference.trim()}. `
    : "";
  const descriptionLine = description.trim()
    ? `Here is what happened: ${description.trim()} `
    : "I would be happy to provide more details if needed. ";

  return `Hello,\n\nI am contacting you about a ${issue.toLowerCase()}. ${descriptionLine}${referenceLine}Could you please help me with ${preferredOutcome.toLowerCase()}?\n\nThank you for your time.`;
}