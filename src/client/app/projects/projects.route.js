(function() {
  'use strict';

  angular
    .module('app.project')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'projects',
        config: {
          url: '/projects',
          templateUrl: 'app/projects/projects.html',
          title: 'Project Status',
          controller: 'ProjectController',
          controllerAs: 'vm',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Project Status'
          }
        }
      }
    ];
  }
})();
