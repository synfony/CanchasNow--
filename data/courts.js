// Courts data for CanchasYa platform
// Contains all court information for the 5 featured courts in Barranquilla

const courts = [
    {
        id: 'la-del-pibe',
        name: 'La del Pibe',
        sport: 'Football',
        description: 'Professional football court with artificial grass and modern facilities. Perfect for both casual games and competitive matches with FIFA-standard dimensions and professional lighting.',
        address: 'Calle 45 #23-67, Barranquilla, Colombia',
        phone: '+57 300 123 4567',
        email: 'info@ladelpibe.com',
        location: 'Norte, Barranquilla',
        rating: 4.9,
        reviews: 127,
        images: {
            banner: 'assets/courts/la-del-pibe/banner.svg',
            gallery: [
                'assets/courts/la-del-pibe/gallery-1.svg',
                'assets/courts/la-del-pibe/gallery-2.svg'
            ]
        },
        pricing: {
            weekday: 25,
            weekend: 35,
            currency: 'USD',
            peakHours: {
                start: 18,
                end: 20,
                rate: 40
            }
        },
        hours: {
            open: '06:00',
            close: '22:00',
            timezone: 'America/Bogota'
        },
        features: [
            'Professional Artificial Grass',
            'LED Floodlighting',
            'Changing Rooms',
            'Free Parking',
            'Equipment Rental',
            'Refreshment Area',
            'Security System',
            'Online Booking'
        ],
        amenities: {
            parking: true,
            changingRooms: true,
            showers: true,
            equipment: true,
            refreshments: true,
            wifi: true,
            security: true,
            firstAid: true
        },
        capacity: {
            players: 22,
            spectators: 200
        },
        dimensions: {
            length: 105,
            width: 68,
            unit: 'meters'
        },
        surface: 'Artificial Grass',
        additionalServices: [
            { name: 'Ball Rental', price: 5 },
            { name: 'Jersey Set (11 players)', price: 15 },
            { name: 'Referee Service', price: 25 },
            { name: 'Photography Service', price: 50 }
        ],
        rules: [
            'No metal studs allowed',
            'Maximum 22 players on field',
            'No smoking in facility',
            'Respect other players and staff',
            'Clean up after use'
        ],
        coordinates: {
            latitude: 10.9639,
            longitude: -74.7964
        },
        socialMedia: {
            instagram: '@ladelpibe_barranquilla',
            facebook: 'La del Pibe Barranquilla',
            whatsapp: '+573001234567'
        },
        status: 'active',
        verified: true,
        featured: true,
        lastUpdated: '2025-01-15T10:00:00Z'
    },
    {
        id: 'elite-sports',
        name: 'Elite Sports Center',
        sport: 'Multi-Sport',
        description: 'Premier multi-sport facility offering world-class courts for tennis, basketball, volleyball, and fitness. Climate-controlled environment with professional equipment.',
        address: 'Av. Circunvalar #89-123, Barranquilla, Colombia',
        phone: '+57 300 987 6543',
        email: 'contact@elitesports.com',
        location: 'Norte, Barranquilla',
        rating: 4.8,
        reviews: 89,
        images: {
            banner: 'assets/courts/elite-sports/banner.svg',
            gallery: [
                'assets/courts/elite-sports/gallery-1.svg'
            ]
        },
        pricing: {
            weekday: 30,
            weekend: 40,
            currency: 'USD',
            sports: {
                tennis: 30,
                basketball: 25,
                volleyball: 20,
                fitness: 15
            }
        },
        hours: {
            open: '05:00',
            close: '23:00',
            timezone: 'America/Bogota'
        },
        features: [
            'Indoor Climate Control',
            'Professional Courts',
            'Equipment Rental',
            'Locker Rooms',
            'Pro Shop',
            'Coaching Available',
            'Multiple Sports',
            'Modern Facilities'
        ],
        amenities: {
            parking: true,
            changingRooms: true,
            showers: true,
            equipment: true,
            refreshments: true,
            wifi: true,
            security: true,
            firstAid: true,
            airConditioning: true,
            proShop: true
        },
        sports: ['Tennis', 'Basketball', 'Volleyball', 'Fitness'],
        capacity: {
            tennis: 4,
            basketball: 10,
            volleyball: 12,
            fitness: 20,
            spectators: 150
        },
        surface: 'Multi-Surface',
        additionalServices: [
            { name: 'Equipment Rental', price: 10 },
            { name: 'Personal Trainer', price: 40 },
            { name: 'Towel Service', price: 5 },
            { name: 'Sports Massage', price: 35 }
        ],
        rules: [
            'Appropriate sports attire required',
            'No outside food or drinks',
            'Respect equipment and facilities',
            'Follow sport-specific rules',
            'Book in advance for peak hours'
        ],
        coordinates: {
            latitude: 11.0041,
            longitude: -74.8070
        },
        socialMedia: {
            instagram: '@elitesports_baq',
            facebook: 'Elite Sports Center Barranquilla',
            whatsapp: '+573009876543'
        },
        status: 'active',
        verified: true,
        featured: true,
        lastUpdated: '2025-01-15T10:00:00Z'
    },
    {
        id: 'champions-court',
        name: 'Champions Court',
        sport: 'Basketball',
        description: 'Elite basketball arena with NBA-standard hardwood flooring and professional-grade hoops. Features video analysis system and championship memorabilia.',
        address: 'Carrera 38 #84-15, Barranquilla, Colombia',
        phone: '+57 301 456 7890',
        email: 'info@championscourt.com',
        location: 'Centro, Barranquilla',
        rating: 5.0,
        reviews: 156,
        images: {
            banner: 'assets/courts/champions-court/banner.svg',
            gallery: [
                'assets/courts/champions-court/gallery-1.svg'
            ]
        },
        pricing: {
            weekday: 28,
            weekend: 38,
            currency: 'USD',
            peakHours: {
                start: 18,
                end: 21,
                rate: 40
            }
        },
        hours: {
            open: '06:00',
            close: '23:00',
            timezone: 'America/Bogota'
        },
        features: [
            'NBA-Standard Hardwood',
            'Professional Hoops',
            'Stadium Lighting',
            'Video Analysis System',
            'Player Lounge',
            'Championship Memorabilia',
            'Tournament Hosting',
            'Coaching Staff'
        ],
        amenities: {
            parking: true,
            changingRooms: true,
            showers: true,
            equipment: true,
            refreshments: true,
            wifi: true,
            security: true,
            firstAid: true,
            videoAnalysis: true,
            playerLounge: true
        },
        capacity: {
            players: 10,
            spectators: 300
        },
        dimensions: {
            length: 28.7,
            width: 15.2,
            unit: 'meters'
        },
        surface: 'Hardwood',
        additionalServices: [
            { name: 'Ball Package', price: 8 },
            { name: 'Video Recording', price: 20 },
            { name: 'Personal Coach', price: 50 },
            { name: 'Team Training Session', price: 100 }
        ],
        rules: [
            'Basketball shoes required',
            'Maximum 10 players per session',
            'No dunking during warm-up',
            'Respect court and equipment',
            'Professional conduct required'
        ],
        coordinates: {
            latitude: 10.9685,
            longitude: -74.7813
        },
        socialMedia: {
            instagram: '@championscourt_baq',
            facebook: 'Champions Court Barranquilla',
            whatsapp: '+573014567890'
        },
        status: 'active',
        verified: true,
        featured: true,
        lastUpdated: '2025-01-15T10:00:00Z'
    },
    {
        id: 'golden-field',
        name: 'Golden Field',
        sport: 'Soccer',
        description: 'Premium soccer arena with FIFA-standard natural grass and underground drainage system. Features stadium seating and professional officials.',
        address: 'Vía 40 #98-234, Barranquilla, Colombia',
        phone: '+57 302 789 0123',
        email: 'booking@goldenfield.com',
        location: 'Norte, Barranquilla',
        rating: 4.7,
        reviews: 203,
        images: {
            banner: 'assets/courts/golden-field/banner.svg',
            gallery: [
                'assets/courts/golden-field/gallery-1.svg'
            ]
        },
        pricing: {
            weekday: 35,
            weekend: 50,
            currency: 'USD',
            matchTypes: {
                casual: 0,
                tournament: 20,
                training: 0
            }
        },
        hours: {
            open: '07:00',
            close: '22:00',
            timezone: 'America/Bogota'
        },
        features: [
            'FIFA-Standard Natural Grass',
            'Underground Drainage',
            'Professional Goals',
            'Stadium Seating',
            'VIP Facilities',
            'Match Officials',
            'Weather Protection',
            'Premium Surface'
        ],
        amenities: {
            parking: true,
            changingRooms: true,
            showers: true,
            equipment: true,
            refreshments: true,
            wifi: true,
            security: true,
            firstAid: true,
            stadiumSeating: true,
            vipArea: true
        },
        capacity: {
            players: 22,
            spectators: 500
        },
        dimensions: {
            length: 105,
            width: 68,
            unit: 'meters'
        },
        surface: 'Natural Grass',
        additionalServices: [
            { name: 'Match Referee', price: 30 },
            { name: 'Linesmen (2)', price: 20 },
            { name: 'Professional Photography', price: 100 },
            { name: 'Live Streaming', price: 150 }
        ],
        rules: [
            'FIFA-approved equipment only',
            'Professional referee required for tournaments',
            'No training during match hours',
            'Respect field conditions',
            'Weather-dependent cancellations'
        ],
        coordinates: {
            latitude: 11.0180,
            longitude: -74.8510
        },
        socialMedia: {
            instagram: '@goldenfield_official',
            facebook: 'Golden Field Soccer Arena',
            whatsapp: '+573027890123'
        },
        status: 'active',
        verified: true,
        featured: true,
        lastUpdated: '2025-01-15T10:00:00Z'
    },
    {
        id: 'victory-arena',
        name: 'Victory Arena',
        sport: 'Tennis',
        description: 'Elite tennis complex with championship-quality clay and hard courts. Features tennis academy, pro shop, and tournament hosting facilities.',
        address: 'Country Club, Calle 76 #56-123, Barranquilla, Colombia',
        phone: '+57 305 234 5678',
        email: 'reservations@victoryarena.com',
        location: 'Norte, Barranquilla',
        rating: 4.9,
        reviews: 178,
        images: {
            banner: 'assets/courts/victory-arena/banner.svg',
            gallery: [
                'assets/courts/victory-arena/gallery-1.svg'
            ]
        },
        pricing: {
            weekday: 35,
            weekend: 45,
            currency: 'USD',
            courtTypes: {
                clay: 40,
                hard: 35
            }
        },
        hours: {
            open: '06:00',
            close: '22:00',
            timezone: 'America/Bogota'
        },
        features: [
            'Championship Clay Courts',
            'Hard Court Complex',
            'Night Play Lighting',
            'Pro Shop & Stringing',
            'Tennis Academy',
            'Tournament Hosting',
            'Professional Coaching',
            'Court Maintenance'
        ],
        amenities: {
            parking: true,
            changingRooms: true,
            showers: true,
            equipment: true,
            refreshments: true,
            wifi: true,
            security: true,
            firstAid: true,
            proShop: true,
            academy: true
        },
        courtTypes: ['Clay', 'Hard Court'],
        capacity: {
            players: 4,
            spectators: 200
        },
        dimensions: {
            length: 23.8,
            width: 10.9,
            unit: 'meters'
        },
        surface: 'Clay/Hard Court',
        additionalServices: [
            { name: 'Racquet Rental', price: 12 },
            { name: 'Ball Machine', price: 25 },
            { name: 'Private Lesson', price: 60 },
            { name: 'String Service', price: 15 }
        ],
        rules: [
            'Tennis attire required',
            'Proper tennis shoes only',
            'Book courts in advance',
            'Respect court surface',
            'No coaching during peak hours without booking'
        ],
        coordinates: {
            latitude: 11.0095,
            longitude: -74.8456
        },
        socialMedia: {
            instagram: '@victoryarena_tennis',
            facebook: 'Victory Arena Tennis Complex',
            whatsapp: '+573052345678'
        },
        status: 'active',
        verified: true,
        featured: true,
        lastUpdated: '2025-01-15T10:00:00Z'
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = courts;
}

// Make available globally for browser use
if (typeof window !== 'undefined') {
    window.courts = courts;
}

// Utility functions for court data
const courtUtils = {
    // Get court by ID
    getCourtById: function(id) {
        return courts.find(court => court.id === id);
    },

    // Get courts by sport
    getCourtsBySport: function(sport) {
        return courts.filter(court => 
            court.sport.toLowerCase() === sport.toLowerCase() ||
            (court.sports && court.sports.some(s => s.toLowerCase() === sport.toLowerCase()))
        );
    },

    // Get courts by location
    getCourtsByLocation: function(location) {
        return courts.filter(court => 
            court.location.toLowerCase().includes(location.toLowerCase())
        );
    },

    // Get courts by rating
    getCourtsByRating: function(minRating) {
        return courts.filter(court => court.rating >= minRating);
    },

    // Get courts by price range
    getCourtsByPriceRange: function(minPrice, maxPrice) {
        return courts.filter(court => {
            const price = Math.min(court.pricing.weekday, court.pricing.weekend);
            return price >= minPrice && price <= maxPrice;
        });
    },

    // Get featured courts
    getFeaturedCourts: function() {
        return courts.filter(court => court.featured);
    },

    // Search courts
    searchCourts: function(query) {
        const searchTerm = query.toLowerCase();
        return courts.filter(court => 
            court.name.toLowerCase().includes(searchTerm) ||
            court.sport.toLowerCase().includes(searchTerm) ||
            court.description.toLowerCase().includes(searchTerm) ||
            court.location.toLowerCase().includes(searchTerm) ||
            court.features.some(feature => feature.toLowerCase().includes(searchTerm))
        );
    },

    // Get court statistics
    getCourtStats: function() {
        return {
            total: courts.length,
            sports: [...new Set(courts.map(court => court.sport))],
            averageRating: courts.reduce((sum, court) => sum + court.rating, 0) / courts.length,
            priceRange: {
                min: Math.min(...courts.map(court => Math.min(court.pricing.weekday, court.pricing.weekend))),
                max: Math.max(...courts.map(court => Math.max(court.pricing.weekday, court.pricing.weekend)))
            }
        };
    }
};

// Export utility functions
if (typeof window !== 'undefined') {
    window.courtUtils = courtUtils;
}
