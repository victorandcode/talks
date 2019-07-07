const merge = require('webpack-merge')
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const base = require('./webpack.base.config');

module.exports = merge(base, {
    mode: 'production',
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        new WebpackCdnPlugin({
            modules: [
                {
                    name: 'react',
                    var: 'React',
                    path: 'umd/react.production.min.js'
                },
                {
                    name: 'react-dom',
                    var: 'ReactDOM',
                    path: 'umd/react-dom.production.min.js'
                },
            ]
        }),
        new MomentLocalesPlugin({
            localesToKeep: ['es', 'en'],
        })
    ]
});
