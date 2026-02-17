import { ThemeProvider } from "@rescui/ui-contexts";
import GlobalFooter from "@jetbrains/kotlin-web-site-ui/out/components/footer/index.js";

export default function Footer(props: Record<string, unknown>) {
  return (
    <ThemeProvider theme="dark">
      <GlobalFooter {...props} />
    </ThemeProvider>
  );
}
