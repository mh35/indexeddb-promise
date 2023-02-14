namespace indexedDbPromise {
  type TransactionEventType = 'abort' | 'complete' | 'error';
  export class PromisedIndexedDbIndex {
    private index: IDBIndex;
    constructor(index: IDBIndex) {
      this.index = index;
    }
    public get name() {
      return this.index.name;
    }
    public get objectStore() {
      return new PromisedIndexedDbObjectStore(this.index.objectStore);
    }
    public get keyPath() {
      return this.index.keyPath;
    }
    public get multiEntry() {
      return this.index.multiEntry;
    }
    public get unique() {
      return this.index.unique;
    }
    /**
     * Count items which meet conditions
     * @param query Count target query
     * @returns The number of items which meet conditions
     */
    public count(query?: IDBValidKey | IDBKeyRange | undefined) {
      return new Promise<number>((resolve, reject) => {
        const req = this.index.count(query);
        req.addEventListener('success', () => {
          resolve(req.result);
        });
        req.addEventListener('error', (ev) => {
          reject(ev);
        });
      });
    }
    /**
     * Get first item which meets condition
     * @param query Condition
     * @returns The first item which meets condition. If nothing,
     * this returns undefined.
     */
    public get(query: IDBValidKey | IDBKeyRange) {
      return new Promise<any>((resolve, reject) => {
        const req = this.index.get(query);
        req.addEventListener('success', () => {
          resolve(req.result);
        });
        req.addEventListener('error', (ev) => {
          reject(ev);
        });
      });
    }
    /**
     * Get all items which meet condition
     * @param query Condition
     * @param count The limit of items
     * @returns All items which meet condition
     */
    public getAll(
      query?: IDBValidKey | IDBKeyRange | null | undefined,
      count?: number | undefined
    ) {
      return new Promise<any[]>((resolve, reject) => {
        const req = this.index.getAll(query, count);
        req.addEventListener('success', () => {
          resolve(req.result);
        });
        req.addEventListener('error', (ev) => {
          reject(ev);
        });
      })
    }
    /**
     * Get all item keys which meet condition
     * @param query Condition
     * @param count The limit of items
     * @returns All item keys which meet condition
     */
    public getAllKeys(
      query?: IDBValidKey | IDBKeyRange | null | undefined,
      count?: number | undefined
    ) {
      return new Promise<IDBValidKey[]>((resolve, reject) => {
        const req = this.index.getAllKeys(query, count);
        req.addEventListener('success', () => {
          resolve(req.result);
        });
        req.addEventListener('error', (ev) => {
          reject(ev);
        });
      });
    }
    /**
     * Get the key of first item which meets condition
     * @param query Condition
     * @returns The key of the first item which meets condition.
     * If nothing, undefined.
     */
    public getKey(query: IDBValidKey | IDBKeyRange) {
      return new Promise<IDBValidKey | undefined>((resolve, reject) => {
        const req = this.index.getKey(query);
        req.addEventListener('success', () => {
          resolve(req.result);
        });
        req.addEventListener('error', (ev) => {
          reject(ev);
        });
      });
    }
  }
  export class PromisedIndexedDbObjectStore {
    private store: IDBObjectStore;
    constructor(store: IDBObjectStore) {
      this.store = store;
    }
    public get indexNames() {
      return this.store.indexNames;
    }
    public get keyPath() {
      return this.store.keyPath;
    }
    public get name() {
      return this.store.name;
    }
    public get transaction() {
      return new PromisedIndexedDbTransaction(this.store.transaction);
    }
    public get autoIncrement() {
      return this.store.autoIncrement;
    }
    /**
     * Add item to store
     * @param value New value
     * @param key Key to specify
     * @returns New item key
     */
    public add(value: any, key?: IDBValidKey | undefined) {
      return new Promise<IDBValidKey>((resolve, reject) => {
        const req = this.store.add(value, key);
        req.addEventListener('success', () => {
          resolve(req.result);
        });
        req.addEventListener('error', (ev) => {
          reject(ev);
        });
      });
    }
    /**
     * Remove all items
     * @returns Nothing
     */
    public clear() {
      return new Promise<undefined>((resolve, reject) => {
        const req = this.store.clear();
        req.addEventListener('success', () => {
          resolve(undefined);
        });
        req.addEventListener('error', (ev) => {
          reject(ev);
        });
      });
    }
    /**
     * Count items which meet conditions
     * @param query Count target query
     * @returns The number of items which meet conditions
     */
    public count(query?: IDBValidKey | IDBKeyRange | undefined) {
      return new Promise<number>((resolve, reject) => {
        const req = this.store.count(query);
        req.addEventListener('success', () => {
          resolve(req.result);
        });
        req.addEventListener('error', (ev) => {
          reject(ev);
        });
      });
    }
    /**
     * Delete item
     * @param query Delete item condition
     * @returns Nothing
     */
    public delete(query: IDBValidKey | IDBKeyRange) {
      return new Promise<undefined>((resolve, reject) => {
        const req = this.store.delete(query);
        req.addEventListener('success', () => {
          resolve(undefined);
        });
        req.addEventListener('error', (ev) => {
          reject(ev);
        });
      });
    }
    /**
     * Get first item which meets condition
     * @param query Condition
     * @returns The first item which meets condition. If nothing,
     * this returns undefined.
     */
    public get(query: IDBValidKey | IDBKeyRange) {
      return new Promise<any>((resolve, reject) => {
        const req = this.store.get(query);
        req.addEventListener('success', () => {
          resolve(req.result);
        });
        req.addEventListener('error', (ev) => {
          reject(ev);
        });
      });
    }
    /**
     * Get all items which meet condition
     * @param query Condition
     * @param count The limit of items
     * @returns All items which meet condition
     */
    public getAll(
      query?: IDBValidKey | IDBKeyRange | null | undefined,
      count?: number | undefined
    ) {
      return new Promise<any[]>((resolve, reject) => {
        const req = this.store.getAll(query, count);
        req.addEventListener('success', () => {
          resolve(req.result);
        });
        req.addEventListener('error', (ev) => {
          reject(ev);
        });
      });
    }
    /**
     * Get all item keys which meet condition
     * @param query Condition
     * @param count The limit of items
     * @returns All item keys which meet condition
     */
    public getAllKeys(
      query?: IDBValidKey | IDBKeyRange | null | undefined,
      count?: number | undefined
    ) {
      return new Promise<IDBValidKey[]>((resolve, reject) => {
        const req = this.store.getAllKeys(query, count);
        req.addEventListener('success', () => {
          resolve(req.result);
        });
        req.addEventListener('error', (ev) => {
          reject(ev);
        });
      });
    }
    /**
     * Get the key of first item which meets condition
     * @param query Condition
     * @returns The key of the first item which meets condition.
     * If nothing, undefined.
     */
    public getKey(query: IDBValidKey | IDBKeyRange) {
      return new Promise<IDBValidKey | undefined>((resolve, reject) => {
        const req = this.store.getKey(query);
        req.addEventListener('success', () => {
          resolve(req.result);
        });
        req.addEventListener('error', (ev) => {
          reject(ev);
        });
      });
    }
    /**
     * Get index
     * @param name Index name
     * @returns Wrapped index
     */
    public index(name: string) {
      return new PromisedIndexedDbIndex(this.store.index(name));
    }
    /**
     * Insert or update item
     * @param value Value to put
     * @param key Primary key to update
     * @returns Item key
     */
    public put(value: any, key?: IDBValidKey | undefined) {
      return new Promise<IDBValidKey>((resolve, reject) => {
        const req = this.store.put(value, key);
        req.addEventListener('success', () => {
          resolve(req.result);
        });
        req.addEventListener('error', (ev) => {
          reject(ev);
        });
      });
    }
  }
  export class PromisedIndexedDbTransaction {
    private transaction: IDBTransaction;
    constructor(transaction: IDBTransaction) {
      this.transaction = transaction;
    }
    public get db() {
      return new PromisedIndexedDb(this.transaction.db);
    }
    public get mode() {
      return this.transaction.mode;
    }
    public get objectStoreNames() {
      return this.transaction.objectStoreNames;
    }
    /**
     * Abort transaction
     */
    public abort() {
      this.transaction.abort();
    }
    /**
     * Commit transaction
     */
    public commit() {
      this.transaction.commit();
    }
    /**
     * Open store
     * @param name Store name
     * @returns Wrapped object store
     */
    public objectStore(name: string) {
      return new PromisedIndexedDbObjectStore(
        this.transaction.objectStore(name)
      );
    }
    /**
     * Add event listener
     * @param eventType Event type
     * @param callback Callback to add
     */
    public addEventListener(
      eventType: TransactionEventType,
      callback: (ev: Event) => any,
    ) {
      this.transaction.addEventListener(eventType, callback);
    }
    /**
     * Remove event listener
     * @param eventType Event type
     * @param callback Callback to remove
     */
    public removeEventListener(
      eventType: TransactionEventType,
      callback: (ev: Event) => any,
    ) {
      this.transaction.removeEventListener(eventType, callback);
    }
    /**
     * Dispatch event
     * @param ev Event
     * @returns Whether event is prevented or not
     */
    public dispatchEvent(ev: Event) {
      return this.transaction.dispatchEvent(ev);
    }
  }
  export class PromisedIndexedDb {
    private db: IDBDatabase;
    constructor(db: IDBDatabase) {
      this.db = db;
    }
    public get name() {
      return this.db.name;
    }
    public get version() {
      return this.db.version;
    }
    public get objectStoreNames() {
      return this.db.objectStoreNames;
    }
    /**
     * Close database
     */
    public close() {
      this.db.close();
    }
    /**
     * Start transaction
     * @param names Store names
     * @param mode Transaction mode
     * @param options Transaction options
     * @returns Wrapped transaction
     */
    public transaction(
      names: string | string[],
      mode?: IDBTransactionMode,
      options?: IDBTransactionOptions
    ) {
      return new PromisedIndexedDbTransaction(
        this.db.transaction(names, mode, options)
      );
    }
  }
  /**
   * Open Promise-based IndexedDB
   * @param name Database name
   * @param version Database version
   * @param migration Migration function
   * @param blocked Blocked callback
   * @returns Wrapped database
   */
  export function openDatabase(
    name: string,
    version: number,
    migration: (
      db: IDBDatabase, oldVersion: number, newVersion: number | null
    ) => any,
    blocked?: (oldVersion: number, newVersion: number | null) => any
  ) {
    return new Promise<PromisedIndexedDb>((resolve, reject) => {
      const req = window.indexedDB.open(name, version);
      req.addEventListener('success', (ev) => {
        resolve(new PromisedIndexedDb(
          (ev.target as IDBOpenDBRequest).result));
      });
      req.addEventListener('error', (ev) => {
        reject(ev);
      });
      req.addEventListener('upgradeneeded', (ev) => {
        const db = (ev.target as IDBOpenDBRequest).result;
        migration(db, ev.oldVersion, ev.newVersion);
      });
      if (blocked) {
        req.addEventListener('blocked', (ev) => {
          blocked(ev.oldVersion, ev.newVersion);
        })
      }
    });
  }
}
export default indexedDbPromise;