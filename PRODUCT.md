# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A broad professional network: recruiters, hiring managers, product peers, and Medium readers. The common job is a quick credibility check on Eugene Nam, a Director of Product Management, followed by a decision to connect. Success is general credibility and an easy path to reach out (LinkedIn, Medium, GitHub, X), not a single conversion funnel.

## Product Purpose

The site is Eugene's personal brand and portfolio during an active Director of PM job search. It presents background, work history, AI side projects, and writing in one place. It succeeds when a visitor leaves knowing what kind of product leader Eugene is and how to get in touch.

## Positioning

A product leader who takes 0 to 1 products to launch in regulated, high-trust spaces where mistakes are costly. That claim rests on eight years of corporate banking (RBC Capital Markets, Royal Bank of Scotland, ABN AMRO) and roughly ten years of fintech product work, from VenueBook through Willow Wealth (formerly Yieldstreet), where Eugene grew from PM to Director of Product. The hands-on AI building backs that up by showing Eugene still ships things personally, but it is not the headline.

## Operating Context

- Visitors usually arrive from LinkedIn, Medium, a resume, or a referral, and skim on desktop or phone.
- The page is a single scroll: hero, About, Experience, AI Projects, Writing (Medium feed from `medium-posts.json`), Contact.
- A light/dark theme toggle and a hidden terminal easter egg (`visitor@eugenenam.com`) are existing features.
- Google Analytics GA4 (G-02DGZ56J71) tracks visits.

## Capabilities and Constraints

- Static HTML, CSS, and JS on GitHub Pages at eugenenam.com. No build step, no framework, no npm. Pushing to `master` deploys.
- Pages stay lightweight and fast; no heavy dependencies.
- Local preview: `node serve.js` on http://localhost:8081.
- **Open decision:** the four unlinked case-study pages in `portfolio/` (MindMyBusiness, PawPal, Spare, WhiskyMe) are neither retired nor approved for re-linking.

## Brand Commitments

- Name: Eugene Nam. Title: Director of Product Management.
- All copy is written in Eugene's voice. Before editing copy, load `~/Documents/Claude/Knowledge/writing-voice.md` and `~/Documents/Claude/About Me/anti-ai-writing-style.md`. No em dashes.
- The footer credit "Built with Claude Code" and the AI Projects section are deliberate.

## Evidence on Hand

- Headshot: `img/headshot_eugene.jpg`.
- Work history, role progression, and employer names as published in `index.html`.
- AI projects: Super Mario Platformer (in progress, GitHub) and this site's rebuild (live, GitHub).
- Medium posts at medium.com/@iamNamster.
- **Not public:** Willow business metrics (investment volume, AUM, investor counts, deal launch counts) must never appear on the site. Do not substitute approximations.
- **Not public:** the resume PDF in `files/` is not offered on the site; LinkedIn is the full-profile destination.
- There are no testimonials, endorsements, or press. Do not invent any.

## Product Principles

1. **Credibility through specifics, not stats.** Named employers, real roles, and concrete scope carry the story since metrics stay private.
2. **Regulated 0 to 1 is the through-line.** Every section should reinforce judgment in high-stakes, trust-dependent products.
3. **Proof of building.** The AI projects show Eugene ships hands-on; keep them honest about their stage.
4. **Fast and plain.** No-build static pages that load instantly on any device.
5. **Easy to reach.** Every visit should end with an obvious way to connect.
