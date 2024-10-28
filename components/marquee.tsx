import { cn } from '@/lib/utils'
import Marquee from '@/components/ui/marquee'
import Image from 'next/image'
import Link from 'next/link'

interface University {
  name: string
  country: string
  logo: string
  description: string
  stats: string
  link: string
}

const universities: University[] = [

  {
    name: 'Stanford University',
    country: 'United States',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Stanford_Cardinal_logo.svg',
    description: 'Pioneer in research and innovation',
    stats: '300+ Courses',
    link: 'https://www.stanford.edu',
  },
  {
    name: 'Harvard University',
    country: 'United States',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg',
    description: 'Excellence in global education',
    stats: '400+ Courses',
    link: 'https://www.harvard.edu',
  },
  {
    name: 'MIT',
    country: 'United States',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg',
    description: 'Leading in technology and innovation',
    stats: '300+ Courses',
    link: 'https://www.mit.edu',
  },
  {
    name: 'University of Oxford',
    country: 'United Kingdom',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Oxford-University-Circlet.svg',
    description: 'World-renowned center of learning',
    stats: '350+ Courses',
    link: 'https://www.ox.ac.uk',
  },
  {
    name: 'Yale University',
    country: 'United States',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Yale_University_Shield_1.svg',
    description: 'Excellence in liberal education',
    stats: '290+ Courses',
    link: 'https://www.yale.edu',
  },
  {
    name: 'Princeton University',
    country: 'United States',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Princeton_seal.svg',
    description: 'Leading research institution',
    stats: '275+ Courses',
    link: 'https://www.princeton.edu',
  },

  {
    name: 'TU Munich',
    country: 'Germany',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo_of_the_Technical_University_of_Munich.svg',
    description: 'Excellence in engineering and technology',
    stats: '260+ Courses',
    link: 'https://www.tum.de',
  },

  {
    name: 'National University of Singapore',
    country: 'Singapore',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/NUS_coat_of_arms.svg/1200px-NUS_coat_of_arms.svg.png',
    description: "Asia's leading global university",
    stats: '330+ Courses',
    link: 'https://www.nus.edu.sg',
  }
]

const UniversityCard: React.FC<University> = ({
  logo,
  name,
  country,
  description,
  stats,
  link,
}) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <figure
        className={cn(
          'relative w-[200px] cursor-pointer overflow-hidden rounded-xl p-5',
          'bg-gradient-to-br from-white via-white to-blue-50/50',
          'transition-all duration-300 hover:shadow-2xl hover:-translate-y-1',
          'mx-3 group border border-blue-100/20',
          'backdrop-blur-sm hover:backdrop-blur-lg',
          'before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-50/50 before:via-white/50 before:to-purple-50/50 before:opacity-0 before:transition-opacity hover:before:opacity-100',
          'after:absolute after:inset-0 after:bg-white/10 after:opacity-0 hover:after:opacity-100 after:transition-opacity',
          'hover:border-blue-200/30',
          'shadow-lg shadow-blue-500/5'
        )}
      >
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="relative h-14 w-full transition-transform duration-300 group-hover:scale-110">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 rounded-lg" />
            <div className="absolute inset-0 bg-white/50 rounded-lg backdrop-blur-sm" />
            <Image
              src={logo}
              alt={`${name} logo`}
              fill
              className="object-contain drop-shadow-lg p-1"
              priority
            />
          </div>
          <div className="text-center space-y-1.5">
            <figcaption className="text-sm font-semibold text-gray-900 line-clamp-1">
              {name}
            </figcaption>
            <div className="inline-block px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-medium border border-blue-100/20">
              {country}
            </div>
          </div>
          <div className="text-center space-y-2">
            <p className="text-[11px] text-gray-600 leading-relaxed line-clamp-2 px-2">
              {description}
            </p>
            <div className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-green-50 to-blue-50 px-3 py-1 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <p className="text-[11px] font-medium text-blue-700">{stats}</p>
            </div>
          </div>
        </div>
      </figure>
    </Link>
  )
}

export function MarqueeDemo() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto text-center mb-16 px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Deborah Consultancy Have Ties With Eminent Universities
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          As official partners of these universities, our overseas education
          consultants provide free career counselling for these universities.
        </p>
      </div>

      <div className="w-full relative">
        <Marquee pauseOnHover className="[--duration:40s]" repeat={2}>
          {universities.map((university) => (
            <UniversityCard key={university.name} {...university} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-blue-50"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-blue-50"></div>
      </div>

      <div className="text-center mt-16">
        <p className="text-lg text-gray-600 mb-6">
          We are partnered with all top universities to bring you world-class
          educational opportunities.
        </p>
        <Link
          href="/universities"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
        >
          See All Universities
        </Link>
      </div>
    </section>
  )
}

export default MarqueeDemo