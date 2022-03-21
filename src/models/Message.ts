export interface Message {
  id: string | null;
  message: string;
  read: boolean;
  authorCustomer: boolean;
  createdAt: number;
}
