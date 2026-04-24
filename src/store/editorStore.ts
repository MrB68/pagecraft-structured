import { create } from "zustand";

export type Device = "desktop" | "tablet" | "mobile";

interface EditorState {
  selectedSectionId: string | null;
  hoveredSectionId: string | null;
  device: Device;
  inlineEditingKey: string | null; // `${sectionId}:${fieldKey}`
  setSelected: (id: string | null) => void;
  setHovered: (id: string | null) => void;
  setDevice: (d: Device) => void;
  setInlineEditing: (key: string | null) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  selectedSectionId: null,
  hoveredSectionId: null,
  device: "desktop",
  inlineEditingKey: null,
  setSelected: (id) => set({ selectedSectionId: id, inlineEditingKey: null }),
  setHovered: (id) => set({ hoveredSectionId: id }),
  setDevice: (d) => set({ device: d }),
  setInlineEditing: (key) => set({ inlineEditingKey: key }),
}));
