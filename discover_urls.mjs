async function getUrls() {
  const archiveUrls = [
    "https://kevnit.com/blog-posts/",
    "https://kevnit.com/blog-posts/page/2/",
    "https://kevnit.com/blog-posts/page/3/",
  ];
  const postUrls = new Set();
  for (const archive of archiveUrls) {
    console.log("Checking archive:", archive);
    const res = await fetch(archive);
    const html = await res.text();
    const matches = html.matchAll(
      /<a[^>]*href="(https:\/\/kevnit\.com\/[^"\/]+\/)"[^>]*>/g,
    );
    for (const match of matches) {
      const url = match[1];
      // Filter out common non-blog links
      if (
        url.includes("/page/") ||
        url.includes("/category/") ||
        url.includes("/tag/") ||
        url.includes("/about-us/") ||
        url.includes("/careers/") ||
        url.includes("/contact-us/") ||
        url.includes("/privacy-policy/") ||
        url.includes("/terms-of-use/") ||
        url === "https://kevnit.com/" ||
        url === "https://kevnit.com/blog-posts/"
      ) {
        continue;
      }
      postUrls.add(url);
    }
  }
  console.log("Found URLs:", Array.from(postUrls));
}
getUrls();
