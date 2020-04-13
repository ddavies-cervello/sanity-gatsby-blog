export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e94b52ae84c8a01714c00c3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-59q32ooq',
                  apiId: 'f82afdf4-304a-482d-a753-f4fb08304f16'
                },
                {
                  buildHookId: '5e94b52abff9af01a4b79797',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-inn2qt21',
                  apiId: '58866998-5352-4745-83c2-c5a99ea8c5a0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ddavies-cervello/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-inn2qt21.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
