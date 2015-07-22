# webpack-extract-sass-test

Test for https://github.com/jtangelder/sass-loader/issues/125

`npm install`

`npm watch`

Making changes to `src/scss/index.scss` triggers the following:
```
c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\webpack\node_modules\webpack-core\lib\NormalModuleMixin.js:143
                                throw new Error("callback(): The callback was already called.");
                                      ^
Error: callback(): The callback was already called.
    at context.callback (c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\webpack\node_modules\webpack-core\lib\NormalModuleMixin.js:143:11)
    at Object.<anonymous> (c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\extract-text-webpack-plugin\loader.js:115:6)
    at Tapable.<anonymous> (c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\webpack\lib\Compiler.js:213:10)
    at c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\webpack\lib\Compiler.js:401:12
    at Tapable.next (c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\webpack\node_modules\tapable\lib\Tapable.js:67:11)
    at Tapable.<anonymous> (c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\awesome-typescript-loader\dist\index.js:203:13)
    at Tapable.next (c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\webpack\node_modules\tapable\lib\Tapable.js:69:14)
    at Tapable.<anonymous> (c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\webpack\lib\CachePlugin.js:40:4)
    at Tapable.applyPluginsAsync (c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\webpack\node_modules\tapable\lib\Tapable.js:71:13)
    at Tapable.<anonymous> (c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\webpack\lib\Compiler.js:398:9)
    at Tapable.<anonymous> (c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\webpack\lib\Compilation.js:569:13)
    at Tapable.applyPluginsAsync (c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\webpack\node_modules\tapable\lib\Tapable.js:60:69)
    at Tapable.<anonymous> (c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\webpack\lib\Compilation.js:564:10)
    at Tapable.applyPluginsAsync (c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\webpack\node_modules\tapable\lib\Tapable.js:60:69)
    at Tapable.<anonymous> (c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\webpack\lib\Compilation.js:559:9)
    at Tapable.applyPluginsAsync (c:\cygwin64\home\Andrew\webpack-sass-test\node_modules\webpack\node_modules\tapable\lib\Tapable.js:60:69)
    ```
