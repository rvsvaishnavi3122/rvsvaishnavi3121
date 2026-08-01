# PhonePe Smart EMI

### Expanding credit access through UPI behavioral data

---

# Executive Summary

Millions of users actively use UPI for everyday transactions but remain underserved by traditional credit products due to limited or unavailable credit history.

PhonePe Smart EMI explores how behavioral signals from UPI transactions can complement traditional underwriting, enabling eligible users to access EMI options directly within the UPI payment flow.

The goal is to improve affordability while keeping the checkout experience fast, familiar, and frictionless.

---

# Problem

Traditional EMI eligibility depends heavily on credit bureau history.

However, many users who regularly transact through UPI have:

- Limited formal credit history
- No credit cards
- Thin credit files
- Stable transaction behavior that is not reflected in traditional credit scoring

As a result, many financially responsible users are unable to access EMI options despite demonstrating consistent financial behavior.

---

# User Research

To better understand affordability challenges, I reviewed public reports on digital payments and Buy Now Pay Later adoption while speaking with frequent UPI users.

### Key Insights

- Users often postpone purchases when they cannot pay the full amount upfront.
- Existing EMI options are typically available only to users with established credit histories.
- Many users already trust UPI as their primary payment method and prefer not to switch to separate lending products.
- A seamless affordability option integrated into the checkout flow reduces additional steps during payment.

---

# Opportunity

UPI transaction history contains valuable behavioral signals such as:

- Payment consistency
- Transaction frequency
- Spending patterns
- Merchant diversity
- Account activity over time

These signals can complement—not replace—traditional underwriting to help assess affordability for users with limited credit history.

---

# Product Vision

Enable responsible and inclusive access to digital credit by using behavioral transaction data to support lending decisions within the existing UPI payment experience.

---

# Solution

Introduce **PhonePe Smart EMI**, an affordability layer integrated directly into UPI checkout.

Instead of relying only on bureau scores, the system evaluates additional behavioral signals to determine whether EMI can be offered.

The experience remains entirely within the existing payment journey.

---

# User Journey

```
Product Checkout
        │
        ▼
Select UPI
        │
        ▼
Behavioral Eligibility Check
        │
        ▼
Eligible?
   ├── Yes → Show EMI Plans
   └── No → Continue Standard UPI Payment
```

---

# Behavioral Signals Considered

Examples include:

- Transaction consistency
- Monthly payment activity
- Merchant diversity
- Account age
- Payment success rate

These inputs complement existing underwriting models rather than replacing regulatory credit assessments.

---

# MVP Scope

### Must Have

- Eligibility engine
- EMI calculator
- Checkout integration
- Repayment schedule

### Should Have

- Spending insights
- Pre-approved limits
- Personalized repayment recommendations

### Could Have

- Credit score improvement insights
- Financial health dashboard
- Smart repayment reminders

---

# Success Metrics

## Primary Metric

Increase EMI adoption among eligible UPI users.

---

## Secondary Metrics

- Checkout conversion rate
- EMI completion rate
- Loan repayment success rate
- Default rate
- Customer satisfaction

---

## Guardrail Metrics

- Credit default rate
- Fraud rate
- Customer complaints
- Drop-off during eligibility checks

---

# Risks

| Risk | Mitigation |
|------|------------|
| Incorrect eligibility decisions | Combine behavioral signals with existing underwriting policies |
| Increased credit defaults | Conservative eligibility thresholds during MVP |
| Regulatory compliance | Align with RBI lending guidelines and partner bank requirements |
| Customer trust | Clearly explain eligibility decisions and repayment terms |

---

# Rollout Strategy

### Phase 1

Internal testing using historical transaction data.

---

### Phase 2

Limited rollout to a small percentage of eligible users.

Measure:

- EMI adoption
- Conversion
- Repayment behavior

---

### Phase 3

Expand eligibility criteria based on observed repayment performance.

---

# Why Existing EMI Isn't Enough

| Traditional EMI | PhonePe Smart EMI |
|-----------------|-------------------|
| Primarily based on bureau history | Incorporates behavioral transaction signals |
| Limited access for users with thin credit files | Expands eligibility responsibly |
| Separate lending experience | Native UPI checkout experience |
| Generic repayment options | Context-aware affordability recommendations |

---

# Expected Outcomes

If validated through controlled experimentation, PhonePe Smart EMI could:

- Improve access to digital credit for underserved users
- Increase successful checkouts
- Reduce purchase abandonment caused by affordability constraints
- Encourage responsible credit usage within the UPI ecosystem

---

# Reflection

This project explores how transaction behavior can complement traditional credit assessment without replacing responsible lending practices.

Rather than creating another Buy Now Pay Later product, the focus is on making affordability feel like a natural extension of the existing UPI payment experience while maintaining customer trust and regulatory compliance.
