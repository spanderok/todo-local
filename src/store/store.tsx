import { injectable } from 'inversify';
import 'reflect-metadata';

/* eslint-disable */
@injectable()
export class Store<T> {
  get(key: string): T[] {
    const fromStorage = JSON.parse(localStorage.getItem(key) || 'false');

    if (!fromStorage) {
      return [];
    }

    return fromStorage as T[];
  }
  set(key: string, value: T[]): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  subscribeOnChangeStorage(): void {
    window.addEventListener('storage', () => this.get('TODO'));
  }
}
