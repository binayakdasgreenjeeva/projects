const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Define a route for the contact form page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Handle form submission
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  // Create a nodemailer transporter with your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service (e.g., Gmail, Outlook, etc.)
    auth: {
      user: 'talk2binayak@gmail.com', // Your email address
      pass: 'ilovemylove@43' // Your email password
    }
  });

  const mailOptions = {
    from: 'noreply@gmail.com',
    to: 'binayak.d@greenjeeva.com', // Recipient's email address
    subject: 'New contact form submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Error occurred, please try again later.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Thank you for contacting us!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
