declare namespace indexedDbPromise {
    type TransactionEventType = 'abort' | 'complete' | 'error';
    export class PromisedIndexedDbIndex {
        private index;
        constructor(index: IDBIndex);
        get name(): string;
        get objectStore(): PromisedIndexedDbObjectStore;
        get keyPath(): string | string[];
        get multiEntry(): boolean;
        get unique(): boolean;
        /**
         * Count items which meet conditions
         * @param query Count target query
         * @returns The number of items which meet conditions
         */
        count(query?: IDBValidKey | IDBKeyRange | undefined): Promise<number>;
        /**
         * Get first item which meets condition
         * @param query Condition
         * @returns The first item which meets condition. If nothing,
         * this returns undefined.
         */
        get(query: IDBValidKey | IDBKeyRange): Promise<any>;
        /**
         * Get all items which meet condition
         * @param query Condition
         * @param count The limit of items
         * @returns All items which meet condition
         */
        getAll(query?: IDBValidKey | IDBKeyRange | null | undefined, count?: number | undefined): Promise<any[]>;
        /**
         * Get all item keys which meet condition
         * @param query Condition
         * @param count The limit of items
         * @returns All item keys which meet condition
         */
        getAllKeys(query?: IDBValidKey | IDBKeyRange | null | undefined, count?: number | undefined): Promise<IDBValidKey[]>;
        /**
         * Get the key of first item which meets condition
         * @param query Condition
         * @returns The key of the first item which meets condition.
         * If nothing, undefined.
         */
        getKey(query: IDBValidKey | IDBKeyRange): Promise<IDBValidKey | undefined>;
    }
    export class PromisedIndexedDbObjectStore {
        private store;
        constructor(store: IDBObjectStore);
        get indexNames(): DOMStringList;
        get keyPath(): string | string[];
        get name(): string;
        get transaction(): PromisedIndexedDbTransaction;
        get autoIncrement(): boolean;
        /**
         * Add item to store
         * @param value New value
         * @param key Key to specify
         * @returns New item key
         */
        add(value: any, key?: IDBValidKey | undefined): Promise<IDBValidKey>;
        /**
         * Remove all items
         * @returns Nothing
         */
        clear(): Promise<undefined>;
        /**
         * Count items which meet conditions
         * @param query Count target query
         * @returns The number of items which meet conditions
         */
        count(query?: IDBValidKey | IDBKeyRange | undefined): Promise<number>;
        /**
         * Delete item
         * @param query Delete item condition
         * @returns Nothing
         */
        delete(query: IDBValidKey | IDBKeyRange): Promise<undefined>;
        /**
         * Get first item which meets condition
         * @param query Condition
         * @returns The first item which meets condition. If nothing,
         * this returns undefined.
         */
        get(query: IDBValidKey | IDBKeyRange): Promise<any>;
        /**
         * Get all items which meet condition
         * @param query Condition
         * @param count The limit of items
         * @returns All items which meet condition
         */
        getAll(query?: IDBValidKey | IDBKeyRange | null | undefined, count?: number | undefined): Promise<any[]>;
        /**
         * Get all item keys which meet condition
         * @param query Condition
         * @param count The limit of items
         * @returns All item keys which meet condition
         */
        getAllKeys(query?: IDBValidKey | IDBKeyRange | null | undefined, count?: number | undefined): Promise<IDBValidKey[]>;
        /**
         * Get the key of first item which meets condition
         * @param query Condition
         * @returns The key of the first item which meets condition.
         * If nothing, undefined.
         */
        getKey(query: IDBValidKey | IDBKeyRange): Promise<IDBValidKey | undefined>;
        /**
         * Get index
         * @param name Index name
         * @returns Wrapped index
         */
        index(name: string): PromisedIndexedDbIndex;
        /**
         * Insert or update item
         * @param value Value to put
         * @param key Primary key to update
         * @returns Item key
         */
        put(value: any, key?: IDBValidKey | undefined): Promise<IDBValidKey>;
    }
    export class PromisedIndexedDbTransaction {
        private transaction;
        constructor(transaction: IDBTransaction);
        get db(): PromisedIndexedDb;
        get mode(): IDBTransactionMode;
        get objectStoreNames(): DOMStringList;
        /**
         * Abort transaction
         */
        abort(): void;
        /**
         * Commit transaction
         */
        commit(): void;
        /**
         * Open store
         * @param name Store name
         * @returns Wrapped object store
         */
        objectStore(name: string): PromisedIndexedDbObjectStore;
        /**
         * Add event listener
         * @param eventType Event type
         * @param callback Callback to add
         */
        addEventListener(eventType: TransactionEventType, callback: (ev: Event) => any): void;
        /**
         * Remove event listener
         * @param eventType Event type
         * @param callback Callback to remove
         */
        removeEventListener(eventType: TransactionEventType, callback: (ev: Event) => any): void;
        /**
         * Dispatch event
         * @param ev Event
         * @returns Whether event is prevented or not
         */
        dispatchEvent(ev: Event): boolean;
    }
    export class PromisedIndexedDb {
        private db;
        constructor(db: IDBDatabase);
        get name(): string;
        get version(): number;
        get objectStoreNames(): DOMStringList;
        /**
         * Close database
         */
        close(): void;
        /**
         * Start transaction
         * @param names Store names
         * @param mode Transaction mode
         * @param options Transaction options
         * @returns Wrapped transaction
         */
        transaction(names: string | string[], mode?: IDBTransactionMode, options?: IDBTransactionOptions): PromisedIndexedDbTransaction;
    }
    /**
     * Open Promise-based IndexedDB
     * @param name Database name
     * @param version Database version
     * @param migration Migration function
     * @param blocked Blocked callback
     * @returns Wrapped database
     */
    export function openDatabase(name: string, version: number, migration: (db: IDBDatabase, oldVersion: number, newVersion: number | null) => any, blocked?: (oldVersion: number, newVersion: number | null) => any): Promise<PromisedIndexedDb>;
    export {};
}
export default indexedDbPromise;
