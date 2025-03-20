# TalentAt - Job Portal Application

A modern, feature-rich job portal application built with React, featuring dynamic navigation, drag-and-drop functionality, and responsive design.

## Features

### 1. Dynamic Navigation System

- Server-driven navigation menu
- Active Link has different color solid white but non active have only outlines

- Drag-and-drop reordering of menu items
- Submenu support with expandable/collapsible sections
- Visibility toggle for menu items
- Edit mode for navigation customization
- Change menu item to none visible then press ok It will disappear from view mode but still exist in edit mode
- If menu editing canceled by press X button it will reset to original value
- Track drop item from, to whithout change when hover on any other items.


### 2. Job Management
- Job listing with pagination
- Job card display with detailed information
- Sorting options for job listings (sort according postedDays newest and latest ascending and deascending ...)

### 3. User Interface
- Create context for sidebar navigation to handle open between vaiuous components.
- Responsive design for all devices
- Modern Bootstrap-based styling
- Interactive drag-and-drop interface
- Mobile-friendly navigation
- Customizable sidebar

### 4. API Integration
- Centralized API configuration
- Axios instance with interceptors
- Error handling and management
- Organized API service structure

### 5. State Management
- Context-based state management
- Dynamic route handling
- Persistent state across sessions

## Tech Stack

- **Frontend Framework:** React
- **UI Library:** Reactstrap
- **Styling:** CSS Modules
- **HTTP Client:** Axios
- **Drag and Drop:** react-dnd
- **Routing:** react-router-dom
- **Icons:** Font Awesome, React Icons
- **Notification:** toastify

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── header/
│   │   └── sidebar/
│___pages
|________└── jobs/   
├── contexts/
├── pages/
├── routes/
├── services/
│   └── api/
└── styles/
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Configuration

The application uses a base URL of `http://localhost:8081` for API requests. Configure your API endpoints in the `src/services/api` directory.

## Features in Detail

### Navigation System
- Dynamic menu items loaded from API
- Drag-and-drop reordering in edit mode
- Visibility toggle for menu items
- Submenu support with expand/collapse functionality
- Mobile-responsive design

### Job Management
- Paginated job listings
- Sortable job cards
- Detailed job information display

### User Experience
- Smooth animations and transitions
- Touch-friendly interface
- Responsive design for all screen sizes
- Intuitive navigation
- Visual feedback for user actions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/yourbranch`)
3. Commit your changes (`git commit -m 'version1.0.0'`)
4. Push to the branch (`git push origin feature/yourbranch`)
5. Open a Pull Request

## License

This project is licensed under the Asmaa Ebeed License as a Task assesment.


## Support

For support, please open an issue in the repository or contact the development team. 