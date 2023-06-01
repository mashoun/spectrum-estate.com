function getPage(path) {
    var origin = new URL(location.href).origin
    if(origin.includes('spectrum-realestate.github.io')) origin += '/app'
    return new Promise((resolve, reject) => {
        console.log(origin);
        fetch(`${origin}/${path}`).then(res => res.text()).then(res => {
            resolve(res)
        })
        .catch(err => {
            console.log(err);
            reject(err)
        })
    })
}
function getDistinctValues(array) {
    // Use a Set to store unique values
    const distinctSet = new Set(array);

    // Convert Set back to an array
    const distinctArray = Array.from(distinctSet);

    return distinctArray;
}

function addCommas(number) {
    const parts = number.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}

export default {
    getPage,
    getDistinctValues,
    addCommas
}