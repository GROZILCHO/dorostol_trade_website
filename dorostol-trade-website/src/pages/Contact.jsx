import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        alert('Thank you for your message! We will get back to you soon.')
      } else {
        const errorData = await response.json()
        alert(`Error: ${errorData.error || 'Failed to send message'}`)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send message. Please try again later.')
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+40 XXX XXX XXX', '+359 XXX XXX XXX'],
      description: 'Call us during business hours'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@dorostol.trade', 'projects@dorostol.trade'],
      description: 'Send us an email anytime'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
      description: 'EET (Eastern European Time)'
    }
  ]

  const offices = [
    {
      country: 'Bulgaria',
      flag: '🇧🇬',
      address: '[Bulgarian Office Address]',
      city: '[City], Bulgaria',
      postal: '[Postal Code]',
      description: 'Our Bulgarian operations center serves regional projects and provides local support.'
    },
    {
      country: 'Romania',
      flag: '🇷🇴',
      address: '[Romanian Office Address]',
      city: '[City], Romania',
      postal: '[Postal Code]',
      description: 'Our Romanian headquarters coordinates international expansion and strategic partnerships.'
    }
  ]

  const reasons = [
    {
      title: 'Project Consultation',
      description: 'Discuss your industrial or agricultural project requirements'
    },
    {
      title: 'Service Inquiries',
      description: 'Learn more about our engineering and consulting services'
    },
    {
      title: 'Partnership Opportunities',
      description: 'Explore potential collaboration and business partnerships'
    },
    {
      title: 'Technical Support',
      description: 'Get assistance with existing projects or equipment'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch with Dorostol Trade
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Let's Discuss Your Next Project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your inquiry"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your project or inquiry..."
                        rows={6}
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <info.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-gray-700">{detail}</p>
                            ))}
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg">Follow Us</CardTitle>
                  <CardDescription>
                    Stay connected with our latest updates and industry insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-blue-600" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-gray-600">
              Visit us at our offices across Southeast Europe
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {offices.map((office, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <span className="text-2xl mr-3">{office.flag}</span>
                    {office.country} Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                    <div>
                      <p className="text-gray-700">{office.address}</p>
                      <p className="text-gray-700">{office.city}</p>
                      <p className="text-gray-700">{office.postal}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{office.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map Placeholder */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-xl">Find Us on the Map</CardTitle>
              <CardDescription>
                Interactive map showing our office locations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">Google Maps integration will be added here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Contact Us?
            </h2>
            <p className="text-lg text-gray-600">
              We're here to help with all your industrial and agricultural needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <CardTitle className="text-lg">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of experts is standing by to discuss your requirements and provide tailored solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

