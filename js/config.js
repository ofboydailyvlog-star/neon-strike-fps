// ===== NEON STRIKE — Config & Constants =====

export const CONFIG = {
    // Player
    PLAYER: {
        MAX_HEALTH: 100,
        MOVE_SPEED: 8,
        SPRINT_SPEED: 13,
        JUMP_FORCE: 9,
        GRAVITY: 25,
        HEIGHT: 1.7,
        RADIUS: 0.4,
        MOUSE_SENSITIVITY: 0.0022,
        TOUCH_LOOK_SENSITIVITY: 0.004,
        REGEN_DELAY: 5,      // seconds after damage before regen
        REGEN_RATE: 5,       // HP per second
    },

    // Weapon
    WEAPON: {
        MAG_SIZE: 30,
        RESERVE_AMMO: 90,
        FIRE_RATE: 0.1,      // seconds between shots
        RELOAD_TIME: 1.8,
        DAMAGE: 25,
        RANGE: 100,
        SPREAD: 0.01,        // radians of spread
        RECOIL: 0.015,
    },

    // Enemies
    ENEMY: {
        BASE_HEALTH: 50,
        BASE_SPEED: 3,
        BASE_DAMAGE: 10,
        ATTACK_RANGE: 2,
        ATTACK_COOLDOWN: 1.0,
        DETECTION_RANGE: 40,
        RADIUS: 0.5,
        HEIGHT: 1.8,
        SCORE_PER_KILL: 100,
        // Per-wave scaling
        HEALTH_SCALE: 0.15,
        SPEED_SCALE: 0.05,
        DAMAGE_SCALE: 0.1,
    },

    // Waves
    WAVES: {
        BASE_ENEMY_COUNT: 5,
        ENEMY_PER_WAVE: 2,
        MAX_ALIVE: 15,
        SPAWN_DELAY: 0.8,
        WAVE_DELAY: 4,
    },

    // Arena
    ARENA: {
        SIZE: 60,         // half-extent of the play area
        WALL_HEIGHT: 8,
    },

    // Rendering
    RENDER: {
        FOV: 75,
        NEAR: 0.1,
        FAR: 500,
        SHADOW_MAP_SIZE: 2048,
    },
};

// Game states
export const GameState = {
    LOADING: 'loading',
    MENU: 'menu',
    PLAYING: 'playing',
    PAUSED: 'paused',
    GAME_OVER: 'gameOver',
    WAVE_TRANSITION: 'waveTransition',
};

// Enemy types
export const EnemyType = {
    GRUNT: 'grunt',
    RUNNER: 'runner',
    TANK: 'tank',
};
