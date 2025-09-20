# TaskGet&Go

A modern, mobile-first task marketplace platform that connects task posters with taskers for various services. Built with React and designed for seamless task discovery, application, and payment processing.

## 🌐 Live Application

**Access the application:** [taskgetngo.base44.app](https://taskgetngo.base44.app)

## 📋 Table of Contents

- [Setup and Installation](#setup-and-installation)
- [Project Architecture](#project-architecture)
- [Code Structure and Functionalities](#code-structure-and-functionalities)
- [Source Code Repository](#source-code-repository)
- [Features](#features)
- [Technology Stack](#technology-stack)

## 🚀 Setup and Installation

The application is currently deployed and accessible at: **[taskgetngo.base44.app](https://taskgetngo.base44.app)**

Simply visit the URL in your web browser to start using the platform. No additional installation is required for end users.

## 🏗️ Project Architecture

### High-Level Architecture

TaskGet&Go follows a modern React-based single-page application (SPA) architecture with the following key components:

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (React SPA)                     │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Layout    │  │   Pages     │  │ Components  │         │
│  │             │  │             │  │             │         │
│  │ • Navigation│  │ • Dashboard │  │ • TaskCard  │         │
│  │ • Header    │  │ • PostTask  │  │ • Filters   │         │
│  │ • Footer    │  │ • Chat      │  │ • Forms     │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│                    Data Layer                               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  Entities   │  │   Utils     │  │   Services  │         │
│  │             │  │             │  │             │         │
│  │ • Task      │  │ • Routing   │  │ • API Calls │         │
│  │ • User      │  │ • Helpers   │  │ • Auth      │         │
│  │ • Chat      │  │ • Constants │  │ • Storage   │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

### Directory Structure

```
TaskGet&Go/
├── Components/           # Reusable UI components
│   ├── chat/            # Chat-related components
│   │   ├── PaymentVerification
│   │   └── TaskCompletionForm
│   ├── dashboard/       # Dashboard components
│   │   ├── SortButton
│   │   ├── StatsSection
│   │   ├── TaskCard
│   │   ├── TaskFilters
│   │   └── ViewToggle
│   ├── detail/          # Task detail components
│   │   ├── ApplicationForm
│   │   └── TaskDetailCard
│   ├── manage/          # Task management components
│   │   └── ApplicantCard
│   └── post/            # Task posting components
│       ├── CategorySelector
│       ├── LocationPicker
│       ├── MediaUpload
│       └── TaskForm
├── Entities/            # Data models and schemas
│   ├── ChatMessage      # Chat message entity
│   ├── Task            # Task entity with full schema
│   └── TaskApplication # Task application entity
├── Pages/               # Main application pages
│   ├── Chat            # Individual chat interface
│   ├── ChatList        # Chat conversations list
│   ├── Dashboard       # Main task browsing page
│   ├── ManageTask      # Task management interface
│   ├── MyApplications  # User's applied tasks
│   ├── MyTask          # User's posted tasks
│   ├── PostTask        # Task creation form
│   ├── Profile         # User profile management
│   └── TaskDetail      # Individual task details
└── Layout.js           # Main application layout
```

## 💻 Code Structure and Functionalities

### Core Features

#### 1. **Task Management System**
- **Task Creation**: Users can post tasks with detailed descriptions, categories, payment amounts, and location
- **Task Discovery**: Advanced filtering and sorting system for task browsing
- **Task Categories**: Support for 7 main categories (General, Home, Office, Bazar, Delivery, Cleaning, PickUp)
- **Location Services**: GPS-based location tracking and distance calculation
- **Media Support**: Image and video uploads for task documentation

#### 2. **Application and Matching System**
- **Task Applications**: Users can apply to tasks with custom messages
- **Applicant Management**: Task posters can review and select applicants
- **Status Tracking**: Comprehensive task status management (open, in_progress, completed, etc.)

#### 3. **Payment Integration**
- **UPI Payment System**: Integrated with major UPI providers (Google Pay, Paytm, PhonePe)
- **Payment Verification**: Multi-step payment confirmation process
- **Transaction Tracking**: Complete payment history and status tracking

#### 4. **Real-time Communication**
- **Chat System**: Built-in messaging between task posters and taskers
- **Chat Management**: Conversation history and message threading
- **Notification System**: Real-time updates for task status changes

#### 5. **User Experience Features**
- **Mobile-First Design**: Optimized for mobile devices with responsive layout
- **Advanced Filtering**: Filter by category, price range, location, date, duration, and distance
- **Smart Sorting**: Sort by payment amount, distance, duration, deadline, and recency
- **View Modes**: List and grid view options for task browsing
- **Location Services**: Automatic location detection and distance-based filtering

### Key Components

#### **Layout.js**
- Main application wrapper with navigation
- Mobile-optimized header and bottom navigation
- Responsive design with custom CSS variables
- Animation support using Framer Motion

#### **Dashboard (Pages/Dashboard)**
- Main task browsing interface
- Real-time task filtering and sorting
- Location-based distance calculations
- Statistics display and user engagement features

#### **PaymentVerification (Components/chat/PaymentVerification)**
- Multi-step UPI payment process
- Integration with major UPI providers
- Transaction verification and confirmation
- Payment method selection and UPI ID handling

#### **Task Entity (Entities/Task)**
- Comprehensive task data model
- Support for multiple categories and priorities
- Payment and completion tracking
- Media attachment capabilities

### Data Flow

1. **Task Creation**: Users create tasks through PostTask page
2. **Task Discovery**: Tasks are displayed on Dashboard with filtering options
3. **Application Process**: Users apply to tasks, posters review applications
4. **Task Execution**: Selected taskers complete tasks with media proof
5. **Payment Processing**: UPI-based payment verification and completion
6. **Communication**: Real-time chat throughout the process

## 🔗 Source Code Repository

**GitHub Repository:** [https://github.com/JaJangMeow/TaskGet-Go.git](https://github.com/JaJangMeow/TaskGet-Go.git)

The repository contains the complete source code for the TaskGet&Go platform, including:
- All React components and pages
- Entity definitions and data models
- Styling and layout configurations
- Component documentation and structure

## ✨ Features

### For Task Posters
- Create and manage tasks with detailed descriptions
- Set payment amounts and negotiate terms
- Review and select from multiple applicants
- Track task progress and completion
- Process payments through UPI integration
- Communicate with taskers via built-in chat

### For Taskers
- Browse available tasks with advanced filtering
- Apply to tasks with custom messages
- Track application status and task progress
- Submit completion proof with media
- Receive payments through UPI
- Communicate with task posters

### Platform Features
- **Mobile-First Design**: Optimized for smartphones and tablets
- **Location Services**: GPS-based task discovery and distance calculation
- **Real-time Updates**: Live chat and status notifications
- **Payment Security**: Secure UPI payment processing
- **Media Support**: Image and video uploads for task documentation
- **Advanced Search**: Multi-criteria filtering and sorting
- **Responsive UI**: Seamless experience across all devices

## 🛠️ Technology Stack

- **Frontend Framework**: React
- **Routing**: React Router
- **Animations**: Framer Motion
- **UI Components**: Custom component library
- **Styling**: CSS with custom properties
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect)
- **Location Services**: Browser Geolocation API
- **Payment Integration**: UPI protocol
- **Media Handling**: File upload and display
- **Responsive Design**: Mobile-first approach

---

**TaskGet&Go** - Connecting people through tasks, one service at a time.
