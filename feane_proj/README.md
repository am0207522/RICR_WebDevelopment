# Feane – Fast Food Restaurant (v2 – No Custom JS)

## Folder Structure
```
feane/
├── index.html                   ← Home page
├── pages/
│   ├── menu.html                ← Full menu with CSS-only filter
│   ├── about.html               ← About, stats, team
│   └── book-table.html          ← Reservation + map + testimonials
├── css/
│   └── style.css                ← All styling (Bootstrap 5 base, 0% inline CSS)
└── images/
    ├── hero-food.png            ← Hero burger+fries photo
    ├── about-burger.png         ← Exploded burger illustration
    ├── menu/
    │   ├── burger-offer.png     ← Offer card burger image
    │   ├── pizza-offer.png      ← Offer card pizza image
    │   ├── pizza-1.png          ← Menu cards (transparent PNG recommended)
    │   ├── pizza-2.png
    │   ├── pizza-3.png
    │   ├── pizza-4.png
    │   ├── burger-1.png
    │   ├── burger-2.png
    │   ├── burger-3.png
    │   ├── burger-4.png
    │   ├── pasta-1.png
    │   ├── pasta-2.png
    │   ├── fries-1.png
    │   └── fries-2.png
    ├── testimonials/
    │   ├── client-1.jpg
    │   ├── client-2.jpg
    │   ├── client-3.jpg
    │   └── client-4.jpg
    └── team/
        ├── chef-1.jpg
        ├── chef-2.jpg
        ├── chef-3.jpg
        └── chef-4.jpg
```

## Dependencies (CDN – no installs)
| Library      | Version | Purpose                  |
|--------------|---------|--------------------------|
| Bootstrap    | 5.3.3   | Grid, layout, navbar     |
| Font Awesome | 6.5.0   | Icons                    |
| Google Fonts | –       | Pacifico + Lato          |

> **Bootstrap JS** is included only for the mobile navbar collapse toggle — no custom JS files at all.

## CSS-Only Techniques Used
- **Menu filter** — hidden `<input type="radio">` + CSS `:checked` sibling selectors
- **Testimonial carousel** — hidden `<input type="radio">` + CSS `:checked` sibling selectors with `<label>` prev/next buttons
- **Hover effects** — pure CSS transitions
- **Active nav link** — hardcoded `active-link` class per page

## Color Palette
| Variable     | Value   | Usage                        |
|--------------|---------|------------------------------|
| --gold       | #FEA116 | Buttons, accents, borders    |
| --navy       | #212529 | Navbar, footer background    |
| --card-dark  | #1C2237 | Section bg, menu card bodies |
| --hero-bg    | #0d1b2e | Hero gradient start          |
| --white      | #ffffff | Page background              |

## Fonts
- **Pacifico** — script / display (brand name, section headings)
- **Lato** — body text (all paragraph and UI text)
