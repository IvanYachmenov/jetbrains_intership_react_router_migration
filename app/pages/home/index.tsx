import { ThemeProvider } from "@rescui/ui-contexts";
import { HeaderSection } from "./header-section/HeaderSection";
import { LatestFromKotlinSection } from "./latest-from-kotlin-section/LatestFromKotlinSection";
import { WhyKotlinSection } from "./why-kotlin-section/WhyKotlinSection";
import { UsageSection } from "./usage-section/UsageSection";
import { StartSection } from "./start-section/StartSection";
import "./overview-page.scss";

export default function Home() {
  return (
    <ThemeProvider theme="dark">
      <div className="overview-page" data-page="home">
        <HeaderSection />
        <LatestFromKotlinSection />
        <WhyKotlinSection />
        <UsageSection />
        <StartSection />
      </div>
    </ThemeProvider>
  );
}
