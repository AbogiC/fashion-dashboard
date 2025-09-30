'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Menu, X, Search, ShoppingBag, User, Heart,
  Star, ArrowRight, Instagram, Twitter, Facebook
} from 'lucide-react'

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'news', label: 'News' },
    { id: 'about', label: 'About Us' },
    { id: 'profile', label: 'Profile' },
    { id: 'shop', label: 'Shop' }
  ]

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-black">LUXE</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-black border-b-2 border-black pb-1'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            <Heart className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            <ShoppingBag className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            <User className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id)
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left py-2 text-sm font-medium ${
                  currentPage === item.id ? 'text-black' : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-50 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1530904655194-92d55d4a006b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBmYXNoaW9ufGVufDB8fHxibGFja19hbmRfd2hpdGV8MTc1OTIxNTQ3NXww&ixlib=rb-4.1.0&q=85')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">Timeless Elegance</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto px-4">
            Discover our exclusive collection of luxury fashion pieces crafted for the modern connoisseur
          </p>
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg">
            Explore Collection
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Featured Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Handpicked pieces that embody luxury and sophistication</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1590739169125-a9438401596a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9ufGVufDB8fHxibGFja19hbmRfd2hpdGV8MTc1OTIxNTQ3NXww&ixlib=rb-4.1.0&q=85',
                title: 'Premium Leather Handbag',
                price: '$850',
                originalPrice: '$1200'
              },
              {
                image: 'https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzU5MjE1NDgxfDA&ixlib=rb-4.1.0&q=85',
                title: 'Elegant Blazer Set',
                price: '$680',
                originalPrice: null
              },
              {
                image: 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzU5MjE1NDgxfDA&ixlib=rb-4.1.0&q=85',
                title: 'Designer Midi Dress',
                price: '$520',
                originalPrice: '$720'
              }
            ].map((product, index) => (
              <Card key={index} className="group cursor-pointer overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold mb-2">{product.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in 1985, LUXE has been at the forefront of luxury fashion, creating timeless pieces 
                that transcend seasons and trends. Our commitment to exceptional craftsmanship and sustainable 
                practices has made us a trusted name among fashion connoisseurs worldwide.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Every piece in our collection is carefully curated to ensure it meets our exacting standards 
                of quality, style, and ethical production.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541519481457-763224276691?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzU5MjE1NDgxfDA&ixlib=rb-4.1.0&q=85"
                alt="Fashion Story"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const GalleryPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Fashion Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our latest collections and timeless pieces</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzU5MjE1NDgxfDA&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1541519481457-763224276691?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzU5MjE1NDgxfDA&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzU5MjE1NDgxfDA&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1659522761051-a6f5317d2859?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzU5MjE1NDgxfDA&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1590739169125-a9438401596a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9ufGVufDB8fHxibGFja19hbmRfd2hpdGV8MTc1OTIxNTQ3NXww&ixlib=rb-4.1.0&q=85',
            'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg'
          ].map((image, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const NewsPage = () => {
  const newsItems = [
    {
      title: "Spring 2024 Collection Launch",
      date: "March 15, 2024",
      excerpt: "Discover our latest spring collection featuring sustainable luxury pieces crafted with eco-friendly materials.",
      image: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzU5MjE1NDgxfDA&ixlib=rb-4.1.0&q=85",
      category: "Collection"
    },
    {
      title: "Sustainable Fashion Initiative",
      date: "March 10, 2024",
      excerpt: "LUXE announces new partnership with ethical manufacturers to reduce environmental impact.",
      image: "https://images.unsplash.com/photo-1541519481457-763224276691?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzU5MjE1NDgxfDA&ixlib=rb-4.1.0&q=85",
      category: "Sustainability"
    },
    {
      title: "Fashion Week Highlights",
      date: "March 5, 2024",
      excerpt: "Recap of our stunning runway show at Paris Fashion Week, featuring 30 exclusive pieces.",
      image: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzU5MjE1NDgxfDA&ixlib=rb-4.1.0&q=85",
      category: "Events"
    }
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Fashion News</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Stay updated with the latest from LUXE and the fashion world</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="group cursor-pointer overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">{item.category}</Badge>
                <h3 className="font-playfair text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const AboutPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">About LUXE</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Crafting timeless elegance since 1985</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-playfair font-bold mb-6">Our Heritage</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              LUXE was founded with a simple yet profound vision: to create fashion that transcends 
              time and trends. For nearly four decades, we have been committed to exceptional 
              craftsmanship, sustainable practices, and timeless design.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our atelier in Milan combines traditional techniques with modern innovation, 
              ensuring every piece meets our exacting standards of quality and elegance.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg"
              alt="Our Heritage"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">39</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">50+</div>
            <div className="text-gray-600">Countries Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">100%</div>
            <div className="text-gray-600">Sustainable Materials</div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">Every piece is crafted with meticulous attention to detail and the finest materials.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">We are committed to ethical practices and environmental responsibility.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">Blending traditional craftsmanship with modern design and technology.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProfilePage = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8">My Profile</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="p-6">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-12 h-12 text-gray-400" />
                  </div>
                  <h2 className="text-2xl font-playfair font-semibold">Jane Doe</h2>
                  <p className="text-gray-600">Premium Member</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <p className="text-gray-900">jane.doe@email.com</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Member Since</label>
                    <p className="text-gray-900">January 2023</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Loyalty Points</label>
                    <p className="text-gray-900">2,450 points</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <Card className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-4">Recent Orders</h3>
                  <div className="space-y-4">
                    {[
                      { id: '#12345', date: 'Mar 15, 2024', status: 'Delivered', total: '$1,250' },
                      { id: '#12344', date: 'Mar 10, 2024', status: 'Shipped', total: '$850' },
                      { id: '#12343', date: 'Mar 5, 2024', status: 'Processing', total: '$650' }
                    ].map((order, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100">
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{order.total}</p>
                          <Badge variant={order.status === 'Delivered' ? 'secondary' : 'outline'}>
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-4">Wishlist</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        name: 'Silk Evening Dress',
                        price: '$780',
                        image: 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzU5MjE1NDgxfDA&ixlib=rb-4.1.0&q=85'
                      },
                      {
                        name: 'Designer Handbag',
                        price: '$950',
                        image: 'https://images.unsplash.com/photo-1590739169125-a9438401596a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9ufGVufDB8fHxibGFja19hbmRfd2hpdGV8MTc1OTIxNTQ3NXww&ixlib=rb-4.1.0&q=85'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-gray-600">{item.price}</p>
                        </div>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'dresses', label: 'Dresses' },
    { id: 'handbags', label: 'Handbags' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'blazers', label: 'Blazers' }
  ]
  
  const products = [
    {
      id: 1,
      name: 'Premium Leather Handbag',
      price: '$850',
      originalPrice: '$1200',
      category: 'handbags',
      image: 'https://images.unsplash.com/photo-1590739169125-a9438401596a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9ufGVufDB8fHxibGFja19hbmRfd2hpdGV8MTc1OTIxNTQ3NXww&ixlib=rb-4.1.0&q=85',
      rating: 5
    },
    {
      id: 2,
      name: 'Elegant Blazer Set',
      price: '$680',
      originalPrice: null,
      category: 'blazers',
      image: 'https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzU5MjE1NDgxfDA&ixlib=rb-4.1.0&q=85',
      rating: 5
    },
    {
      id: 3,
      name: 'Designer Midi Dress',
      price: '$520',
      originalPrice: '$720',
      category: 'dresses',
      image: 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzU5MjE1NDgxfDA&ixlib=rb-4.1.0&q=85',
      rating: 4
    },
    {
      id: 4,
      name: 'Luxury Evening Gown',
      price: '$1,250',
      originalPrice: null,
      category: 'dresses',
      image: 'https://images.unsplash.com/photo-1659522761051-a6f5317d2859?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzU5MjE1NDgxfDA&ixlib=rb-4.1.0&q=85',
      rating: 5
    },
    {
      id: 5,
      name: 'Classic Clutch Bag',
      price: '$320',
      originalPrice: '$450',
      category: 'handbags',
      image: 'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg',
      rating: 4
    },
    {
      id: 6,
      name: 'Statement Earrings',
      price: '$180',
      originalPrice: null,
      category: 'accessories',
      image: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg',
      rating: 5
    }
  ]
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Luxury Shop</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our exclusive collection of premium fashion pieces</p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group cursor-pointer overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Heart className="w-6 h-6 text-white hover:text-red-500 cursor-pointer" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-2xl font-bold">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < product.rating 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">LUXE</h3>
            <p className="text-gray-300 mb-4">
              Timeless elegance and luxury fashion for the modern connoisseur.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
              <Facebook className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Gallery</a></li>
              <li><a href="#" className="hover:text-white">Shop</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Size Guide</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe for exclusive offers and updates</p>
            <div className="flex">
              <Input 
                placeholder="Your email" 
                className="bg-white text-black"
              />
              <Button className="ml-2 bg-white text-black hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LUXE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />
      case 'gallery': return <GalleryPage />
      case 'news': return <NewsPage />
      case 'about': return <AboutPage />
      case 'profile': return <ProfilePage />
      case 'shop': return <ShopPage />
      default: return <HomePage />
    }
  }
  
  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  )
}