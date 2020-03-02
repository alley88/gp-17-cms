const path = require("path");
module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@router":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@components":path.join(__dirname,"./src/components"),
                "@common":path.join(__dirname,"./src/common"),
                "@api":path.join(__dirname,"./src/api"),
                "@utils":path.join(__dirname,"./src/utils"),
                "@mock":path.join(__dirname,"./src/mock")
            }
        }
    }
}