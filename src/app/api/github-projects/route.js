import { NextResponse } from 'next/server'

const GITHUB_USERNAME = 'amit-patel01'
const EXCLUDED_REPOSITORIES = new Set([
  'campus-connect',
  'amitsolutionhub',
  'chokeyy',
  'solutionhub',
  'ashexam',
  'nirvabirthdayjoshisis',
  'certificategenaret',
  'lms-solutionhu',
  'birthday',
  'amitsolutionhub-solutionchat',
  'portfoiloamit',
])

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=100&type=owner`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'amit-portfolio',
        },
        cache: 'no-store',
      }
    )

    if (!response.ok) throw new Error(`GitHub returned ${response.status}.`)

    const repositories = await response.json()
    const items = repositories
      .filter(repository =>
        !repository.fork &&
        repository.private === false &&
        repository.visibility === 'public' &&
        !EXCLUDED_REPOSITORIES.has(repository.name.toLowerCase())
      )
      .map(repository => ({
        id: `github_${repository.id}`,
        type: 'project',
        title: repository.name.replace(/[-_]+/g, ' '),
        description: repository.description || 'Open-source project from GitHub.',
        image: '',
        tags: [repository.language, ...(repository.topics || [])].filter(Boolean),
        link: repository.homepage || '',
        github: repository.html_url,
      }))

    return NextResponse.json(
      { items },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    )
  } catch (error) {
    console.error('GitHub projects fetch failed:', error.message)
    return NextResponse.json({ error: 'Could not fetch GitHub repositories right now.' }, { status: 502 })
  }
}
