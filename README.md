# Feature Factory AI

**An AI-powered product team that thinks, researches, and delivers — turning any feature idea into a complete product plan.**

`Idea → Research → Plan → Test → Decide`

## How It Works
A single feature request (e.g. *"Show Swiggy Dineout offers on the slot selection page"*) is run through four AI agents in parallel:

| Agent | Role | Output |
|---|---|---|
| **Research Agent** | Market researcher — competitor analysis, user pain points, existing solutions, risks, opportunities | Research Report |
| **PM Agent** | Product manager — problem statement, user stories, PRD, acceptance criteria, success metrics, RICE score | PRD Document |
| **QA Agent** | Quality analyst — positive/negative/edge/regression test cases | Test Plan |
| **Manager Agent** | Product leader — reviews all outputs, validates completeness, identifies risks, prioritizes impact | Executive Summary |

A final **Manager Agent (synthesis)** step acts as a "Chief Product Officer AI" — synthesizing all four outputs, evaluating feasibility and impact, and producing a final recommendation and action plan.

## Final Output
Executive summary · priority recommendation (impact vs. effort) · risks & mitigations · next steps · a clear go/no-go decision — all saved to a database for history and tracking.

## Tech Stack
Google Gemini (AI models) · Supabase (database) · Lovable (frontend) · n8n (automation) · Vercel (deployment)

## Why It Matters
Most PM workflows bottleneck on synthesis — pulling research, requirements, and QA thinking into one coherent recommendation. This framework treats that synthesis step as a first-class agent, not an afterthought, so a single feature idea gets triaged from multiple functional lenses before it ever reaches a roadmap.
