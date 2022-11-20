const requireModules = require.context('@/plugins', true, /\.js$/);

requireModules.keys().forEach(plugin => {

    const [,pluginName] = plugin.split('/')

    if(pluginName !== 'index.js'){
        console.log(pluginName)
        require (`${plugin}`)

    }

})