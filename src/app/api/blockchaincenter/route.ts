import axios from 'axios'
import * as cheerio from 'cheerio';
import { NextResponse } from 'next/server'


async function getSiteData(url: string) {
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



export async function GET(request: Request) {
  const siteHTML = await getSiteData('https://www.blockchaincenter.net/en/bitcoin-rainbow-chart/')
  const $ = cheerio.load(siteHTML)
  const rainbowchart = $('#chartdiv').find("svg").first().toString()
  console.log(rainbowchart)
  return NextResponse.json({ rainbowchart })
}