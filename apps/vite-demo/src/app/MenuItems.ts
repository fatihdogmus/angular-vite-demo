
export type MenuType = "";

export interface MenuItem {
  label: string;
  icon: string;
  routerLink?: string[];
  items?: MenuItem[];
  command?: (event?: unknown) => void;
  class?: string;
  url?: string;
  target?: string;
  type?: MenuType;
  permission?: string[];
  disabled?: boolean;
}
