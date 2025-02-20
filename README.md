## Getting Started

1. Ask for the .env.local file contents.
2. Install dependencies (`npm install`)
2. Run the development server:
```bash
npm run dev
```

Open [http://localhost:5010](http://localhost:3000) with your browser to see the result.

## Theming
Inside theme.scss are all the variables to change the look and feel of the app.
Any change here affects the whole app.

In the root of the app there are two theme files.
- theme.module.scss

This one can be imported inside any component to use the variables in js.
- theme.scss

This one is prepended with nextjs config so their variables are accessible for all .scss files.


They need to be in two different files in order for nextjs to support this approach for theming.


## Project conventions
Most project conventions can be deduced by observing existing code, however, I'll
leave here some conventions not so obvious.


### Material UI (MUI) component imports

Import MUI components like this:

```js
import Slider from '@mui/material/Slider';
```
instead of like this:
```js
import { Slider } from '@mui/material';
```

This improves startup time in dev environment ([Docs](https://mui.com/material-ui/guides/minimizing-bundle-size/#development-environment))

### Styling

- Place all styles inside their respective .module.scss file,
  including layout styling like *display: flex*, and such.

  The reason for this is that in case it needs some media queries
  it can be done inside the same .module.scss file.
  Besides having all styles inside the .scss files make the code more predictable hence more maintainable.


- This project uses mobile-first design. So use *min-width* for media queries. And test first on mobile.


- Do not hardcode colors, z-index, border-radius or media query values. If needed add them to the theme.scss file.
  This helps with styling consistency inside the app.


- Use the *spacing(n)* function for spaces in general (paddings, margins, gaps, etc).
  This ensures consistent spacing across the app.


- Place media queries right next to the place it is styling, (not at the end):
```scss
.authBox {
  width: 300px;
  padding: spacing(4);
}
@media only screen and (min-width: $mobileLg) {
  .authBox {
    width: 400px;
  }
}
@media only screen and (min-width: $tablet) {
  .authBox {
    width: 500px;
  }
}
```
