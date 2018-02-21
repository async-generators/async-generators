const gulp = require('gulp');
const fs = require('fs');
const replace = require('gulp-replace');
const package = require('./package.json');
const dash2Camel = require( 'dash-2-camel' );

const deps = Object.keys(package.devDependencies)
  .filter(x => x.startsWith("@async-generators/"))
  .map(x => x.replace("@async-generators/", ""));

console.log(deps);

gulp.task("copy", function () {
  for (let dep of deps) {
    gulp.src("./node_modules/@async-generators/" + dep + "/src/*")
      .pipe(replace('@async-generators/', '../'))
      .pipe(gulp.dest("src/" + dep + "/"));
  }
});

gulp.task("index", function(){
  let index = "";

  index += `if(Symbol["asyncIterator"] === undefined) ((<any>Symbol)["asyncIterator"]) = Symbol.for("asyncIterator"); \n`

  for (let dep of deps) {
    let depindex = fs.readFileSync(`./src/${dep}/index.ts`).toString();
    if (depindex.includes("export default")) {
      index += `export {default as ${dash2Camel(dep)}} from './${dep}';\n`
    }
  }

  for (let dep of deps) {
    index += `export * from './${dep}';\n`
  }

  fs.writeFileSync("src/index.ts", index);
});

