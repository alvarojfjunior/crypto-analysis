import axios from "axios"

export async function getSiteData(url: string) {
    try {
      const { data } = await axios.request({
        method: "GET",
        url,
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
      })
      return data
    } catch (error) {
      console.log('Error to get site data')
      return ''
    }
  }