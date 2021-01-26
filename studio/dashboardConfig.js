export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '601046edec973b4df67c19c6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-svgzep7g',
                  apiId: 'fd5906f2-9d7e-4e2c-b21f-6a003b21b4e3'
                },
                {
                  buildHookId: '601046ee99398e522efe93a8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6x25cf4g',
                  apiId: '8d278e83-0a11-4890-9051-211dce25a70b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jatne/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6x25cf4g.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
