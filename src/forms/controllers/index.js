import Content1 from '../controllers/content1.controller.js';
import Content2 from '../controllers/content2.controller.js';
import Content3 from '../controllers/content3.controller.js';
import NotFound from '../controllers/not-found.controller.js';

const controllers = {
    content1: Content1,
    content2: Content2,
    content3: Content3,
    notFound: NotFound
}

export { controllers };