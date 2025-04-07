"use client";

import React from 'react';
import { Timeline } from '@/components/progress/Timeline';
import { projects } from '@/lib/progress/projects';

const ProgressPage = () => (
    <div className='white-background min-h-screen py-8'>
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-center text-3xl font-bold mb-8 text-[var(--primary)]">
                経歴
            </h1>
            <div className="content-background mb-8 p-5 md:p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <Timeline projects={projects} />
            </div>
        </div>
    </div>
);

export default ProgressPage;
