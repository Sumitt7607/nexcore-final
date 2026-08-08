declare global {
  interface Window {
    clarity?: (command: string, ...args: any[]) => void;
  }
}

/**
 * Retrieves the Microsoft Clarity Project ID from environment variables.
 */
export const getClarityId = (): string => {
  return (
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_CLARITY_ID) ||
    (typeof process !== "undefined" && process.env?.VITE_CLARITY_ID) ||
    ""
  );
};

/**
 * Identify a user in Microsoft Clarity.
 * @param customUserId Unique identifier for the user
 * @param customSessionId Unique session ID (optional)
 * @param customPageId Unique page ID (optional)
 * @param friendlyName User display name (optional)
 */
export const identifyUser = (
  customUserId: string,
  customSessionId?: string,
  customPageId?: string,
  friendlyName?: string
) => {
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("identify", customUserId, customSessionId, customPageId, friendlyName);
  }
};

/**
 * Set custom tag key-value pair in Microsoft Clarity.
 */
export const setClarityTag = (key: string, value: string | string[]) => {
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("set", key, value);
  }
};

/**
 * Track custom event in Microsoft Clarity.
 */
export const trackClarityEvent = (eventName: string) => {
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("event", eventName);
  }
};

/**
 * Upgrade session priority in Microsoft Clarity (e.g. for high-value user actions or conversions).
 */
export const upgradeClaritySession = (reason: string) => {
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("upgrade", reason);
  }
};
