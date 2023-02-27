export interface ImageBlockData {
  url: string;
  withBorder: boolean;
  withBackground: boolean;
  stretched: boolean;
  caption: string;
}

export interface VideoBlockData {
  url: string;
  withBorder: boolean;
  withBackground: boolean;
  stretched: boolean;
  caption: string;
}

export interface ListBlockData {
  type: "unordered" | "ordered";
  items: string[];
}

export interface ParagraphBlockData {
  placeholder: string | null;
  text: string;
  alignment: "left" | "center" | "right" | "justified";
}

export interface HeaderBlockData {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  alignment: "left" | "center" | "right" | "justified";
}

export interface ChecklistBlockData {
  items: {
    id: string;
    text: string;
    checked: boolean;
  }[];
}

export interface PickerBlockData {
  title: string;
  items: {
    id: string;
    text: string;
  }[];
}

export interface ToggleOptionBlockData {
  title: string;
  items: {
    id: string;
    title: string;
  }[];
}

export interface InputBlockData {
  title: string;
  placeholder: string;
  required: boolean;
  isSecure: boolean;
  errorMessage: string;
  auxiliaryMessage: string;
  validation: string;
  regex: string;
  alignment: "left" | "center" | "right" | "justified";
  icon: ImageBlockData;
}

export interface ClickableOptionBlockData {
  title: string;
  icon: ImageBlockData;
}

export type BlockType =
  | "image"
  | "video"
  | "list"
  | "paragraph"
  | "header"
  | "checklist"
  | "picker"
  | "toggleOption"
  | "input"
  | "clickableOption"
  | "button";

export interface Block {
  id: string;
  type: BlockType;
  data:
    | ImageBlockData
    | VideoBlockData
    | ListBlockData
    | ParagraphBlockData
    | HeaderBlockData
    | ChecklistBlockData
    | PickerBlockData
    | ToggleOptionBlockData
    | InputBlockData
    | ClickableOptionBlockData;
}

export interface DashboardData {
    id: string;
    blocks: Block[]
}