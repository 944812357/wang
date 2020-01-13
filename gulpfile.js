var gulp=require("gulp");
var uglify=require("gulp-uglify");
var concat=require("gulp-concat");
var load=require("gulp-load-plugins")();
var browser=require("browser-sync").create();//创建服务器
gulp.task("a0",function(){
    browser.init({
        server:"./",
        port:3003
    });
    gulp.watch("./",server.reload());
});

/* gulp.task("init",function(){
    //运行gulp init或者json文件中，运行npm run "a":"gulp init" 中的key项 例：npm run a

    gulp.src("./test/knwoledge/basic/gulp/a.js");
    gulp.src(["./test/knwoledge/basic/gulp/a.js","./test/knwoledge/basic/gulp/b.js"]);
    gulp.src("./test/knwoledge/basic/gulp/*.js");
    gulp.src("./test/knwoledge/basic/gulp/*.js")
    .pipe(load.uglify())
    .pipe(load.concat("main.min.js"))
    .pipe(gulp.dest("./"));
}); */


gulp.task("a1",function(done){
    console.log("aaa");
    done();
});
//执行完a1后再执行a2
gulp.task("a2",gulp.series("a1",function(){
    //.parallel 共同执行
    console.log("bbb");
}));
gulp.task("a3",function(){
    gulp.watch("./gulpfile.js",function(event){
        console.log(event);
    }); 
});