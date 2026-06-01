import { Link } from 'react-router-dom'
import { Factory, Wheat, Cog, Truck, Building, Users, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Services = () => {
  const serviceCategories = [
    {
      icon: Factory,
      title: 'Food Processing Lines',
      description: 'Complete industrial processing solutions for dairy, meat, beverages, and food packaging.',
      features: ['Dairy Processing Equipment', 'Meat Processing Lines', 'Beverage Production', 'Packaging Systems', 'Quality Control Systems'],
      link: '#food-processing'
    },
    {
      icon: Wheat,
      title: 'Agricultural Projects',
      description: 'Comprehensive agricultural infrastructure and processing solutions.',
      features: ['Grain Storage Systems', 'Oilseed Processing', 'Livestock Facilities', 'Irrigation Systems', 'Farm Automation'],
      link: '#agriculture'
    },
    {
      icon: Cog,
      title: 'Industrial Engineering',
      description: 'Custom engineering solutions and consulting for complex industrial projects.',
      features: ['Process Design', 'System Integration', 'Automation Solutions', 'Technical Consulting', 'Project Management'],
      link: '#engineering'
    },
    {
      icon: Truck,
      title: 'Trading & Supply Chain',
      description: 'Strategic sourcing, procurement, and logistics optimization services.',
      features: ['Equipment Sourcing', 'Supply Chain Management', 'Logistics Coordination', 'Vendor Management', 'Cost Optimization'],
      link: '#trading'
    }
  ]

  const generalServices = [
    {
      title: 'Engineering & Design',
      description: 'Our engineering team provides comprehensive design services from initial concept to detailed technical specifications. We utilize the latest CAD software and simulation tools to ensure optimal performance and efficiency.',
      icon: Cog
    },
    {
      title: 'Supply & Procurement',
      description: 'We leverage our extensive network of suppliers and manufacturers to source high-quality equipment and materials at competitive prices. Our procurement team ensures timely delivery and quality assurance.',
      icon: Truck
    },
    {
      title: 'Construction & Installation',
      description: 'Our experienced construction teams handle the complete installation of industrial systems, ensuring compliance with safety standards and regulatory requirements while minimizing downtime.',
      icon: Building
    },
    {
      title: 'Project Management',
      description: 'From initial planning to final commissioning, our project managers coordinate all aspects of implementation, ensuring projects are delivered on time, within budget, and to specification.',
      icon: Users
    }
  ]

  const methodology = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Initial assessment of client needs, site evaluation, and requirement analysis.'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Detailed engineering design, project planning, and timeline development.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Equipment procurement, construction, installation, and system integration.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Commissioning, training, ongoing maintenance, and technical support.'
    }
  ]

  const industrySpecific = {
    foodBeverage: {
      title: 'Food & Beverage Solutions',
      description: 'Specialized processing lines and equipment for the food and beverage industry, designed to meet the highest hygiene and quality standards.',
      solutions: [
        {
          name: 'Dairy Processing',
          description: 'Complete milk processing lines, cheese production, yogurt manufacturing, and packaging systems.'
        },
        {
          name: 'Meat Processing',
          description: 'Slaughterhouse equipment, meat processing lines, cold storage, and packaging solutions.'
        },
        {
          name: 'Beverage Production',
          description: 'Bottling lines, juice processing, brewery equipment, and quality control systems.'
        },
        {
          name: 'Horeca Equipment',
          description: 'Professional kitchen equipment, food service solutions, and restaurant automation.'
        }
      ]
    },
    agriculture: {
      title: 'Agriculture Solutions',
      description: 'Comprehensive agricultural infrastructure and processing solutions to optimize farm operations and increase productivity.',
      solutions: [
        {
          name: 'Grain Handling',
          description: 'Grain elevators, storage silos, drying systems, and automated handling equipment.'
        },
        {
          name: 'Oilseed Processing',
          description: 'Oil extraction plants, seed cleaning equipment, and processing line automation.'
        },
        {
          name: 'Livestock Infrastructure',
          description: 'Modern barn construction, feeding systems, milking parlors, and environmental controls.'
        },
        {
          name: 'Irrigation Systems',
          description: 'Precision irrigation, water management systems, and agricultural automation.'
        }
      ]
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Solutions for F&B and Agriculture
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              From Engineering to Industrial Implementation
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Categories
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions across multiple industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {category.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-4">
                    {category.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* General Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Approach
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive services applicable across all industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {generalServices.map((service, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Tailored solutions for specialized industry needs
            </p>
          </div>

          {/* Food & Beverage Solutions */}
          <div id="food-processing" className="mb-16">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 mb-4">
                  {industrySpecific.foodBeverage.title}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  {industrySpecific.foodBeverage.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {industrySpecific.foodBeverage.solutions.map((solution, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{solution.name}</h4>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Agriculture Solutions */}
          <div id="agriculture">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 mb-4">
                  {industrySpecific.agriculture.title}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  {industrySpecific.agriculture.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {industrySpecific.agriculture.solutions.map((solution, index) => (
                    <div key={index} className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{solution.name}</h4>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Methodology
            </h2>
            <p className="text-lg text-gray-600">
              A proven approach to delivering successful projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {methodology.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-gray-400 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find the Right Solution for Your Business
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our experts to discuss your specific requirements and discover how we can help optimize your operations.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            <Link to="/contact">
              Request a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Services

