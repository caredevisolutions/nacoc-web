
import { Users, TrendingUp, Calendar } from 'lucide-react';

export const eventsData = [
    {
      id: 1,
      title: "10th Annual Entrepreneurship Gala",
      date: "August 9, 2025",
      time: "6:00 PM - 11:00 PM",
      location: "Irving Convention Center",
      description: "Join industry leaders for a night of celebration, networking, and recognition of outstanding business achievements.",
      fullDescription: "The 10th Annual Entrepreneurship Gala represents a decade of excellence within the Nepalese American business community. This milestone event brings together over 500 entrepreneurs, investors, and community leaders for an evening of high-impact networking, keynote speeches from industry titans, and awards honoring those who have made significant contributions to our economic landscape. Guests will enjoy a premium dinner, cultural performances, and exclusive opportunities to connect with the movers and shakers of Dallas-Fort Worth and beyond.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: true,
      category: "Gala"
    },
    {
      id: 2,
      title: "Gala Dinner 2024",
      date: "September 5, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Embassy Suites by Hilton Dallas DFW Airport North",
      description: "Our 9th Annual Gala Dinner featuring keynote speaker Rob Parikh and performances by Mad Honey cultural band.",
      fullDescription: "The 2024 Gala Dinner was a resounding success, marking our 9th year of celebrating business excellence. The evening featured an inspiring keynote address by Rob Parikh, who shared insights on navigating the modern economic climate. Attendees were treated to a mesmerizing performance by the Mad Honey cultural band, blending traditional melodies with contemporary rhythms. The event raised significant funds for our community outreach programs and strengthened the bonds between local businesses.",
      image: "https://nacoc.org/wp-content/uploads/2024/09/458476241_848538747369186_1999576365938120030_n.jpg",
      featured: false,
      category: "Gala"
    },
    {
      id: 3,
      title: "Gala Dinner 2022",
      date: "November 23, 2022",
      time: "6:00 PM - 10:00 PM",
      location: "Embassy Suites by Hilton Dallas DFW Airport North",
      description: "7th Annual Gala Dinner celebrating community achievements.",
      fullDescription: "Our 7th Annual Gala Dinner brought the community together post-pandemic to celebrate resilience and growth. It was an emotional and uplifting night where we honored local businesses that survived and thrived during challenging times. The event featured awards for 'Business of the Year' and 'Community Hero', highlighting the selfless contributions of our members.",
      image: "https://nacoc.org/wp-content/uploads/2022/11/IMG_9794.jpg",
      featured: false,
      category: "Gala"
    },
    {
      id: 4,
      title: "C-Store Seminar",
      date: "May 4, 2022",
      time: "12:00 PM - 7:00 PM",
      location: "Holiday Inn Trophy Club",
      description: "3rd Gas Station/C-Store Mela, Trade Show & Seminar.",
      fullDescription: "The 3rd Gas Station and C-Store Mela was our largest trade show to date, specifically tailored for convenience store owners and operators. In association with Ranger Wholesale and IBC, the event provided a platform for vendors to showcase the latest products, technologies, and services. Seminars covered topics such as inventory management, loss prevention, and navigating new regulations in the retail sector.",
      image: "https://nacoc.org/wp-content/uploads/2022/08/R6_B9587-scaled.jpg",
      featured: false,
      category: "Seminar"
    },
    {
      id: 5,
      title: "Nepal Heritage Night",
      date: "May 4, 2022",
      time: "5:00 PM - 9:00 PM",
      location: "Dallas, TX",
      description: "Promotional Cultural Event - Heritage of Nepal.",
      fullDescription: "Nepal Heritage Night was a vibrant celebration of our rich cultural tapestry. The event showcased traditional dance, music, arts, and cuisine to the broader Dallas community. It served as a bridge, introducing the unique traditions of Nepal to our American friends and preserving our heritage for the younger generation growing up in the US.",
      image: "https://nacoc.org/wp-content/uploads/2022/05/R6_B7336-Copy.jpg",
      featured: false,
      category: "Cultural"
    },
    {
      id: 6,
      title: "Women's Entrepreneurship Summit",
      date: "February 7, 2022",
      time: "10:00 AM - 4:00 PM",
      location: "DFW Metroplex",
      description: "Celebrating women's accomplishments and advocating for gender equality.",
      fullDescription: "The 3rd Women's Entrepreneurship Summit was a landmark event focused on empowering women in business. Through panels, workshops, and mentorship sessions, female entrepreneurs shared their journeys, challenges, and strategies for success. The summit concluded with a commitment to launch a dedicated mentorship program for aspiring female business leaders in the community.",
      image: "https://nacoc.org/wp-content/uploads/2021/11/253602282_4215295485265760_6107783770308930990_n-1.jpeg",
      featured: false,
      category: "Summit"
    }
];

