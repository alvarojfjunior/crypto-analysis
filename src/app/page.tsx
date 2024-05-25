"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MarketResume from "../components/MarketResume";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Stack>
        <MarketResume />
      </Stack>
      <Footer />
    </main>
  );
}
