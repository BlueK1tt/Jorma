var fs = require('fs');
fs.readFile('./node_modules/dewords.txt', 'utf-8' , (err, data) => {
    if (err)
        throw err;
    console.log(data);
});