import { useState, useMemo } from "react";
import Button from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { TabList, Tab, TabSeparator } from "@rescui/tab-list";
import classNames from "classnames";
import hljs from "highlight.js/lib/core";
import kotlin from "highlight.js/lib/languages/kotlin";
import "highlight.js/styles/github.css";
import { programmingLanguageTabs } from "~/data/why-kotlin-section";
import "./programming-language.scss";

hljs.registerLanguage("kotlin", kotlin);

export function ProgrammingLanguage() {
  const textCn = useTextStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const highlightedHtml = useMemo(() => {
    const code = programmingLanguageTabs[activeIndex].code;
    const result = hljs.highlight(code, { language: "kotlin" });
    return result.value;
  }, [activeIndex]);

  return (
    <div className="kto-grid kto-grid-gap-32 kto-offset-top-96 kto-offset-top-md-48">
      <div className="kto-col-4 kto-col-md-12">
        <h3 className={textCn("rs-h2")}>
          Modern, concise and safe programming language
        </h3>
        <p className={classNames(textCn("rs-text-2"), "kto-offset-top-32")}>
          Easy to pick up, so you can create powerful applications immediately.
        </p>
        <div className="kto-offset-top-32">
          <Button mode="outline" size="l" href="/docs/getting-started.html">
            Get started
          </Button>
        </div>
      </div>
      <div className="programming-language__tabs kto-col-8 kto-col-md-12">
        <TabList value={activeIndex} onChange={(v) => setActiveIndex(v)}>
          {programmingLanguageTabs.map((tab, i) => (
            <Tab key={i}>{tab.title}</Tab>
          ))}
        </TabList>
        <TabSeparator />
        <pre className="programming-language__code kto-offset-top-16">
          <code
            className="language-kotlin hljs"
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        </pre>
      </div>
    </div>
  );
}
