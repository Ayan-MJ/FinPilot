# **FinPilot — Product Requirements Document (PRD)**

**Version:** 0.1 | **Last updated:** 8 June 2025  
 **Owner:** Product Lead – FinPilot  
 **Status:** Draft (Ready for internal review)

---

## **1 · Executive Summary**

FinPilot is a global, AI‑assisted budgeting platform that solves broken bank connections, multi‑currency confusion, and subscription fatigue. By combining a *self‑healing* open‑banking layer with predictive cash‑flow analytics and optional human‑verified bill negotiation, FinPilot positions itself as **the failsafe money hub for freelancers, expats, and borderless professionals**.

---

## **2 · Problem Statement**

1. Bank aggregators frequently drop connections, eroding trust.

2. The shutdown of Intuit Mint leaves \>3 million users searching for a stable alternative.

3. Existing tools either ignore multi‑currency or charge high fees.

4. Variable‑income earners lack automation for tax buffers & income smoothing.

5. Consumers are fatigued by rising subscription costs.

---

## **3 · Objectives & Key Results (OKRs)**

| Objective | Key Result (by Q4 2025) |
| ----- | ----- |
| Rebuild trust in account syncing | ≥ 99% successful daily sync rate |
| Capture ex‑Mint users | 250 k migrated users, 30% MoM growth |
| Own the multi‑currency niche | 80% CSAT for FX features; avg. $20 saved/user/month |
| Sustainable revenue | MRR $500 k with \< 4% churn |

---

## **4 · Target Audience & Personas**

| Persona | Snapshot | Pain Points | Goals |
| ----- | ----- | ----- | ----- |
| **Digital Nomad Dana (29)** | UX designer earning USD, spending EUR/THB | App outages, FX fees, manual tracking | Single dashboard, fair FX, reliable sync |
| **Freelance Dev Raj (34)** | Variable‑income coder (INR/USD), 4 bank a/c | Budget swings, tax surprises | Income smoothing, tax buffer |
| **Side‑Hustle Sam (26)** | 9‑to‑5 \+ Etsy store; mid‑income | Time‑poor, hates manual expense entry | Auto‑sync & insights |
| **Expanding Family Farah (38)** | Dual income, planning parental leave | Subscription overload, bill anxiety | Bill negotiation, shared budgets |

---

## **5 · Value Proposition**

*“Budget without borders. One app that never loses connection, speaks every currency, and pays for itself by saving you money.”*

---

## **6 · Competitive Landscape**

| Tool | Strengths | Weaknesses | FinPilot Edge |
| ----- | ----- | ----- | ----- |
| Monarch | Clean UI | No multi‑currency | Cross‑border wallets |
| YNAB | Powerful method | Manual entry, price hike | Auto & affordable |
| LunchMoney | FX support | Small team, no bill negotiation | Human‑verified savings |
| RocketMoney | Bill cuts | Account‑lock horror stories | OAuth‑only \+ user‑approval |

---

## **7 · Scope**

### **7.1 MVP Features**

1. **Sync Health Monitor** – multi‑aggregator fallback, status badge.

2. **Mint Migration Wizard** – 2‑minute CSV import, familiar shortcuts.

3. **Multi‑currency Dashboards** – real‑time FX & aggregated net‑worth.

4. **Income Smoothing AI** – weekly “pay‑yourself” recommendations.

5. **Bill Negotiation (opt‑in)** – no‑savings/no‑fee, human‑verified.

6. **Gamified Savings Challenges** – shareable milestones, social proof.

7. **Alerts & Notifications** – sync failures, budget overruns, FX spikes.

### **7.2 Out‑of‑Scope (v1)**

• Crypto wallets  
 • Small‑business bookkeeping  
 • Credit‑score monitoring

---

## **8 · User Stories (sample)**

* *As Dana, I want automatic currency conversion so I see spending in my home currency without manual math.*

* *As Raj, I want the app to set aside tax automatically so I don’t get year‑end shocks.*

* *As Sam, I need alerts when a bank disconnects so I can fix it before my data gaps.*

---

## **9 · User Flows**

1. **Onboarding & Bank Link** → Currency selection → Dashboard.

