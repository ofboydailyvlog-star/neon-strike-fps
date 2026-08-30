// ===== NEON STRIKE — Utilities =====

// Detect if the device is touch-based
export function isMobile() {
    return ('ontouchstart' in window) ||
           (navigator.maxTouchPoints > 0) ||
           (window.matchMedia('(pointer: coarse)').matches);
}

// Clamp a value between min and max
export function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

// Linear interpolation
export function lerp(a, b, t) {
    return a + (b - a) * t;
}

// Random integer in range [min, max]
export function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random float in range [min, max)
export function randFloat(min, max) {
    return Math.random() * (max - min) + min;
}

// Pick a random element from an array
export function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Distance between two 3D points (THREE.Vector3-like)
export function distance3D(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const dz = a.z - b.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

// Format number with commas
export function formatNumber(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Simple throttle
export function throttle(fn, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = performance.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}
