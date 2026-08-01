import Hero from '@/components/Hero'
import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import SkillCard from '@/components/SkillCard'
import TimelineItem from '@/components/TimelineItem'
import PrincipleCard from '@/components/PrincipleCard'
import Footer from '@/components/Footer'
import { Lightbulb, Zap, Target, TrendingUp, Briefcase, BookOpen, Code, Brain } from 'lucide-react'

const projects = [
  {
    title: 'Rapido Weather Mode',
    category: 'Marketplace',
    emoji: '🛵',
    problem: 'Ride uncertainty during bad weather',
    skills: ['Marketplace Dynamics', 'User Research', 'Marketplace Operations', 'Experiment Design'],
  },
  {
    title: 'AJIO Trust Layer',
    category: 'E-Commerce',
    emoji: '🏪',
    problem: 'Low purchase confidence for unfamiliar sellers',
    skills: ['Marketplace Trust', 'UX', 'Funnel Optimization', 'Retention'],
  },
  {
    title: 'PhonePe Smart EMI',
    category: 'FinTech',
    emoji: '💳',
    problem: 'Limited credit accessibility despite strong payment behavior',
    skills: ['FinTech', 'Growth', 'Risk Thinking', 'Product Strategy'],
  },
  {
    title: 'Swiggy Dineout – Offer Transparency',
    category: 'UX Strategy',
    emoji: '🍽️',
    problem: 'Discount information appears too late in the booking journey',
    skills: ['UX', 'Information Architecture', 'Experimentation'],
  },
  {
    title: 'Feature Factory AI',
    category: 'AI Products',
    emoji: '🤖',
    problem: 'Product discovery is fragmented across teams',
    skills: ['AI Products', 'Workflow Design', 'SaaS', 'Systems Thinking'],
  },
  {
    title: 'Viz.ai – Point Solution vs Workflow Platform',
    category: 'Strategy',
    emoji: '🔬',
    problem: 'Product positioning and platform strategy',
    skills: ['Product Strategy', 'GTM', 'Platform Thinking'],
  },
]

const productThinking = [
  {
    icon: Lightbulb,
    title: 'Problem First',
    description: 'What user problem are we solving?',
  },
  {
    icon: Zap,
    title: 'Frequency Matters',
    description: 'Is the problem frequent enough to matter?',
  },
  {
    icon: Target,
    title: 'Smallest Experiment',
    description: "What's the smallest experiment that validates the idea?",
  },
  {
    icon: TrendingUp,
    title: 'Measurable Impact',
    description: 'Which metric should improve?',
  },
  {
    icon: Brain,
    title: 'Trade-offs',
    description: 'What trade-offs are we making?',
  },
]

const productSkills = [
  {
    icon: Lightbulb,
    title: 'Discovery',
    skills: ['User Research', 'JTBD', 'Personas', 'Problem Validation', 'Opportunity Identification'],
  },
  {
    icon: Briefcase,
    title: 'Strategy',
    skills: ['MVP Definition', 'Product Vision', 'Roadmapping', 'Product Positioning', 'Competitive Analysis'],
  },
  {
    icon: Target,
    title: 'Prioritization',
    skills: ['RICE', 'MoSCoW', 'Feature Prioritization'],
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Experimentation',
    skills: ['A/B Testing', 'Funnel Analysis', 'Cohort Analysis', 'Success Metrics', 'North Star Metrics', 'Hypothesis Design'],
  },
]

const technicalSkills = [
  {
    icon: Code,
    title: 'Testing & Tools',
    skills: ['Playwright', 'Selenium', 'Robot Framework', 'API Testing', 'Java'],
  },
  {
    icon: Briefcase,
    title: 'Product Tools',
    skills: ['Figma', 'Notion', 'Jira', 'Confluence', 'Mixpanel', 'GitHub'],
  },
  {
    icon: Zap,
    title: 'AI & Development',
    skills: ['Google Gemini', 'Supabase', 'n8n', 'Lovable', 'Vercel'],
  },
]

const timeline = [
  {
    icon: Code,
    title: 'QA Engineer',
    description: 'Built reliable insurance products. Working closely with engineering teams taught me where products break—not just technically, but from a user perspective.',
  },
  {
    icon: Lightbulb,
    title: 'Finding User Problems',
    description: 'Started analyzing friction in everyday products and identifying opportunities for improvement.',
  },
  {
    icon: Brain,
    title: 'Understanding Product Decisions',
    description: 'Deepened knowledge of how products are built, validated, and scaled through case studies and prototypes.',
  },
  {
    icon: Zap,
    title: 'Building AI Products',
    description: 'Created AI-powered prototypes across FinTech, Marketplaces, Healthcare, and Consumer Tech.',
  },
  {
    icon: Target,
    title: 'Associate Product Manager',
    description: 'Combining engineering execution with product thinking to build products that solve meaningful customer problems.',
  },
]

const principles = [
  {
    title: 'Solve meaningful problems',
    description: 'Every feature should address a real user pain point. Frivolous features waste engineering and damage product focus.',
  },
  {
    title: 'Validate assumptions',
    description: 'Talk to users. Run experiments. Never assume you know the answer without evidence.',
  },
  {
    title: 'Simple beats complex',
    description: 'Great products feel obvious in hindsight. If users have to learn your product, you failed.',
  },
  {
    title: 'Measure what matters',
    description: 'Choose metrics that reflect true user value. Vanity metrics mislead teams and waste time.',
  },
  {
    title: 'Think in systems',
    description: 'Products live in ecosystems. Understand how your feature affects users, sellers, partners, and business.',
  },
  {
    title: 'Iterate with urgency',
    description: 'Speed of learning beats perfection. Ship fast, learn from users, improve quickly.',
  },
]