2. **Mint Import** → File upload → Category map → Confirmation.

3. **Bill Negotiation Consent** → OAuth utility auth → Savings summary.

(High‑fidelity diagrams to be supplied in Figma.)

---

## **10 · UX & Visual Design Requirements**

| Principle | Implementation |
| ----- | ----- |
| **Minimal, airy layout** | 12‑column grid, ≥ 24 px gutters, generous white‑space |
| **Modern typography** | Inter & Space Grotesk, rem‑based scale (1.25 ratio) |
| **Brand palette** | Primary \#2563EB, Accent \#22C55E, Gray slate‑900‑50 |
| **Card‑based dashboards** | Soft shadows (lg), rounded‑2xl, subtle motion |
| **Dark & Light modes** | Tailwind dark variant, prefers‑color‑scheme auto |
| **Micro‑interactions** | Framer Motion for card hover, sync status pulses |
| **Accessibility** | WCAG 2.2 AA contrast, keyboard nav, aria‑live alerts |
| **Responsive** | Mobile‑first; breakpoints sm 640 px / md 768 px / lg 1024 px+ |

---

## **11 · Screen Inventory**

1. Welcome / Onboarding wizard

2. Dashboard (Net Worth, Cash‑flow graph)

3. Accounts list & Sync health

4. Income Planner

5. Bills & Negotiations

6. Savings Challenges

7. Settings (Currency, Subscription)

8. Support & Help

---

## **12 · Technical Requirements**

| Layer | Tech Stack | Notes |
| ----- | ----- | ----- |
| **Front‑end** | Next.js 14, React 18, Tailwind CSS, tRPC | PWA, Service Worker for offline mode |
| **Mobile** | React Native (Expo) | Shared component library |
| **API** | FastAPI \+ PostgreSQL (Supabase) | JWT & RLS; gRPC for real‑time FX |
| **Bank Aggregation** | Plaid \+ Truelayer \+ Akoya fallback | Automatic failover |
| **AI/ML** | Python, Prophet/LSTM, LangChain RAG for KB | Forecast & insights |
| **Infra** | AWS (EKS), CloudFront, Terraform IaC | Multi‑AZ, autoscaling |
| **CI/CD** | GitHub Actions → Vercel / EKS deploy | Snyk, OWASP ZAP gates |

---

## **13 · Security & Compliance**

* SOC 2 Type II, GDPR, PCI‑DSS SAQ‑A.

* End‑to‑end encryption of PII; vault for OAuth tokens.

* Regular pen‑tests, bug‑bounty.

* Data residency options (US/EU/APAC).

---

## **14 · Analytics & KPIs**

| Metric | Tool | Target |
| ----- | ----- | ----- |
| DAU/MAU | PostHog | ≥ 40% |
| Sync success rate | Internal | ≥ 99% |
| Average savings/user | Internal | ≥ $25/mo |
| Churn (paid) | Stripe | \< 4% |

---

## **15 · Roadmap & Milestones**

| Phase | Timeline | Deliverables |
| ----- | ----- | ----- |
| Alpha | Aug 2025 | Web-only MVP, 100 internal testers |
| Beta | Oct 2025 | Mobile app, bill‑negotiation opt‑in |
| GA | Dec 2025 | Public launch US/EU/APAC |
| FX Marketplace | Q2 2026 | Rate‑shopping & instant transfers |

---

## **16 · Risks & Mitigations**

| Risk | Likelihood | Impact | Mitigation |
| ----- | ----- | ----- | ----- |
| Aggregator outages | Med | High | Multi‑provider fallback |
| Regulatory changes | Low | High | FinReg counsel, modular API |
| Price war | Med | Med | Freemium \+ savings‑share |

---

## **17 · Open Questions**

* Final decision on freemium usage caps?

* Scope of SMB bookkeeping crossover?

* Prioritise crypto wallet integration?

---

### **Appendix A · Glossary**

**Health Monitor**: Real‑time engine testing account API endpoints and reconnecting automatically.  
 **Income Smoothing**: AI logic allocating irregular cash‑inflows into steady “virtual paychecks.”

---

*End of Document*

