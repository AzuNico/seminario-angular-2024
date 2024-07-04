import { Item } from './Item';

export interface Slot {
  id: number;
  item: Item | null;
  limit: number;
}
