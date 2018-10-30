# gulp-riot3

**Gulp** plugin for **Riot**

# Install

```
npm i gulp-riot3 --save-dev
```

## Example

```js
var gulp = require('gulp');
var riot = require('gulp-riot3');
var concat = require('gulp-concat');

gulp.task('tags', function () {
  return gulp.src('src/**/*.{tag,js}')
    .pipe(riot())
    .pipe(concat('build.js'))
    .pipe(gulp.dest('dist'));
});
```

## Compile options

```js
gulp.task('tags', function () {
  return gulp.src('src/**/*.{tag,js}')
    .pipe(riot({
      compact: true
    }))
    .pipe(concat('build.js'))
    .pipe(gulp.dest('dist'));
});
```

- **[Compiler](https://riot.js.org/guide/compiler/)**
- **[API](https://riot.js.org/api/compiler/)**

## License

ISC License

## Author

Legostaev Vadim (*legostaev.vadim@mail.ru*)
