
import axios from 'axios'

const fortuneUrl = process.env.REACT_APP_FORTUNE_URL

const getFortune = (callback, path, index) => {

    let uri = path || ''
    if (uri !== '' && index !== undefined) {
       uri += '/' + index
    }

    console.log(`URI: ${uri}`)

    axios.get(`${fortuneUrl}/fortune/${uri}`)
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

export default getFortune