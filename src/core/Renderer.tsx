import { Section, RuntimeData } from "@/types";
import { SECTION_MAP } from "./sectionRegistry";
import { resolveValue } from "./dataResolver";

interface RendererProps {
  sections: Section[];
  data?: RuntimeData;
}

export default function Renderer({ sections, data }: RendererProps) {
  return (
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
        const Component = meta.component;
        const resolvedProps = data ? resolveValue(section.props, data) : section.props;
        return <Component key={section.id} {...resolvedProps} />;
      })}
    </div>
  );
}
