import { useState, useEffect } from 'react'
import { Search, Calendar, User, Tag, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch articles from backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/blog')
        if (response.ok) {
          const data = await response.json()
          setArticles(data.articles)
        }
      } catch (error) {
        console.error('Error fetching articles:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  // Update categories with actual counts
  const categories = [
    { name: 'All', count: articles.length },
    { name: 'Food', count: articles.filter(a => a.category === 'food').length },
    { name: 'Agriculture', count: articles.filter(a => a.category === 'agriculture').length },
    { name: 'Consulting', count: articles.filter(a => a.category === 'consulting').length },
    { name: 'Engineering', count: articles.filter(a => a.category === 'engineering').length }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory.toLowerCase()
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Newsletter subscription
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      })
      
      if (response.ok) {
        const data = await response.json()
        alert(data.message)
        e.target.reset()
      } else {
        const errorData = await response.json()
        alert(`Error: ${errorData.error}`)
      }
    } catch (error) {
      console.error('Error subscribing:', error)
      alert('Failed to subscribe. Please try again later.')
    }
  }

  const featuredTopics = [
    {
      title: 'Industry Trends',
      description: 'Latest developments in F&B and Agriculture sectors',
      icon: '📈'
    },
    {
      title: 'Technology Insights',
      description: 'Cutting-edge technologies shaping the future',
      icon: '🔬'
    },
    {
      title: 'Case Studies',
      description: 'Real-world applications and success stories',
      icon: '📋'
    },
    {
      title: 'Best Practices',
      description: 'Expert guidance and industry standards',
      icon: '⭐'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & Innovations from Dorostol Trade
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Expert Perspectives on F&B, Agriculture, and Engineering
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={activeCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.name)}
                  className="whitespace-nowrap"
                >
                  {category.name}
                  {category.count > 0 && (
                    <Badge variant="secondary" className="ml-2">
                      {category.count}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Expert Content Coming Soon
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team of industry experts is preparing valuable content covering the latest trends, 
            technologies, and best practices in Food & Beverage processing, Agriculture, and Industrial Engineering.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {featuredTopics.map((topic, index) => (
              <Card key={index} className="text-center p-4">
                <CardHeader>
                  <div className="text-3xl mb-2">{topic.icon}</div>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Article Previews */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Articles
            </h2>
            <p className="text-lg text-gray-600">
              Preview of the expert content we're preparing
            </p>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500">Article Image</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                      <Badge variant="secondary">Coming Soon</Badge>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Be the first to know when we publish new articles and insights. 
            Subscribe to our newsletter for expert content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1"
                required
              />
              <Button type="submit">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Expert Consultation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            While our blog content is in development, our team is ready to provide 
            personalized consultation and expertise for your projects.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            Contact Our Experts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Blog

