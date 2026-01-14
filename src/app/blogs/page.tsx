import Link from "next/link";
import { User, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BlogsPage() {
    const blogs = [
        {
            id: 1,
            title: "Revolutionizing Agriculture with Drone Technology",
            excerpt: "Discover how Ujjwal Viman is changing the landscape of Indian farming with precision spraying and AI insights.",
            date: "18 April, 2022",
            author: "Admin",
            image: "/assets/img/blog/5.jpg",
        },
        {
            id: 2,
            title: "Sustainable Farming: The Role of Drones",
            excerpt: "Reducing water usage by 90% and chemicals by 30% - how drones are leading the way to a greener future.",
            date: "26 July, 2022",
            author: "Admin",
            image: "/assets/img/blog/6.jpg",
        },
        {
            id: 3,
            title: "DGCA Type Certification: Why It Matters",
            excerpt: "Understanding the importance of safety and compliance in the rapidly growing drone industry in India.",
            date: "12 March, 2022",
            author: "Admin",
            image: "/assets/img/blog/7.jpg",
        },
    ];

    return (
        <div className="pt-24 pb-16">
            <section className="bg-gray-900 py-20 text-white text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold outfit mb-4">Our Blog</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">Latest news, insights, and stories from the world of agricultural drone technology.</p>
                </div>
            </section>

            <section className="py-24 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogs.map((blog) => (
                        <article key={blog.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-premium transition-all border border-gray-100 flex flex-col">
                            <div className="aspect-video relative overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-green-900 shadow-sm">
                                    {blog.date}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1 gap-4">
                                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {blog.author}</span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                    {blog.excerpt}
                                </p>
                                <div className="mt-auto pt-6 border-t border-gray-50">
                                    <Link
                                        href={`/blogs/${blog.id}`}
                                        className="text-sm font-bold text-green-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                                    >
                                        Read More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
