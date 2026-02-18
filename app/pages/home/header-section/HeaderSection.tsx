import Button from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { cardCn } from "@rescui/card";
import classNames from "classnames";
import { Section, Container } from "~/components";
import { cardsData } from "~/data/header-section";
import "./header-section.scss";

export function HeaderSection() {
  const textCn = useTextStyles();

  return (
    <Section className="header-section">
      <Container>
        <h1 className={textCn("rs-hero")}>
          A modern programming language that makes developers happier
        </h1>
        <div className="header-section__actions">
          <div>
            <Button size="l" href="#" className="header-section__get-started-btn">
              Get started
            </Button>
            <Button
              mode="outline"
              size="l"
              href="#"
              className="header-section__why-btn"
            >
              Why Kotlin
            </Button>
          </div>
          <div className="header-section__contributors">
            <img src="/assets/jetbrains-logo.svg" alt="" className="header-section__jetbrains-logo" />
            <p className={textCn("rs-text-2")}>
              Developed by{" "}
              <a className={textCn("rs-link")} href="https://www.jetbrains.com/">
                JetBrains
              </a>{" "}
              & Open-source{" "}
              <a
                className={textCn("rs-link")}
                href="https://github.com/JetBrains/kotlin/graphs/contributors"
              >
                Contributors
              </a>
            </p>
          </div>
        </div>
        <div className="kto-grid kto-grid-gap-16 kto-offset-top-48">
          {cardsData.map((card) => (
            <a
              key={card.id}
              href={card.link}
              className={classNames(
                cardCn({
                  theme: "dark",
                  mode: "classic",
                  isClickable: true,
                }),
                "kto-col-3 kto-col-md-6 kto-col-sm-12"
              )}
            >
              <img src={card.img} alt="" />
              <h2 className={classNames(textCn("rs-h3"), "kto-offset-top-16")}>
                {card.title}
              </h2>
              <p className={classNames(textCn("rs-text-2"), "kto-offset-top-16")}>
                {card.subTitle}
              </p>
            </a>
          ))}
        </div>
        <p className={classNames(textCn("rs-text-2"), "kto-offset-top-16")}>
          <a className={textCn("rs-link")} href="/docs/multiplatform.html">
            Multiplatform for Other Platforms
          </a>
          {", "}
          <a
            className={textCn("rs-link")}
            href="/docs/data-science-overview.html"
          >
            Data Science
          </a>
        </p>
      </Container>
    </Section>
  );
}
