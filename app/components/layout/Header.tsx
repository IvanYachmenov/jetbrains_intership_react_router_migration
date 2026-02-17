import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const RELEASES_URL = "https://github.com/JetBrains/kotlin/releases/tag/v1.6.20";

export default function Header(props: Record<string, unknown>) {
  const { pathname } = useLocation();
  const [GlobalHeader, setGlobalHeader] = useState<React.ComponentType<Record<string, unknown>> | null>(null);

  useEffect(() => {
    import("@jetbrains/kotlin-web-site-ui/out/components/header/index.js").then((m) =>
      setGlobalHeader(() => m.default)
    );
  }, []);

  if (!GlobalHeader) {
    return <header className="min-h-[52px] w-full bg-[#27282c]" aria-hidden />;
  }

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
