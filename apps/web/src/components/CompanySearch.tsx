import { useState } from 'react'

type SearchMode = 'name' | 'regno'

export default function CompanySearch() {
  const [mode, setMode]   = useState<SearchMode>('name')
  const [query, setQuery] = useState('')

  const placeholder = mode === 'name'
    ? 'e.g. CTOS Data Systems Sdn Bhd'
    : 'e.g. 201401012345'

  const hint = mode === 'name'
    ? 'Enter the full or partial company name registered with SSM'
    : 'Enter the company registration number (e.g. 201401012345 or 0123456-X)'

  return (
    <div
      className="w-full px-6 md:px-12 py-8"
      style={{ background: 'radial-gradient(ellipse at 30% 50%, #007b85 0%, #055157 99%)' }}
    >
      {/* Label */}
      <p className="text-[13px] font-semibold font-manrope text-[#ffd6cc] mb-2 tracking-[0.2px]">
        Search company
      </p>

      {/* Search row */}
      <div className="flex items-center gap-3">

        {/* Input box */}
        <div className="flex-1 flex items-center h-[48px] rounded-[12px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-white/20 focus-within:shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-shadow duration-200">

          {/* Search icon */}
          <div className="pl-4 pr-2 flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </div>

          {/* Input */}
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={placeholder}
            className="flex-1 h-full bg-transparent text-[14px] font-manrope text-gray-800 placeholder:text-gray-400 focus:outline-none"
          />

          {/* Divider */}
          <div className="w-px h-6 bg-gray-200 flex-shrink-0 mx-1" />

          {/* Toggle pills */}
          <div className="flex items-center gap-1 px-2 flex-shrink-0">
            <button
              onClick={() => setMode('name')}
              className={`h-[32px] px-4 rounded-[8px] text-[12px] font-semibold font-manrope transition-all duration-150 ${
                mode === 'name'
                  ? 'bg-[#055157] text-white shadow-sm'
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              }`}
            >
              Name
            </button>
            <button
              onClick={() => setMode('regno')}
              className={`h-[32px] px-4 rounded-[8px] text-[12px] font-semibold font-manrope transition-all duration-150 ${
                mode === 'regno'
                  ? 'bg-[#055157] text-white shadow-sm'
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              }`}
            >
              Reg. No
            </button>
          </div>
        </div>

        {/* Search button — ghost style on teal bg */}
        <button className="flex-shrink-0 flex items-center gap-2 text-white font-semibold text-[14px] font-manrope px-3 py-2 rounded-[10px] hover:bg-white/10 active:bg-white/20 transition-colors duration-150">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          Search
        </button>
      </div>

      {/* Hint */}
      <p className="text-[11.5px] font-manrope text-white/60 mt-2">{hint}</p>
    </div>
  )
}
