export type CacheEntry<T> = {
    createdAt: number;
    val: T;
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(val: number) {
        this.#interval = val;
        this.#startReapLoop();
    }

    add<T>(key: string, val: T) {
        this.#cache.set(key, {
            createdAt: Date.now(),
            val: val,
        })
    }
    get<T>(key:string) {
        
        return this.#cache.get(key)?.val ?? undefined;
    }

    #reap() {
        this.#cache.forEach((value: CacheEntry<any>, key: string) => {
            if (Date.now() -  value.createdAt > this.#interval) {
                this.#cache.delete(key);
            }
        });
    }

    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
    }

    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}