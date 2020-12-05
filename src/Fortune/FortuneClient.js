import fetch from 'node-fetch'

const FORTUNE_URL = '/fortunes'

const getFortune = () => {

    // let p = fetch(FORTUNE_URL)
    //     .then(res => res.json())
    //     // .then(res => console.log(res))
    //
    // let [result] = Promise.all([p])

    const fortune = fetch(FORTUNE_URL)
        .then(res => res.json())
        .then(res => res.fortune)
        .catch(err => console.log(`err: ${err}`))

    let result = Promise.all([fortune.resolve()])

    console.log(result)

    // const str = fortune.replace(/\n/g, '<br />')
    // console.log(str)

    return 'fortune une'
}

export default getFortune
