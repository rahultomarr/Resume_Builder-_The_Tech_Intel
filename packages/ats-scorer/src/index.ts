// ATS Scorer — Sprint 5 will implement full ATS analysis
// This package scores resumes against job descriptions

export interface AtsScore {
  overall: number
  breakdown: {
    keywords: number
    formatting: number
    structure: number
    length: number
  }
  missingKeywords: string[]
  foundKeywords: string[]
  suggestions: string[]
}

/**
 * Basic ATS score calculation (placeholder for Sprint 5 AI implementation)
 */
export function calculateBasicAtsScore(resumeText: string): number {
  // Sprint 5 will implement full GPT-4o powered analysis
  const wordCount = resumeText.split(/\s+/).length
  if (wordCount < 200) return 40
  if (wordCount < 400) return 60
  return 75
}
