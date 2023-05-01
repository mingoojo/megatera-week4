import express from 'express';

const port = 3000;
const app = express();
app.use(express.urlencoded({extended: true}));
app.get('/product', (req, res) => {
	const product = [
		{category: 'Fruits', price: '$1', stocked: true, name: 'Apple'},
		{category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit'},
		{category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit'},
		{category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach'},
		{category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin'},
		{category: 'Vegetables', price: '$1', stocked: true, name: 'Peas'},
	];
	res.send(product);
});

app.get('/', (req, res) => {
	res.send('hello world!');
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
