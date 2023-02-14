"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var indexedDbPromise;
(function (indexedDbPromise) {
    class PromisedIndexedDbIndex {
        constructor(index) {
            this.index = index;
        }
        get name() {
            return this.index.name;
        }
        get objectStore() {
            return new PromisedIndexedDbObjectStore(this.index.objectStore);
        }
        get keyPath() {
            return this.index.keyPath;
        }
        get multiEntry() {
            return this.index.multiEntry;
        }
        get unique() {
            return this.index.unique;
        }
        /**
         * Count items which meet conditions
         * @param query Count target query
         * @returns The number of items which meet conditions
         */
        count(query) {
            return new Promise((resolve, reject) => {
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
        get(query) {
            return new Promise((resolve, reject) => {
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
        getAll(query, count) {
            return new Promise((resolve, reject) => {
                const req = this.index.getAll(query, count);
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
        getAllKeys(query, count) {
            return new Promise((resolve, reject) => {
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
        getKey(query) {
            return new Promise((resolve, reject) => {
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
    indexedDbPromise.PromisedIndexedDbIndex = PromisedIndexedDbIndex;
    class PromisedIndexedDbObjectStore {
        constructor(store) {
            this.store = store;
        }
        get indexNames() {
            return this.store.indexNames;
        }
        get keyPath() {
            return this.store.keyPath;
        }
        get name() {
            return this.store.name;
        }
        get transaction() {
            return new PromisedIndexedDbTransaction(this.store.transaction);
        }
        get autoIncrement() {
            return this.store.autoIncrement;
        }
        /**
         * Add item to store
         * @param value New value
         * @param key Key to specify
         * @returns New item key
         */
        add(value, key) {
            return new Promise((resolve, reject) => {
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
        clear() {
            return new Promise((resolve, reject) => {
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
        count(query) {
            return new Promise((resolve, reject) => {
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
        delete(query) {
            return new Promise((resolve, reject) => {
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
        get(query) {
            return new Promise((resolve, reject) => {
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
        getAll(query, count) {
            return new Promise((resolve, reject) => {
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
        getAllKeys(query, count) {
            return new Promise((resolve, reject) => {
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
        getKey(query) {
            return new Promise((resolve, reject) => {
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
        index(name) {
            return new PromisedIndexedDbIndex(this.store.index(name));
        }
        /**
         * Insert or update item
         * @param value Value to put
         * @param key Primary key to update
         * @returns Item key
         */
        put(value, key) {
            return new Promise((resolve, reject) => {
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
    indexedDbPromise.PromisedIndexedDbObjectStore = PromisedIndexedDbObjectStore;
    class PromisedIndexedDbTransaction {
        constructor(transaction) {
            this.transaction = transaction;
        }
        get db() {
            return new PromisedIndexedDb(this.transaction.db);
        }
        get mode() {
            return this.transaction.mode;
        }
        get objectStoreNames() {
            return this.transaction.objectStoreNames;
        }
        /**
         * Abort transaction
         */
        abort() {
            this.transaction.abort();
        }
        /**
         * Commit transaction
         */
        commit() {
            this.transaction.commit();
        }
        /**
         * Open store
         * @param name Store name
         * @returns Wrapped object store
         */
        objectStore(name) {
            return new PromisedIndexedDbObjectStore(this.transaction.objectStore(name));
        }
        /**
         * Add event listener
         * @param eventType Event type
         * @param callback Callback to add
         */
        addEventListener(eventType, callback) {
            this.transaction.addEventListener(eventType, callback);
        }
        /**
         * Remove event listener
         * @param eventType Event type
         * @param callback Callback to remove
         */
        removeEventListener(eventType, callback) {
            this.transaction.removeEventListener(eventType, callback);
        }
        /**
         * Dispatch event
         * @param ev Event
         * @returns Whether event is prevented or not
         */
        dispatchEvent(ev) {
            return this.transaction.dispatchEvent(ev);
        }
    }
    indexedDbPromise.PromisedIndexedDbTransaction = PromisedIndexedDbTransaction;
    class PromisedIndexedDb {
        constructor(db) {
            this.db = db;
        }
        get name() {
            return this.db.name;
        }
        get version() {
            return this.db.version;
        }
        get objectStoreNames() {
            return this.db.objectStoreNames;
        }
        /**
         * Close database
         */
        close() {
            this.db.close();
        }
        /**
         * Start transaction
         * @param names Store names
         * @param mode Transaction mode
         * @param options Transaction options
         * @returns Wrapped transaction
         */
        transaction(names, mode, options) {
            return new PromisedIndexedDbTransaction(this.db.transaction(names, mode, options));
        }
    }
    indexedDbPromise.PromisedIndexedDb = PromisedIndexedDb;
    /**
     * Open Promise-based IndexedDB
     * @param name Database name
     * @param version Database version
     * @param migration Migration function
     * @param blocked Blocked callback
     * @returns Wrapped database
     */
    function openDatabase(name, version, migration, blocked) {
        return new Promise((resolve, reject) => {
            const req = window.indexedDB.open(name, version);
            req.addEventListener('success', (ev) => {
                resolve(new PromisedIndexedDb(ev.target.result));
            });
            req.addEventListener('error', (ev) => {
                reject(ev);
            });
            req.addEventListener('upgradeneeded', (ev) => {
                const db = ev.target.result;
                migration(db, ev.oldVersion, ev.newVersion);
            });
            if (blocked) {
                req.addEventListener('blocked', (ev) => {
                    blocked(ev.oldVersion, ev.newVersion);
                });
            }
        });
    }
    indexedDbPromise.openDatabase = openDatabase;
})(indexedDbPromise || (indexedDbPromise = {}));
exports.default = indexedDbPromise;
