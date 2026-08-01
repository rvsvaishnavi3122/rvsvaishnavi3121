# Swiggy Dineout – Improving Offer Transparency

### Helping users make informed booking decisions by surfacing the right discount at the right time.

---

# Executive Summary

While using Swiggy Dineout, I observed that restaurant pages prominently display the maximum available discount (e.g., "Flat 30% Off"), but the actual discount is only revealed after the user selects a dining slot.

This creates a mismatch between user expectations and reality, leading to disappointment during the booking flow.

The proposed solution improves offer transparency by showing slot-specific discounts earlier in the journey, helping users make informed decisions before investing time in the booking process.

---

# Problem

Users often begin the booking process expecting the headline discount displayed on the restaurant page.

However, discounts vary by date and time slot.

Since this information is revealed only after users have selected guests, date, and preferred timing, many users experience a last-minute surprise.

Although the information is technically available, it arrives too late in the decision-making journey.

---

# User Observation

During personal usage of Swiggy Dineout, I noticed the following flow:

1. Browse restaurants showing "Flat 30% Off"
2. Open restaurant expecting the advertised offer
3. Select guests, date and preferred time
4. Discover only 10% discount applies for the chosen slot
5. Reconsider booking or search for another restaurant

This creates unnecessary friction and increases the effort required to compare restaurants.

---

# Opportunity

The objective is not to display more discounts.

The objective is to display the right discount at the right moment.

Helping users understand offer availability earlier reduces expectation mismatch and improves trust in the booking experience.

---

# Product Vision

Reduce booking friction by making offer eligibility transparent before users commit to the booking flow.

---

# Proposed Solution

Introduce contextual discount visibility throughout the booking journey.

---

## Restaurant Listing

Instead of displaying:

**Flat 30% Off**

Display:

**Up to 30% Off**

or

**10%–30% Off • Varies by dining time**

This communicates that offers are time-dependent.

---

## Restaurant Detail Page

Display a simple information banner.

Example:

> Discounts vary by dining slot.
> Select your preferred time to view the applicable offer.

---

## Slot Selection

Display the actual offer directly on every available slot.

Example:

| Time | Offer |
|------|-------|
| 6:00 PM | 30% Off |
| 7:00 PM | 20% Off |
| 8:00 PM | 10% Off |

Users can immediately compare timing and savings.

---

## Booking Confirmation

Reinforce the selected offer before payment.

Example:

✔ Your reservation qualifies for **20% Off**.

This removes ambiguity before booking confirmation.

---

# User Journey

```
Browse Restaurant
        │
        ▼
View Discount Range
        │
        ▼
Select Restaurant
        │
        ▼
Choose Time Slot
        │
        ▼
See Slot-Specific Offer
        │
        ▼
Confirm Booking
```

---

# Why This Matters

The current experience optimizes for click-through into the booking flow.

The proposed experience optimizes for informed decision-making.

Reducing expectation mismatch builds customer trust while minimizing frustration during checkout.

---

# Success Metrics

## Primary Metric

Booking Completion Rate

---

## Secondary Metrics

- Drop-off during slot selection
- Time taken to complete booking
- Offer banner interaction rate
- User satisfaction after booking

---

## Guardrail Metrics

- Restaurant page CTR
- Revenue per booking
- Average booking value

---

# Risks

| Risk | Mitigation |
|------|------------|
| Reduced CTR because users see lower discounts earlier | Measure both CTR and booking completion during A/B testing |
| Restaurants may prefer highlighting the maximum offer | Continue displaying the highest available discount while clearly communicating that offers vary by slot |
| Additional information increases visual complexity | Keep messaging concise and surface details only when necessary |

---

# Rollout Strategy

### Phase 1

Display discount ranges on restaurant pages for a small percentage of users.

---

### Phase 2

Introduce slot-level offer visibility during booking.

---

### Phase 3

Measure impact on booking completion, cancellations and customer satisfaction before expanding rollout.

---

# Expected Outcomes

If validated through experimentation, the feature could:

- Reduce expectation mismatch
- Improve booking completion
- Increase customer trust
- Reduce booking abandonment caused by unexpected offer changes

---

# Reflection

This observation reinforced an important product principle:

Users rarely get frustrated because information is unavailable.

They get frustrated when important information is revealed only after they have invested time and effort.

Good product design is not about exposing more information—it is about exposing the right information at the right stage of the journey.
