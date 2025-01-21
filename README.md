# StaySphere

StaySphere is a full-stack web application for booking and listing properties, inspired by platforms like Airbnb. It allows users to create, manage, and book listings with features such as user authentication, dynamic maps, and review management.

## Tech Stack
- **Frontend:** EJS (Embedded JavaScript), Bootstrap 5
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ORM
- **Authentication:** Passport.js
- **Deployment:** Render
- **Other Tools:** MapTiler, Leaflet.js, Cloudinary (for image hosting)

## Features
- Follows the **MVC (Model-View-Controller)** design pattern
- User authentication (login, registration, and sessions)
- CRUD operations for property listings and reviews
- Interactive maps displayed on every listing page
- Image upload and management using Cloudinary
- Responsive design with Bootstrap

## Live Demo
- Check out the live application at https://staysphere-8epx.onrender.com/listings

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v16+)
- MongoDB (local or Atlas)
- Git

### Clone the Repository
```bash
git clone <repository-url>
cd staysphere
```

### Install Dependencies
```bash
npm install
```

### Setup Environment Variables
Create a `.env` file in the root directory with the following:
```plaintext
MAP_KEY=<Your_MapTiler_API_Key>
CLOUD_NAME=<Your_Cloudinary_Cloud_Name>
CLOUD_API_SECRET=<Your_Cloudinary_API_Secret>
CLOUD_API_KEY=<Your_Cloudinary_API_KEY>
SECRET=<Your_Session_Secret>
ATLASDB_URL=<YOUR_ATLAS-URI>
```

### Run the Application
```bash
node app.js
```
The app will be available at: `http://localhost:8080/listings`

## Deployment on Render
1. Push your code to a GitHub repository.
2. Create a new **Web Service** on Render.
3. Connect your GitHub repository.
4. Set environment variables on Render matching your `.env` file.
5. Deploy and monitor the logs.

## Troubleshooting
- **Bootstrap not loading?** Ensure correct paths to static files and proper CDN links.
- **Database connection error?** Double-check your MongoDB URI.

## Contributing
Feel free to fork and submit pull requests to enhance StaySphere!

## License
This project is licensed under the MIT License.

