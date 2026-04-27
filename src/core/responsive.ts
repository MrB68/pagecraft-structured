import { createContext, useContext } from "react";

export type Device = "desktop" | "tablet" | "mobile";

/**
 * Responsive value: either a single value applied to all devices,
 * or an object with per-device overrides. Resolution falls back:
 *   mobile  -> tablet  -> desktop
 *   tablet  -> desktop
 *   desktop -> (own value)
 */
export type Responsive<T> =
  | T
  | {
      desktop?: T;
      tablet?: T;
      mobile?: T;
    };

export interface ResponsiveLayout {
  desktop?: Record<string, any>;
  tablet?: Record<string, any>;
  mobile?: Record<string, any>;
}

export interface ResponsiveSpacing {
  desktop?: string;
  tablet?: string;
  mobile?: string;
}

export interface ResponsiveVisibility {
  desktop?: boolean;
  tablet?: boolean;
  mobile?: boolean;
}

/**
 * Returns the most specific value for the active device, falling back
 * to wider breakpoints if a value isn't defined.
 */
export function getResponsiveValue<T>(
  value: Responsive<T> | undefined,
  device: Device,
): T | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "object" || Array.isArray(value)) return value as T;

  const v = value as { desktop?: T; tablet?: T; mobile?: T };
  // If the object doesn't look like a responsive map, return as-is.
  const looksResponsive = "desktop" in v || "tablet" in v || "mobile" in v;
  if (!looksResponsive) return value as unknown as T;

  if (device === "mobile") return v.mobile ?? v.tablet ?? v.desktop;
  if (device === "tablet") return v.tablet ?? v.desktop;
  return v.desktop ?? v.tablet ?? v.mobile;
}

/**
 * Device context lets the editor force a specific preview device,
 * while the public site uses "desktop" (Tailwind handles the rest).
 */
export const DeviceContext = createContext<Device>("desktop");
export const useDevice = (): Device => useContext(DeviceContext);

/**
 * Merge a responsive `layout` object into the section props so each section
 * receives a flat shape regardless of whether responsive overrides exist.
 *
 * Backward compatible: if no `layout`/`spacing`/`visibility` keys exist,
 * props are returned unchanged.
 */
export function flattenResponsiveProps(
  props: Record<string, any>,
  device: Device,
): Record<string, any> {
  if (!props || typeof props !== "object") return props;

  const { layout, spacing, visibility, ...rest } = props as {
    layout?: ResponsiveLayout;
    spacing?: ResponsiveSpacing;
    visibility?: ResponsiveVisibility;
    [k: string]: any;
  };

  const layoutValue = layout
    ? device === "mobile"
      ? layout.mobile ?? layout.tablet ?? layout.desktop
      : device === "tablet"
        ? layout.tablet ?? layout.desktop
        : layout.desktop ?? layout.tablet ?? layout.mobile
    : undefined;

  const spacingValue = spacing
    ? device === "mobile"
      ? spacing.mobile ?? spacing.tablet ?? spacing.desktop
      : device === "tablet"
        ? spacing.tablet ?? spacing.desktop
        : spacing.desktop ?? spacing.tablet ?? spacing.mobile
    : undefined;

  return {
    ...rest,
    ...(layoutValue ?? {}),
    _device: device,
    _spacing: spacingValue,
    _visibility: visibility,
  };
}

/**
 * Returns true when a section should be rendered for the active device.
 */
export function isVisibleOnDevice(
  visibility: ResponsiveVisibility | undefined,
  device: Device,
): boolean {
  if (!visibility) return true;
  const v = visibility[device];
  return v === undefined ? true : v;
}
