'use strict';

/**
 * 多语言支持（中文 / English / Русский）
 *
 * 约定：
 *   - 中文原文放在 source/_posts/ 下，不需要额外的 front-matter
 *   - 译文放在 source/_posts/en/、source/_posts/ru/ 下，front-matter 写
 *       lang: en            # 或 ru
 *       i18n: 中文原文的文件名（不含 .md）
 *   - 首页、归档按语言分别生成：/ 、/en/ 、/ru/ 以及 /archives/ 、/en/archives/ 、/ru/archives/
 */

const pagination = require('hexo-pagination');

const LANGS = ['zh', 'en', 'ru'];
const DEFAULT_LANG = 'zh';
const LANG_LABELS = { zh: '中文', en: 'EN', ru: 'RU' };

const langOf = post => (post && LANGS.includes(post.lang) ? post.lang : DEFAULT_LANG);
const keyOf = post => post.i18n || post.slug;
const langPrefix = lang => (lang === DEFAULT_LANG ? '' : lang + '/');

const postsOfLang = (posts, lang) => posts.filter(post => langOf(post) === lang);

// 首页：每种语言单独分页
hexo.extend.generator.register('index', function(locals) {
  const config = this.config;
  const paginationDir = config.pagination_dir || 'page';
  const base = config.index_generator.path || '';

  return [].concat(...LANGS.map(lang => {
    const posts = postsOfLang(locals.posts, lang).sort(config.index_generator.order_by);
    posts.data.sort((a, b) => (b.sticky || 0) - (a.sticky || 0));

    return pagination(langPrefix(lang) + base, posts, {
      perPage: config.index_generator.per_page,
      layout: ['index', 'archive'],
      format: paginationDir + '/%d/',
      data: { __index: true, lang }
    });
  }));
});

// 归档：每种语言单独分页
hexo.extend.generator.register('archive', function(locals) {
  const config = this.config;
  const paginationDir = config.pagination_dir || 'page';
  let archiveDir = config.archive_dir || 'archives';
  if (archiveDir[archiveDir.length - 1] !== '/') archiveDir += '/';

  return [].concat(...LANGS.map(lang => {
    const posts = postsOfLang(locals.posts, lang).sort('-date');

    return pagination(langPrefix(lang) + archiveDir, posts, {
      perPage: config.per_page,
      layout: ['archive', 'index'],
      format: paginationDir + '/%d/',
      data: { archive: true, lang }
    });
  }));
});

// 标签、分类页没有固定语言，按其中文章的语言决定界面语言
hexo.extend.filter.register('template_locals', function(locals) {
  const { page } = locals;
  if (!(page.tag || page.category) || !page.posts || !page.posts.length) return locals;

  const lang = langOf(typeof page.posts.first === 'function' ? page.posts.first() : page.posts[0]);
  if (lang !== page.lang) {
    const { i18n } = this.theme;
    const languages = [...new Set([lang].concat(i18n.languages, i18n.list()))];
    page.lang = lang;
    locals.__ = i18n.__(languages);
    locals._p = i18n._p(languages);
  }
  return locals;
}, 20);

hexo.extend.helper.register('page_lang', function(page = this.page) {
  return LANGS.includes(page.lang) ? page.lang : DEFAULT_LANG;
});

hexo.extend.helper.register('html_lang', function(page = this.page) {
  const lang = LANGS.includes(page.lang) ? page.lang : DEFAULT_LANG;
  return lang === 'zh' ? 'zh-CN' : lang;
});

// 站内链接加上语言前缀，例如 lang_url('/archives', 'en') -> /en/archives
hexo.extend.helper.register('lang_url', function(path, lang) {
  if (/^(https?:)?\/\//.test(path)) return path;
  return this.url_for('/' + langPrefix(lang) + path.replace(/^\//, ''));
});

// 当前语言的文章
hexo.extend.helper.register('lang_posts', function(lang) {
  return postsOfLang(this.site.posts, lang);
});

// 某一篇文章的其它语言版本
hexo.extend.helper.register('post_translation', function(post, lang) {
  const key = keyOf(post);
  return this.site.posts.filter(p => langOf(p) === lang && keyOf(p) === key).first();
});

// 同语言内的上一篇 / 下一篇
hexo.extend.helper.register('lang_neighbors', function(post) {
  const lang = langOf(post);
  const posts = postsOfLang(this.site.posts, lang).sort('-date').toArray();
  const index = posts.findIndex(p => p._id === post._id);
  return {
    newer: index > 0 ? posts[index - 1] : null,
    older: index >= 0 && index < posts.length - 1 ? posts[index + 1] : null
  };
});

// 语言切换按钮的目标地址
hexo.extend.helper.register('lang_switch_links', function(page = this.page) {
  const current = LANGS.includes(page.lang) ? page.lang : DEFAULT_LANG;

  return LANGS.map(lang => {
    let href;
    if (lang === current) {
      href = this.url_for(page.path.replace(/index\.html$/, ''));
    } else if (page.layout === 'post') {
      const target = this.post_translation(page, lang);
      href = target ? this.url_for(target.path) : this.lang_url('/', lang);
    } else if (page.archive) {
      href = this.lang_url('/' + (this.config.archive_dir || 'archives') + '/', lang);
    } else {
      href = this.lang_url('/', lang);
    }
    return { lang, label: LANG_LABELS[lang], href, active: lang === current };
  });
});
