//Taken from Scrimba.com......   huge courtesy to my friend Florin for css of the traffic light. https://twitter.com/florinpop1705
let active = 0
let lights = document.querySelectorAll('.circle')

const switchLight = (currentLight) => {
    currentLight.classList.add(currentLight.getAttribute('color'));
}
const turnOffLight = (currentLight) => {
    currentLight.className = 'circle'
}

const changeLight = () => {
    return new Promise((resolve, reject) => {
        let currentLight = lights[active];
        if (active === 0) {
            switchLight(currentLight);
            setTimeout(() => {
                switchLight(lights[1]);

            }, 2000)
            setTimeout(() => {
                turnOffLight(currentLight);
                turnOffLight(lights[1])
                active = 2;
                resolve(active);
            }, 4000)
        }
        if (active === 1) {
            switchLight(currentLight);
            setTimeout(() => {
                turnOffLight(currentLight);
                active = 2;
                resolve(active);
            }, 2000)
        }
        if (active === 2) {
            switchLight(currentLight);
            setTimeout(() => {
                turnOffLight(currentLight);
                active = 1;
                resolve(active);
            }, 10000)
        }
    })
}

(async function() {
    try {
        await changeLight()
        await changeLight()
            //    await changeLight()
    } catch (err) {
        console.log(err)
    }
})();