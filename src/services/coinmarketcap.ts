import axios from "axios"



export const getMarketData = async () => {
    try {
        const { data }: any = axios.get('https://www.blockchaincenter.net/en/altcoin-season-index/')

        console.log(data)
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch data')
    }
}