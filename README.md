# Everyday Echoes

**Everyday Echoes** is a personal blog website designed to share daily life experiences, thoughts, and reflections. It aims to reach readers who enjoy learning from others' lives through engaging and well-structured blog posts.

## Features

- **Subscription System:** Allows users to subscribe and receive OTP-verified email notifications for new posts.
- **Responsive Design:** Fully responsive and mobile-friendly interface using Tailwind CSS.
- **Admin Dashboard:** Provides an interface for admins to post new blog content using a rich text editor developed with Tiptap.
- **Dynamic Titles:** Automatically updates page titles based on the page.
- **Dark/Light Mode:** Toggle between dark and light themes for user preference.
- **Latest Blogs:** Fetches and displays the latest blog posts dynamically.
- **Engagement Options:** Users can like and comment on blog posts to interact with the content.

## Technologies Used

- **Frontend:** React.js, Next.js
- **Backend:** Firebase, MongoDB
- **Styling:** Tailwind CSS

## Getting Started

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Nisha0202/everydayechoes
   ```

2. Navigate to the project directory:
   ```bash
   cd everyday-echoes
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Firebase Setup

To enable Google sign-up functionality, set up Firebase:

1. Create a Firebase project in the Firebase Console.
2. Add your web app to the Firebase project.
3. Enable Google Sign-In in the Firebase Authentication settings.
4. Replace the Firebase configuration in your project with the configuration details from your Firebase Console.

## Nodemailer Setup

For email sending functionality, set up Nodemailer with Gmail:

1. Install Nodemailer in your project:
   ```bash
   npm install nodemailer
   ```

2. Set up a Gmail account and generate an app password (for enhanced security). Follow Gmail’s instructions for creating an app password.
3. Configure Nodemailer with the Gmail user and app password. Update your environment variables or configuration file with the following details:
   ```js
   const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: 'your-email@gmail.com',
       pass: 'your-app-password'
     }
   });
   ```

4. Use the transporter to send emails from your application.

## Run Locally

Replace `https://everydayechoes.vercel.app` to `http://localhost:3000`and open `http://localhost:3000` on your browser to see the application.

## Deployment

The project is deployed on Vercel. You can view the live site [here](https://everydayechoes.vercel.app/).

# Admin Account

- **Gmail:** admin989@gmail.com
- **OTP:** 87658
