"use client";

import Link from "next/link";
import { CheckCircle2, Battery, Wind, Plus, Minus, ChevronLeft, ChevronRight, Quote, Droplets, Map } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductPage() {
    const [activeTab, setActiveTab] = useState("specs");
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const specs = [
        { label: "Tank Capacity", value: "10 Litres" },
        { label: "Flying Time", value: "21 Min per Battery" },
        { label: "Max Flying Altitude", value: "20 meters" },
        { label: "Max Flying Distance", value: "1.5 km" },
        { label: "Flying Speed", value: "1-10 m/s" },
        { label: "Max Payload", value: "27.6 Kg" },
        { label: "Nozzle Type", value: "4/2 Centrifuge" },
        { label: "Spraying Area", value: "25 acres per day" },
    ];

    const features = [
        "Fast Operation: Covers 1 acre in just 6 minutes.",
        "Water Saving: Reduces water usage by up to 90%.",
        "Eco-Friendly: Lowers agrochemical use by 30%.",
        "High Efficiency: Sprays 3 acres in one fill.",
        "Cost-Effective: Saves time, water, labor, and chemicals.",
    ];

    const faqItems = [
        {
            q: "What is the AIF Loan Facility for Agriculture Spraying Drones?",
            a: "The Agriculture Infrastructure Fund (AIF) is a government initiative offering medium- to long-term financial support for agricultural projects. Benefits include: Up to ₹2 crores loan per unit, 3% interest subsidy for 7 years, and collateral-free loans."
        },
        {
            q: "How does Ujjwal Viman contribute to the agriculture sector?",
            a: "We revolutionize modern farming with high-precision systems that empower farmers to apply fertilizers and pesticides more efficiently—cutting costs, saving time, and maximizing crop yields."
        },
        {
            q: "What services does Ujjwal Viman provide?",
            a: "Ujjwal Viman is a cutting-edge agricultural drone designed to transform traditional farming with smart, AI-powered spraying and monitoring capabilities."
        }
    ];

    const testimonials = [
        {
            text: "As a small-scale farmer, I’ve always been looking for ways to optimize my resources. Ujjwal Viman has truly been a revelation! The precision of its spraying system reduced my fertilizer usage and the efficiency of the drone has saved me both time and labor costs.",
            author: "Ravi Kumar, Farmer – Haryana"
        },
        {
            text: "I’ve been using Ujjwal Viman on my farm for the past season, and the results speak for themselves. The AI-powered features and ease of use have made farming more precise and efficient.",
            author: "Anjali Mehta, Agronomist – Uttar Pradesh"
        },
        {
            text: "Ujjwal Viman has helped revolutionize the way we manage our farm. The drone’s advanced capabilities have reduced manual labor, improved pesticide efficiency, and significantly lowered operational costs.",
            author: "Vikram Singh, Farm Owner – Rajasthan"
        }
    ];

    return (
        <div className="pt-24 pb-16">
            {/* Breadcrumb / Hero Header */}
            <section className="bg-green-900 py-20 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/img/drone-on-field.jpg')] bg-cover bg-center opacity-30" />
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold outfit mb-4 animate-in fade-in slide-in-from-top-8 duration-700">Ujjwal Viman</h1>
                    <nav className="text-sm font-medium opacity-80 uppercase tracking-widest flex justify-center gap-2">
                        <Link href="/" className="hover:text-green-300 transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-green-400">Products</span>
                        <span>/</span>
                        <span>Ujjwal Viman</span>
                    </nav>
                </div>
            </section>

            {/* Product Details Section */}
            <section className="py-24 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Images / Collage Placeholder */}
                    <div className="space-y-6">
                        <div className="aspect-square bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-premium border-8 border-white relative">
                            <Image src="/assets/img/ujjwalviman/ujjwalviman3.png" alt="Ujjwal Viman Front View" fill className="object-contain p-8" priority />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-green-500 transition-colors cursor-pointer relative">
                                    <Image src={`/assets/img/ujjwalviman/ujjwalviman${i}.png`} alt={`Thumbnail ${i}`} fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-widest">
                                DGCA Type Certified
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 outfit leading-tight">
                                The Future of Precision <br /> Agricultural Spraying
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Ujjwal Viman by Terra Craft Agrobotics is a cutting-edge agricultural drone designed to transform traditional farming with speed, efficiency, and sustainability.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-gray-900">Key Features & Benefits</h3>
                            <ul className="space-y-3">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-6 border-t border-gray-100 flex items-center gap-6">
                            <div>
                                <div className="text-3xl font-bold text-gray-900">25 Acres</div>
                                <div className="text-sm font-medium text-gray-500">Per Day Capacity</div>
                            </div>
                            <div className="h-12 w-px bg-gray-200" />
                            <Link href="/contact" className="px-10 py-4 bg-green-700 hover:bg-green-800 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-green-900/10">
                                Get Yours Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Creative Specifications Bento Grid */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h5 className="text-green-700 font-bold uppercase tracking-widest text-sm text-center">Performance Engineering</h5>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 outfit leading-tight text-center">Key Specifications</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-center">Precision-crafted for the most demanding agricultural environments in the world.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[220px]">
                        {/* 1. Tank Capacity - Large Hero Card */}
                        <div className="md:col-span-2 lg:col-span-3 row-span-2 group relative rounded-[2.5rem] overflow-hidden bg-green-900 text-white p-10 flex flex-col justify-end shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute top-0 right-0 w-full h-full opacity-40 group-hover:scale-110 transition-transform duration-700">
                                <Image src="/assets/img/gallery/g1.jpg" alt="Tank" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/40 to-transparent" />
                            </div>
                            <div className="relative z-10 space-y-4 text-left">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                                    <Droplets className="w-8 h-8 text-green-400" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-5xl font-bold outfit">10 Litres</h3>
                                    <p className="text-xl text-green-100/80 font-medium">Extraordinary Payload Capacity</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Flying Time - Medium Card */}
                        <div className="md:col-span-2 lg:col-span-3 group relative rounded-[2.5rem] overflow-hidden bg-gray-50 p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                            <div className="flex items-center gap-6 h-full">
                                <div className="w-20 h-20 bg-green-100 rounded-[1.5rem] flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                                    <Battery className="w-10 h-10 text-green-700" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-3xl font-bold text-gray-900 outfit leading-none mb-2">21 Mins</h3>
                                    <p className="text-gray-500 font-medium tracking-tight">Per Intelligent Battery Flight</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Spraying Area - Small Highlight Card */}
                        <div className="md:col-span-1 lg:col-span-2 group relative rounded-[2.5rem] overflow-hidden bg-blue-900 text-white p-8 shadow-lg hover:shadow-blue-900/40 transition-all duration-500 hover:-translate-y-2">
                            <div className="relative z-10 h-full flex flex-col justify-center text-left">
                                <h3 className="text-4xl font-bold outfit mb-1">25 Acres</h3>
                                <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">Daily Coverage</p>
                            </div>
                            <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
                                <Map className="w-32 h-32" />
                            </div>
                        </div>

                        {/* 4. Altitude & Speed - Tech Duo */}
                        <div className="md:col-span-1 lg:col-span-1 group relative rounded-[2.5rem] overflow-hidden bg-green-50 p-8 border border-green-100 flex flex-col justify-center items-center text-center hover:bg-green-100 transition-colors duration-500 cursor-default">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-2xl font-bold text-green-900 outfit">20m</h4>
                                    <p className="text-[10px] font-bold text-green-600/60 uppercase tracking-tighter">Max Altitude</p>
                                </div>
                                <div className="w-full h-px bg-green-200/50" />
                                <div>
                                    <h4 className="text-2xl font-bold text-green-900 outfit">1.5km</h4>
                                    <p className="text-[10px] font-bold text-green-600/60 uppercase tracking-tighter">Control Range</p>
                                </div>
                            </div>
                        </div>

                        {/* 5. Components Collage - Visual Block */}
                        <div className="hidden lg:block lg:col-span-2 row-span-1 group relative rounded-[2.5rem] overflow-hidden shadow-premium transition-all duration-500 hover:-translate-y-2 relative">
                            <Image src="/assets/img/gallery/g3.jpg" alt="Drone Component" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>

                        {/* 6. Nozzle Type - Text Card */}
                        <div className="md:col-span-2 lg:col-span-2 group relative rounded-[2.5rem] overflow-hidden bg-white p-8 border border-gray-100 shadow-premium flex items-center gap-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center shrink-0">
                                <Wind className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-xl font-bold text-gray-900 outfit leading-tight">4/2 Centrifuge</h4>
                                <p className="text-sm text-gray-500 font-medium">Industry-Leading Nozzle Tech</p>
                            </div>
                        </div>

                        {/* 7. Payload - Visual Insight */}
                        <div className="md:col-span-2 lg:col-span-2 group relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 relative">
                            <Image src="/assets/img/gallery/g4.jpg" alt="In Flight" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <h4 className="text-white text-3xl font-bold ml-4">27.6 Kg</h4>
                                <p className="text-green-300 font-bold tracking-widest uppercase text-xs">Maximum Payload</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-900 outfit mb-16">Our Agricultural Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "Drone Spraying", desc: "Efficient and uniform pesticide application, reducing labor and time.", img: "/assets/img/drone-on-field.jpg" },
                            { title: "Crop Monitoring", desc: "Real-time insights into crop health and growth stages.", img: "/assets/img/crop-monitoring.jpg" },
                            { title: "Soil Analysis", desc: "Accurate soil data to optimize fertilizer usage and improve yield.", img: "/assets/img/soil-testing.jpg" },
                        ].map((service, i) => (
                            <div key={i} className="bg-white rounded-3xl shadow-premium overflow-hidden border border-gray-100 group">
                                <div className="aspect-video overflow-hidden relative">
                                    <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-8 text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tabs for Specification & Description */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex justify-center mb-12 border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab("specs")}
                            className={cn(
                                "px-8 py-4 font-bold text-lg transition-all border-b-4",
                                activeTab === "specs" ? "border-green-600 text-green-700" : "border-transparent text-gray-400"
                            )}
                        >
                            Specification
                        </button>
                        <button
                            onClick={() => setActiveTab("desc")}
                            className={cn(
                                "px-8 py-4 font-bold text-lg transition-all border-b-4",
                                activeTab === "desc" ? "border-green-600 text-green-700" : "border-transparent text-gray-400"
                            )}
                        >
                            Description
                        </button>
                    </div>

                    <div className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-gray-100">
                        {activeTab === "specs" ? (
                            <div className="divide-y divide-gray-100">
                                {specs.map((spec, i) => (
                                    <div key={i} className="py-4 flex justify-between">
                                        <span className="font-bold text-gray-500">{spec.label}</span>
                                        <span className="font-bold text-gray-900">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>The Ujjwal Viman by Terra Craft Agrobotics is a cutting-edge agricultural drone that promises to revolutionize farming practices. It’s designed to cover 1 acre in just 6 minutes, while saving up to 90% of water and reducing agrochemical usage by 30%. With a 10L tank capacity and the ability to spray 3 acres in one go, it’s an efficient solution for modern agriculture.</p>
                                <ul className="space-y-3 list-disc pl-6">
                                    <li>For pesticide spraying</li>
                                    <li>For crop health monitoring</li>
                                    <li>Crop counting and plant emergence analysis</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>


            {/* Major Specs Cards */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16 outfit">Major Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Ujjwal Viman",
                                icon: "/assets/img/logo-icon.png",
                                items: ["Tank Capacity - 10 Litres", "Flying Time - 21 min/battery", "Max Flying Distance - 1.5 km"]
                            },
                            {
                                title: "Spray System",
                                icon: "/assets/img/spray-icon.png",
                                items: ["Nozzle Type - Centrifuge", "No of Nozzles - 4", "Spraying Area/Drone/Day - 25 acres"]
                            },
                            {
                                title: "Battery",
                                icon: "/assets/img/battery-icon.png",
                                items: ["Battery Capacity - 25200 MAh", "Battery Life - Upto 500 cycles", "Voltage - 44.4 V"]
                            }
                        ].map((card, i) => (
                            <div key={i} className="relative pt-12 group">
                                <div className="absolute top-0 left-12 w-24 h-24 bg-white rounded-full shadow-lg z-10 flex items-center justify-center p-4 border-2 border-green-100 group-hover:scale-110 transition-transform relative">
                                    <Image src={card.icon} alt={card.title} width={64} height={64} className="w-full h-auto" />
                                </div>
                                <div className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-gray-100 h-full pt-16">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-8">{card.title}</h3>
                                    <ul className="space-y-4">
                                        {card.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-600">
                                                <Image src="/assets/img/icon/bullet.png" alt="bullet" width={24} height={24} className="shrink-0 mt-0.5" />
                                                <span className="font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-green-800 outfit mb-16">What Our Clients Say</h2>
                    <div className="relative">
                        <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 shadow-premium border border-gray-100 relative">
                            <Quote className="absolute top-10 left-10 w-16 h-16 text-green-100" />
                            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                                &quot;{testimonials[testimonialIndex].text}&quot;
                            </p>
                            <h4 className="text-xl font-bold text-blue-900">{testimonials[testimonialIndex].author}</h4>
                        </div>
                        <div className="flex justify-center gap-4 mt-12">
                            <button
                                onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                                className="w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                            <button
                                onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                                className="w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-bold text-center text-gray-900 outfit mb-16">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqItems.map((item, i) => (
                            <div key={i} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-lg font-bold text-gray-800">{item.q}</span>
                                    {openFaq === i ? <Minus className="text-green-600" /> : <Plus className="text-green-600" />}
                                </button>
                                {openFaq === i && (
                                    <div className="px-8 pb-8 text-gray-600 leading-relaxed animate-in slide-in-from-top-2 duration-300">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
