import { Users, Target, Eye, Heart, Shield, Lightbulb, Globe, Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and creative solutions to drive industry advancement.'
    },
    {
      icon: Users,
      title: 'Client Focus',
      description: 'Our clients\' success is our priority, and we tailor solutions to meet their unique needs.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We promote environmentally responsible practices and sustainable industrial solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality standards in every project and service we deliver.'
    },
    {
      icon: Heart,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong partnerships with our clients.'
    }
  ]

  const expertise = [
    {
      title: 'Industrial Line Design & Implementation',
      description: 'Complete design and implementation of processing lines for food and agricultural products, from concept to commissioning.'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Strategic sourcing, procurement, and logistics solutions to optimize efficiency and reduce costs.'
    },
    {
      title: 'Agricultural Project Management',
      description: 'End-to-end project management for agricultural infrastructure, including grain storage and livestock facilities.'
    },
    {
      title: 'Consulting & Advisory',
      description: 'Expert consulting services for industrial optimization, regulatory compliance, and strategic planning.'
    }
  ]

  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Dorostol Trade SRL established with a vision to serve the F&B and Agriculture industries.'
    },
    {
      year: '2015',
      title: 'Regional Expansion',
      description: 'Extended operations across Romania and Bulgaria, establishing key partnerships.'
    },
    {
      year: '2018',
      title: '100+ Projects',
      description: 'Reached milestone of 100 completed projects across various industrial sectors.'
    },
    {
      year: '2020',
      title: 'Technology Integration',
      description: 'Integrated advanced automation and IoT solutions into our service offerings.'
    },
    {
      year: '2023',
      title: 'International Recognition',
      description: 'Received industry awards for innovation and sustainable practices.'
    }
  ]

  const team = [
    {
      name: 'Rosen Stanev',
      position: 'Managing Creative Director',
      description: 'Leading the strategic vision and creative direction of Dorostol Trade with over 15 years of industry experience.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Engineering Team Lead',
      position: 'Chief Engineer',
      description: 'Overseeing technical implementation and ensuring the highest standards in all engineering projects.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Operations Director',
      position: 'Operations Manager',
      description: 'Managing day-to-day operations and ensuring seamless project delivery across all locations.',
      image: '/api/placeholder/300/300'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story: Engineering the Future of F&B and Agriculture
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Innovation, Expertise, and Partnership
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  To deliver innovative, sustainable, and efficient industrial solutions that empower 
                  businesses in the Food & Beverage and Agriculture sectors to achieve operational 
                  excellence and drive growth across Romania, Bulgaria, and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  To be the leading provider of integrated industrial solutions in Southeast Europe, 
                  recognized for our innovation, reliability, and commitment to transforming the 
                  Food & Beverage and Agriculture industries through cutting-edge technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The guiding principles that define our culture and operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600">
              Specialized capabilities that set us apart
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Meet the experts behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our company's development
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6">
                      <CardHeader>
                        <CardTitle className="text-xl text-blue-900">{milestone.title}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-blue-600">
                          {milestone.year}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Presence Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-gray-600">
              Strategic presence across Southeast Europe
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  🇧🇬 Bulgaria Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our Bulgarian operations serve as a key hub for regional projects and client services.
                </p>
                <p className="text-sm text-gray-500">
                  [Detailed address to be provided]
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  🇷🇴 Romania Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our Romanian headquarters coordinates international expansion and strategic partnerships.
                </p>
                <p className="text-sm text-gray-500">
                  [Detailed address to be provided]
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