export const blogsData = [
    {
      id: 1,
      title: "Gala Dinner 2024: A Night to Remember",
      excerpt: "We extend our deepest gratitude to everyone who made our 9th Annual Gala Dinner a resounding success!",
      content: "We extend our deepest gratitude to everyone who made our 9th Annual Gala Dinner a resounding success! A special thank you to our sponsors, volunteers, and distinguished guests who joined us for this memorable evening. The night was filled with joy, networking, and a shared vision for the future of our community. We are proud to have hosted such a diverse group of professionals and look forward to continuing this tradition of excellence.",
      category: "Events",
      author: "Raj Bhetu",
      date: "September 5, 2024",
      image: "https://nacoc.org/wp-content/uploads/2024/09/458476241_848538747369186_1999576365938120030_n.jpg"
    },
    {
      id: 2,
      title: "Gala Dinner 2022 Conclusion",
      excerpt: "Our 7th Annual Gala Dinner was successfully concluded on Saturday at Embassy Suites by Hilton. Thank you all for attending!",
      content: "Our 7th Annual Gala Dinner was successfully concluded on Saturday, 19th November, 2022 at Embassy Suites by Hilton Dallas DFW Airport. It was a testament to the strength and unity of our chamber. The event highlighted the achievements of our members over the past year and set the stage for upcoming initiatives. We thank everyone for their generous support and participation.",
      category: "News",
      author: "Ramesh Ghimire",
      date: "November 23, 2022",
      image: "https://nacoc.org/wp-content/uploads/2022/11/IMG_9794.jpg"
    },
    {
      id: 3,
      title: "C-Store Seminar Highlights",
      excerpt: "The 3rd Gas Station/C-Store Mela, Trade Show & Seminar was a huge success with fun, food, and networking.",
      content: "Nepalese American Chamber of Commerce, Dallas, Texas, in association with Ranger Wholesale and IBC, presented the '3rd Gas Station/C-Store Mela, Trade Show & Seminar'. It was an incredible day of learning and connecting. Retailers had the chance to meet directly with suppliers, negotiate deals, and learn about emerging trends in the convenience store industry. The feedback from participants has been overwhelmingly positive.",
      category: "Seminar",
      author: "Ramesh Ghimire",
      date: "May 4, 2022",
      image: "https://nacoc.org/wp-content/uploads/2022/08/R6_B9587-scaled.jpg"
    },
    {
      id: 4,
      title: "Nepal Heritage Night",
      excerpt: "Celebrating Nepali's unique culture, ways of life, and traditions. The event was held to promote and preserve our artistic significance.",
      content: "Nepal has been an enigma to the western world and intriguing. A glimpse of eternal cultural artifacts celebrates Nepali’s unique culture, ways of life, and traditions. The event was held to promote and preserve our artistic significance, featuring traditional attire, dance forms, and culinary delights that represent the diverse ethnic groups of Nepal.",
      category: "Culture",
      author: "Ramesh Ghimire",
      date: "May 4, 2022",
      image: "https://nacoc.org/wp-content/uploads/2022/05/R6_B7336-Copy.jpg"
    },
      {
      id: 5,
      title: "3rd Women’s Entrepreneurship Summit",
      excerpt: "Celebrating women's accomplishments and advocating for greater gender equality in business and leadership.",
      content: "Please join us for our 3rd approach to celebrate women’s accomplishments and advocate for greater gender equality. Please register for the event to connect with like-minded professionals. The summit addressed critical issues such as access to capital, work-life balance, and breaking the glass ceiling in corporate sectors.",
      category: "Summit",
      author: "Ramesh Ghimire",
      date: "February 7, 2022",
      image: "https://nacoc.org/wp-content/uploads/2021/11/253602282_4215295485265760_6107783770308930990_n-1.jpeg"
    },
       {
      id: 6,
      title: "2nd Nepali Technology Summit 2021",
      excerpt: "Bringing together Tech-Professionals, Tech-Entrepreneurs, and Tech-Students to foster innovation.",
      content: "You are cordially invited to our 2nd Nepali Technology Summit 2021 scheduled to be held on the 11th of December. This event aims to bring together Tech-Professionals, Tech-Entrepreneurs, and Tech-Students under one roof to foster innovation, sharing of ideas, and collaboration on future projects. Key topics included AI, Blockchain, and the future of remote work.",
      category: "Technology",
      author: "Ramesh Ghimire",
      date: "November 8, 2021",
      image: "https://nacoc.org/wp-content/uploads/2021/11/technology-esports-1.jpeg"
    }
];

