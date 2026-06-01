import { Link } from 'react-router-dom'
import { Clock, MapPin, Building, Wheat, Factory, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Projects = () => {
  // Template structure for future projects
  const projectTemplate = {
    title: 'Example Project Title',
    industry: 'Food Processing',
    location: 'Bulgaria',
    client: 'Confidential Client',
    challenge: 'Brief description of the problem or need the client faced.',
    solution: 'Detailed explanation of Dorostol Trade\'s approach and the solution implemented.',
    keyFeatures: [
      'Feature 1: Description of important aspect',
      'Feature 2: Technology or methodology used',
      'Feature 3: Innovation or unique element'
    ],
    results: [
      'Quantifiable outcome 1',
      'Benefit achieved 2',
      'Impact measurement 3'
    ],
    testimonial: 'Short quote from the client about the project success.',
    relatedServices: ['Service 1', 'Service 2']
  }

  const projectCategories = [
    {
      icon: Factory,
      title: 'Food Processing Projects',
      description: 'Complete processing lines for dairy, meat, and beverage production',
      count: '50+ Projects'
    },
    {
      icon: Wheat,
      title: 'Agricultural Infrastructure',
      description: 'Grain storage, livestock facilities, and farm automation systems',
      count: '30+ Projects'
    },
    {
      icon: Building,
      title: 'Industrial Engineering',
      description: 'Custom industrial solutions and facility optimization',
      count: '25+ Projects'
    }
  ]

  const upcomingFeatures = [
    'Detailed case studies with before/after comparisons',
    'High-resolution project galleries and videos',
    'Technical specifications and implementation details',
    'Client testimonials and success metrics',
    'Interactive project timeline and milestones',
    'Related service recommendations'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio: Delivering Impactful Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Showcasing Our Engineering and Industrial Expertise
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12">
            <Clock className="h-24 w-24 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Portfolio Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We are actively compiling our extensive project portfolio to showcase the breadth 
              and depth of our engineering and industrial expertise. Our team is preparing detailed 
              case studies, high-quality imagery, and comprehensive project documentation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {projectCategories.map((category, index) => (
                <Card key={index} className="text-center p-6">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <category.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{category.description}</p>
                    <Badge variant="secondary">{category.count}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-gray-600 mb-8">
              Check back soon for detailed project showcases, or contact us directly for specific inquiries about our work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact Us for Project Inquiries
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-gray-600">
              Our upcoming portfolio will feature comprehensive project documentation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Template Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Showcase Preview
            </h2>
            <p className="text-lg text-gray-600">
              Here's how our projects will be presented
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <CardTitle className="text-2xl text-blue-900 mb-2">
                    {projectTemplate.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">
                      <MapPin className="h-3 w-3 mr-1" />
                      {projectTemplate.location}
                    </Badge>
                    <Badge variant="outline">{projectTemplate.industry}</Badge>
                  </div>
                </div>
              </div>
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <p className="text-gray-500">Project Image Gallery</p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                <p className="text-gray-600">{projectTemplate.challenge}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                <p className="text-gray-600">{projectTemplate.solution}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {projectTemplate.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Results & Impact</h3>
                  <ul className="space-y-2">
                    {projectTemplate.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Testimonial</h3>
                <blockquote className="text-gray-600 italic">
                  "{projectTemplate.testimonial}"
                </blockquote>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Services</h3>
                <div className="flex flex-wrap gap-2">
                  {projectTemplate.relatedServices.map((service, index) => (
                    <Badge key={index} variant="secondary">{service}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your needs and explore how our expertise can bring your vision to life.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Projects

