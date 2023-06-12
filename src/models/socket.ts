import { SocketEvent } from 'src/config';

export type WebSocketInnerData<T = null> = {
  data: T;
  code?: number;
  message?: string;
};

export type WebSocketData<T = null> = {
  event: SocketEvent;
  data: WebSocketInnerData<T>;
};
