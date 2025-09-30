import { NextResponse } from 'next/server'

// Sample data for the fashion store
const sampleProducts = [
  {
    id: 1,
    name: 'Premium Leather Handbag',
    price: 850,
    originalPrice: 1200,
    category: 'handbags',
    description: 'Luxurious handcrafted leather handbag with premium hardware.',
    inStock: true,
    rating: 5
  },
  {
    id: 2,
    name: 'Elegant Blazer Set',
    price: 680,
    originalPrice: null,
    category: 'blazers',
    description: 'Sophisticated blazer set perfect for professional settings.',
    inStock: true,
    rating: 5
  },
  {
    id: 3,
    name: 'Designer Midi Dress',
    price: 520,
    originalPrice: 720,
    category: 'dresses',
    description: 'Elegant midi dress crafted from premium silk blend.',
    inStock: true,
    rating: 4
  }
]

const sampleNews = [
  {
    id: 1,
    title: 'Spring 2024 Collection Launch',
    date: '2024-03-15',
    excerpt: 'Discover our latest spring collection featuring sustainable luxury pieces.',
    category: 'Collection',
    content: 'Full article content about the spring collection...'
  },
  {
    id: 2,
    title: 'Sustainable Fashion Initiative',
    date: '2024-03-10',
    excerpt: 'LUXE announces new partnership with ethical manufacturers.',
    category: 'Sustainability',
    content: 'Full article content about sustainability initiative...'
  }
]

const sampleOrders = [
  {
    id: '12345',
    date: '2024-03-15',
    status: 'Delivered',
    total: 1250,
    items: [
      { productId: 1, quantity: 1, price: 850 },
      { productId: 2, quantity: 1, price: 400 }
    ]
  },
  {
    id: '12344',
    date: '2024-03-10',
    status: 'Shipped',
    total: 850,
    items: [
      { productId: 1, quantity: 1, price: 850 }
    ]
  }
]

// Helper function to handle CORS
function corsResponse(data = null, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return corsResponse()
}

// GET handler
export async function GET(request, { params }) {
  try {
    const path = params?.path || []
    const endpoint = path.join('/')
    
    console.log('GET request to:', endpoint)
    
    switch (endpoint) {
      case 'products':
        return corsResponse({
          success: true,
          data: sampleProducts,
          total: sampleProducts.length
        })
        
      case 'news':
        return corsResponse({
          success: true,
          data: sampleNews,
          total: sampleNews.length
        })
        
      case 'orders':
        return corsResponse({
          success: true,
          data: sampleOrders,
          total: sampleOrders.length
        })
        
      case 'health':
        return corsResponse({
          success: true,
          message: 'LUXE Fashion API is running',
          timestamp: new Date().toISOString()
        })
        
      default:
        // Handle product by ID
        if (path[0] === 'products' && path[1]) {
          const productId = parseInt(path[1])
          const product = sampleProducts.find(p => p.id === productId)
          
          if (product) {
            return corsResponse({
              success: true,
              data: product
            })
          } else {
            return corsResponse({
              success: false,
              error: 'Product not found'
            }, 404)
          }
        }
        
        // Handle news by ID
        if (path[0] === 'news' && path[1]) {
          const newsId = parseInt(path[1])
          const newsItem = sampleNews.find(n => n.id === newsId)
          
          if (newsItem) {
            return corsResponse({
              success: true,
              data: newsItem
            })
          } else {
            return corsResponse({
              success: false,
              error: 'News article not found'
            }, 404)
          }
        }
        
        return corsResponse({
          success: false,
          error: 'Endpoint not found',
          availableEndpoints: [
            '/api/products',
            '/api/products/:id',
            '/api/news',
            '/api/news/:id',
            '/api/orders',
            '/api/health'
          ]
        }, 404)
    }
    
  } catch (error) {
    console.error('API GET Error:', error)
    return corsResponse({
      success: false,
      error: 'Internal server error',
      message: error.message
    }, 500)
  }
}

// POST handler
export async function POST(request, { params }) {
  try {
    const path = params?.path || []
    const endpoint = path.join('/')
    const body = await request.json()
    
    console.log('POST request to:', endpoint, 'with body:', body)
    
    switch (endpoint) {
      case 'orders':
        // Create new order
        const newOrder = {
          id: Date.now().toString(),
          date: new Date().toISOString().split('T')[0],
          status: 'Processing',
          total: body.total || 0,
          items: body.items || []
        }
        
        return corsResponse({
          success: true,
          data: newOrder,
          message: 'Order created successfully'
        }, 201)
        
      case 'newsletter':
        // Newsletter subscription
        if (!body.email) {
          return corsResponse({
            success: false,
            error: 'Email is required'
          }, 400)
        }
        
        return corsResponse({
          success: true,
          message: 'Successfully subscribed to newsletter',
          data: { email: body.email }
        })
        
      case 'contact':
        // Contact form
        if (!body.name || !body.email || !body.message) {
          return corsResponse({
            success: false,
            error: 'Name, email, and message are required'
          }, 400)
        }
        
        return corsResponse({
          success: true,
          message: 'Contact form submitted successfully',
          data: {
            id: Date.now().toString(),
            ...body,
            timestamp: new Date().toISOString()
          }
        })
        
      default:
        return corsResponse({
          success: false,
          error: 'Endpoint not found',
          availableEndpoints: [
            'POST /api/orders',
            'POST /api/newsletter',
            'POST /api/contact'
          ]
        }, 404)
    }
    
  } catch (error) {
    console.error('API POST Error:', error)
    return corsResponse({
      success: false,
      error: 'Internal server error',
      message: error.message
    }, 500)
  }
}

// PUT handler
export async function PUT(request, { params }) {
  try {
    const path = params?.path || []
    const endpoint = path.join('/')
    const body = await request.json()
    
    console.log('PUT request to:', endpoint, 'with body:', body)
    
    // Handle order status updates
    if (path[0] === 'orders' && path[1]) {
      const orderId = path[1]
      const order = sampleOrders.find(o => o.id === orderId)
      
      if (order) {
        // Update order status
        order.status = body.status || order.status
        
        return corsResponse({
          success: true,
          data: order,
          message: 'Order updated successfully'
        })
      } else {
        return corsResponse({
          success: false,
          error: 'Order not found'
        }, 404)
      }
    }
    
    return corsResponse({
      success: false,
      error: 'Endpoint not found'
    }, 404)
    
  } catch (error) {
    console.error('API PUT Error:', error)
    return corsResponse({
      success: false,
      error: 'Internal server error',
      message: error.message
    }, 500)
  }
}

// DELETE handler
export async function DELETE(request, { params }) {
  try {
    const path = params?.path || []
    const endpoint = path.join('/')
    
    console.log('DELETE request to:', endpoint)
    
    // Handle order deletion
    if (path[0] === 'orders' && path[1]) {
      const orderId = path[1]
      const orderIndex = sampleOrders.findIndex(o => o.id === orderId)
      
      if (orderIndex > -1) {
        const deletedOrder = sampleOrders.splice(orderIndex, 1)[0]
        
        return corsResponse({
          success: true,
          data: deletedOrder,
          message: 'Order deleted successfully'
        })
      } else {
        return corsResponse({
          success: false,
          error: 'Order not found'
        }, 404)
      }
    }
    
    return corsResponse({
      success: false,
      error: 'Endpoint not found'
    }, 404)
    
  } catch (error) {
    console.error('API DELETE Error:', error)
    return corsResponse({
      success: false,
      error: 'Internal server error',
      message: error.message
    }, 500)
  }
}