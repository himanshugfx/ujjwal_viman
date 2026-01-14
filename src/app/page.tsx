import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* GIF Background Replacement (Placeholder or actual if accessible) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src="/assets/img/dron.gif"
            alt="Hero Background"
            fill
            className="object-cover scale-105"
            unoptimized
            priority
          />
        </div>

        <div className="container relative z-20 px-6 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight outfit">
              Ujjwal <span className="text-green-500">Viman</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200">
              <span className="bg-green-700/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-green-500/30">
                DGCA Type Certified
              </span>
            </p>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold opacity-90 leading-tight md:leading-relaxed">
              Fostering Agriculture <br className="md:hidden" /> Drone Ecosystem
            </h2>
            <div className="flex flex-wrap justify-center gap-4 pt-10">
              <Link
                href="/ujjwal-viman"
                className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold transition-all shadow-xl hover:shadow-green-500/20 flex items-center gap-2 group"
              >
                Explore Drone <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md rounded-full font-bold transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coded Infographic Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            {/* Central Line & Feature Cards Grid */}
            <div className="relative w-full max-w-6xl">
              {/* Vertical Connector Line (Desktop Only) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2" />

              <div className="space-y-12 md:space-y-0 relative">
                {[
                  {
                    left: { title: "MULTIPURPOSE DRONE", desc: "Spraying, Broadcasting,\nCrop Health Monitoring", color: "green" },
                    right: { title: "SALES & SERVICES", desc: "Sales and Service\nnetwork PAN India", color: "green" }
                  },
                  {
                    left: { title: "R&D/MANUFACTURING", desc: "R&D and manufacturing facility\nin Aurangabad, Maharastra", color: "green" },
                    right: { title: "INNOVATION", desc: "Bike and Backpack model, Autonomous Drone, RADAR collision avoidance, Terrain following etc", color: "green" }
                  },
                  {
                    left: { title: "ASSISTANCE", desc: "Bank Loan under AIF, Insurance, RPTO, Pilot Licence certificate and UIN", color: "navy" },
                    right: { title: "NETWORKING", desc: "Connecting villages of India to make an ecosystem", color: "navy" }
                  }
                ].map((row, idx) => (
                  <div key={idx} className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-24 items-center md:h-64 relative">
                    {/* Central Joiner Circle (Desktop Only) */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 w-6 h-6 rounded-full border-4 border-white shadow-md -translate-x-1/2 -translate-y-1/2 z-10 bg-gray-200" />

                    {/* Left Card */}
                    <div className="w-full text-center md:text-right group">
                      <div className={cn(
                        "p-8 rounded-[2rem] shadow-premium hover:shadow-2xl transition-all duration-500 border-l-8 md:border-l-0 md:border-r-8",
                        row.left.color === "green" ? "bg-white border-green-500" : "bg-gray-900 border-blue-900 text-white"
                      )}>
                        <h4 className={cn("text-xl font-bold outfit mb-3", row.left.color === "green" ? "text-green-600" : "text-blue-400")}>
                          {row.left.title}
                        </h4>
                        <p className={cn("text-sm font-medium leading-relaxed whitespace-pre-line", row.left.color === "green" ? "text-gray-600" : "text-gray-300")}>
                          {row.left.desc}
                        </p>
                      </div>
                    </div>

                    {/* Right Card */}
                    <div className="w-full text-center md:text-left group">
                      <div className={cn(
                        "p-8 rounded-[2rem] shadow-premium hover:shadow-2xl transition-all duration-500 border-r-8 md:border-r-0 md:border-l-8",
                        row.right.color === "green" ? "bg-white border-green-500" : "bg-gray-900 border-blue-900 text-white"
                      )}>
                        <h4 className={cn("text-xl font-bold outfit mb-3", row.right.color === "green" ? "text-green-600" : "text-blue-400")}>
                          {row.right.title}
                        </h4>
                        <p className={cn("text-sm font-medium leading-relaxed whitespace-pre-line", row.right.color === "green" ? "text-gray-600" : "text-gray-300")}>
                          {row.right.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-green-100 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative aspect-square md:aspect-video lg:aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                {/* Fallback to local asset if exists, otherwise placeholder */}
                <Image
                  src="/assets/img/drone-on-field.jpg"
                  alt="Ujjwal Viman in action"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-6 bg-white p-6 rounded-2xl shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-100 rounded-full text-green-700">
                    <Image src="/assets/img/icon/acre.png" alt="Acre" width={24} height={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">6 Mins</div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest text-nowrap">1 Acre Spraying</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 outfit leading-tight">
                Agricultural Drone <br />
                <span className="text-green-700">Manufacturing & Services</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ujjwal Viman is India’s No. 1 Type Certified Agriculture Drone approved by DGCA. It is a multipurpose drone for agriculture with multiple payloads like Spraying, Broadcasting, and Crop Health monitoring.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-green-800 rounded-2xl border border-green-700 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Image src="/assets/img/icon/chemicals white.png" alt="Chemicals" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">30% Saving</h4>
                    <p className="text-sm text-green-100">of Agro Chemicals</p>
                  </div>
                </div>
                <div className="p-6 bg-green-800 rounded-2xl border border-green-700 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Image src="/assets/img/icon/spray white.png" alt="Spray" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">3 Acres</h4>
                    <p className="text-sm text-green-100">Spray in 1 go</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full relative aspect-[21/9] md:aspect-[32/10]">
        <Image
          src="/assets/img/banner/banner2.jpg"
          alt="Kisan Ki Nai Pehchan"
          fill
          className="object-cover"
        />
      </section>

      {/* Efficiency Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 outfit mb-16">
            Enhancing Efficiency & Profitability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "30%", desc: "increased crop yield", icon: "/assets/img/icon/1.2.png" },
              { title: "30-50%", desc: "reduced labour cost", icon: "/assets/img/icon/2.2.png" },
              { title: "40-60%", desc: "Time saving in farm management", icon: "/assets/img/icon/3.2.png" },
              { title: "Loans", desc: "& credit support", icon: "/assets/img/icon/5.2.png" },
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                <div className="h-20 w-20 mx-auto mb-6 flex items-center justify-center relative">
                  <Image src={item.icon} alt={item.desc} fill className="object-contain" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold outfit">Our Availability</h2>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white p-4 aspect-video">
              <Image src="/assets/img/map 2.gif" alt="Coverage map" fill className="rounded-[2rem] object-contain p-4" unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Support Options */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold outfit">Financial Support Options</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Empowering farmers with accessible financing and government subsidies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AIF Loan Facilities",
                icon: "/assets/img/icon/5.1.png",
                points: ["Loan Amount: Up to ₹2 crores per unit", "3% interest subsidy for 7 years", "Collateral-free loans under CGTMSE"]
              },
              {
                title: "SMAM Subsidy Details",
                icon: "/assets/img/icon/6.1.png",
                points: ["40-50% subsidy for individual farmers", "Enhanced subsidy for SC/ST/Women", "50% subsidy for agri-graduates & CHCs"]
              },
              {
                title: "Comprehensive Insurance",
                icon: "/assets/img/icon/7.1.png",
                points: ["Holistic coverage for your drone", "Accidental damage & theft protection", "Peace of mind for your investment"]
              }
            ].map((item, i) => (
              <div key={i} className="relative pt-12">
                <div className="absolute top-0 left-12 w-20 h-20 bg-white rounded-full shadow-lg z-10 flex items-center justify-center p-4">
                  <Image src={item.icon} alt={item.title} width={80} height={80} className="w-full h-auto" />
                </div>
                <div className="bg-white rounded-[2rem] p-10 shadow-premium border border-gray-100 hover:shadow-2xl transition-all h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-4">{item.title}</h3>
                  <ul className="space-y-4">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <Image src="/assets/img/icon/bullet.png" alt="bullet" width={24} height={24} className="shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h5 className="text-green-700 font-bold uppercase tracking-widest text-sm">Awesome Gallery</h5>
            <h2 className="text-4xl md:text-5xl font-bold outfit">Explore Projects</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { loc: "Haryana, India", img: "/assets/img/gallery/1.jpg" },
              { loc: "Madhya Pradesh, India", img: "/assets/img/gallery/2.jpg" },
              { loc: "Aurangabad, Maharashtra", img: "/assets/img/gallery/3.jpg" },
              { loc: "Auraiya, Uttar Pradesh", img: "/assets/img/gallery/4.jpg" },
            ].map((project, i) => (
              <div key={i} className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lg">
                <Image src={project.img} alt={project.loc} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <p className="text-white font-bold text-xl leading-tight whitespace-pre-line">{project.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Esteemed Clients */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold outfit">Our Esteemed Clients</h2>
        </div>
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[
            "mahindra.png", "bayer.png", "ppl.png", "coromondel.png", "syngenta.png", "upl.png"
          ].map((client, i) => (
            <div key={i} className="shrink-0 w-48 h-24 flex items-center justify-center p-4 relative">
              <Image src={`/assets/img/clients/${client}`} alt="Client" fill className="object-contain filter grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 p-4" />
            </div>
          ))}
          {/* Duplicate for infinite loop */}
          {[
            "mahindra.png", "bayer.png", "ppl.png", "coromondel.png", "syngenta.png", "upl.png"
          ].map((client, i) => (
            <div key={i + 10} className="shrink-0 w-48 h-24 flex items-center justify-center p-4 relative">
              <Image src={`/assets/img/clients/${client}`} alt="Client" fill className="object-contain filter grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 p-4" />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-green-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-800/20 blur-3xl rounded-full translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center text-white space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold outfit">Ready to Modernize Your Farm?</h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Join thousands of farmers who are already using Ujjwal Viman to increase their yield and reduce costs.
          </p>
          <div className="flex justify-center gap-6 pt-8">
            <Link href="/contact" className="px-10 py-5 bg-white text-green-900 rounded-full font-bold text-lg hover:bg-green-50 transition-colors shadow-lg">
              Contact an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
