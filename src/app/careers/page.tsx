import { Briefcase, MapPin, Clock, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers | EPOS Associates",
  description:
    "Join the EPOS Associates team. View open positions in sales, technical support, and operations at our London office.",
}

const openings = [
  {
    title: "Sales Executive",
    department: "Sales",
    location: "London, UK",
    type: "Full-time",
    description: "Join our sales team to help businesses find the right POS solutions. Experience in B2B sales preferred.",
  },
  {
    title: "Technical Support Engineer",
    department: "Support",
    location: "London, UK",
    type: "Full-time",
    description: "Provide expert technical support for our POS hardware and software products. Knowledge of POS systems is a plus.",
  },
  {
    title: "Warehouse Operative",
    department: "Operations",
    location: "London, UK",
    type: "Full-time",
    description: "Help manage our distribution centre, including picking, packing, and dispatching orders.",
  },
]

export default function CareersPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Careers at EPOS Associates</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Join our growing team and help businesses across the UK find the right POS solutions.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">50+ Team Members</h3>
              <p className="text-sm text-gray-600">A growing, collaborative team</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">London Based</h3>
              <p className="text-sm text-gray-600">Modern office with hybrid options</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Briefcase className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Growth Opportunities</h3>
              <p className="text-sm text-gray-600">Training and career progression</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" />{job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{job.type}</span>
                    </div>
                  </div>
                  <a
                    href="mailto:careers@eposassociates.com?subject=Application: Sales Executive"
                    className="shrink-0 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Don&apos;t see a suitable role?</h3>
            <p className="text-gray-600 mb-4">Send your CV to careers@eposassociates.com and we&apos;ll keep you in mind for future openings.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
