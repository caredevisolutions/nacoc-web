import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, MapPin, TrendingUp, Heart, Star, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '500+', label: 'Happy Clients' },
  { value: '5.0★', label: 'Google Rating' },
  { value: '2', label: 'TX Locations' },
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Uncompromising Integrity',
    desc: 'We operate with total transparency. Your trust is sacred, and we protect it with strict ethical standards.',
    iconColor: 'text-accent-emerald',
    iconBg: 'bg-accent-emerald/10',
    border: 'border-accent-emerald/20',
  },
  {
    icon: TrendingUp,
    title: 'Proactive Growth',
    desc: "We don't just record history — we help write your future. Our advice is always forward-looking and growth-oriented.",
    iconColor: 'text-gold-DEFAULT',
    iconBg: 'bg-gold-DEFAULT/10',
    border: 'border-gold-DEFAULT/20',
  },
  {
    icon: Heart,
    title: 'Community Focused',
    desc: 'We are locals helping locals. We invest in long-term relationships, not just transactions.',
    iconColor: 'text-accent-rose',
    iconBg: 'bg-accent-rose/10',
    border: 'border-accent-rose/20',
  },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | BMB Tax & Financial Service</title>
        <meta name="description" content="Learn about BMB Tax, the leading accounting firm in Euless and Waco, TX. Professional, trustworthy, and rated 5 stars by locals." />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-36 pb-24 relative overflow-hidden bg-theme-bg">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:44px_44px]"></div>
        <div className="absolute right-0 top-0 w-[500px] h-[400px] bg-gold-DEFAULT/7 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px w-10 bg-gold-DEFAULT"></div>
                <span className="text-gold-DEFAULT uppercase tracking-widest text-xs font-bold">Since 2010</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-medium text-theme-text-main leading-[1.05] mb-8">
                Beyond Numbers.<br />
                <span className="text-gold-DEFAULT italic">We Build Futures.</span>
              </h1>
              <p className="text-xl text-theme-text-body leading-relaxed max-w-2xl font-light">
                BMB Tax & Financial Service isn&rsquo;t just about filing returns. It&rsquo;s about empowering
                families and businesses across Texas to achieve true financial freedom.
              </p>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 border border-theme-border/60 rounded-2xl overflow-hidden bg-theme-border/60"
          >
            {stats.map((s, i) => (
              <div key={i} className="bg-theme-bg px-8 py-7 text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-gold-DEFAULT mb-1.5">{s.value}</div>
                <div className="text-xs text-theme-text-light font-semibold uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Founder ──────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden bg-theme-bgAlt">
        <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-gold-DEFAULT/5 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px w-10 bg-gold-DEFAULT"></div>
                <span className="text-gold-DEFAULT uppercase tracking-widest text-xs font-bold">The Founder</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-theme-text-main mb-3 leading-tight">
                Basuram <span className="text-gold-DEFAULT">"Basu"</span> Bhandari
              </h2>
              <p className="text-theme-text-light text-sm font-semibold uppercase tracking-widest mb-10">
                Enrolled Agent · Founder & Principal
              </p>

              <div className="space-y-6 text-theme-text-body text-lg leading-relaxed font-light">
                <p>
                  With over a decade of hands-on experience, Basu established BMB Tax with a singular vision:{' '}
                  <strong className="text-theme-text-main font-semibold">to bring Wall Street expertise to Main Street.</strong>
                </p>
                <p>
                  Known for his meticulous attention to detail and personal approach, Basu treats every client&rsquo;s
                  finances with the same care as his own — building relationships that last years, not just seasons.
                </p>
                <p>
                  His commitment to proactive planning means clients aren&rsquo;t just filing taxes — they&rsquo;re
                  building sustainable financial futures with a trusted partner by their side.
                </p>
              </div>

              <div className="mt-10 pt-10 border-t border-theme-border/50">
                <blockquote className="relative pl-6 border-l-2 border-gold-DEFAULT">
                  <p className="font-heading italic text-gold-DEFAULT text-2xl leading-snug">
                    &ldquo;Trust is our greatest asset.&rdquo;
                  </p>
                  <footer className="mt-3 text-theme-text-body text-sm font-semibold">
                    — Basu Bhandari, Founder
                  </footer>
                </blockquote>
              </div>
            </motion.div>

            {/* Credential card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:sticky lg:top-28"
            >
              <div className="bg-theme-card border border-theme-border rounded-2xl p-8">
                <div className="w-14 h-14 bg-gold-DEFAULT/12 border border-gold-DEFAULT/25 rounded-xl flex items-center justify-center mb-6">
                  <Award size={26} className="text-gold-DEFAULT" />
                </div>
                <h4 className="text-lg font-bold text-theme-text-main mb-1">Credentials</h4>
                <p className="text-theme-text-light text-sm mb-6">Licenses & certifications</p>
                <ul className="space-y-3">
                  {['IRS Enrolled Agent', 'Texas Licensed CPA', '5★ Google Rated', 'QuickBooks Certified', 'ITIN Acceptance Agent', 'In Practice Since 2010'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-theme-text-body">
                      <CheckCircle2 size={15} className="text-gold-DEFAULT shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-theme-border/60">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-gold-DEFAULT" fill="currentColor" />)}
                  </div>
                  <p className="text-theme-text-light text-xs">Rated 5.0 on Google Reviews</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Locations ────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden bg-theme-bg">
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-accent-indigo/5 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold-DEFAULT"></div>
              <span className="text-gold-DEFAULT uppercase tracking-widest text-xs font-bold">Our Offices</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-theme-text-main leading-tight">
              Serving <span className="text-gold-DEFAULT italic">Texas.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {[
              {
                branch: 'Euless',
                label: 'DFW · Main Office',
                addr: '1201 W Airport Fwy, Ste 259\nEuless, TX 76040',
                phone: '(817) 554-2777',
                accent: 'text-gold-DEFAULT',
                accentBg: 'bg-gold-DEFAULT/10',
                accentBorder: 'border-gold-DEFAULT/20',
              },
              {
                branch: 'Waco',
                label: 'Central Texas · Woodway',
                addr: '6625 Cascade Dr\nWoodway, TX 76712',
                phone: '(254) 350-0233',
                accent: 'text-accent-indigo',
                accentBg: 'bg-accent-indigo/10',
                accentBorder: 'border-accent-indigo/20',
              },
            ].map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="group bg-theme-card p-8 rounded-2xl border border-theme-border hover:border-gold-DEFAULT/35 transition-all duration-300 hover:shadow-gold"
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${loc.accentBg} border ${loc.accentBorder} ${loc.accent} text-[10px] font-bold uppercase tracking-widest mb-6`}>
                  <MapPin size={10} /> {loc.label}
                </div>
                <h3 className="text-2xl font-heading font-medium text-theme-text-main mb-4 group-hover:text-gold-DEFAULT transition-colors">
                  {loc.branch}
                </h3>
                <p className="text-theme-text-body font-medium leading-relaxed whitespace-pre-line text-sm mb-6">
                  {loc.addr}
                </p>
                <a
                  href={`tel:${loc.phone.replace(/\D/g, '')}`}
                  className={`inline-flex items-center gap-2 text-sm font-bold ${loc.accent} hover:opacity-80 transition-opacity`}
                >
                  <Phone size={13} />
                  {loc.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden bg-theme-bgAlt">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[320px_1fr] gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-gold-DEFAULT"></div>
                <span className="text-gold-DEFAULT uppercase tracking-widest text-xs font-bold">What We Stand For</span>
              </div>
              <h2 className="text-4xl font-heading font-medium text-theme-text-main leading-tight mb-6">
                Our Core <span className="text-gold-DEFAULT italic">Values.</span>
              </h2>
              <p className="text-theme-text-body font-light leading-relaxed">
                The principles that guide every decision we make — for every client, every day.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {values.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -5 }}
                  className="group bg-theme-card p-7 rounded-2xl border border-theme-border hover:border-gold-DEFAULT/35 transition-all duration-300 hover:shadow-gold"
                >
                  <div className={`w-12 h-12 ${item.iconBg} border ${item.border} rounded-xl flex items-center justify-center ${item.iconColor} mb-5 group-hover:scale-110 transition-transform`}>
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-theme-text-main mb-3 group-hover:text-gold-DEFAULT transition-colors leading-snug">{item.title}</h3>
                  <p className="text-theme-text-body text-sm font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-20 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-dark to-gold-DEFAULT text-white px-10 py-4 rounded-full font-bold shadow-gold hover:shadow-gold-lg hover:-translate-y-1 transition-all"
            >
              Get Started Today <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-theme-text-main font-semibold text-sm hover:text-gold-DEFAULT transition-colors group"
            >
              <span className="border-b border-theme-border/80 pb-0.5 group-hover:border-gold-DEFAULT">Explore our services</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

