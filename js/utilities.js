function getPage(path){
    return new Promise((resolve,reject) => {
        fetch(path).then(res => res.text()).then(res => {
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