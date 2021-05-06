module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'Avocado-ui',
        description:
          'Accessible, Themeable and beautiful Design System for your side projects.',
        siteUrl: 'http://avocado-ui.vercel.app/',
        navItems: [{ title: 'Docs', url: '/docs/' }],
        githubRepositoryURL: 'https://github.com/vickOnRails/avocado-ui',
        sections: ['Getting-Started', 'Components', 'Layout', 'Open-Source'],
        twitterAccount: 'vick_onrails'
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`space-grotesk`],
        display: 'swap'
      }
    }
  ]
}
