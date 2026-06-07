# create-susanoo-ui 🛡️🌀

A minimal, lightning-fast interactive CLI tool to scaffold clean boilerplates for your front-end projects. Stop wasting time recreating folder structures, configuring SASS architectures, or writing standard reset styles from scratch.

[![npm version](https://img.shields.io/npm/v/create-susanoo-ui.svg?style=flat-missing&color=da251d)](https://www.npmjs.com/package/create-susanoo-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Ko-fi](https://img.shields.io/badge/Support_on-Ko--fi-F16061?logo=ko-fi&logoColor=white)](https://ko-fi.com/otaviobarbieri)

---

## 🚀 Features

- **Interactive Setup:** Powered by `inquirer` for an intuitive terminal questionnaire interface.
- **Vanilla Starter Kit:** Generates a pristine HTML5 structure complete with separated, modular global styling sheets and script entry points.
- **SASS 7-in-1 Architecture Template:** Instantly sets up the widely acclaimed **7-in-1 Sass architecture pattern** (Abstracts, Base, Components, Layout, Pages, Themes, Vendors) pre-configured with forwarders (`@forward`, `@use`) and a localized development script watcher.
- **Performance Focused:** Extremely lightweight with asynchronous file copying operations utilizing `fs-extra` and colored terminal highlights using `chalk`.

---

## 🛠️ Installation & Usage

You can initialize and launch the generator seamlessly directly through your favorite package manager without global installations:

```bash
npx create-susanoo-ui
# or
npm x create-susanoo-ui
```

### Manual Global Installation

If you prefer to have the command available permanently globally on your workspace:

```bash
npm install -g create-susanoo-ui
```

Then run the generator from any workspace folder:
```bash
create-susanoo-ui
```

---

## 📂 Available Project Templates

When running the CLI, you will be prompted to select between two baseline layout paradigms:

### 1. Vanilla HTML/CSS/JS
Ideal for quick prototyping, standard challenges, or lightweight scripts.
```text
your-project/
├── css/
│   ├── global.css      # Core resets and systemic variables
│   └── styles.css      # Custom specific page styles
├── js/
│   └── main.js         # Modular ESM JavaScript entrypoint
└── index.html          # Standard modern semantic skeleton
```

### 2. SASS 7-in-1 Architecture
Designed for production-grade web layouts requiring rigorous design system constraints and CSS scale-out strategies.
```text
your-project/
├── sass/
│   ├── abstracts/       # _variables.scss, _mixins.scss, _functions.scss
│   ├── base/            # _reset.scss, _globals.scss, _typography.scss
│   ├── components/      # _button.scss, _card.scss
│   ├── layout/          # _header.scss, _footer.scss, _grid.scss
│   ├── pages/           # _home.scss
│   ├── themes/          # _dark.scss
│   └── main.scss        # Aggregated pipeline forwarder
├── index.html
└── package.json         # Comes with live compile scripts ("npm run sass")
```

---

## 💖 Support the Project

If **create-susanoo-ui** helped speed up your setup workflow, consider supporting its maintenance and development of future feature templates! Your contribution helps keep the tool updated with the latest front-end standards and dependency security patches.

<details open>
<summary><b>Ways to Support</b></summary>
<br>

| Platform | Benefit | Link |
| :--- | :--- | :--- |
| **Ko-fi** | Buy me a coffee or support monthly | [Support on Ko-fi](https://ko-fi.com/otaviobarbieri) |
| **GitHub** | Leave a ⭐ to improve package discovery | [GitHub Repository](https://github.com/Vattghern203/create-susanoo-ui) |

</details>

### How to Sponsor on Ko-fi

Click the badge below or visit my direct page to make a flexible donation. Every single coffee makes a huge difference!

[![Ko-fi Support Button](https://storage.ko-fi.com/cdn/brandasset/kofi_button_blue.png)](https://ko-fi.com/otaviobarbieri)

---

## 📄 License

This project is open-source and dual-licensed under the terms of the **[MIT License](LICENSE)**. Feel free to fork, adapt, alter, and distribute it commercially or personally.