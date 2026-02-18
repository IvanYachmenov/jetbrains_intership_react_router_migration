import { useState } from "react";
import Button from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import classNames from "classnames";
import { Section, Container } from "~/components";
import { newsData } from "~/data/latest-from-kotlin-section";
import "./latest-from-kotlin-section.scss";

const BANNER_DESKTOP = "/assets/images/index/banners/kotlin-1.6.20.png";
const BANNER_MOBILE = "/assets/images/index/banners/kotlin-1.6.20-mobile.png";

export function LatestFromKotlinSection() {
  const textCn = useTextStyles();
  const [bannerError, setBannerError] = useState(false);

  return (
    <Section className="latest-from-kotlin-section">
      <Container>
        <h2 className={textCn("rs-h1")}>Latest from Kotlin</h2>
        <div className="kto-offset-top-32">
          <a
            href="https://blog.jetbrains.com/kotlin/2022/04/kotlin-1-6-20-released/"
            target="_blank"
            rel="noopener noreferrer"
            className="latest-from-kotlin-section__banner-link"
          >
            {bannerError ? (
              <span className="latest-from-kotlin-section__banner-placeholder">
                Kotlin 1.6.20 released
              </span>
            ) : (
              <picture>
                <source media="(max-width: 537px)" srcSet={BANNER_MOBILE} />
                <img
                  src={BANNER_DESKTOP}
                  alt="Kotlin 1.6.20 released"
                  width="100%"
                  className="latest-from-kotlin-section__banner-img"
                  onError={() => setBannerError(true)}
                />
              </picture>
            )}
          </a>
        </div>
        <div className="kto-grid kto-grid-gap-32 kto-offset-top-32">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="kto-col-3 kto-col-md-6 kto-col-sm-12"
            >
              <p className={textCn("rs-text-3")}>{news.tag}</p>
              <h3 className={classNames(textCn("rs-text-2"), "kto-offset-top-8")}>
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={textCn("rs-link", { external: true })}
                >
                  {news.title}
                </a>
              </h3>
            </div>
          ))}
        </div>
        <div className="latest-from-kotlin-section__button kto-offset-top-32">
          <Button
            mode="outline"
            size="l"
            href="https://blog.jetbrains.com/kotlin/"
            target="_blank"
          >
            Kotlin blog
          </Button>
        </div>
      </Container>
    </Section>
  );
}
