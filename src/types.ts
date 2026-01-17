import React from 'react';

export interface PillarData {
    id: string;
    topic: string;
    subtitle: string;
    icon: React.ReactNode;
    current: string;
    proposed: string;
}

export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
