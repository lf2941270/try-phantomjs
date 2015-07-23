var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path

var arr = []
for(var i = 1990; i < 2000; i++){
    arr.push(i)
}
arr.forEach(function (article_id) {
    var childArgs = [
        'script.js',
        article_id
    ]
    childProcess.execFile (binPath, childArgs,function(err, stdout, stderr){
        console.log (stdout)
    })
})


