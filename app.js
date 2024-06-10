const express = require('express');
const app = express();
const port = 3000; // You can change this to any port you prefer
const path = require('path'); // Import the path module
let redirectCounts = {}; // Initialize as an empty object
// Redirect function based on username
const redirectToPredefinedURL = (username) => {
    // Here, you map usernames to their URLs. This is a basic example.
    // You might want to store this mapping in a database or an external configuration for scalability.
    const urlMapping = {
        'demi': 'https://onlyfans.com/dleahhx/c11',
        'evelyn': 'https://onlyfans.com/cutieevelynn/c12',
        'lucero': 'https://onlyfans.com/lovedepenta/c4',
        'luna': 'https://onlyfans.com/lunabelle/c17',
        'hailey': 'https://onlyfans.com/hayley_summers/c9',
        'alexandra': 'https://onlyfans.com/alexandraonlyf/c2',
        "liltashmae3":  "https://onlyfans.com/liltashmae/c3",
        "liltashmae2":  "https://onlyfans.com/liltashmae/c2",
        "liltashmae1":  "https://onlyfans.com/liltashmae/c1",
        "liltashmae4":  "https://onlyfans.com/liltashmae/c4",
    };

    return urlMapping[username]; // Default URL if username not found
};

app.get('/:username', (req, res) => {
    const { username } = req.params;
    const targetUrl = redirectToPredefinedURL(username);

    if (targetUrl) {
        // Increment the redirect count for the username
        if (redirectCounts[username]) {
            redirectCounts[username]++;
        } else {
            redirectCounts[username] = 1;
        }

        console.log(`Redirect count for ${username}: ${redirectCounts[username]}`);

        // Serve an HTML page with a JavaScript redirect
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="refresh" content="5;url=${targetUrl}">
                <title>Redirecting...</title>
                <style>
                    body {
                        background-color: white;
                        color: black;
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding-top: 50px;
                    }
                </style>
            </head>
            <body>
                <p>You will be there in 5 sec</p>
                <script>
                    setTimeout(function() {
                        window.location.href = "${targetUrl}";
                    }, 5000); // Redirect after 5 seconds
                </script>
            </body>
            </html>
        `);
    } else {
        const filePath = path.join(__dirname, '404_page.html');
        res.status(404).sendFile(filePath);
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});