function getPage(path){
    const origin = new URL(location.href).origin
    return new Promise((resolve,reject) => {
        fetch(`${origin}/${path}`).then(res => res.text()).then(res => {
            resolve(res)
        })
        .catch(err => {
            console.log(err);
            resolve(err)
        })
    })
}

export default {
    getPage
}