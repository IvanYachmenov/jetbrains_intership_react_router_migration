# Чеклист ассетов (сверка с эталоном)

Перед релизом или при переносе — сверить с репозиторием **kotlin-web-site-jetsites-internship-2026**.

## Эталон: что должно быть перенесено

1. **Папка assets/fonts**  
   В эталоне: `assets/fonts/` (OpenSans, Graublau, LiberationMono, JetBrainsMono, Inter).  
   У нас: `public/assets/fonts/` — те же файлы.

2. **Папка assets/images**  
   В эталоне: `assets/images/` (favicon.svg, jetbrains-logo.svg, apple-touch-icon*.png, index/multiplatform.svg, index/banners/*.png, twitter/general.png и т.д.).  
   Плюс картинки из `static/js/page/index/images/`: logos/, companies/, good-for/, socials/ — всё в `public/assets/images/` с той же структурой.

3. **Лого JetBrains**  
   В эталоне лежит в двух местах:  
   - `assets/jetbrains-logo.svg`  
   - `assets/images/jetbrains-logo.svg`  
   У нас оба пути должны быть: `public/assets/jetbrains-logo.svg` и `public/assets/images/jetbrains-logo.svg`.

## Быстрая проверка

- [ ] `public/assets/fonts/` — полная копия эталонного `assets/fonts/`
- [ ] `public/assets/images/` — всё из эталонного `assets/images/` + всё из `static/js/page/index/images/`
- [ ] `public/assets/jetbrains-logo.svg` и `public/assets/images/jetbrains-logo.svg` — на месте

После любых правок по эталону — пройти чеклист и при необходимости доперенести файлы.
