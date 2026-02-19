import React, { createContext, useContext, useState, useEffect } from 'react';
import { eventsData, MOCK_BUSINESSES, MOCK_MEMBERS } from '../data/mockData';

const DataContext = createContext();

export const useData = () => {
    return useContext(DataContext);
};

const generateSlug = (text) => {
    if (!text) return '';
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')        // Replace spaces with -
        .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
        .replace(/\-\-+/g, '-');     // Replace multiple - with single -
};

export const DataProvider = ({ children }) => {
    // Initialize data with slugs
    const [events, setEvents] = useState(() => 
        eventsData.map(e => ({ ...e, slug: e.slug || generateSlug(e.title) }))
    );
    const [businesses, setBusinesses] = useState(() => 
        MOCK_BUSINESSES.map(b => ({ ...b, slug: b.slug || generateSlug(b.name) }))
    );
    
    // We don't typically need slugs for members in public URLs, but good consistency
    const [members, setMembers] = useState(MOCK_MEMBERS);

    // --- Events CRUD ---
    const addEvent = (newEvent) => {
        const eventWithId = { 
            ...newEvent, 
            id: Date.now(),
            slug: generateSlug(newEvent.title) || `event-${Date.now()}`
        };
        setEvents(prev => [eventWithId, ...prev]);
    };

    const updateEvent = (updatedEvent) => {
        setEvents(prev => prev.map(event => {
            if (event.id === updatedEvent.id) {
                // Optionally update slug if title changed, but usually safer to keep stable unless requested.
                // For this request, let's keep it simple: if title changes, we don't force slug change 
                // to avoid breaking bookmarks, UNLESS we want to. 
                // Let's re-generate slug to ensure the "url matches name" requirement is met if they rename it.
                const newSlug = updatedEvent.title !== event.title ? generateSlug(updatedEvent.title) : event.slug;
                return { ...updatedEvent, slug: newSlug };
            }
            return event;
        }));
    };
    
    const deleteEvent = (id) => {
         setEvents(prev => prev.filter(event => event.id !== id));
    };

    // --- Businesses CRUD ---
    const addBusiness = (newBusiness) => {
        const businessWithId = { 
            ...newBusiness, 
            id: Date.now(),
            slug: generateSlug(newBusiness.name) || `biz-${Date.now()}`
        };
        setBusinesses(prev => [businessWithId, ...prev]);
    };

    const updateBusiness = (updatedBusiness) => {
        setBusinesses(prev => prev.map(biz => {
            if (biz.id === updatedBusiness.id) {
                const newSlug = updatedBusiness.name !== biz.name ? generateSlug(updatedBusiness.name) : biz.slug;
                return { ...updatedBusiness, slug: newSlug };
            }
            return biz;
        }));
    };

    const deleteBusiness = (id) => {
        setBusinesses(prev => prev.filter(biz => biz.id !== id));
    };

    // --- Members CRUD ---
    const addMember = (newMember) => {
        const memberWithId = { ...newMember, id: Date.now() };
        setMembers(prev => [memberWithId, ...prev]);
    };

    return (
        <DataContext.Provider value={{
            events,
            setEvents,
            addEvent,
            updateEvent,
            deleteEvent,
            businesses,
            setBusinesses,
            addBusiness,
            updateBusiness,
            deleteBusiness,
            members,
            setMembers,
            addMember
        }}>
            {children}
        </DataContext.Provider>
    );
};
