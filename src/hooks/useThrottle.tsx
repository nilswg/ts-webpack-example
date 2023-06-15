import { useCallback } from 'react';

/**
 * ## Throttle
 *
 * 可以直接使用在 useEffect 中的 throttle 方法。
 * 由於實現非使用 setTimeout，故不需要組件卸載時回收計時器
 */

export function throttle<A extends any[] = any[]>(fn: (...args: A) => void, ms: number) {
    let lastCallTime: number = Date.now();

    return function (...args: A) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - lastCallTime;
        if (elapsedTime >= ms) {
            lastCallTime = currentTime;
            fn(...args);
        }
    };
}

/**
 * ## useThrottleFn
 *
 * 使用 React.useCallback 包裹起來的 throttle 方法，可作為回調函式來使用
 */
export function useThrottleFn<A extends any[] = any[]>(fn: (...args: A) => void, deps: any[], ms: number = 1000) {
    return useCallback(throttle(fn, ms), deps);
}