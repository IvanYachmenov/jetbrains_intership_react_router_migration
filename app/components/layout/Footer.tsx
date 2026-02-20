import { useEffect, useState } from "react";
import { ThemeProvider } from "@rescui/ui-contexts";

export default function Footer(props: Record<string, unknown>) {
  const [GlobalFooter, setGlobalFooter] = useState<React.ComponentType<Record<string, unknown>> | null>(null);

  useEffect(() => {
    import("@jetbrains/kotlin-web-site-ui/dist/footer.js").then((m) => setGlobalFooter(() => m.default));
  }, []);

  return <ThemeProvider theme="dark">{GlobalFooter ? <GlobalFooter {...props} /> : null}</ThemeProvider>;
}