const otherBuilds = [
  {
    title: 'AI Meeting Execution Assistant',
    emoji: '📝',
    description: 'AI-assisted workflow that converts meeting discussions into actionable tasks, reminders, and follow-ups.',
    tags: ['Workflow Automation', 'Productivity', 'AI Assistants'],
  },
  {
    title: 'Home Planner AI',
    emoji: '🍴',
    description: 'An AI-powered decision assistant that recommends meals using available pantry ingredients, reducing cognitive effort during meal planning.',
    tags: ['Decision Simplification', 'AI Recommendations', 'Consumer Product'],
  },
  {
    title: 'Meal Decide',
    emoji: '🍽️',
    description: 'A decision-first recommendation engine that helps users decide what to cook in seconds instead of browsing endless recipes.',
    tags: ['Behavioral Design', 'Consumer AI', 'Personalization'],
  },
  {
    title: 'Bounce Arena',
    emoji: '🎮',
    description: 'A multiplayer arcade game exploring player engagement, competition loops, and retention mechanics.',
    tags: ['Engagement', 'Retention', 'Game Mechanics'],
  },
]

export default function Home() {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <Section
        id="about"
        title="About Me"
        subtitle="2.5+ years in product execution, now building for the future"
        centered
      >
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-primary/70 font-light leading-relaxed">
          <p>
            I enjoy identifying friction in everyday products and designing simple, measurable solutions that improve user decisions.
          </p>
          <p>
            Over the last 2.5+ years, I've worked as a QA Engineer building reliable insurance products. Working closely with engineering teams taught me where products break—not just technically, but from a user perspective.
          </p>
          <p>
            Today, I build product case studies and AI-powered prototypes across FinTech, Marketplaces, Healthcare, and Consumer Tech, combining engineering execution with product thinking.
          </p>
          <div className="pt-4">
            <div className="space-y-3">
              <p className="font-semibold text-primary">Areas of Interest</p>
              <div className="flex flex-wrap gap-3">
                {['FinTech', 'AI Products', 'Consumer Tech', 'Marketplaces', 'B2B SaaS'].map((area) => (
                  <span key={area} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-primary">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Product Journey Timeline */}
      <Section
        id="journey"
        title="Product Journey"
        subtitle="How I evolved from QA to Product Management"
        centered
      >
        <div className="max-w-2xl mx-auto">
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Featured Case Studies */}
      <Section
        id="case-studies"
        title="Featured Product Case Studies"
        subtitle="Demonstrating my approach to identifying problems, validating assumptions, designing MVPs, and measuring success"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      {/* Other Builds */}
      <Section
        id="other-builds"
        title="Other Product Builds"
        subtitle="Exploring AI, consumer experiences, and engagement mechanics"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherBuilds.map((build, index) => (
            <div
              key={index}
              className="p-6 bg-secondary rounded-xl border border-border hover:border-accent/30 transition-all group"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">{build.emoji}</span>
                <h3 className="text-lg font-bold font-jakarta text-primary flex-1">{build.title}</h3>
              </div>
              <p className="text-primary/70 text-sm font-light mb-4 leading-relaxed">{build.description}</p>
              <div className="flex flex-wrap gap-2">
                {build.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-white/50 text-primary/70 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Product Thinking */}
      <Section
        id="thinking"
        title="How I Think About Products"
        subtitle="When evaluating products, I start with five fundamental questions"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productThinking.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="p-6 bg-secondary rounded-xl border border-border hover:border-accent/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white rounded-lg group-hover:bg-accent/10 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-bold font-jakarta text-primary">{item.title}</h4>
                </div>
                <p className="text-primary/70 text-sm font-light">{item.description}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Product Skills */}
      <Section
        id="skills"
        title="Product Skills"
        subtitle="Crafted through hands-on execution and continuous learning"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {productSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </Section>

      {/* Technical Skills */}
      <Section
        id="technical"
        title="Technical Skills"
        subtitle="Tools and languages that enable product execution"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {technicalSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </Section>

      {/* Currently Learning */}
      <Section
        id="learning"
        title="Currently Learning"
        subtitle="Deepening expertise in high-impact product areas"
        centered
      >
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Product Analytics',
            'Marketplace Dynamics',
            'AI Product Management',
            'Product Strategy',
            'Growth Experimentation',
            'Pricing & Monetization',
            'Go-To-Market Strategy',
          ].map((item) => (
            <div
              key={item}
              className="p-4 bg-secondary rounded-lg border border-border hover:border-accent/30 transition-all flex items-center gap-3 group"
            >
              <BookOpen className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-primary">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Product Principles */}
      <Section
        id="principles"
        title="Product Principles"
        subtitle="Guiding beliefs that shape how I build"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {principles.map((principle, index) => (
            <PrincipleCard key={index} {...principle} index={index} />
          ))}
        </div>
      </Section>

      {/* What I'm Looking For */}
      <Section
        id="looking-for"
        title="What I'm Looking For"
        subtitle="The kind of role and impact that excites me"
        centered
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg text-primary/70 font-light leading-relaxed">
            I'm seeking an Associate Product Manager role where I can combine my engineering background with product thinking to build products that solve meaningful customer problems.
          </p>
          <div>
            <p className="font-semibold text-primary mb-4">Particularly excited by opportunities in:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['FinTech', 'Consumer Products', 'AI Platforms', 'Marketplaces', 'B2B SaaS'].map((opp) => (
                <div key={opp} className="flex items-center gap-3 p-3 bg-secondary rounded-lg border border-border">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="font-medium text-primary">{opp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