export const MOCK_BUSINESSES = [
    { 
        id: 1, 
        name: "Yeti Homes", 
        category: "Real Estate", 
        address: "Irving, TX", 
        phone: "+1 214-555-0101", 
        email: "contact@yetihomes.com",
        website: "yetihomes.com", 
        featured: true,
        description: "Yeti Homes is a premier real estate agency serving the vibrant community of Irving and the greater Dallas-Fort Worth area. We specialize in residential sales, commercial leasing, and property management. Our team of experienced agents is dedicated to helping you find your dream home or the perfect investment property.",
        hours: "Mon-Fri: 9AM - 6PM, Sat: 10AM - 4PM",
        social: {
            facebook: "#",
            linkedin: "#",
            instagram: "#"
        },
        services: ["Residential Sales", "Commercial Leasing", "Property Management", "Investment Consulting"],
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    { 
        id: 2,
        name: "Smriti CPA", 
        category: "Financial Services", 
        address: "Euless, TX", 
        phone: "+1 817-555-0102", 
        email: "info@smriticpa.com",
        website: "smriticpa.com", 
        featured: true,
        description: "Smriti CPA provides comprehensive accounting and tax services for individuals and small businesses. From tax planning and preparation to bookkeeping and payroll, we handle the numbers so you can focus on growing your business.",
        hours: "Mon-Fri: 8AM - 5PM",
        social: {
            linkedin: "#",
        },
        services: ["Tax Preparation", "Bookkeeping", "Payroll Services", "Financial Planning"],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 3, 
        name: "NepIT LLC", 
        category: "Technology", 
        address: "Dallas, TX", 
        phone: "+1 469-555-0103", 
        website: "nepit.com", 
        featured: true, 
        description: "NepIT LLC is a leading IT solutions provider offering software development, IT consulting, and cloud infrastructure services. We empower businesses with cutting-edge technology to drive innovation and efficiency.",
        hours: "Mon-Fri: 9AM - 5PM",
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#"
        },
        services: ["Software Development", "IT Consulting", "Cloud Services", "Cybersecurity"],
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 4, 
        name: "Curry Leaf Restaurant", 
        category: "Restaurants", 
        address: "1800 Valley View Lane, Irving", 
        phone: "+1 972-555-0104", 
        website: "curryleaf.com", 
        featured: false, 
        description: "Experience the authentic flavors of Nepal and India at Curry Leaf Restaurant. We use fresh ingredients and traditional spices to create unforgettable dishes. Join us for lunch, dinner, or catering for your special events.",
        hours: "Tue-Sun: 11AM - 10PM",
        social: {
            facebook: "#",
            instagram: "#"
        },
        services: ["Dine-in", "Takeout", "Catering", "Private Events"],
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }, 
    {
        id: 5,
        name: "SmallBusinessHelpDFW", 
        category: "Consulting", 
        address: "Plano, TX", 
        phone: "+1 214-555-0105", 
        website: "sbhdfw.com", 
        featured: true,
        description: "We help small businesses thrive in the DFW metroplex. Our consulting services cover business strategy, marketing, legal compliance, and operational efficiency.",
        hours: "Mon-Fri: 9AM - 5PM",
        social: {
            linkedin: "#"
        },
        services: ["Business Strategy", "Marketing Consulting", "Legal Compliance", "Operations"],
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 6,
        name: "Everest Insurance", 
        category: "Insurance", 
        address: "Fort Worth, TX", 
        phone: "+1 817-555-0106", 
        website: "everestins.com", 
        featured: false,
        description: "Protecting what matters most. Everest Insurance offers a wide range of insurance products including auto, home, life, and commercial insurance. We are committed to providing personalized coverage at competitive rates.",
        hours: "Mon-Fri: 8:30AM - 5:30PM",
        social: {
            facebook: "#",
            linkedin: "#"
        },
        services: ["Auto Insurance", "Home Insurance", "Life Insurance", "Business Insurance"],
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 7,
        name: "BMB Tax and Financial Service", 
        category: "Financial Services", 
        address: "TODO: Add Address", 
        phone: "TODO: Add Phone", 
        website: "TODO: Add Website", 
        featured: false,
        description: "TODO: Add Description related to tax and financial services.",
        hours: "TODO: Add Hours",
        social: {
            linkedin: "#"
        },
        services: ["Tax Preparation", "Financial Planning"],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
];

export const MOCK_MEMBERS = [
    { id: 1, name: "Ram Sharma", email: "ram@example.com", phone: "214-555-0101", type: "Business", status: "Active", joinDate: "2023-01-15", tier: "Gold", paid: true, amount: 500 },
    { id: 2, name: "Sita Patel", email: "sita@example.com", phone: "469-555-0202", type: "Individual", status: "Active", joinDate: "2023-02-20", tier: "Standard", paid: true, amount: 100 },
    { id: 3, name: "Hari Krishna", email: "hari@example.com", phone: "817-555-0303", type: "Student", status: "Inactive", joinDate: "2023-03-10", tier: "Student", paid: false, amount: 50 },
    { id: 4, name: "Gita Rai", email: "gita@example.com", phone: "972-555-0404", type: "Business", status: "Active", joinDate: "2023-10-05", tier: "Platinum", paid: true, amount: 1000 },
    { id: 5, name: "Bibek Thapa", email: "bibek@example.com", phone: "214-555-0505", type: "Individual", status: "Active", joinDate: "2023-11-12", tier: "Standard", paid: true, amount: 100 },
    { id: 6, name: "Nita Shah", email: "nita@example.com", phone: "817-555-0606", type: "Business", status: "Pending", joinDate: "2024-01-05", tier: "Gold", paid: false, amount: 500 },
    { id: 7, name: "John Doe", email: "john@example.com", phone: "469-555-0707", type: "Individual", status: "Active", joinDate: "2024-01-18", tier: "Standard", paid: true, amount: 100 },
];

export const MOCK_EVENTS_ADMIN = [
    { id: 1, title: "10th Annual Entrepreneurship Gala", date: "2025-08-09", location: "Irving Convention Center", status: "Upcoming", attendees: 156, type: "Gala" },
    { id: 2, title: "Gala Dinner 2024", date: "2024-09-05", location: "Embassy Suites", status: "Completed", attendees: 420, type: "Gala" },
    { id: 3, title: "Small Business Workshop", date: "2024-03-10", location: "Online (Zoom)", status: "Completed", attendees: 45, type: "Workshop" },
    { id: 4, title: "Networking Mixer", date: "2024-01-20", location: "Curry Leaf Restaurant", status: "Completed", attendees: 60, type: "Networking" },
    { id: 5, title: "Tax Filing Seminar", date: "2024-02-05", location: "Euless Library", status: "Completed", attendees: 30, type: "Seminar" },
];
