# Rapido Weather Mode

### Improving ride reliability during bad weather through predictable ride options

---

# Executive Summary

During heavy rain and extreme weather, ride-hailing demand increases significantly while driver availability decreases. Users experience long wait times, repeated ride cancellations, and unpredictable surge pricing.

Weather Mode is an emergency booking experience designed to reduce uncertainty by giving riders transparent choices based on urgency rather than price alone.

Instead of optimizing only for the cheapest ride, the experience helps users choose the option that best matches their situation.

---

# Problem

Weather creates an imbalance between rider demand and driver supply.

During these periods, users often experience:

- Long driver allocation times
- Multiple ride cancellations
- Continuously changing surge prices
- Uncertainty about whether a ride will actually arrive

The biggest frustration is not necessarily paying more—it is not knowing if or when a ride will be confirmed.

---

# User Observation

From observing ride-hailing experiences during heavy rain, a common pattern emerged:

- Users repeatedly refresh the app hoping prices decrease.
- Some users switch between multiple ride-hailing apps.
- Others cancel after waiting several minutes without confirmation.

The experience creates anxiety because users cannot predict whether booking a ride will actually succeed.

---

# Opportunity

Weather changes user priorities.

During normal conditions, users optimize for price.

During bad weather, users often prioritize:

- Ride certainty
- Faster pickup
- Reliable confirmation

The booking experience should adapt to these changing priorities.

---

# Product Vision

Help users make informed ride decisions during high-demand situations by providing predictable booking options instead of a one-size-fits-all experience.

---

# Solution

Introduce **Weather Mode**, a dedicated booking experience activated automatically during severe weather conditions.

Instead of showing only one booking option, users can choose based on urgency.

---

## Option 1 — Quick Ride

For users who want the earliest available driver.

- Higher dynamic pricing
- Fastest estimated pickup
- Highest driver matching priority

---

## Option 2 — Save & Wait

For users willing to wait longer to reduce travel cost.

- Lower fare
- Longer estimated pickup time
- Lower driver priority

---

## Option 3 — Assured Ride

Designed for urgent travel where confirmation matters more than price.

Features include:

- Guaranteed booking confirmation
- Driver notified through both the Rapido app and SMS in case of poor network connectivity
- Priority allocation

---

# User Journey

```
Open Rapido
        │
        ▼
Weather Detected
        │
        ▼
Weather Mode Activated
        │
        ▼
Choose Ride Preference
        │
        ├── Quick Ride
        ├── Save & Wait
        └── Assured Ride
        │
        ▼
Ride Confirmation
        │
        ▼
Trip Begins
```

---

# Why Existing Flow Isn't Enough

| Current Experience | Weather Mode |
|-------------------|--------------|
| One booking option | Multiple options based on urgency |
| Dynamic pricing without context | Transparent trade-offs |
| Users repeatedly retry bookings | Clear expectations before booking |
| Same experience regardless of weather | Adaptive booking flow |

---

# MVP Scope

### Must Have

- Automatic weather detection
- Three booking options
- Dynamic ETA
- Priority driver allocation

### Should Have

- SMS driver notification
- Weather alerts
- Ride certainty indicator

### Could Have

- Preferred driver matching
- Emergency contact notification
- Public transport alternatives

---

# Success Metrics

## Primary Metric

Booking completion rate during Weather Mode sessions.

---

## Secondary Metrics

- Ride confirmation rate
- Average pickup time
- Booking abandonment rate
- Driver acceptance rate

---

## Guardrail Metrics

- Average fare
- Rider cancellations
- Driver cancellations
- Customer support tickets

---

# Risks

| Risk | Mitigation |
|------|------------|
| Users may always choose Assured Ride | Limit availability based on supply and operational capacity |
| Longer wait times for lower-cost rides | Display accurate ETAs before confirmation |
| SMS delivery delays | Use SMS as a backup to in-app notifications rather than the primary communication channel |
| Increased operational complexity | Pilot in one city during monsoon season before expanding |

---

# Rollout Strategy

### Phase 1

Launch in one high-demand city during the monsoon season.

---

### Phase 2

Run an A/B test comparing the current booking flow with Weather Mode.

Measure:

- Booking completion
- Ride confirmation
- User satisfaction
- Driver acceptance

---

### Phase 3

Expand based on operational performance and customer feedback.

---

# Expected Outcomes

If validated through controlled experimentation, Weather Mode could:

- Improve booking completion during severe weather
- Reduce booking abandonment caused by uncertainty
- Increase ride confirmation rates
- Improve customer trust during peak demand
- Reduce repeated booking attempts

---

# Reflection

This case study reinforced an important product principle:

During periods of uncertainty, users often value predictability more than optimization.

Rather than competing only on price, products can create greater value by helping users understand the trade-offs between cost, waiting time, and booking certainty.

Designing for transparency during high-stress situations builds trust and improves the overall customer experience.
