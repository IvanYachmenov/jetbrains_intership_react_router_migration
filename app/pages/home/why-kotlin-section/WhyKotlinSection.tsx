import Button from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { ThemeProvider } from "@rescui/ui-contexts";
import classNames from "classnames";
import { Section, Container } from "~/components";
import { whyKotlinSections } from "~/data/why-kotlin-section";
import { ProgrammingLanguage } from "./ProgrammingLanguage";
import "./why-kotlin-section.scss";

function YouTubeEmbed({ id }: { id: string }) {
  return (
    <div className="why-kotlin-section__youtube">
      <iframe
        width="560"
        height="315"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title="YouTube"
      />
    </div>
  );
}

function WhyKotlinContent() {
  const textCn = useTextStyles();
  return (
    <Section className="why-kotlin-section">
      <Container>
        <h2 className={textCn("rs-hero")}>Why Kotlin</h2>
        <ProgrammingLanguage />
        {whyKotlinSections.map((section, index) => (
          <div
            key={index}
            className="kto-grid kto-grid-gap-32 kto-offset-top-96 kto-offset-top-md-48"
          >
            <div className="kto-col-4 kto-col-md-12">
              <h3 className={textCn("rs-h2")}>{section.title}</h3>
              <p
                className={classNames(textCn("rs-text-2"), "kto-offset-top-32")}
                style={{ whiteSpace: "pre-line" }}
              >
                {section.description}
              </p>
              <div className="kto-offset-top-32">
                <Button
                  mode="outline"
                  size="l"
                  href={section.buttonLink}
                >
                  {section.buttonText}
                </Button>
              </div>
            </div>
            <div className="kto-col-8 kto-col-md-12">
              {section.media === "youtube" && section.youtubeId && (
                <YouTubeEmbed id={section.youtubeId} />
              )}
              {section.media === "image" && (
                <img
                  src="/assets/images/index/multiplatform.svg"
                  alt="Kotlin Multiplatform"
                  className="why-kotlin-section__image"
                />
              )}
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
}

export function WhyKotlinSection() {
  return (
    <ThemeProvider theme="light">
      <WhyKotlinContent />
    </ThemeProvider>
  );
}
