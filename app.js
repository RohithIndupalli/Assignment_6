// const express = require('express');
// const app = express();
// const path = require('path');
// const fs = require('fs'); // Import the fs module to handle file operations
// const PORT = 3000;

// const indexRouter = require('./routes/landing');
// const registerRoute = require('./routes/registration')
// const userRoute = require('./routes/user')
// const dataRoute = require('./routes/data');


// app.use('/', indexRouter);
// // Pug importing
// app.set('view engine', 'pug'); // Set Pug as the view engine

// // Serve static files (CSS, Images, JS)
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// // Route to home page
// app.get("/", (req, res) => {
//     res.render('landing'); // Render the index.pug file
// });

// // Handle user registration
// app.post('/register', (req, res) => {
//     const { email, password } = req.body;
//     const userFilePath = path.join(__dirname, 'public', 'assets', 'user.json');

//     // Read existing users
//     fs.readFile(userFilePath, 'utf8', (err, data) => {
//         let users = [];
//         if (!err && data) {
//             users = JSON.parse(data); // Parse existing users
//         }

//         // Check for existing email
//         if (users.find(user => user.email === email)) {
//             return res.render('register', { error: 'Email already exists' }); // Render register with error
//         }

//         // Add new user
//         users.push({ email, password });

//         // Write updated user list back to user.json
//         fs.writeFile(userFilePath, JSON.stringify(users, null, 2), (writeError) => {
//             if (writeError) {
//                 console.error('Error writing to user.json:', writeError);
//                 return res.status(500).send('Server error');
//             }

//             res.redirect('/login'); // Redirect to login after registration
//         });
//     });
// });

// // Handle login POST request
// app.post('/login', (req, res) => {
//     const { email, password } = req.body; // Get email and password from request
//     const userFilePath = path.join(__dirname, 'public', 'assets', 'user.json'); // Path to user.json

//     // Read the user.json file
//     fs.readFile(userFilePath, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading user.json:', err);
//             return res.status(500).send('Server error');
//         }

//         // Parse the user data
//         let users;
//         try {
//             users = JSON.parse(data);
//         } catch (parseError) {
//             console.error('Error parsing user.json:', parseError);
//             return res.status(500).send('Server error');
//         }

//         // Check if the user exists
//         const user = users.find(user => user.email === email && user.password === password);
//         if (user) {
//             // Login successful
//             return res.redirect('/post'); // Redirect to dashboard or another page
//         } else {
//             // Login failed
//             return res.render('login', { error: 'Invalid email or password' }); // Render login.pug with error
//         }
//     });
// });

// // Middleware for rendering other Pug templates
// app.get('/login', (req, res) => {
//     res.render('login'); // Render login.pug
// });

// app.get('/register', (req, res) => {
//     res.render('register'); // Render register.pug
// });

// app.get('/dashboard', (req, res) => {
//     res.render('dashboard'); // Renders dashboard.pug
// });



// app.get('/success', (req, res) => {
//     res.render('success'); // Renders thankyou.pug
// });




// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });




// const express = require('express');
// const app = express();
// const path = require('path');

// // Set the view engine to Pug
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// // Middleware for parsing POST request bodies (for form data)
// app.use(express.urlencoded({ extended: true }));

// // Static files (CSS, JS, Images)
// app.use(express.static(path.join(__dirname, 'public')));

// // Routes
// app.get('/', (req, res) => {
//     res.render('landing', { title: 'Home' });
// });

// app.get('/login', (req, res) => {
//     res.render('login', { title: 'Login' });
// });

// app.get('/register', (req, res) => {
//     res.render('register', { title: 'Register' });
// });

// app.post('/register', (req, res) => {
//     // You can handle form data here (e.g., saving the user)
//     // For simplicity, we'll just redirect to the success page after registration.
//     res.redirect('/success');
// });

// app.get('/success', (req, res) => {
//     res.render('success', { title: 'Registration Successful' });
// });

// // Start the server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });


// const express = require('express');
// const app = express();
// const path = require('path');

// // Set the view engine to Pug
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// // Middleware for parsing POST request bodies (for form data)
// app.use(express.urlencoded({ extended: true }));

// // Static files (CSS, JS, Images)
// app.use(express.static(path.join(__dirname, 'public')));

// // Routes
// app.get('/', (req, res) => {
//     res.render('landing', { title: 'Home' });
// });

// app.get('/login', (req, res) => {
//     res.render('login', { title: 'Login' });
// });

// app.get('/register', (req, res) => {
//     res.render('register', { title: 'Register' });
// });

// app.post('/register', (req, res) => {
//     // Handle form data (e.g., saving the user)
//     const { username, password } = req.body;
//     console.log(`Registered user: ${username}`);
    
//     // Redirect to the success page after registration
//     res.redirect('/success');
// });

// app.get('/success', (req, res) => {
//     res.render('success', { title: 'Registration Successful' });
// });

// // Start the server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });


// const express = require('express');
// const app = express();
// const path = require('path');
// const fs = require('fs');
// const bcrypt = require('bcrypt');

// // Set the view engine to Pug
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// // Middleware for parsing POST request bodies (for form data)
// app.use(express.urlencoded({ extended: true }));

// // Serve static files (CSS, JS, Images)
// app.use(express.static(path.join(__dirname, 'public')));

