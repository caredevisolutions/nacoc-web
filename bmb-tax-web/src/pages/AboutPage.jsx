import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, MapPin, TrendingUp, Heart, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '15+', label: 'Years of Experience', color: 'text-gold-DEFAULT', bg: 'bg-gold-DEFAULT/10', border: 'border-gold-DEFAULT/20' },
  { value: '500+', label: 'Happy Clients', color: 'text-accent-indigo', bg: 'bg-accent-indigo/10', border: 'border-accent-indigo/20' },
  { value: '5.0★', label: 'Google Rating', color: 'text-accent-emerald', bg: 'bg-accent-emerald/10', border: 'border-accent-emerald/20' },
  { value: '2', label: 'TX Locations', color: 'text-accent-violet', bg: 'bg-accent-violet/10', border: 'border-accent-violet/20' },
];

const values = [
  { icon: ShieldCheck, title: 'Uncompromising Integrity', desc: 'We operate with total transparency. Your trust is sacred, and we protect it with strict ethical standards.', iconBg: 'bg-accent-emerald/10', iconColor: 'text-accent-emerald', border: 'border-accent-emerald/20' },
  { icon: TrendingUp, title: 'Proactive Growth', desc: "We don't just record history; we help write your future. Our advice is forward-looking and growth-oriented.", iconBg: 'bg-accent-indigo/10', iconColor: 'text-accent-indigo', border: 'border-accent-indigo/20' },
  { icon: Heart, title: 'Community Focused', desc: 'We are locals helping locals. We invest in long-term relationships, not just transactions.', iconBg: 'bg-accent-rose/10', iconColor: 'text-accent-rose', border: 'border-accent-rose/20' },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | BMB Tax & Financial Service</title>
        <meta name="description" content="Learn about BMB Tax, the leading accounting firm in Euless and Waco, TX. Professional, trustworthy, and rated 5 stars by locals." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-theme-bg">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute right-0 top-0 w-[45%] h-[55%] bg-gold-DEFAULT/10 blur-[150px] rounded-full pointer-events-none z-[1]"></div>
        <div className="absolute left-0 bottom-0 w-[35%] h-[40%] bg-accent-indigo/8 blur-[120px] rounded-full pointer-events-none z-[1]"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-DEFAULT/10 border border-gold-DEFAULT/25 text-gold-DEFAULT font-bold text-[10px] uppercase tracking-widest mb-8">
              <Sparkles size={11} /> Since 2010
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-medium text-theme-text-main mb-6 leading-tight">
              Beyond Numbers. <br/>
              <span className="text-gold-DEFAULT italic">We Build Futures.</span>
            </h1>
            <p className="text-xl text-theme-text-body leading-relaxed max-w-2xl mx-auto font-light">
              BMB Tax & Financial Service isn&rsquo;t just about filing returns. It&rsquo;s about empowering families and businesses in Texas to achieve true financial freedom.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-14"
          >
            {stats.map((s, i) => (
              <motion.div key={i} whileHover={{ y: -4, scale: 1.04 }} className={`${s.bg} ${s.border} border rounded-2xl p-5 hover:shadow-gold transition-all duration-300 cursor-default`}>
                <div className={`text-3xl font-heading font-bold ${s.color} mb-1`}>{s.value}</div>
                <div className="text-xs text-theme-text-body font-semibold uppercase tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 relative overflow-hidden bg-theme-bgAlt">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-DEFAULT/10 border border-gold-DEFAULT/25 text-gold-DEFAULT font-bold text-[10px] uppercase tracking-widest mb-5">
                <Star size={10} fill="currentColor" /> The Founder
              </div>
              <h3 className="text-4xl font-heading font-medium mb-8 text-theme-text-main">
                Basuram <span className="text-gold-DEFAULT">("Basu")</span> Bhandari
              </h3>
              <div className="space-y-5 text-theme-text-body text-lg leading-relaxed font-light">
                <p>
                  With over a decade of experience, Basu established BMB Tax with a singular vision: to bring{' '}
                  <strong className="text-theme-text-main font-semibold">Wall Street expertise to Main Street.</strong>
                </p>
                <p>
                  Known for his meticulous attention to detail and personal approach, Basu treats every client&rsquo;s finances with the same care as his own.
                </p>
              </div>
              <div className="mt-8 p-5 bg-gold-DEFAULT/8 border border-gold-DEFAULT/20 rounded-2xl">
                <p className="font-heading italic text-gold-DEFAULT text-xl">&ldquo;Trust is our greatest asset.&rdquo;</p>
                <p className="text-theme-text-body text-sm mt-1 font-semibold">— Basu Bhandari, Founder</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="aspect-[4/5] rounded-3xl relative overflow-hidden bg-theme-surface border border-theme-border shadow-card">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-10">
                    <div className="w-24 h-24 bg-gold-DEFAULT/15 border border-gold-DEFAULT/25 rounded-full flex items-center justify-center mx-auto mb-6 shadow-gold">
                      <ShieldCheck size={40} className="text-gold-DEFAULT" />
                    </div>
                    <h4 className="text-2xl font-bold text-theme-text-main mb-2">Integrity First</h4>
                    <p className="text-theme-text-body text-sm tracking-widest uppercase mb-8">The Core of BMB Tax</p>
                    <div className="grid grid-cols-2 gap-3">
                      {['IRS Enrolled', 'TX Licensed', '5★ Rated', 'Since 2010'].map((badge, i) => (
                        <div key={i} className="bg-theme-bg border border-theme-border/80 rounded-xl px-3 py-2 text-xs font-bold text-theme-text-main hover:text-gold-DEFAULT hover:border-gold-DEFAULT/50 transition-colors">{badge}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gold-DEFAULT/8 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-accent-indigo/8 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 relative overflow-hidden bg-theme-bg">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-medium text-theme-text-main mb-4">
              Serving <span className="text-gold-DEFAULT">Texas</span>
            </h2>
            <p className="text-theme-text-body max-w-2xl mx-auto font-light">Proudly operating from two strategic locations.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { branch: 'Euless Branch', sub: 'The Heart of DFW', addr: '1201 W Airport Fwy, Ste 259\nEuless, TX 76040', label: 'Main Office', phone: '(817) 554-2777', iconBg: 'bg-gold-DEFAULT/10', iconColor: 'text-gold-DEFAULT', iconBorder: 'border-gold-DEFAULT/20' },
              { branch: 'Waco Branch', sub: 'Serving Central Texas', addr: '6625 Cascade Dr\nWoodway, TX 76712', label: 'Woodway Location', phone: '(254) 350-0233', iconBg: 'bg-accent-indigo/10', iconColor: 'text-accent-indigo', iconBorder: 'border-accent-indigo/20' },
            ].map((loc, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-theme-surface p-8 rounded-2xl border border-theme-border hover:border-gold-DEFAULT/40 transition-all hover:shadow-gold group">
                <div className={`w-12 h-12 ${loc.iconBg} ${loc.iconBorder} border rounded-xl flex items-center justify-center ${loc.iconColor} mb-6 group-hover:scale-110 transition-transform`}>
                  <MapPin size={24} />
                </div>
                <h3 className="text-2xl font-bold text-theme-text-main mb-1 group-hover:text-gold-DEFAULT transition-colors">{loc.branch}</h3>
                <p className="text-theme-text-body mb-4 text-xs font-bold uppercase tracking-widest">{loc.sub}</p>
                <p className="text-theme-text-body font-medium leading-relaxed whitespace-pre-line">{loc.addr}</p>
                <div className="mt-6 pt-5 border-t border-theme-border flex justify-between items-center">
                  <span className="font-bold text-theme-text-body uppercase tracking-wider text-xs">{loc.label}</span>
                  <span className="text-gold-DEFAULT font-bold text-base">{loc.phone}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative overflow-hidden bg-theme-bgAlt">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading font-medium text-theme-text-main mb-4">
              Our <span className="text-gold-DEFAULT">Core Values</span>
            </h2>
            <p className="text-theme-text-body max-w-xl mx-auto font-light">The principles that guide every decision we make for our clients.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -6 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-center group bg-theme-surface p-8 rounded-2xl border border-theme-border hover:border-gold-DEFAULT/40 hover:shadow-gold transition-all cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto ${item.iconBg} border ${item.border} rounded-2xl flex items-center justify-center ${item.iconColor} mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-theme-text-main mb-3 group-hover:text-gold-DEFAULT transition-colors">{item.title}</h3>
                <p className="text-theme-text-body leading-relaxed text-sm font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-14 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-dark to-gold-DEFAULT text-white px-10 py-4 rounded-full font-bold shadow-gold hover:shadow-gold-lg hover:-translate-y-1 transition-all">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

