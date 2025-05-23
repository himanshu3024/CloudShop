# CloudShop E-Commerce Website

## Project Idea

CloudShop is a modern, cloud-native e-commerce platform designed to provide a seamless, interactive, and dynamic shopping experience. Built with cutting-edge web technologies and deployed on Microsoft Azure, CloudShop aims to deliver a scalable, secure, and user-friendly online store. The platform features a responsive frontend, a robust backend with RESTful APIs, and a cloud-hosted database, making it ideal for businesses seeking a professional and efficient e-commerce solution. The project showcases best practices in web development, cloud integration, and modular design, targeting a production-ready application that can handle real-world e-commerce demands.

## Status

**Under Construction**: CloudShop is in development, with Part 3 completed, focusing on the frontend with product detail pages and shopping cart functionality. Part 1 established the HTML structure, Part 2 introduced React components and product listing with filtering, and Part 3 adds dynamic product pages and cart management using React Context. Future parts will add backend APIs, Azure Cosmos DB, and cloud deployment.

## Project Scope

CloudShop will be developed in 10 parts, each building on the previous to create a fully functional e-commerce platform. The scope includes:

1. **Frontend Foundation** (Completed):
   - Created a semantic HTML structure for the homepage with Tailwind CSS for responsive styling.
   - Set up a project structure optimized for React and Azure deployment.
   - Features: Sticky navbar, hero section, featured products placeholder, and footer.

2. **Product Listing Page** (Completed):
   - Implemented a dynamic product catalog using React with filtering by category.
   - Added interactivity for the mobile menu toggle.
   - Features: Grid-based product display, category filters, and responsive design.

3. **Product Details and Cart** (Completed):
   - Added product detail pages with dynamic routing and shopping cart functionality.
   - Used React Context for cart state management.
   - Features: Product details (image, description, price), add/remove from cart, cart summary.

4. **User Authentication (Frontend)**:
   - Develop login and registration UI with form validation and error handling.
   - Features: Responsive forms, secure input handling, and user feedback.

5. **Backend Setup**:
   - Set up a Node.js/Express server with RESTful API routes.
   - Connect to Azure Cosmos DB for scalable data storage.
   - Features: API endpoints for products and user management.

6. **Authentication Backend**:
   - Implement JWT-based authentication for secure user login and registration.
   - Integrate with Azure services for enhanced security (e.g., Azure Active Directory).
   - Features: Token-based authentication, password hashing, and session management.

7. **Product and Cart APIs**:
   - Create APIs for product CRUD operations and cart management.
   - Features: Scalable data retrieval, cart updates, and inventory tracking.

8. **Payment Integration**:
   - Integrate a payment gateway (e.g., Stripe) for secure transactions.
   - Features: Checkout flow, payment processing, and order confirmation.

9. **Azure Deployment**:
   - Deploy the frontend to Azure Static Web Apps or App Service.
   - Host the backend and APIs on Azure App Service.
   - Configure Azure Cosmos DB for production-grade database operations.
   - Features: CI/CD with Azure Pipelines, scalability, and monitoring.

10. **Final Touches and Optimization**:
    - Add advanced features like search, error handling, and performance optimizations.
    - Implement testing (unit and integration) and analytics.
    - Features: SEO optimization, accessibility improvements, and user analytics.

## Current Progress (Part 3)

### Description

Part 3 enhances the frontend with product detail pages and shopping cart functionality. Product pages are accessible via dynamic routes (e.g., `/products/:id`), displaying details like name, price, category, description, and placeholder images. The cart is managed using React Context, allowing users to add and remove items. The frontend remains lightweight and optimized for Azure deployment.

### Files

- `public/index.html`: HTML to load React, React Router, and `app.js` (unchanged from Part 2).
- `public/app.js`: Updated with product detail and cart components, plus React Context.
- `README.md`: Project documentation (this file).

### Features

- **Product Detail Pages**: Dynamic routes (`/products/:id`) display product details with placeholder images.
- **Shopping Cart**: Add/remove items with React Context, view cart with quantity and total price.
- **Placeholder Images**: Used Placehold.co for product visuals, preparing for real images in backend integration.
- **Responsive Design**: Tailwind CSS ensures a mobile-first layout with grid and flex utilities.
- **Cloud-Ready**: Lightweight frontend optimized for Azure Static Web Apps or App Service.
- **Professional Design**: Modular, well-documented code with modern UI to impress stakeholders.

### Setup Instructions

1. Place `index.html` and `app.js` in the `public/` directory.
2. Serve locally using a web server:
   ```bash
   npm install -g http-server
   cd public
   http-server
   ```
3. Open `http://localhost:8080` in a browser to test.
4. Test functionality:
   - Navigate to `/products` and click a product to view its detail page.
   - Add items to the cart from product or detail pages; check cart count in the navbar.
   - Visit `/cart` to view and remove items.
   - Test mobile menu toggle on small screens.
5. Validate HTML using [W3C Markup Validator](https://validator.w3.org/).
6. Test responsiveness by resizing the browser window.
7. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Part 3: Add product detail pages and shopping cart with React Context"
   git push -u origin main
   ```

## Technologies

- **Frontend**:
  - HTML5
  - Tailwind CSS (CDN, with custom CSS in later parts)
  - React (via CDN)
  - React Router for navigation
- **Backend** (Future):
  - Node.js
  - Express.js
  - RESTful APIs
- **Database** (Future):
  - Azure Cosmos DB (MongoDB API)
- **Cloud** (Future):
  - Azure App Service
  - Azure Static Web Apps
  - Azure Pipelines for CI/CD
- **Additional Tools**:
  - Git/GitHub for version control
  - Stripe for payments
  - Jest for testing (Part 10)

## Project Structure

```
CloudShop/
├── public/
│   ├── index.html        # Homepage HTML (Part 1, updated in Part 2)
│   ├── app.js            # React components (Part 2, updated in Part 3)
│   ├── styles.css        # Placeholder for future custom CSS
├── src/
│   ├── components/       # React components (Part 3+)
├── server/               # Backend (Part 5+)
│   ├── server.js
│   ├── routes/
├── README.md             # This file
```

## Author

Himanshu

## License

© 2025 CloudShop. All rights reserved. This project is under active development and intended for demonstration purposes.

## Contributing

This is a personal project under construction. Contributions will be considered in later phases once the core functionality is complete.

## Contact

For inquiries, reach out via GitHub Issues.