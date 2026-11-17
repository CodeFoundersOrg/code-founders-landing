// Loads the Markdown content that TinaCMS edits (src/content/**).
// Each entry is the file's frontmatter plus `file` (path) and `html()`,
// which returns the rendered Markdown body. (We use html() instead of the
// <Content /> component because older files still name a `layout` in their
// frontmatter, which would otherwise wrap the body in a second full page.)

const files = import.meta.glob('../content/**/*.md', { eager: true });

const all = Object.entries(files)
  .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
  .map(([file, mod]) => ({
    ...mod.frontmatter,
    file,
    html: () => mod.compiledContent(),
  }));

/** All entries directly inside src/content/<dir> */
export function inDir(dir) {
  return all.filter((entry) => {
    const parent = entry.file.split('/').slice(0, -1).join('/');
    return parent.endsWith(`/content/${dir}`);
  });
}

export function sortedFounders() {
  return inDir('founders').sort(
    (a, b) => (a.order || 9999) - (b.order || 9999),
  );
}

/** URL slug for an opleiding, based on its file name (lowercase, like the old site). */
export function opleidingSlug(entry) {
  return entry.file.split('/').pop().replace(/\.md$/, '').toLowerCase();
}
