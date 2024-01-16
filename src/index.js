import { getFingerprint, init } from './armigate-client';

// setTimeout(function () {
//     console.log(getFingerprint());
// }, 5000)

async function main() {
    const fp = await init();

    console.log(fp);
}

main();