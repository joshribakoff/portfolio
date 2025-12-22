---
title: "How Twitch Tamed a Million Lines of TypeScript"
description: "How I built a lint snapshot system at Twitch that turned rule exceptions into reviewable artifacts"
date: "2025-12-21"
---

At Twitch, my team's charter was to define and maintain core engineering standards: performance constraints, architectural patterns, TypeScript usage, tests, and lint rules. These weren't preferences — they were the mechanisms that allowed a million-line monolithic codebase to scale across 300 developers shipping code in a fast-moving environment.

A note before going further: this isn't a critique of TypeScript. The TypeScript team actually took time to meet with us and help us use the language more effectively. The challenges I'm describing weren't about the tools themselves — they were about coordinating standards across a large, fast-moving organization.

We already had the usual tools in place: lint rules, TypeScript types, tests, and CODEOWNERS. Individually, all of these worked. At scale, they interacted in less predictable ways.

## The Practical Problem

As more teams touched the same codebase, we started seeing standards bypassed in ways that were usually accidental:

- Editor integrations inserting `// eslint-disable` comments
- Copied code carrying exceptions forward
- Refactors that moved code without revisiting why a rule existed
- TypeScript or test escapes added to unblock short-term work

This wasn't about people ignoring standards. It was about how easy it was for exceptions to accumulate without visibility.

Over time, the core team lost a reliable way to tell which exceptions were reviewed tradeoffs and which were simply drift.

## The Constraint We Cared About

We didn't want to block development, force large refactors, require manual policing, or rely on perfect developer discipline.

What we did want: standards that could evolve incrementally, exceptions that were visible and reviewable, and a clear feedback loop between authors and maintainers.

## The System

The solution treated rule violations as tracked artifacts, not inline annotations.

**How it worked:**

1. Run ESLint with a flag that ignores all `eslint-disable` comments — as if every disable was removed
2. Capture the output into a snapshot file at the repo root
3. Strip line numbers from the snapshot (file + rule only)
4. Mark that snapshot file as owned by the core team via CODEOWNERS

**Key properties:**

- Each entry mapped a specific rule to a specific file
- Line numbers were stripped, so adding or removing code didn't cause churn
- File renames or moves surfaced as snapshot diffs, pulling us into review
- New violations in existing files also surfaced

The effect: any change that added or relocated an exception automatically pulled the core team into review. Authors could explain context; maintainers could decide whether to adjust, scope, or uphold the rule.

This turned exceptions into explicit conversations, rather than implicit comments buried in files.

## Why This Worked

The system didn't assume bad behavior. It assumed normal workflows.

- Developers could move fast without being blocked
- Standards remained enforceable without being rigid
- The core team had visibility into architectural pressure points
- Patterns evolved based on real usage, not theory

The goal wasn't to be the cops. It was to have visibility and help people follow the right patterns.

## Further Reading

Years later, a colleague wrote about this approach on the Twitch engineering blog: [Guiding a monolith with a gentle touch: pairing codeowners and lint rules](https://blog.twitch.tv/en/2021/09/07/guiding-a-monolith-with-a-gentle-touch-the-power-of-pairing-codeowners-and-lint-rules/). This post fills in the technical detail that made the pairing effective in practice.

## Takeaway

At scale, standards don't fail because people ignore them. They fail because exceptions become invisible.

The goal isn't stricter enforcement — it's better feedback.
