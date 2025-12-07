"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroShowcaseSplitOverlay from '@/components/sections/hero/HeroShowcaseSplitOverlay';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import MetricCardTwelve from '@/components/sections/metrics/MetricCardTwelve';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import BlogCardSix from '@/components/sections/blog/BlogCardSix';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactMedia from '@/components/sections/contact/ContactMedia';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Sparkles, Shield, Star, Newspaper, ShoppingBag, Globe, Users, Instagram, Facebook, Twitter, Pinterest, Youtube } from "lucide-react";

export default function StyleHubPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="largeSizeExtraLargeSpacing"
      background="radialGradient"
      cardStyle="solid-accent-light"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120844738-2fbohg7j.jpg"
          logoAlt="Fashion Brand Logo"
          brandName="StyleHub"
          navItems={[
            { name: "Collections", id: "collections" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Shop Now",
            href: "collections"
          }}
          className="rounded-full"
          navItemClassName="text-foreground hover:text-primary-cta transition"
          buttonClassName="bg-primary-cta hover:bg-accent"
          buttonTextClassName="text-background font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroShowcaseSplitOverlay
          title="Elevate Your Style"
          description="Discover our curated collection of premium clothing designed for the modern individual. From timeless classics to contemporary trends, find pieces that express your unique identity."
          tags={["Premium Quality", "Sustainable Fashion", "Free Shipping", "Fast Returns"]}
          buttons={[
            { text: "Explore Collection", href: "collections" },
            { text: "View New Arrivals", href: "products" }
          ]}
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120846793-u52d7kx6.jpg"
          showcaseImageAlt="Premium fashion clothing showcase"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120849895-zhdhu4w0.jpg"
          imageAlt="Featured clothing collection background"
          showDimOverlay={true}
          className="w-full"
          containerClassName="gap-12"
          titleClassName="text-5xl font-light tracking-tight"
          descriptionClassName="text-lg text-foreground/80"
          tagsContainerClassName="flex flex-col gap-2"
          tagClassName="text-primary-cta font-medium"
          buttonContainerClassName="flex gap-4"
          buttonClassName="px-8 py-3 rounded-full"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFive
          title="Featured Collections"
          description="Handpicked pieces from our latest season. Shop our most loved styles that combine quality, comfort, and contemporary design."
          tag="New Arrivals"
          tagIcon={Sparkles}
          products={[
            {
              id: "prod-1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120852301-2bwcpc4f.jpg",
              imageAlt: "Premium dress clothing",
              button: { text: "Add to Cart", id: "add-prod-1" },
              isFavorited: false
            },
            {
              id: "prod-2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120856650-b5nrsdas.jpg",
              imageAlt: "Stylish jacket",
              button: { text: "Add to Cart", id: "add-prod-2" },
              isFavorited: false
            },
            {
              id: "prod-3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120859474-w1tr1j0h.jpg",
              imageAlt: "Casual wear shirt",
              button: { text: "Add to Cart", id: "add-prod-3" },
              isFavorited: false
            },
            {
              id: "prod-4",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120852301-2bwcpc4f.jpg",
              imageAlt: "Fashion piece",
              button: { text: "Add to Cart", id: "add-prod-4" },
              isFavorited: false
            }
          ]}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          className="w-full"
          containerClassName="gap-8"
          gridClassName="gap-6"
          cardClassName="rounded-lg hover:shadow-lg transition"
          imageClassName="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120862220-t70w7po5.jpg"
          imageAlt="Fashion brand team and workspace"
          buttons={[
            { text: "Learn Our Story", href: "#" },
            { text: "Shop Collection", href: "collections" }
          ]}
          useInvertedBackground="noInvert"
          className="w-full"
          mediaWrapperClassName="rounded-2xl overflow-hidden"
          mediaClassName="w-full h-full object-cover"
          buttonContainerClassName="flex gap-4 justify-center"
          buttonClassName="px-8 py-3 rounded-full"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwentyOne
          title="Crafted with Excellence"
          description="Every piece is carefully selected and manufactured using premium materials. We believe in quality that lasts."
          tag="Quality Assurance"
          tagIcon={Shield}
          accordionItems={[
            {
              id: "1",
              title: "Premium Fabrics",
              content: "We source only the finest natural and sustainable fabrics from certified suppliers around the world. Each material is tested for durability and comfort."
            },
            {
              id: "2",
              title: "Sustainable Production",
              content: "Our manufacturing partners follow strict environmental standards. We are committed to reducing waste and carbon footprint in every step of production."
            },
            {
              id: "3",
              title: "Ethical Manufacturing",
              content: "Fair wages, safe working conditions, and worker rights are non-negotiable. We partner only with facilities that meet international labor standards."
            },
            {
              id: "4",
              title: "Quality Control",
              content: "Each garment undergoes rigorous quality checks before shipping. We maintain a 100% satisfaction guarantee on all our products."
            }
          ]}
          buttons={[{ text: "Explore Values", href: "#" }]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120877895-whg55ord.jpg"
          imageAlt="Premium fabric quality showcase"
          useInvertedBackground="noInvert"
          mediaPosition="right"
          className="w-full"
          containerClassName="gap-12"
          titleClassName="text-4xl font-light"
          descriptionClassName="text-foreground/80"
          mediaWrapperClassName="rounded-xl overflow-hidden"
          accordionContainerClassName="space-y-4"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Loved by Our Customers"
          description="Real stories from real people who trust our brand for quality and style."
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              title: "Perfect fit and quality",
              quote: "The attention to detail is incredible. Every piece feels premium and the fit is exactly what I was looking for. I've become a repeat customer.",
              name: "Sarah Mitchell",
              role: "Fashion Enthusiast",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120865981-c4xrwhk5.jpg",
              imageAlt: "Sarah Mitchell profile"
            },
            {
              id: "2",
              title: "Sustainable fashion done right",
              quote: "Finally found a brand that doesn't compromise on quality for sustainability. I feel good about every purchase I make.",
              name: "James Chen",
              role: "Conscious Consumer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120867579-1snq63u7.jpg",
              imageAlt: "James Chen profile"
            },
            {
              id: "3",
              title: "Customer service excellence",
              quote: "From ordering to delivery, the experience was seamless. The team went above and beyond to ensure I was happy with my purchase.",
              name: "Emma Rodriguez",
              role: "Loyal Customer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120870282-aap5id2v.jpg",
              imageAlt: "Emma Rodriguez profile"
            },
            {
              id: "4",
              title: "Worth every penny",
              quote: "These pieces are timeless. They never go out of style and hold up incredibly well. Best investment in my wardrobe.",
              name: "David Park",
              role: "Style Curator",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120872751-paa32qze.jpg",
              imageAlt: "David Park profile"
            },
            {
              id: "5",
              title: "Exceptional value",
              quote: "The quality-to-price ratio is unmatched. I've tried many brands, but this one truly stands out for delivering what it promises.",
              name: "Lisa Anderson",
              role: "Fashion Blogger",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120875086-qwm0kuky.jpg",
              imageAlt: "Lisa Anderson profile"
            },
            {
              id: "6",
              title: "A game-changer",
              quote: "Found my new favorite brand. The designs are fresh, the quality is outstanding, and the values align with mine. Highly recommended.",
              name: "Michael Torres",
              role: "Trendsetter",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120876180-3lxo48qy.jpg",
              imageAlt: "Michael Torres profile"
            }
          ]}
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          className="w-full"
          containerClassName="gap-12"
          textBoxTitleClassName="text-4xl font-light"
          textBoxDescriptionClassName="text-foreground/80"
          quoteCardClassName="rounded-xl p-8"
          quoteClassName="text-lg leading-relaxed text-foreground/90"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwelve
          heroMedia={{
            title: "Building a Global Fashion Community",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120904131-t34koi8y.jpg",
            imageAlt: "Fashion runway showcase"
          }}
          metrics={[
            { icon: ShoppingBag, title: "Products Sold", value: "150K+" },
            { icon: Globe, title: "Countries Served", value: "45+" },
            { icon: Users, title: "Happy Customers", value: "50K+" }
          ]}
          bottomMedia={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120905584-k12ko86i.jpg",
            imageAlt: "Fashion retail shopping experience"
          }}
          animationType="slide-up"
          useInvertedBackground="noInvert"
          className="w-full"
          containerClassName="gap-12"
          heroTitleClassName="text-4xl font-light text-center"
          metricCardClassName="rounded-xl p-8"
          metricTitleClassName="text-lg font-medium"
          valueClassName="text-5xl font-light text-primary-cta"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofThree
          title="Featured In"
          description="We're trusted by leading fashion publications and media outlets worldwide."
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120887979-jb9gvobu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120890810-l59gbkdf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120892647-zetwdyqv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120894476-dkzytwah.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120896221-qtbs1rt1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/instagram-social-media-logo-1765120898732-39d2ed68.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120900058-yvne5738.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120902383-4plwa57l.jpg"
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={35}
          topMarqueeDirection="left"
          className="w-full"
          containerClassName="gap-12"
          textBoxTitleClassName="text-4xl font-light"
          textBoxDescriptionClassName="text-foreground/80"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardSix
          title="Style Insights"
          description="Tips, trends, and inspiration from our fashion experts. Stay updated with the latest in sustainable and timeless style."
          tag="Blog"
          tagIcon={Newspaper}
          blogs={[
            {
              id: "1",
              title: "Essential Wardrobe Basics Every Person Needs",
              tags: ["Styling", "Fashion Guide"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120880026-q4h66vkz.jpg",
              imageAlt: "Styling tips lookbook"
            },
            {
              id: "2",
              title: "The Rise of Sustainable Fashion in 2024",
              tags: ["Sustainability", "Trends"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120881467-2zup4p7i.jpg",
              imageAlt: "Sustainable fashion guide"
            },
            {
              id: "3",
              title: "Winter Fashion: Layering Like a Pro",
              tags: ["Seasonal", "Styling"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120883491-m0qfcvgg.jpg",
              imageAlt: "Winter outfit inspiration"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          className="w-full"
          containerClassName="gap-12"
          textBoxTitleClassName="text-4xl font-light"
          textBoxDescriptionClassName="text-foreground/80"
          gridClassName="gap-8"
          mediaWrapperClassName="rounded-xl overflow-hidden"
          cardClassName="rounded-xl p-6 bg-card"
          cardTitleClassName="text-xl font-semibold text-foreground"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products, shipping, and services."
          tag="Help & Support"
          faqs={[
            {
              id: "1",
              title: "What is your return policy?",
              content: "We offer a 30-day money-back guarantee on all purchases. If you're not completely satisfied, simply return your items in original condition for a full refund."
            },
            {
              id: "2",
              title: "How long does shipping take?",
              content: "Standard shipping takes 5-7 business days. We also offer express shipping (2-3 business days) and international shipping options. Free shipping on orders over $100."
            },
            {
              id: "3",
              title: "Are your products sustainable?",
              content: "Yes, we're committed to sustainability. We use eco-friendly materials, work with ethical manufacturers, and minimize waste in our production process."
            },
            {
              id: "4",
              title: "How do I care for my clothing?",
              content: "Care instructions are included with each piece. Generally, we recommend washing in cold water and air drying to preserve the quality and longevity of your garments."
            },
            {
              id: "5",
              title: "Do you offer gift wrapping?",
              content: "Yes! We offer complimentary gift wrapping on all orders. During checkout, simply select the gift wrapping option."
            },
            {
              id: "6",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, PayPal, and digital wallets. All transactions are secured with SSL encryption."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120886103-3e0vjpqa.jpg"
          imageAlt="Customer support team"
          mediaPosition="left"
          animationType="smooth"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          className="w-full"
          containerClassName="gap-12"
          textBoxTitleClassName="text-4xl font-light"
          textBoxDescriptionClassName="text-foreground/80"
          accordionClassName="bg-card rounded-lg"
          accordionTitleClassName="font-semibold text-foreground"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765120886103-3e0vjpqa.jpg"
          imageAlt="Join our fashion community"
          buttons={[
            { text: "Get in Touch", href: "#contact-form" },
            { text: "Subscribe to Newsletter", href: "#newsletter" }
          ]}
          useInvertedBackground="noInvert"
          className="w-full"
          mediaWrapperClassName="rounded-2xl overflow-hidden"
          mediaClassName="w-full h-full object-cover"
          buttonContainerClassName="flex gap-4 justify-center px-8"
          buttonClassName="px-8 py-3 rounded-full"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseSocial
          logoText="StyleHub"
          description="Elevating fashion with premium quality, sustainable practices, and timeless designs. Discover your style today."
          columns={[
            {
              title: "Shop",
              items: [
                { label: "All Collections", href: "collections" },
                { label: "New Arrivals", href: "products" },
                { label: "Best Sellers", href: "#" },
                { label: "Sale", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Values", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Shipping & Returns", href: "#" },
                { label: "Size Guide", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Terms of Service", href: "#terms" },
                { label: "Cookies", href: "#" },
                { label: "Accessibility", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Pinterest, href: "https://pinterest.com", ariaLabel: "Pinterest" },
            { icon: Youtube, href: "https://youtube.com", ariaLabel: "YouTube" }
          ]}
          copyrightText="© 2025 StyleHub. All rights reserved."
          className="w-full bg-background"
          containerClassName="max-w-7xl mx-auto px-4 py-12 gap-12"
          columnsClassName="grid grid-cols-1 md:grid-cols-4 gap-8"
          columnTitleClassName="font-semibold text-foreground mb-4"
          columnItemClassName="text-foreground/70 hover:text-primary-cta transition"
          socialLinksClassName="flex gap-4"
          socialIconClassName="text-primary-cta hover:text-accent transition"
        />
      </div>
    </ThemeProvider>
  );
}