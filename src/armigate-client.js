import FingerprintJS from '@fingerprintjs/fingerprintjs'
let fpValue;
async function init() {
    const fpPromise = FingerprintJS.load();
    const fp = await fpPromise;
    const result = await fp.get();
    fpValue = result.visitorId;
    return fpValue;
}

function getFingerprint() {
    return fpValue;
}

init();

export { getFingerprint, init };
