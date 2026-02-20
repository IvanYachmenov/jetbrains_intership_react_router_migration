import { useLocation } from "react-router";
import GlobalHeader from "@jetbrains/kotlin-web-site-ui/dist/header.js";

const RELEASES_URL = "https://github.com/JetBrains/kotlin/releases/tag/v1.6.20";

export default function Header(props: Record<string, unknown>) {
  const { pathname } = useLocation();

  return (
    <GlobalHeader
      productWebUrl={RELEASES_URL}
      hasSearch={false}
      dropdownTheme="dark"
      currentUrl={pathname}
      searchConfig={{}}
      {...props}
    />
  );
}
