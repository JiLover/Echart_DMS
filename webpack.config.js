var webpack =require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');


var config = {
	
	//plugins:[commonsPlugin],

	entry:{
		//index:'./main.js',
		index:'./echart.js',
	},

	output : {
		path:'./',
		filename:'[name].js'
	},
	devServer:{
		inline:true,
		port:7777
	},

	module:{
 	  loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
			
         query: {
            presets: ['es2015', 'react']
         }
      }]
	}

}
module.exports=config;