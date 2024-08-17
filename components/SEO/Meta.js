import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            <title>Maerih Portfolio</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Maerih Portfolio" />
            <meta name="description"
                content="Maerih Portfolio Personal Portfolio Website. Made with Kali Linux." />
            <meta name="author" content="Maerih" />
            <meta name="keywords"
                content="Maerih, Maerih's portfolio, Maerih linux, kali portfolio, ali kali, Maerih kali linux portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#2063e9" />

            /* Search Engine */
            <meta name="image" content="images/logos/pic-1.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Maerih Portfolio" />
            <meta itemProp="description"
                content="Maerih Personal Portfolio Website. Made with Kali (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/pic-1.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Maerih Portfolio" />
            <meta name="og:description"
                content="Maerih Personal Portfolio Website. Made with Kali (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1.png" />
            <meta name="og:url" content="maerih.com" />
            <meta name="og:site_name" content="Maerih Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/pic-1.png" />
            <link rel="apple-touch-icon" href="images/logos/pic-2.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
