module.exports = {
    devServer:{
        port: 8888,
        proxy:{
            '/api':{
                target:"http://39.97.33.178",
                changeOrigin:true
            }
        }
    }
}