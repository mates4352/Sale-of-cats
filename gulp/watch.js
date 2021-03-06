import gulp from 'gulp';
import script from './tasks/scripts';
import html from './tasks/html';
import style from './tasks/style';
import images from './tasks/images';
import iconSvg from './tasks/icons';
import config from './config';

const watchFile = (callback) => {
   gulp.watch(config.watch.html, html);
   gulp.watch(config.watch.style, style);
   gulp.watch(config.watch.js, script);
   gulp.watch(config.watch.images, images);
   gulp.watch(config.watch.iconSvg, iconSvg);
   callback();
};

export default watchFile;
