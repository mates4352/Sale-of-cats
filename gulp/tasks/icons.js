import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import gulpif from 'gulp-if';
import svgSprite from 'gulp-svg-sprite';

import config from '../config';

const iconSvg = () => (
   gulp.src(config.src.iconSvg)
      .pipe(gulpif(config.isProd, imagemin([
         imagemin.svgo({
            plugins: [
               { removeViewBox: true },
               { cleanupIDs: false },
            ],
         }),
      ],
      {
         verbose: true,
      })))
      .pipe(svgSprite({
         mode: {
            symbol: {
               sprite: 'spriteSVG.svg',
            },
         },
         shape: {
            transform: [
               {
                  svgo: {
                     plugins: [
                        {
                           removeAttrs: {
                              attrs: [
                                 'class', 'data-name', 'fill.*', 'stroke.*',
                              ],
                           },
                        },
                     ],
                  },
               },
            ],
         },
      }))
   .pipe(gulp.dest(config.build.icons))
)

export default iconSvg;
