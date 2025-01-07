export interface ItemTabs {
  label: string;
  value: string | number | object;
}

export interface TabsProps {
  options: ItemTabs[];
  activeTab: ItemTabs["value"];
  onChange: (tab: ItemTabs["value"]) => void;
}
