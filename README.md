# E-learn - Full Stack Learning Management System (LMS)

A comprehensive Full-Stack LMS built with modern web technologies, featuring course management, student enrollment, and secure payments.

## 🚀 Features

- **Authentication**: Secure user authentication using Clerk.
- **Course Management**: Create, edit, and delete courses.
- **Student Dashboard**: Track progress and view enrolled courses.
- **Secure Payments**: Integrated with Stripe for course purchases.
- **Media Uploads**: Cloudinary integration for course images and videos.
- **Rich Text Editing**: Quill editor for course descriptions.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js with Vite
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Navigation**: React Router
- **Payments**: Stripe

### Backend
- **Framework**: Node.js & Express
- **Database**: MongoDB (Mongoose)
- **Authentication**: Clerk (Webhooks & API)
- **Media**: Cloudinary
- **Payments**: Stripe Integration

## 📁 Project Structure

```text
├── client/          # Frontend React application
├── server/          # Backend Express API
├── .gitignore       # Git ignore rules
└── README.md        # Project documentation
```

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB connection string
- Clerk API keys
- Stripe API keys
- Cloudinary credentials

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Aman86420/E-learn.git
   cd E-learn
   ```

2. **Frontend Setup**:
   ```bash
   cd client
   npm install
   npm run dev
   ```

3. **Backend Setup**:
   ```bash
   cd ../server
   npm install
   # Create a .env file based on the environment variables needed
   npm run start
   ```

## 📄 License
This project is for educational purposes.
