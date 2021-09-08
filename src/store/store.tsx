
export class Store<T> {
    get(key: string): Array<any> {
        return JSON.parse(localStorage.getItem(key));
    }
    set(key: string, value: Array<any>): void {
        localStorage.setItem(key, JSON.stringify(value));
    }
}