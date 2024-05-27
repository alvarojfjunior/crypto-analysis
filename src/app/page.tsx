"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Flex, Image, Stack } from "@chakra-ui/react";
import {
  CryptoCoinsHeatmap,
  TechnicalAnalysis,
  MarketOverview,
} from "react-ts-tradingview-widgets";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Stack>
        <Flex>
          <TechnicalAnalysis
            colorTheme="dark"
            width="50%"
            symbol="BTCUSD"
            copyrightStyles={{ parent: { display: "none" } }}
            interval="1D"
          />

          <div>
            <script
              async
              src="https://static.coinstats.app/widgets/v5/cs-widget.js"
            />
            {/* 
            // @ts-ignore */}
            <fear-and-greed
              theme="dark"
              direction="horizontal"
              background="#0D0D0D"
              is-market-sentiment-visible="true"
              is-last-updated-visible="true"
              title-color="#FFFFFF"
              chart-indicator-one-color="#F02935"
              chart-indicator-two-color="#F07D29"
              chart-indicator-three-color="#9ACB82"
              chart-indicator-four-color="#34B349"
              subtitle-color="#999999"
              last-updated-color="#999999"
              arrow-color="#262626"
            />
          </div>
        </Flex>

        <Image
          src="https://br.tradingview.com/i/df57YEkg/"
          alt="Rainbow Chart"
          width="50%"
        />
        <CryptoCoinsHeatmap
          copyrightStyles={{ parent: { display: "none" } }}
          colorTheme="dark"
          hasTopBar={false}
          height={500}
          isZoomEnabled={false}
        />
      </Stack>
      <Footer />
    </main>
  );
}
