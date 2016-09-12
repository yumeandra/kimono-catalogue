var gulp = require("gulp"); //weź paczkę "gulp" z folderu "node_modules" i zapisz ją do zmiennej "gulp"
var concat = require("gulp-concat"); //nazwa paczki, ktorą ściągnęlismy przypisana do zmiennej "concat"
//gulp odpowiada za tworzenie zadań i automatyzację
//gulp-concat rozszerza możliwości gulpa poprzez łączenie plików
var browserSync = require("browser-sync"); //automatyczne odświeżanie w przeglądarce
var sass = require("gulp-ruby-sass"); 
//gulp-ruby-sass pozwoli na kompilację sassa przy pomocy języka Ruby
var rename = require("gulp-rename"); //pozwoli nam zmieniać nazwy plików
var sourcemaps = require("gulp-sourcemaps"); //pozwoli nam dodawać mapy do plików 

var Files = {
    html: "./index.php",
//    css: ["./css/style-1.css", "./css/style-2.css", "./css/style-3.css"],
    css_dest: "./css", //tworzę folder docelowy dla plików css
//    js: ["./js/1.js", "./js/2.js", "./js/3.js"],
    js_dest: "./js",
    scss: "./sass/main.scss"
    
};
//obiekt Files odpowiada za ścieżki do plików w naszym projekcie

gulp.task("css", function(){ 
//<-- już tego nie potrzbujemy, kiedy mamy scss
    //utwórz zadanie css, które:
    
    return gulp.src(Files.css) // bierze wszystkie pliki css
        .pipe(concat("style.css")) //łączy je (concat) w jeden plik pod nazwą "main.css"
        .pipe(gulp.dest(Files.css_dest))//zapisuje we wskazanym folderze "css_dest"
        .pipe(browserSync.reload({stream:true})); // i na końcu odświeża przeglądarkę
});

gulp.task("sass", function(){
   return sass(Files.scss, {
       style: "expanded",
       sourcemap: true
   }) 
   .on("error", sass.logError) //.on to jest założenie eventu
   .pipe(sourcemaps.write())
   .pipe(rename("style.css"))
   .pipe(gulp.dest(Files.css_dest))
   .pipe(browserSync.reload({stream:true}));
});

gulp.task("js", function(){
    
    return gulp.src(Files.js)
    .pipe(concat("app.js"))
    .pipe(gulp.dest(Files.js_dest))
    .pipe(browserSync.reload({stream:true}));
    
});

gulp.task("default", ["sass"], function(){ //tu zmieniamy css na sass
//tworzymy nowe zadanie, które wykona się, kiedy wykonają się zadania ["js", "css"]
//Włączam browser Sync i odpalam serwer lokalny
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./css/**/*.css", ["css"]);
    gulp.watch("./sass/**/*.scss", ["sass"])
    gulp.watch("./js/**/*.js", ["js"]);
    gulp.watch(Files.html, browserSync.reload);
    //obserwuj pliki i w zalezności od plikó odpal odpowiedni task
});
