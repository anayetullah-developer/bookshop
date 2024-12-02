**Book Shop B4A2V1**
====================

**Objective**
-------------

Develop an Express-based Book Store application using TypeScript and MongoDB, with Mongoose as the ORM. This project ensures seamless management of books and orders, with features such as data integrity, validation, and revenue calculation.

**Features**
------------

### **Book Management**

*   **Add Books**: Create new book records with details like title, author, price, category, and description.
    
*   **View Books**:
    
    *   Fetch all books with optional search by title, author, or category.
        
    *   Retrieve details of a specific book by its ID.
        
*   **Update Books**: Modify book details, including stock quantity and other attributes.
    
*   **Delete Books**: Remove a book from the catalog.
    

### **Order Management**

*   **Place Orders**:
    
    *   Users can create orders by providing email, selected product, quantity, and total price.
        
    *   Ensures stock availability and updates book inventory after an order is placed.
        
*   **Calculate Revenue**: Aggregates and calculates total revenue from all orders.
    

### **Data Integrity**

*   **Book Validation**: Validates data using Mongoose schema to ensure the integrity of book details.
    
*   **Order Validation**: Ensures that the product exists and sufficient stock is available before placing an order.
    

**Technologies Used**
---------------------

*   **Backend**: Node.js, Express.js, TypeScript
    
*   **Database**: MongoDB with Mongoose
    
*   **Deployment**: Vercel (optional)
    

**Setup Instructions**
----------------------

### **Prerequisites**

Ensure the following are installed on your machine:

*   [Node.js](https://nodejs.org) (v18+)
    
*   [MongoDB](https://www.mongodb.com) (local or cloud-based, e.g., MongoDB Atlas)
    
*   [Git](https://git-scm.com)
    

### **Installation**

1.  bashCopy code git clone https://github.com/anayetullah-developer/bookshop
    
2.  bashCopy code npm install
    
3.  envCopy code PORT=5000 mongodb+srv://admin:YgvfCO1t2PR8lhqd@cluster0.ef5ee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    
4.  bashCopy code npm run build
    
5.  **Start the Application**
    
    *   bashCopy code npm run dev
        
    *   bashCopy code npm start
        

### **Testing the API**

*   Use an API client like [Postman](https://www.postman.com) 
    
*   **Base URL**: http://localhost:5000
    

**Contribution**
----------------

Feel free to contribute! Follow these steps:

1.  Fork the repository.
    
2.  bashCopy codegit checkout -b feature-name
    
3.  bashCopy codegit commit -m "Add new feature"
    
4.  Push to your branch and create a Pull Request.
    

**License**
-----------

This project is licensed under the Me License.

**Contact**
-----------

For queries or suggestions, feel free to reach out:

*   Email: your-anayetdev@gmail.com
    
*   GitHub: [anayetullah-developer] https://github.com/anayetullah-developer/