import { build } from 'vite';

async function run() {
    try {
        await build();
        console.log('BUILD_SUCCESSFUL!');
    } catch (err) {
        console.error('BUILD_ERROR:', err);
    }
}

run();
