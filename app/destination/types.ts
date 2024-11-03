export interface StudyCard {
  title: string
  dates: string
  location: string
  image: string
  category: string
  programType: 'University' | 'Language School' | 'Exchange'
  duration: '1 Semester' | '2 Semesters' | 'Full Year'
  startDate: string
  region: 'Europe' | 'North America' | 'Asia' | 'Africa' | 'South America'
}

export interface FilterState {
  programType: string
  duration: string
  location: string
  startDate: string
  category: string
  regions: string[]
  searchQuery: string
} 