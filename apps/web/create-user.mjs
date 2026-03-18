import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'dev@techintel.ai' },
    update: {},
    create: {
      email: 'dev@techintel.ai',
      name: 'Developer User',
    },
  })
  console.log('✅ Success! Test user created:')
  console.log(`\n    Email:    ${user.email}`)
  console.log(`    Password: <Any password will work in dev mode>\n`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
