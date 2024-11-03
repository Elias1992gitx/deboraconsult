'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { FilterState } from './types'

const initialState: FilterState = {
  programType: '',
  duration: '',
  location: '',
  startDate: '',
  category: '',
  regions: [],
  searchQuery: ''
}

export const FilterContext = createContext<{
  filters: FilterState
  setFilters: (filters: Partial<FilterState>) => void
  clearFilters: () => void
}>({
  filters: initialState,
  setFilters: () => {},
  clearFilters: () => {}
})

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>(initialState)

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  const clearFilters = () => setFilters(initialState)

  return (
    <FilterContext.Provider value={{ filters, setFilters: updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilters = () => useContext(FilterContext)