# Component Documentation

## Hero Component

The main landing section with large typography and CTAs.

```tsx
import Hero from '@/components/Hero'

// Usage
<Hero />
```

**Features:**
- Animated tagline with accent color
- Large heading with interpolated color
- Value proposition
- Multiple CTA buttons
- Social links
- Smooth scroll animations

---

## Section Component

Reusable wrapper for portfolio sections with consistent styling.

```tsx
import Section from '@/components/Section'

// Usage
<Section
  id="case-studies"
  title="Featured Case Studies"
  subtitle="My approach to product management"
  centered={true}
>
  {/* Content */}
</Section>
```

**Props:**
- `id` - Section anchor ID
- `title` - Main heading
- `subtitle` - Description text
- `children` - Section content
- `centered` - Center text alignment

---

## ProjectCard Component

Interactive card for project showcases with hover effects.

```tsx
import ProjectCard from '@/components/ProjectCard'

// Usage
<ProjectCard
  title="Rapido Weather Mode"
  category="Marketplace"
  emoji="🛵"
  problem="Ride uncertainty during bad weather"
  skills={['Marketplace Dynamics', 'User Research']}
/>
```

**Props:**
- `title` - Project name
- `category` - Project category
- `problem` - Problem statement
- `skills` - Array of product skills
- `emoji` - Optional emoji icon

**Features:**
- Hover lift animation
- Skill badges
- Problem highlight
- CTA button

---

## SkillCard Component

Displays skill categories with icons.

```tsx
import SkillCard from '@/components/SkillCard'
import { Lightbulb } from 'lucide-react'

// Usage
<SkillCard
  icon={Lightbulb}
  title="Discovery"
  skills={['User Research', 'JTBD', 'Personas']}
/>
```

**Props:**
- `icon` - Lucide React icon component
- `title` - Skill category title
- `skills` - Array of skill names

---

## TimelineItem Component

Visual timeline element for journey progression.

```tsx
import TimelineItem from '@/components/TimelineItem'
import { Code } from 'lucide-react'

// Usage
<TimelineItem
  icon={Code}
  title="QA Engineer"
  description="Building reliable products..."
  index={0}
/>
```

**Props:**
- `icon` - Lucide React icon component
- `title` - Timeline milestone title
- `description` - Milestone description
- `index` - Position in timeline (for line rendering)

---

## PrincipleCard Component

Displays product principles or beliefs.

```tsx
import PrincipleCard from '@/components/PrincipleCard'

// Usage
<PrincipleCard
  title="Solve meaningful problems"
  description="Every feature should address a real user pain point."
  index={0}
/>
```

**Props:**
- `title` - Principle title
- `description` - Principle explanation
- `index` - Optional stagger index

---

## Footer Component

Site footer with contact info and social links.

```tsx
import Footer from '@/components/Footer'

// Usage
<Footer />
```

**Features:**
- Contact information
- Email link
- Social media icons
- Location display
- Copyright notice

---

## Animation Variants

All components use Framer Motion for animations:

```tsx
// Container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

// Item animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

// Hover effects
whileHover={{ y: -8, scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

---

## Tailwind Utilities Used

### Spacing
- `p-6`, `px-8`, `py-20` - Padding
- `gap-4`, `gap-6`, `gap-8` - Gap
- `mb-4`, `mt-6` - Margin

### Colors
- `text-primary` - Main text
- `text-accent` - Highlight text
- `bg-secondary` - Light background
- `border-border` - Borders

### Typography
- `font-jakarta` - Headings
- `font-inter` - Body text
- `font-bold`, `font-semibold` - Font weights
- `text-lg`, `text-xl` - Font sizes

### Layout
- `grid`, `grid-cols-1`, `md:grid-cols-2` - Responsive grids
- `flex`, `flex-col` - Flexbox
- `max-w-*` - Max widths
- `mx-auto`, `text-center` - Centering

### Effects
- `rounded-xl`, `rounded-full` - Border radius
- `hover:scale-105` - Hover transforms
- `transition-all` - Smooth transitions
- `shadow-lg` - Box shadows

---

## Customization Examples

### Change accent color
```tsx
// In tailwind.config.ts
colors: {
  accent: '#DC2626', // red instead of blue
}
```

### Adjust spacing
```tsx
// In tailwind.config.ts
spacing: {
  18: '4.5rem',
  22: '5.5rem',
}
```

### Create new animation
```tsx
// In tailwind.config.ts
keyframes: {
  bounce: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },
}
```

---

## Performance Tips

1. **Use `next/image`** for optimized images
2. **Lazy load** components with `next/dynamic`
3. **Memoize** expensive components with `React.memo`
4. **Debounce** scroll handlers
5. **Use CSS modules** for scoped styles

---

## Accessibility

- ✅ Semantic HTML
- ✅ Color contrast ratios
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ Alt text for images

