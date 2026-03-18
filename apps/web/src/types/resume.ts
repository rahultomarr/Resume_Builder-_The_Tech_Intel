export interface ResumeContent {
  header: {
    name: string
    title: string
    email: string
    phone: string
    location: string
    linkedin?: string
    website?: string
  }
  summary: string
  experience: Array<{
    company: string
    role: string
    startDate: string
    endDate: string
    bullets: string[]
  }>
  education: Array<{
    school: string
    degree: string
    field: string
    graduationYear: string
    gpa?: string
  }>
  skills: {
    technical: string[]
    soft: string[]
    tools: string[]
  }
  projects?: Array<{
    name: string
    description: string
    tech: string[]
    link?: string
  }>
  certifications?: Array<{
    name: string
    issuer: string
    year: string
  }>
}

export interface ResumeStyle {
  colors: {
    primary: string
    secondary: string
    accent: string
    text: string
    background: string
  }
  fonts: {
    heading: string
    body: string
  }
  spacing: {
    margins: 'compact' | 'normal' | 'wide'
    sectionGap: number
    lineHeight: number
    baseFontSize: number
  }
}

export interface SectionConfig {
  id: string
  type:
    | 'header'
    | 'summary'
    | 'experience'
    | 'education'
    | 'skills'
    | 'projects'
    | 'certifications'
  label: string
  isVisible: boolean
  order: number
}

export const DEFAULT_RESUME_STYLE: ResumeStyle = {
  colors: {
    primary: '#2563EB',
    secondary: '#64748B',
    accent: '#DBEAFE',
    text: '#1E293B',
    background: '#FFFFFF',
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  spacing: {
    margins: 'normal',
    sectionGap: 24,
    lineHeight: 1.5,
    baseFontSize: 11,
  },
}

export const DEFAULT_SECTIONS: SectionConfig[] = [
  { id: 'header', type: 'header', label: 'Contact Info', isVisible: true, order: 0 },
  { id: 'summary', type: 'summary', label: 'Professional Summary', isVisible: true, order: 1 },
  { id: 'experience', type: 'experience', label: 'Work Experience', isVisible: true, order: 2 },
  { id: 'education', type: 'education', label: 'Education', isVisible: true, order: 3 },
  { id: 'skills', type: 'skills', label: 'Skills', isVisible: true, order: 4 },
  { id: 'projects', type: 'projects', label: 'Projects', isVisible: false, order: 5 },
  { id: 'certifications', type: 'certifications', label: 'Certifications', isVisible: false, order: 6 },
]
