'use client';
import React from 'react'
import { ConvexReactClient } from "convex/react";
import { ConvexProvider } from "convex/react";
import Provider from './provider';

const ConvexClientProvider = ({children}) => {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  return (
    <div>
        <ConvexProvider client={convex}>
            <Provider>
                {children}
            </Provider>
        </ConvexProvider>
      
    </div>
  )
}

export default ConvexClientProvider
