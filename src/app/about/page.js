import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Bolt, Telescope } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-6 md:px-8 lg:px-12">
      <main className="flex-1">
        {/* About Us Section */}
        <section className="w-full py-12 mt-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#5D4223] to-[#0A0A0A] rounded-lg fade-in">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Us
                </h1>
                <p className="max-w-[900px] text-gray-500 sm:text-base md:text-lg lg:text-xl dark:text-gray-400">
                  As part of Enthyuzm's commitment to innovation, we've developed Phi-Sight, a design agency dedicated to crafting visually stunning content using the principles of the golden ratio. Our team of experts is passionate about creating beautiful designs that captivate and inspire. We believe that great design has the power to transform businesses and elevate brands. Let us help you bring your vision to life!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 slide-in-up">
          <div className="container mx-auto">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Our Mission
                  </h2>
                  <p className="max-w-[600px] text-gray-500 sm:text-base md:text-lg lg:text-xl dark:text-gray-400">
                    Our mission is to lead the design industry through innovation, delivering visually compelling solutions that leverage the golden ratio and provide unparalleled value to our clients. We are committed to excellence, creativity, and collaboration, and we strive to exceed our clients' expectations with every project we undertake.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
{/*                 <Image
                  src="/mission.jpg"
                  alt="Mission Image"
                  width={600}
                  height={400}
                  className="rounded-md object-cover max-w-full h-auto fade-in"
                /> */}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 slide-in-up">
          <div className="container mx-auto">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center order-2 lg:order-1">
{/*                 <Image
                  src="/team.jpg"
                  alt="Team Image"
                  width={600}
                  height={400}
                  className="rounded-md object-cover max-w-full h-auto fade-in"
                /> */}
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Our Team
                  </h2>
                  <p className="max-w-[600px] text-gray-500 sm:text-base md:text-lg lg:text-xl dark:text-gray-400">
                    Our team is comprised of talented professionals who are passionate about design and dedicated to delivering exceptional results for our clients. With expertise in web design, graphic design, and content strategy, we have the skills and experience to bring your vision to life. Meet our team below!
                  </p>
                  <ul className="grid gap-2 fade-in">
                    <li className="flex items-center gap-2">
                      <Compass className="h-5 w-5 text-primary" />
                      <Link
                        href="https://www.linkedin.com/in/vishavjit-singh-s0724/"
                        target="_blank"
                        className="text-primary hover:underline"
                      >
                        Vishavjit Singh - Project Manager
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <Bolt className="h-5 w-5 text-primary" />
                      <Link
                        href="https://www.linkedin.com/in/sohraab-dhillon/"
                        target="_blank"
                        className="text-primary hover:underline"
                      >
                        Sohraab Dhillon - Lead Developer
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <Telescope className="h-5 w-5 text-primary" />
                      <Link
                        href="https://www.linkedin.com/in/arman-1b323a265/"
                        target="_blank"
                        className="text-primary hover:underline"
                      >
                        
                        Vishavjit singh - Research And Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 fade-in">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Contact Us
                </h2>
                <p className="max-w-[900px] text-gray-500 sm:text-base md:text-lg lg:text-xl dark:text-gray-400">
                  Ready to get started on your next project? Contact us today to learn more about our services and how we can help you achieve your design goals. We look forward to hearing from you!
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium border text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 fade-in"
              >
                <span className="bg-gradient-to-tr from-[#5D4223] to-[#FFF1A6] via-[#E6C203] bg-clip-text text-transparent">
                  Contact Us
                </span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}