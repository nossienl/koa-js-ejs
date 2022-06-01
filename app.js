import Koa from 'koa';
import Router from 'koa-router';
import render from 'koa-ejs';
import path   from 'path';
import serve  from 'koa-static';
import { fileURLToPath } from 'node:url';
import {pages} from "./data/pages.js";

const app = new Koa();
const router = new Router();
const dirname = path.dirname(fileURLToPath(import.meta.url));
let pageData = {};

// Static Assets
app.use(serve('public'));

// RENDER
render(app, {
    root: path.join(dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
});

/// CREATE MENU FROM PAGES
const menu = pages.map((item) => {
    return { name: item.name, href: item.link, active: false };
});

/// GET PAGE DATA AND ADD MENU
async function getPageData(page){
    pageData = pages.find(data => data.id === page);
    pageData.data.menu = menu;
}

app.use(async (ctx, next) => {
    try {
        await next();
        if (ctx.status === 404) ctx.throw(404);
    } catch (err) {
        ctx.status = err.status || 500
        await ctx.render(`pages/error`, {error: err.message, menu:menu});
    }
})

// Router
router.get('/', async ctx => {
    await getPageData('index');
    const { template, data } = pageData;
    await ctx.render(`pages/${template}`, data);
});

router.get('/:page', async ctx => {
    const ids = pages.map((obj) => obj.id);
    const page = ctx.params.page;
    if (ids.includes(page)) {
        await getPageData(page)
        const { template, data } = pageData;
        await ctx.render(`pages/${template}`, data);
    } else {
        ctx.throw(404, `404: Page not Found : ${page}` );
    }
});

router.get('/:category/:type', async ctx => {
    const { category, type } = ctx.params;
    const slug = [category, type].join('/');
    const ids = pages.map((obj) => obj.id);

    if (ids.includes(slug)) {
        await getPageData(slug)
        const { template, data } = pageData;
        await ctx.render(`pages/${template}`, data);
    } else {
        ctx.throw(404, `404: Page not Found : ${slug}` );
    }
});

app.use(router.routes());

app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

// Run, Baby Run
app.listen(9000);
console.log('Server started on port 9000');

