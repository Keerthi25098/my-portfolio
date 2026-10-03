import { build } from 'vite';

async function test() {
    try {
        await build();
    } catch (err) {
        console.log('--- ERROR DETAILS ---');
        console.log('ID:', err.id);
        console.log('LOC:', err.loc);
        console.log('FRAME:', err.frame);
        console.log('MESSAGE:', err.message);
    }
}

test();
