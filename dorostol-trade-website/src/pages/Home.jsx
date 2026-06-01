import { Link } from 'react-router-dom'
import { ArrowRight, Factory, Wheat, Cog, Users, Target, Lightbulb, Handshake, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Home = () => {
  const services = [
    {
      icon: Factory,
      title: 'Food Processing Solutions',
      description: 'Complete industrial lines for dairy, meat, beverages, and food packaging with cutting-edge technology.',
      link: '/services'
    },
    {
      icon: Wheat,
      title: 'Agricultural Projects',
      description: 'Grain handling, oilseed processing, livestock infrastructure, and agro-industrial solutions.',
      link: '/services'
    },
    {
      icon: Cog,
      title: 'Industrial Engineering',
      description: 'Custom engineering solutions, project management, and consulting for complex industrial projects.',
      link: '/services'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Integrated Solutions',
      description: 'End-to-end solutions from design to implementation'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with deep industry knowledge'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge technology and sustainable practices'
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'Long-term relationships built on trust and reliability'
    }
  ]

  const industries = [
    {
      title: 'Food & Beverage',
      description: 'Specialized solutions for Horeca and industrial food production, including processing lines, packaging systems, and quality control infrastructure.',
      stats: ['500+ Projects', '50+ Countries', '25+ Years Experience']
    },
    {
      title: 'Agriculture',
      description: 'Comprehensive agricultural solutions covering grain storage, oilseed processing, livestock facilities, and modern farming infrastructure.',
      stats: ['200+ Facilities', '1M+ Tons Capacity', 'Sustainable Solutions']
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Engineering Excellence for Food & Agriculture Industries
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Delivering innovative industrial solutions, engineering expertise, and trading services 
              across Romania, Bulgaria, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Dorostol Trade SRL
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A Romanian-Bulgarian company specializing in engineering, industrial solutions, and trading 
              for the Food & Beverage and Agriculture sectors. We design, supply, and build complete 
              processing lines and industrial solutions with a commitment to innovation and quality.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions across multiple industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <Button asChild variant="outline" size="sm">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Focus
            </h2>
            <p className="text-lg text-gray-600">
              Specialized expertise in two key sectors
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {industry.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-blue-600">{stat}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              Our core values and competitive advantages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with us for innovative solutions that drive success in the F&B and Agriculture industries.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed with our expert articles and industry insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder for blog posts */}
            <Card>
              <CardHeader>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <CardTitle>Coming Soon: Industry Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We're preparing valuable content about F&B processing, agricultural innovations, 
                  and industrial engineering. Check back soon for expert insights.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <CardTitle>Coming Soon: Case Studies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Detailed case studies of our successful projects and innovative solutions 
                  will be featured here soon.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <CardTitle>Coming Soon: Technical Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  In-depth technical articles covering the latest trends and technologies 
                  in our industries.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

