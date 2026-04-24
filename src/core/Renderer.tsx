import { Section } from "@/types";
import { SECTION_MAP } from "./sectionRegistry";

interface RendererProps {
  sections: Section[];
}

export default function Renderer({ sections }: RendererProps) {
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
        return <Component key={section.id} {...section.props} />;
      })}
    </div>
  );
}
