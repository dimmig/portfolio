import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: "bingbot",
                allow: "/",
                crawlDelay: 0,
            },
            {
                userAgent: "msnbot",
                allow: "/",
                crawlDelay: 0,
            },
        ],
        sitemap: "https://dimmig.me/sitemap.xml",
    };
}