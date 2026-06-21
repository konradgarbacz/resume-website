# Personal Portfolio Website

My personal portfolio and resume website built with HTML/CSS.

## Live Demo
[konradgarbacz.xyz](https://konradgarbacz.xyz)

## Tech Stack
- HTML5 / CSS3
- AWS S3 – static hosting
- AWS CloudFront – CDN + HTTPS
- AWS Certificate Manager – SSL certificate
- Cloudflare – DNS management
- Formspree – contact form

## Infrastructure
- S3 bucket is private, accessible only through CloudFront
- IAM user with least privilege principle
- MFA enabled on all accounts
- Billing alerts configured