# Структура app

Ориентир для добавления нового кода. Стили и поведение не менять — только перенос и SSR.

## Сейчас

- **app/components/primitives/** — Section.tsx, Container.tsx, section.scss, index.ts.
- **app/components/layout/** — Header.tsx, Footer.tsx, index.ts.
- **app/components/index.ts** — реэкспорт layout + primitives. Импорт: `from "~/components"`.
- **app/pages/home/** — главная страница: index.tsx + папки секций (header-section, latest-from-kotlin-section, start-section, usage-section, why-kotlin-section). Роут подключает страницу через `app/routes/home.tsx`.
- **app/routes/** — точки входа роутов (home.tsx и т.д.).
- **app/styles/** — глобальные стили (reset, fonts, grid). Не добавлять свои — только подключать/копировать из эталона.
- **public/assets/** — см. чеклист ассетов в корне проекта.

## Секции главной

Компоненты секций класть в соответствующие папки под `app/pages/home/`: header-section, why-kotlin-section, usage-section, start-section, latest-from-kotlin-section. Стили — рядом с компонентом секции или в той же папке.
