# CanchasYa Platform

## Overview

CanchasYa is a premium sports court reservation platform focused on Barranquilla, Colombia. The platform connects users with high-quality sports facilities including football/soccer courts, basketball courts, tennis complexes, and multi-sport centers. The system provides a comprehensive booking experience with real-time availability, pricing management, payment processing, and administrative controls for court owners.

The platform serves two main user types: customers who book courts and administrators who manage court information, pricing, and bookings. It features a modern, responsive design with mobile-first architecture and supports multiple sports including football, basketball, tennis, and general multi-sport activities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a **multi-page static architecture** with vanilla JavaScript for interactivity. Each court has its own dedicated page for detailed information and booking. The design system is built on **TailwindCSS** with custom CSS for animations and specialized components.

**Key architectural decisions:**
- **Static HTML pages** over SPA framework for better SEO and simpler deployment
- **Component-based JavaScript** organization with dedicated files for booking tables, court cards, and UI components
- **Responsive-first design** using TailwindCSS utility classes
- **Mobile navigation** with hamburger menu and touch-friendly interactions

### Authentication System
Implements a **mock authentication system** with role-based access control supporting two user types: regular users and court administrators. Each admin is assigned to manage a specific court facility.

**Authentication features:**
- Email/password login with remember me functionality
- Role-based routing (admin dashboard vs user interface)
- Session management with localStorage persistence
- Court-specific admin assignments

### Data Management
Uses **JavaScript-based mock data** stored in dedicated files simulating a backend API. Data is organized into logical modules for courts, bookings, and users.

**Data structure:**
- **Courts data** (`data/courts.js`) - Contains facility information, pricing, amenities, and availability
- **Bookings data** (`data/bookings.js`) - Manages reservation records with pricing calculations
- **User authentication** (`js/auth.js`) - Handles user credentials and roles

### Booking System
Implements a **real-time booking engine** with time slot management, pricing calculations, and availability checking. The system supports dynamic pricing based on time periods and additional services.

**Booking features:**
- Interactive time slot selection with visual availability indicators
- Dynamic pricing based on peak hours, weekdays/weekends
- Additional services selection (equipment rental, referee services)
- Booking confirmation and payment integration

### Payment Processing
Supports **multiple payment methods** including local Colombian options (Nequi, Efecty) and international cards (Visa, MasterCard). Payment processing includes real-time calculations with taxes and service fees.

### Administrative Dashboard
Provides **court management capabilities** for administrators including booking oversight, pricing updates, and facility information management. Each admin has access only to their assigned court.

## External Dependencies

### CSS Framework
- **TailwindCSS** (CDN) - Primary styling framework for responsive design and utility classes
- **Font Awesome** (CDN) - Icon library for UI elements and sport-specific icons

### Design Assets
- **Custom SVG assets** for court images, logos, and banners stored in organized directory structure
- **Sport-specific iconography** using Font Awesome classes

### Browser APIs
- **LocalStorage** for session persistence and user preferences
- **DOM manipulation** for dynamic content updates and interactive components

### Future Integration Points
The architecture is prepared for integration with:
- Backend API endpoints (RESTful or GraphQL)
- Database systems (the structure supports SQL-based schemas)
- Payment gateways (Stripe, local Colombian processors)
- SMS/Email notification services
- Google Maps integration for court locations
- Real-time availability updates via WebSocket connections

The codebase follows a modular pattern that allows easy migration from mock data to actual backend services while maintaining the existing user interface and user experience.