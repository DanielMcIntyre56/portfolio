const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const path = require('path');
const favicon = require('serve-favicon');
const rateLimit = require('express-rate-limit');

// ExpressJS app to handle backend
const app = express()

// Enable 'trust proxy' to allow using 'X-Forwarded-For' header
// so IPs sending requests can be tracked by middleware
app.set('trust proxy', '1');
app.get('/ip', (request, response) => response.send(request.ip))

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/send-email', limiter)

// Serve static files with middleware
// TODO: Use a module bundler for these instead
// TODO: Use public dir to house these?
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')));
app.use(favicon(path.join(__dirname, 'assets', 'images', 'favicon.png')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Define send-email endpoint
app.post('/send-email', (req, res) => {
    const { name, email, message} = req.body;

    let transport = nodeMailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: '<email>',
            pass: '<app password>'
        }
    });

    let mail = {
        from: '<from email>',
        to: '<to email>',
        subject: '<subject>',
        text: `From: ${name}. \nEmail: ${email}. \nMessage: ${message}.`
    }

    transport.sendMail(mail, (error, info) => {
        if (error) {
            console.error('Error occurred:', error);
            res.send('An error occurred while sending the email.');
        } else {
            console.log('Email sent:', info.response);
            res.redirect('/#Contact')
            res.status(200).json({message: 'Email sent successfully!'});
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
