const path = require('path');

module.exports = {
    "mode": "development",
    "entry": path.join(__dirname, 'src/index.js'),
    "output": {
        "path": __dirname + '/dist',
        "filename": "[name].[chunkhash:8].js"
    },
    "devtool": "source-map",
    "module": {
        "rules": [
            {
                "enforce": "pre",
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": "eslint-loader"
            }
        ]
    },
    "devServer": {
        "contentBase": path.join(__dirname, 'dist'),
        "compress": true,
        "port": 9000
    }
}
