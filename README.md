<div align="center">
  <img src="website/img/app-icon.png" height="140">
  <h1>Mini Diary</h1>
  <strong>Simple and secure journal app</strong>
  <img src="website/img/screenshot-1.png" width="100%" alt="Screenshot">
</div>

## Download

- **[Download](https://minidiary.app) for macOS, Windows or Linux**
- [View all available download formats](https://github.com/samuelmeuli/mini-diary/releases/latest)

## Features

- Beautiful and clean design
- Encryption
- Full-text search
- Light and dark themes
- Import from Day One, jrnl, or JSON
- Export to PDF, Markdown, TXT, or JSON
- Localization in multiple languages
- Keyboard shortcuts

## Development

The application is built with Electron and React. To run or build the app yourself, you'll need to have Node.js and Yarn installed.

### Running the app

1. Clone the repository
2. `yarn install`
3. `yarn start`

### Building the app

After cloning the repo and installing the dependencies, run `yarn build`. The built app can be found in the `dist` folder.

### Contributing

Suggestions and contributions are always welcome! Please first discuss changes via issue before submitting a pull request.

### Localization

If the app isn't translated into your language yet and you'd like to help out, you can easily add translations with the following steps:

1. The translation files can be found in [`src/main/i18n/translations`](src/main/i18n/translations). Duplicate the [`en.js`](src/main/i18n/translations/en.js) file as `[LANG].js`, where `[LANG]` is the [shortcode of your language](https://electronjs.org/docs/api/locales) (without a region string), e.g. `de.js` for German
2. In the file you just created, replace the English translations with your own
3. Import your file in the `TRANSLATIONS` object in [`src/main/i18n/i18n.js`](src/main/i18n/i18n.js)
4. Add your language shortcode to the `electronLanguages` array in [`package.json`](package.json)
5. Submit a PR. Thank you!
