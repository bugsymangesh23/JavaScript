import express from 'express'; //importing the express package

const app = express(); //creating a new express server by calling the express() function.
const PORT = 8000; //port definition where the server runs on.

/* app.use() function called to create a wildcard (*) route.
 * Route is created so that express can receive HTTP requests.
 */

app.use('*', (req, res) => {
	res.status(404).json({
		message: 'not found' });
});
/* app.listen() function is called to start express server
 * and listen for requests on port specified at PORT variable.
 */
app.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);});

