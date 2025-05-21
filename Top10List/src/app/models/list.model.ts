export type TopListItemType = 'film' | 'zene' | 'sorozat'; // Új típus a kategóriáknak

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
  type: string; // use 'type' everywhere, not 'category'
  items: TopListItem[];
}