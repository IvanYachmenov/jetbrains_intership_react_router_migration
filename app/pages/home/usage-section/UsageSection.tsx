import { useState, useEffect } from "react";
import Button from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { cardCn } from "@rescui/card";
import { ThemeProvider } from "@rescui/ui-contexts";
import classNames from "classnames";
import { Section, Container } from "~/components";
import { testimonials } from "~/data/usage-section";
import "./usage-section.scss";

function UsageSectionContent() {
  const textCn = useTextStyles();
  const [sortByName, setSortByName] = useState(false);
  useEffect(() => {
    const saved = window.localStorage.getItem("kotlin-testimonials-order");
    if (saved === "name") setSortByName(true);
  }, []);
  const sortedTestimonials = sortByName
    ? [...testimonials].sort((a, b) => a.company.localeCompare(b.company))
    : testimonials;

  return (
    <Section className="usage-section">
      <Container>
        <h2 className={textCn("rs-hero")}>Kotlin Usage Highlights</h2>
        <div
          className="kto-offset-top-16"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            mode="outline"
            size="s"
            onClick={() => {
              const next = !sortByName;
              setSortByName(next);
              if (typeof window !== "undefined") {
                window.localStorage.setItem(
                  "kotlin-testimonials-order",
                  next ? "name" : "default"
                );
              }
            }}
          >
            Sort: {sortByName ? "A-Z" : "Default"}
          </Button>
        </div>
        <div className="kto-grid kto-grid-gap-16 kto-offset-top-48">
          {sortedTestimonials.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(
                cardCn({ theme: "light", mode: "classic", isClickable: true }),
                "usage-section__card",
                "kto-col-4 kto-col-md-6 kto-col-sm-12"
              )}
            >
              <img
                src={item.logo}
                alt={item.company}
                className={classNames("usage-section__logo", {
                  "usage-section__logo_spring": item.company === "Spring",
                })}
              />
              <p className={classNames(textCn("rs-text-2"), "usage-section__card-desc")}>
                {item.text}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function UsageSection() {
  return (
    <ThemeProvider theme="light">
      <UsageSectionContent />
    </ThemeProvider>
  );
}
