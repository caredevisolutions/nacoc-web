// src/services/api.js

const BASE_URL = 'https://nacoc.org/wp-json/wp/v2';
const TRIBE_URL = 'https://nacoc.org/wp-json/tribe/events/v1';

export const api = {
  // Posts (Blogs)
  getPosts: async (page = 1, perPage = 9) => {
    try {
      const response = await fetch(`${BASE_URL}/posts?_embed&page=${page}&per_page=${perPage}`);
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  },

  getPostById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${id}?_embed`);
      if (!response.ok) throw new Error('Failed to fetch post');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  },

  // Events (Tribe Events API V1)
  getEvents: async (page = 1, perPage = 9) => {
    try {
      // Fetching all events, starting from a past date to ensure we get some data for demo
      // Adding cache-busting timestamp to prevent caching of empty results
      const response = await fetch(`${TRIBE_URL}/events?page=${page}&per_page=${perPage}&start_date=2020-01-01&_t=${new Date().getTime()}`);
      if (!response.ok) throw new Error('Failed to fetch events');
      const data = await response.json();
      // Tribe API wraps events in an 'events' array property
      return data.events || [];
    } catch (error) {
      console.error('Error fetching events:', error);
      return [];
    }
  },

  getEventById: async (id) => {
    try {
      const response = await fetch(`${TRIBE_URL}/events/${id}`);
      if (!response.ok) throw new Error('Failed to fetch event');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching event:', error);
      return null;
    }
  }
};
