import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

const templateCategories = ['modern', 'classic', 'creative', 'minimal', 'executive', 'academic']
const industries = ['tech', 'finance', 'healthcare', 'design', 'marketing', 'engineering', 'general']
const experienceLevels = ['entry', 'mid', 'senior', 'executive']

const colorSchemes = [
  { primary: '#2563EB', secondary: '#64748B', accent: '#DBEAFE', text: '#1E293B', background: '#FFFFFF' },
  { primary: '#7C3AED', secondary: '#6B7280', accent: '#EDE9FE', text: '#1F2937', background: '#FFFFFF' },
  { primary: '#059669', secondary: '#6B7280', accent: '#D1FAE5', text: '#1F2937', background: '#FFFFFF' },
  { primary: '#DC2626', secondary: '#6B7280', accent: '#FEE2E2', text: '#1F2937', background: '#FFFFFF' },
  { primary: '#D97706', secondary: '#6B7280', accent: '#FEF3C7', text: '#1F2937', background: '#FFFFFF' },
  { primary: '#0F172A', secondary: '#475569', accent: '#CBD5E1', text: '#1E293B', background: '#FFFFFF' },
]

const layouts = ['single-column', 'two-column'] as const
const spacings = ['compact', 'comfortable', 'spacious'] as const

async function main() {
  console.log('🌱 Seeding database...')

  // Clean existing templates
  await db.template.deleteMany()

  const templates = []

  for (let i = 0; i < 30; i++) {
    const category = templateCategories[i % templateCategories.length]
    const industry = [industries[i % industries.length], industries[(i + 2) % industries.length]]
    const level = [experienceLevels[i % experienceLevels.length]]
    const colors = colorSchemes[i % colorSchemes.length]
    const layout = layouts[i % 2]
    const spacing = spacings[i % 3]

    templates.push({
      name: `${category.charAt(0).toUpperCase() + category.slice(1)} ${i + 1}`,
      slug: `${category}-${i + 1}`,
      category,
      industry,
      experienceLevel: level,
      isAtsFriendly: Math.random() > 0.2,
      isPremium: i > 19, // last 10 are premium
      jsonSchema: {
        layout,
        sections: ['header', 'summary', 'experience', 'education', 'skills'],
        fonts: { heading: 'Inter', body: 'Inter' },
        colors,
        spacing,
      },
    })
  }

  await db.template.createMany({ data: templates })

  console.log(`✅ Created ${templates.length} templates`)
  console.log('🎉 Seeding complete!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
