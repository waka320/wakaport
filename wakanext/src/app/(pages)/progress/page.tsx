"use client";

import React from 'react';
import { Timeline } from '@/components/progress/Timeline';
import { projects } from '@/lib/progress/projects';

const ProgressPage = () => (
    <div className='white-background '>
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                経歴
            </h1>
            <Timeline projects={projects} />

        </div>
    </div>
);

export default ProgressPage;
