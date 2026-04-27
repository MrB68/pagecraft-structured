import { Section, RuntimeData } from "@/types";
import { SECTION_MAP } from "./sectionRegistry";
import { resolveValue } from "./dataResolver";
import {
  DeviceContext,
  flattenResponsiveProps,
  isVisibleOnDevice,
  useDevice,
  type Device,
} from "./responsive";

interface RendererProps {
  sections: Section[];
  data?: RuntimeData;
  /** Optional override; defaults to the surrounding DeviceContext (desktop). */
  device?: Device;
}

export default function Renderer({ sections, data, device }: RendererProps) {
  const ctxDevice = useDevice();
  const activeDevice: Device = device ?? ctxDevice;

  return (
    <DeviceContext.Provider value={activeDevice}>
      <div className="w-full">
        {sections.map((section) => {
          const meta = SECTION_MAP[section.type];
          if (!meta) {
            return (
              <div
                key={section.id}
                className="p-6 bg-destructive/10 text-destructive text-sm"
              >
                Unknown section type: {section.type}
              </div>
            );
          }

          const rawProps = data ? resolveValue(section.props, data) : section.props;

          // Respect optional per-device visibility flag.
          if (!isVisibleOnDevice((rawProps as any)?.visibility, activeDevice)) {
            return null;
          }

          const finalProps = flattenResponsiveProps(rawProps, activeDevice);
          const Component = meta.component;
          return <Component key={section.id} {...finalProps} />;
        })}
      </div>
    </DeviceContext.Provider>
  );
}
