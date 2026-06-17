import { Target, Eye, Heart, Shield, Droplets, TreePine, Recycle, GraduationCap } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Conservation', desc: 'Protecting Himalayan biodiversity and ecosystems' },
  { icon: Droplets, title: 'Clean Water', desc: 'Preserving rivers and natural water sources' },
  { icon: TreePine, title: 'Reforestation', desc: 'Planting native trees to restore green cover' },
  { icon: Recycle, title: 'Zero Waste', desc: 'Promoting sustainable and waste-free living' },
  { icon: GraduationCap, title: 'Education', desc: 'Spreading environmental awareness in communities' },
  { icon: Heart, title: 'Community', desc: 'Building a network of passionate eco-warriors' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-eco-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-eco-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-eco-50 border border-eco-200 px-5 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-eco-500" />
            <span className="text-eco-700 text-sm font-semibold">About Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Who Are <span className="text-eco-600">Pauri Eco Warriors?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A dedicated community of environmental enthusiasts from Pauri Garhwal,
            working tirelessly to protect and restore the ecological beauty of our Himalayan region.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-eco-900/10">
              <img
                src="/images/about-team.png"
                alt="Pauri Eco Warriors Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eco-900/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 shadow-xl max-w-[220px]">
              <div className="text-3xl font-bold text-eco-700">Since 2020</div>
              <p className="text-sm text-gray-600 mt-1">Making a difference in Pauri Garhwal</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-2xl bg-eco-100">
                <Target className="h-7 w-7 text-eco-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To lead environmental conservation efforts in Pauri Garhwal through
                  community-driven initiatives, sustainable practices, and awareness campaigns
                  that protect our mountains, forests, and rivers for future generations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-2xl bg-eco-100">
                <Eye className="h-7 w-7 text-eco-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A thriving, green Pauri Garhwal where every citizen is an eco-warrior,
                  where our rivers run clean, our forests stand tall, and our communities
                  prosper in harmony with nature.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-2xl bg-eco-100">
                <Heart className="h-7 w-7 text-eco-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Story</h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded by a group of passionate young environmentalists from Pauri,
                  we started with small cleanup drives and have grown into a movement of
                  500+ dedicated volunteers making real impact across the district.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What Drives Us</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative p-6 rounded-2xl border border-gray-100 bg-white hover:border-eco-200 hover:shadow-lg hover:shadow-eco-500/5 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-eco-50 group-hover:bg-eco-100 transition-colors duration-300">
                    <value.icon className="h-6 w-6 text-eco-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{value.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
