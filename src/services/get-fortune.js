
import axios from 'axios'

let fortuneUrl = process.env.REACT_APP_FORTUNE_URL || 'https://api.fortune.luka.sh'

function setFortuneUrl(url) {
    fortuneUrl = url
}

const getFortune = (callback, path, index) => {

    let uri = path || ''
    if (uri !== '' && index !== undefined) {
       uri += '/' + index
    }

    console.log(`URL: ${fortuneUrl}${uri}`)

    axios.get(`${fortuneUrl}/${uri}`)
        .then(res => {
            callback(
                {
                    fortune: res.data.fortune,
                    file: res.data.file || undefined,
                    index: res.data.index || undefined,
                }
            )
        })
}

export { getFortune, fortuneUrl, setFortuneUrl }
