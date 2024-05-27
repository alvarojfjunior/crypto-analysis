import axios from 'axios'
import * as cheerio from 'cheerio';
import { NextResponse } from 'next/server'


async function getSiteData(url: string) {
  const { data } = await axios.request({
    method: "GET",
    url,
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    }
  })
  return data
}


export async function GET(request: Request) {
  const siteData = await getSiteData('https://coinmarketcap.com/')
  const $ = cheerio.load(siteData)

  // Market Cap
  const marketCap: any = {}
  const marketCapEl = $('span:contains("Market Cap")').first().next()
  marketCap.vlr = marketCapEl.find('a').text()
  marketCap.per = marketCapEl.find('div').text()
  marketCap.dir = marketCapEl.toString().includes('color-positive') ? 'up' : 'down'


  // Market Cap
  const vol24h: any = {}
  const vol24hEl = $('span:contains("24h Vol")').first().next()
  vol24h.vlr = vol24hEl.find('a').text()
  vol24h.per = vol24hEl.find('div').text()
  vol24h.dir = vol24hEl.toString().includes('color-positive') ? 'up' : 'down'


  // Fear and Greed Index
  const fearAndGreedIndex = $('div:contains("Fear & Greed Index")').text()
  


  return NextResponse.json({ marketCap, vol24h, fearAndGreedIndex })
}