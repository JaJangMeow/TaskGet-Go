
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
    LayoutGrid, 
    Plus, 
    List, 
    User, 
    MessageSquare,
    Zap
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
    const location = useLocation();
    
    const navigationItems = [
        {
            title: "Browse",
            url: createPageUrl("Dashboard"),
            icon: LayoutGrid
        },
        {
            title: "My Tasks",
            url: createPageUrl("MyTasks"),
            icon: List
        },
        {
            title: "Chat",
            url: createPageUrl("ChatList"),
            icon: MessageSquare
        },
        {
            title: "Applied",
            url: createPageUrl("MyApplications"),
            icon: List // Changed to List to represent applied tasks list
        },
        {
            title: "Profile",
            url: createPageUrl("Profile"),
            icon: User
        }
    ];

    const isActiveRoute = (url) => {
        // Special handling for Chat pages
        if (url === createPageUrl("ChatList") && (currentPageName === 'Chat' || currentPageName === 'ChatList')) {
            return true;
        }
        return location.pathname === url;
    };

    return (
        <div className="min-h-screen bg-app-silver flex flex-col font-sans">
            <style>
                {`
                    :root {
                        --app-orange: #F44A22;
                        --app-midnight: #161616;
                        --app-silver: #FEF8E8;
                        --app-grey: #E4E2E3;
                        --app-stone: #A8AAAC;
                    }

                    body {
                        background-color: var(--app-silver);
                    }
                    
                    .font-sans {
                        font-family: 'Inter', sans-serif;
                    }

                    * {
                        -webkit-tap-highlight-color: transparent;
                    }
                    
                    .mobile-card {
                        background: white;
                        border-radius: 12px;
                        border: 1px solid var(--app-grey);
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    
                    .mobile-card:hover {
                         box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
                         transform: translateY(-2px);
                    }
                    
                    .mobile-button {
                        background-color: var(--app-orange);
                        color: white;
                        border-radius: 8px;
                        transition: all 0.2s ease;
                        box-shadow: 0 4px 12px rgba(244, 74, 34, 0.3);
                    }
                    
                    .mobile-button:hover {
                        background-color: #E0441F;
                    }

                    .mobile-button:active {
                        transform: translateY(1px);
                        box-shadow: 0 2px 8px rgba(244, 74, 34, 0.4);
                    }

                    .nav-item:active {
                        transform: scale(0.95);
                    }
                `}
            </style>
            
            {/* Mobile Header */}
            <header className="bg-white/80 backdrop-blur-md border-b border-app-grey sticky top-0 z-50">
                <div className="px-4 py-3 flex items-center justify-between">
                    <Link 
                        to={createPageUrl("Dashboard")} 
                        className="flex items-center gap-2"
                    >
                        <div className="w-8 h-8 bg-app-orange rounded-lg flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-app-midnight">
                                TaskGet&Go
                            </h1>
                        </div>
                    </Link>
                    {currentPageName === 'Dashboard' && (
                         <Link to={createPageUrl("PostTask")}>
                            <Button className="mobile-button" size="sm">
                                <Plus className="w-4 h-4 mr-1" />
                                Post Task
                            </Button>
                        </Link>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className={`flex-grow ${currentPageName === 'Chat' ? 'p-0' : 'p-4'} ${currentPageName !== 'Chat' ? 'pb-24' : ''}`}>
                 <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname + location.search}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className={currentPageName === 'Chat' ? 'h-full flex flex-col' : ''}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Mobile Bottom Navigation */}
            {currentPageName !== 'Chat' && (
                 <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-app-grey z-50">
                    <div className="flex justify-around items-center py-2 px-2">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.title}
                                to={item.url}
                                className={`nav-item flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-200 ${
                                    isActiveRoute(item.url)
                                        ? "text-app-orange"
                                        : "text-app-stone hover:text-app-midnight"
                                }`}
                            >
                                <item.icon className="w-5 h-5 mb-1" />
                                <span className="text-xs font-medium">{item.title}</span>
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </div>
    );
}
