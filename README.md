# tailwindcss-highlights - A plugin for tailwindcss

> **Note:** This is a fork of [jln13x/tailwindcss-highlights](https://github.com/jln13x/tailwindcss-highlights) by Julian Hubatsch, updated to add Tailwind CSS v4 support. All credit for the original plugin design and implementation goes to the original author — this fork just patches it to keep working on v4.

See it in Action 👉 [Preview](https://tailwindcss-highlights.hubatsch.dev/) or [Playground](https://play.tailwindcss.com/hM0gHS3erl)

This plugin adds utility classes to easily add highlights to your texts.

## Installation

To install the package, run

    npm install -D tailwindcss-highlights

### Tailwind CSS v3

Add the plugin to the `tailwind.config.js` file in:

```javascript
module.exports = {
  plugins: [
    require('tailwindcss-highlights')),
  ]
}
```

### Tailwind CSS v4

Tailwind v4 no longer reads `tailwind.config.js` automatically, so plugins are loaded from your CSS entry file instead. Add this alongside your existing `@import "tailwindcss";`:

```css
@import "tailwindcss";
@plugin "tailwindcss-highlights";
```

If you're still using a legacy `tailwind.config.js` for other settings, you can point v4 at it explicitly with `@config` instead, and it'll pick up plugins listed there too:

```css
@config "./tailwind.config.js";
@import "tailwindcss";
```

## Usage

Use `highlight` to add the default highlight (variant 1) to your element.

```html
<p class="highlight">Lorem Ipsum</p>
```

\
To change the color of the highlight use `highlight-{color}`. All the colors from your theme (default ones and customs) are available aswell as [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values).

```html
<p class="highlight highlight-indigo-600">Lorem Ipsum</p>
```

\
You can choose from different kinds of variants with `highlight-variant-{value}`. Check out the available variants on the [Preview](https://tailwindcss-highlights.hubatsch.dev/) or use your own variant e.g. `highlight-variant-[url(./path/to/custom-variant.svg)]`.

```html
<p class="highlight highlight-indigo-600 highlight-variant-7">Lorem Ipsum</p>
```

Credits for some of the variants: [svgbox](https://svgbox.net/)

\
Use the `highlight-spread-`-Utility to make the highlight spread into some direction.

- `highlight-spread-{size}` - Spread in all directions
- `highlight-spread-{y,x}-{size}` - Spread on the x or y axis
- `highlight-spread-{t,b,l,r}-{size}` - Set the spread for each direction individually
  <br />

| Size   | Value   |
| ------ | ------- |
| `0`    | `0`     |
| `none` | `0`     |
| `sm`   | `-4px`  |
| `md`   | `-8px`  |
| `lg`   | `-12px` |
| `xl`   | `-16px` |

[Arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) are also supported.
<br />

```html
<p
  class="highlight highlight-indigo-600 highlight-variant-7 highlight-spread-md"
>
  Lorem Ipsum
</p>

<p
  class="highlight highlight-indigo-600 highlight-spread-x-sm highlight-spread-y-xl"
>
  Lorem Ipsum
</p>

<p
  class="highlight highlight-indigo-600 highlight-spread-l-xl highlight-spread-t-sm"
>
  Lorem Ipsum
</p>
```

## Other Examples

This plugin adds the highlight as `::after`-pseudo element so its possible to add additional styling by using the `after:`-utility.
\
<br />
**Change the position**

```html
<p
  class="highlight highlight-variant-5 after:translate-y-2 after:-translate-x-4"
>
  Lorem Ipsum
</p>
```

**Adding a gradient to the highlight**

```html
<p
  class="highlight highlight-variant-12 after:bg-gradient-to-tr after:from-amber-500 after:to-sky-500"
>
  Lorem Ipsum
</p>
```

\
**Rotate the highlight**

```html
<p class="highlight highlight-variant-12 after:rotate-12">Lorem Ipsum</p>
```

Note: The owner of this repository is not with associated with the company Tailwind Labs Inc. This is just a plugin for [tailwindcss](https://tailwindcss.com/)

This is an unofficial fork maintained independently of the original author, [jln13x](https://github.com/jln13x). If you're not specifically here for Tailwind v4 support, check out [the original repo](https://github.com/jln13x/tailwindcss-highlights) instead.
