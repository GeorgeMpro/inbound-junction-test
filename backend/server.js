const app = require('./app');

const port = process.env.PORT;

// Start the app by listening on the default Heroku port
// app.listen(port);
app.listen(port, () => {
    console.log('Sever is up on port ' + port)
});
