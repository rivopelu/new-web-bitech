import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

import "@/styles/index.scss";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });

    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, []);

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider defaultTheme={"light"}>
        <LoadingBar
          color="#1b769f"
          height={6}
          progress={progress}
          waitingTime={400}
          onLoaderFinished={() => {
            setProgress(0);
          }}
        />
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
