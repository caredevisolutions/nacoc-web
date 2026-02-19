import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Membership from './pages/Membership';
import MembershipCheckout from './pages/MembershipCheckout';
import Contact from './pages/Contact';
import Login from './pages/Login';
import BusinessDirectory from './pages/BusinessDirectory';
import BusinessDetails from './pages/BusinessDetails';
import Resources from './pages/Resources';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';

// Admin
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/admin/AdminLogin';
import Members from './pages/admin/Members';
import MemberDetailsAdmin from './pages/admin/MemberDetails';
import AdminEvents from './pages/admin/Events';
import Directory from './pages/admin/Directory';
import Settings from './pages/admin/Settings';
import Revenue from './pages/admin/Revenue';
import Engagement from './pages/admin/Engagement';

import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';


// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
       <Navbar />
       <main className="flex-grow">
         {children}
       </main>
       <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Admin Login - Outside Layout */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Protected Routes */}
          <Route path="/admin/*" element={
              <AdminLayout>
                  <Routes>
                      <Route index element={<AdminDashboard />} />
                      <Route path="dashboard" element={<AdminDashboard />} />
                      <Route path="members" element={<Members />} />
                      <Route path="members/:id" element={<MemberDetailsAdmin />} />
                      <Route path="events" element={<AdminEvents />} />
                      <Route path="directory" element={<Directory />} />
                      <Route path="revenue" element={<Revenue />} />
                      <Route path="engagement" element={<Engagement />} />
                      <Route path="settings" element={<Settings />} />
                  </Routes>
              </AdminLayout>
          } />

          {/* Public Routes */}
          <Route path="*" element={
              <MainLayout>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about-us" element={<About />} />
                      <Route path="/programs" element={<Programs />} />
                      <Route path="/membership" element={<Membership />} />
                      <Route path="/membership/checkout" element={<MembershipCheckout />} />
                      <Route path="/contact-us" element={<Contact />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/directory" element={<BusinessDirectory />} />
                      <Route path="/directory/:slug" element={<BusinessDetails />} />
                      <Route path="/resources" element={<Resources />} />
                      <Route path="/events" element={<Events />} />
                      <Route path="/events/:slug" element={<EventDetails />} />
                      <Route path="/blogs" element={<Blogs />} />
                      <Route path="/blogs/:slug" element={<BlogDetails />} />
                      <Route path="*" element={<div className="p-20 text-center">Page not found</div>} />
                  </Routes>
              </MainLayout>
          } />
        </Routes>
      </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
