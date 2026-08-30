# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| Latest  | ✅        |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

**Do not open a public GitHub issue for security vulnerabilities.**

Instead, please email the maintainers directly or use GitHub's private vulnerability reporting feature:

1. Go to the **Security** tab of this repository.
2. Click **"Report a vulnerability"**.
3. Fill in the details of the issue.

We will acknowledge receipt within **48 hours** and aim to provide a fix or mitigation within **14 days**, depending on severity.

## What to Include in Your Report

To help us triage and address the issue quickly, please include:

- A description of the vulnerability and its potential impact
- Steps to reproduce the issue
- Any relevant proof-of-concept code or screenshots
- Your suggested fix (optional, but appreciated)

## Scope

This is a client-side, browser-based application with no backend or authentication. All data is stored in the browser's `localStorage`. The primary security considerations are:

- **Cross-site scripting (XSS)** — task text is rendered in the DOM
- **Data integrity** — localStorage manipulation by malicious browser extensions
- **Supply chain** — any third-party scripts or dependencies introduced in the future

## Disclosure Policy

We follow a **coordinated disclosure** model. We ask that you give us a reasonable amount of time to address the issue before any public disclosure. We will credit researchers who report valid vulnerabilities, unless they prefer to remain anonymous.

Thank you for helping keep this project secure.
