import * as cheerio from 'cheerio';
import { NextResponse } from 'next/server'
import { getSiteData } from '../../helpers/webScraping';

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


  return NextResponse.json({ marketCap, vol24h })
}