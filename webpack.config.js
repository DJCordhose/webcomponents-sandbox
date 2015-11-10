module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015'},
            {test: /\.tsx?$/, loader: 'ts-loader'}
        ]
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'

};
