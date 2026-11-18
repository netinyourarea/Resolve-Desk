import { describe, expect, it } from "vitest";

import { buildSupportMessage, getReturnDeadlineSummary } from "@/lib/resolvedesk-tools";

describe("getReturnDeadlineSummary", () => {
  it("reports positive days remaining for a future deadline", () => {
    expect(getReturnDeadlineSummary("2026-11-30", "2026-11-18")).toEqual({
      daysRemaining: 12,
      isPassed: false,
      isToday: false,
    });
  });

  it("flags a past deadline", () => {
    const result = getReturnDeadlineSummary("2026-11-10", "2026-11-18");
    expect(result?.isPassed).toBe(true);
    expect(result?.isToday).toBe(false);
    expect(result?.daysRemaining).toBe(-8);
  });

  it("flags a deadline that is today", () => {
    expect(getReturnDeadlineSummary("2026-11-18", "2026-11-18")).toEqual({
      daysRemaining: 0,
      isPassed: false,
      isToday: true,
    });
  });

  it("counts leap days", () => {
    expect(getReturnDeadlineSummary("2028-03-01", "2028-02-28")?.daysRemaining).toBe(2);
    expect(getReturnDeadlineSummary("2027-03-01", "2027-02-28")?.daysRemaining).toBe(1);
  });

  it("accepts Feb 29 only in leap years", () => {
    expect(getReturnDeadlineSummary("2028-02-29", "2028-02-01")?.daysRemaining).toBe(28);
    expect(getReturnDeadlineSummary("2027-02-29", "2027-02-01")).toBeNull();
  });

  it("returns null for invalid inputs", () => {
    expect(getReturnDeadlineSummary("", "2026-11-18")).toBeNull();
    expect(getReturnDeadlineSummary("not-a-date", "2026-11-18")).toBeNull();
    expect(getReturnDeadlineSummary("2026-13-01", "2026-11-18")).toBeNull();
    expect(getReturnDeadlineSummary("2026-11-18", "2026-02-30")).toBeNull();
  });
});

describe("buildSupportMessage", () => {
  it("includes the order reference when provided", () => {
    const message = buildSupportMessage("Order not received", "", " AB-123 ", "Delivery update");
    expect(message).toContain("My order reference is AB-123.");
    expect(message).toContain("about a order not received.");
    expect(message).toContain("help me with delivery update?");
  });

  it("omits the order reference when blank", () => {
    const message = buildSupportMessage("Refund question", "", "   ", "Refund status");
    expect(message).not.toContain("order reference");
  });

  it("uses a custom description and falls back when empty", () => {
    const withText = buildSupportMessage("Delayed delivery", "  It is a week late.  ", "", "Delivery update");
    expect(withText).toContain("Here is what happened: It is a week late.");
    const without = buildSupportMessage("Delayed delivery", "", "", "Delivery update");
    expect(without).toContain("I would be happy to provide more details if needed.");
  });

  it("is formatted as a polite message with greeting and closing", () => {
    const message = buildSupportMessage("Other", "", "", "Further clarification");
    expect(message.startsWith("Hello,\n\n")).toBe(true);
    expect(message.endsWith("\n\nThank you for your time.")).toBe(true);
  });
});
