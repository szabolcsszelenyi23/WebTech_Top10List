export type TopListItemType = 'film' | 'zene' | 'sorozat';

export interface TopListItem {
  id: string;
  title: string;
  value?: string;
  rank?: number;
  subtitle?: string;
}

export interface TopList {
  id: string;
  title: string;
  type: string;
  items: TopListItem[];
}
