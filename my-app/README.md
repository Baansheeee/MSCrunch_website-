# 🍿 NIMKO - Premium Snacks E-Commerce Website

A beautiful, fully responsive e-commerce website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS** featuring premium snacks with animations and cart functionality.

## ✨ Features

### 🏠 **Homepage**
- **Hero Section** - Eye-catching banner with animated snack emojis
- **Featured Products** - Showcase of handpicked favorite products
- **Testimonials Carousel** - Auto-rotating customer reviews with 5-star ratings
- **Why Choose NIMKO Section** - Benefits highlighting quality, freshness, pricing, etc.
- **Call-to-Action** - Engaging sections encouraging shopping

### 🛍️ **Products Page**
- Display all 9 premium snack products in a responsive grid
- Product cards with images, ratings, reviews, and prices
- Quick "Add to Cart" buttons with visual feedback

### 🔍 **Product Detail Page**
- Full product information and description
- High-quality product image
- Detailed specifications (weight, ingredients)
- Quantity selector with increment/decrement
- Customer ratings and reviews count
- Related products recommendations
- Features icons (Free Shipping, Easy Returns, Secure Payment, 24/7 Support)

### 🛒 **Shopping Cart**
- View all items in cart with product images
- Adjust quantities with +/- buttons
- Remove items functionality
- Order summary with:
  - Subtotal calculation
  - Free shipping
  - Tax calculation (5%)
  - Total pricing
- Empty cart state with suggestions
- Clear cart functionality
- Persistent storage using browser's localStorage

### 🎨 **Design & UX**
- **Responsive Design** - Fully mobile, tablet, and desktop optimized
- **Animations** - Smooth fade-in, slide-down, and bounce effects
- **Gradient Backgrounds** - Orange to red gradient theme
- **Hover Effects** - Interactive cards with scale and shadow effects
- **Sticky Header** - Navigation always accessible with cart badge
- **Mobile Menu** - Hamburger menu for mobile devices

### 📱 **Navigation**
- **Header** - Sticky navigation with logo, home, products, and cart links
- **Footer** - Company info, quick links, social media, and contact
- **Breadcrumbs** - Easy navigation tracking on product pages

## 🚀 Getting Started

### Prerequisites
- Node.js 18+

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
my-app/
├── app/
│   ├── layout.tsx              # Root layout with Header and Footer
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles and animations
│   ├── products/
│   │   └── page.tsx            # All products page
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx        # Product detail page
│   └── cart/
│       └── page.tsx            # Shopping cart page
├── components/
│   ├── Header.tsx              # Navigation header with cart badge
│   ├── Hero.tsx                # Hero section with animations
│   ├── ProductCard.tsx         # Reusable product card component
│   ├── Testimonials.tsx        # Customer testimonials carousel
│   └── Footer.tsx              # Footer section
├── lib/
│   ├── types.ts                # TypeScript interfaces
│   ├── products.ts             # Product data and testimonials
│   └── cart.ts                 # Cart management utilities
├── public/
│   └── products/               # Product images
└── package.json
```

## 🛠️ Core Technologies

- **Next.js 16** - React framework with app router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **next/font** - Optimized fonts (Geist)

## 📦 Products Included

1. Classic Nimko Bites - $2.99
2. Spicy Masala Mix - $3.49
3. Honey Roasted Crunch - $3.99
4. Cheese & Herb Twist - $2.79
5. Rainbow Fusion - $4.49
6. Garlic & Pepper Crisp - $3.29
7. BBQ Special - $3.79
8. Oregano Delight - $3.49
9. Limited Edition Wasabi - $4.99

## 🎯 Key Features Explained

### Cart Management (localStorage)
The cart is persisted using browser's localStorage with the following functions:

```typescript
// Get cart items
getCart(): CartItem[]

// Add items to cart
addToCart(product: CartItem): CartItem[]

// Remove items
removeFromCart(productId: number): CartItem[]

// Update quantity
updateCartQuantity(productId: number, quantity: number): CartItem[]

// Clear entire cart
clearCart(): void

// Get total price and item count
getCartTotal(): number
getCartItemCount(): number
```

### Animations

- **fadeIn** - Smooth fade-in effect (1s)
- **fadeInUp** - Fade-in with upward movement (0.8s)
- **slideDown** - Mobile menu slide down (0.3s)
- **bounce** - Built-in Tailwind bounce
- **pulse** - Built-in Tailwind pulse

## 🎨 Color Scheme

- **Primary**: Orange (`#f97316`) to Red (`#ef4444`)
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Yellow for ratings (`#facc15`)
- **Success**: Green for confirmations (`#22c55e`)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Features

- Optimized images
- Smooth animations with CSS transforms
- Lazy loading support
- Server-side rendering (SSR) ready
- Static generation for better performance

## 🔄 Data Flow

```
User clicks product → ProductCard component → Navigates to /product/[id]
User selects quantity → Clicks "Add to Cart"
→ addToCart function saves to localStorage
→ Header component updates cart badge
→ User navigates to /cart → Views and manages cart items
→ Updates quantities or removes items
→ Proceeds to checkout
```

## 🌟 Customization

### Adding New Products

Edit `lib/products.ts`:

```typescript
{
  id: 10,
  name: "New Product",
  image: "/products/your-image.jpeg",
  price: 3.99,
  rating: 4.8,
  reviews: 100,
  description: "Product description",
  ingredients: ["ingredient1", "ingredient2"],
  weight: "200g",
  featured: true,
}
```

### Changing Theme Colors

Edit `app/globals.css` and Tailwind classes in components to customize the orange/red theme.

## 📋 Available Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
The project can be deployed on any platform supporting Node.js 18+:
- Netlify
- AWS Amplify
- DigitalOcean
- Self-hosted servers

## 📝 Notes

- Cart data persists using localStorage (browser limit: ~5-10MB)
- Checkout button is a placeholder - implement your payment gateway
- All product images are in `/public/products/`
- For production, implement proper error handling and validation

## 🤝 Contributing

Feel free to customize and extend the website with:
- Payment gateway integration
- User authentication
- Order tracking
- Admin dashboard
- Database integration
- Email notifications

**Built with ❤️ for NIMKO Premium Snacks**

Enjoy creating your e-commerce experience!