// // Path to the JSON file where user data is stored
// const usersFile = path.join(__dirname, 'users.json');

// // Function to read users from JSON file
// function readUsers() {
//   try {
//     const data = fs.readFileSync(usersFile, 'utf8');
//     return JSON.parse(data);
//   } catch (err) {
//     return [];
//   }
// }

// // Function to write users to JSON file
// function writeUsers(users) {
//   fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
// }

// // Routes
// app.get('/', (req, res) => {
//   res.render('landing', { title: 'Home' });
// });

// app.get('/login', (req, res) => {
//   res.render('login', { title: 'Login' });
// });

// app.get('/register', (req, res) => {
//   res.render('register', { title: 'Register' });
// });
// app.get('/post', (req, res) => {
//     res.render('post');
//   });
//   app.get('/jobs', (req, res) => {
//     const jobs = [
//       { title: 'Software Engineer', image: '/path/to/image', description: 'Responsible for...', url: '#', openPositions: 4 },
//       // Other jobs...
//     ];
//     res.render('jobs', { jobs });
//   });
  
  
// // Handle registration
// app.post('/register', async (req, res) => {
//   const { username, password } = req.body;
//   const users = readUsers();

//   // Check if user already exists
//   const existingUser = users.find(user => user.username === username);
//   if (existingUser) {
//     return res.render('register', { title: 'Register', error: 'Username already exists' });
//   }

//   // Hash the password before saving
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Add new user to the users array
//   users.push({ username, password: hashedPassword });

//   // Save updated users to the JSON file
//   writeUsers(users);

//   // Redirect to success page
//   res.redirect('/success');
// });

// app.get('/success', (req, res) => {
//   res.render('success', { title: 'Registration Successful' });
// });

// // Handle login
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const users = readUsers();

//   // Find the user in the JSON file
//   const user = users.find(user => user.username === username);
//   if (!user) {
//     return res.render('login', { title: 'Login', error: 'Invalid username or password' });
//   }

//   // Compare the hashed password
//   const isPasswordCorrect = await bcrypt.compare(password, user.password);
//   if (!isPasswordCorrect) {
//     return res.render('login', { title: 'Login', error: 'Invalid username or password' });
//   }

//   // Redirect to dashboard after successful login
//   res.redirect('/dashboard');
// });

// // Dashboard (after successful login)
// app.get('/dashboard', (req, res) => {
//   res.render('dashboard', { title: 'Dashboard' });
// });

// // Start the server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');

// Set the view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing POST request bodies (for form data)
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Path to the JSON file where user data is stored in the data folder
const usersFile = path.join(__dirname, 'data', 'users.json');

// Function to read users from JSON file
function readUsers() {
  try {
    const data = fs.readFileSync(usersFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Function to write users to JSON file
function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// Routes
app.get('/', (req, res) => {
  res.render('landing', { title: 'Home' });
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

app.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

  app.get('/jobs', (req, res) => {
    const jobs = [
      { title: 'Software Engineer', image: '/path/to/image', description: 'Responsible for...', url: '#', openPositions: 4 },
      // Other jobs...
    ];
    res.render('jobs', { jobs });
  });

  // app.post('/register', (req, res) => {
  //   const { username, email, password } = req.body;
  //   const users = readUsers();
  
  //   // Check if the user already exists
  //   const existingUser = users.find(user => user.username === username);
  //   if (existingUser) {
  //     return res.render('register', { title: 'Register', error: 'Username already exists' });
  //   }
  
  //   // Store the password as plain text (NOT recommended)
  //   users.push({
  //     username,
  //     email,
  //     password, // storing plain-text password
  //   });
  
  //   // Save updated users to the JSON file and handle errors
  //   try {
  //     writeUsers(users);
  //     // Redirect to success page after successful registration
  //     res.redirect('/success');
  //   } catch (err) {
  //     console.error("Error saving to users.json:", err);
  //     res.render('register', { title: 'Register', error: 'Registration failed. Please try again.' });
  //   }
  // });

  app.post('/register', (req, res) => {
    const { username, email, password, name, phone, dob, status } = req.body; // Extract all form data from the body
    const users = readUsers();
  
    // Check if the user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      return res.render('register', { title: 'Register', error: 'Username already exists' });
    }
  
    // Add the new user with all registration details
    users.push({
      username,
      email,
      password, // storing plain-text password (not recommended)
      name,
      phone,
      dob,
      status
    });
  
    // Save the updated users to the JSON file and handle errors
    try {
      writeUsers(users);
      // Redirect to success page after successful registration
      res.redirect('/success');
    } catch (err) {
      console.error("Error saving to users.json:", err);
      res.render('register', { title: 'Register', error: 'Registration failed. Please try again.' });
    }
  });
  

  app.get('/success', (req, res) => {
    res.render('success', { title: 'Registration Successful' });
  });
  

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();

  // Find the user in the JSON file
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.render('login', { title: 'Login', error: 'Invalid username' });
  }

  // Directly compare the plain-text password
  if (password !== user.password) {
    return res.render('login', { title: 'Login', error: 'Invalid password' });
  }

  // Redirect to dashboard after successful login
  res.redirect('/dashboard');
});

// Dashboard (after successful login)
app.get('/dashboard', (req, res) => {
  res.render('dashboard', { title: 'Dashboard' });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
