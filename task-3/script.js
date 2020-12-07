const figlet = require('figlet');

const createChessboard = () => {
	const quantitySquare = 8;

	for (let i = 0; i < quantitySquare; i++) {
		if (i % 2) {
			console.log('■', '□', '■', '□', '■', '□', '■', '□');
		} else {
			console.log('□', '■', '□', '■', '□', '■', '□', '■');
		}
	}

}

figlet(process.argv[2], function(err, data) {
	if (err) {
		console.log('Something went wrong...');
		console.dir(err);
		return;
	}
	if (data) {
		createChessboard();
	}
});