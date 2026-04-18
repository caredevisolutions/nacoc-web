// src/services/adapters.js
// Normalize WordPress REST responses (with optional ACF fields) into the
// flat object shape the React components consume.

const stripHtml = (html = '') => html.replace(/<[^>]+>/g, '').trim();

const featuredImage = (post) =>
  post?._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;

const taxonomyName = (post) =>
  post?._embedded?.['wp:term']?.[0]?.[0]?.name || null;

/**
 * Adapt a WP `business` CPT record (with ACF fields) into the structure
 * used by BusinessDirectory.jsx and BusinessDetails.jsx.
 *
 * Expected ACF fields (configurable on the WP backend):
 *   category, address, phone, email, website, description, hours,
 *   featured (bool), services (repeater of strings), social.facebook,
 *   social.linkedin, social.twitter, social.instagram, owner
 */
export function adaptBusiness(post) {
  if (!post) return null;
  const acf = post.acf || {};
  const services = Array.isArray(acf.services)
    ? acf.services.map((s) => (typeof s === 'string' ? s : s?.name)).filter(Boolean)
    : [];

  return {
    id: post.id,
    slug: post.slug,
    name: stripHtml(post.title?.rendered || acf.name || ''),
    category: acf.category || taxonomyName(post) || 'Member Business',
    address: acf.address || '',
    phone: acf.phone || '',
    email: acf.email || '',
    website: acf.website || '',
    description: acf.description || stripHtml(post.content?.rendered || ''),
    hours: acf.hours || '',
    featured: Boolean(acf.featured),
    services,
    owner: acf.owner || '',
    image: featuredImage(post) || acf.image || '',
    social: {
      facebook: acf?.social?.facebook || acf.facebook || '',
      linkedin: acf?.social?.linkedin || acf.linkedin || '',
      twitter: acf?.social?.twitter || acf.twitter || '',
      instagram: acf?.social?.instagram || acf.instagram || '',
    },
  };
}

/** Convert a Tribe Events object into the flat shape used in components. */
export function adaptEvent(event) {
  if (!event) return null;
  let venueStr = '';
  if (typeof event.venue === 'object' && event.venue !== null) {
    const parts = [];
    if (event.venue.venue) parts.push(event.venue.venue);
    if (event.venue.city) parts.push(event.venue.city);
    if (event.venue.stateprovince || event.venue.province)
      parts.push(event.venue.stateprovince || event.venue.province);
    venueStr = parts.join(', ');
  } else if (typeof event.venue === 'string') {
    venueStr = event.venue;
  }

  const image = typeof event.image === 'object' ? event.image?.url : event.image;

  return {
    id: event.id,
    slug: event.slug,
    title: typeof event.title === 'object' ? event.title?.rendered : event.title,
    description:
      typeof event.description === 'object'
        ? event.description?.rendered
        : event.description,
    start_date: event.start_date,
    end_date: event.end_date,
    url: event.url,
    image: image || '',
    venue: venueStr,
  };
}
