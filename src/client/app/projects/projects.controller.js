(function() {
  'use strict';

  angular
    .module('app.project')
    .controller('ProjectController', ProjectController);

  ProjectController.$inject = ['logger','$scope'];
  /* @ngInject */
  function ProjectController(logger,$scope) {
    var vm = this;
    vm.title = 'Project Status';
    vm.label =' Projects'; 
    activate();

    $scope.options = getOptions();
    $scope.data = getData();

    function activate() {
      logger.info('Activated Project View ');
    }

    function getOptions(){
      return  {
            chart: {
                type: 'pieChart',
                height: 300,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 300,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        }// emd pf chart
    }//end of Options

    function getData(){
      return [
            {
                key: "One",
                y: 5
            },
            {
                key: "Two",
                y: 2
            },
            {
                key: "Three",
                y: 9
            },
            {
                key: "Four",
                y: 7
            },
            {
                key: "Five",
                y: 4
            },
            {
                key: "Six",
                y: 3
            },
            {
                key: "Seven",
                y: .5
            }
        ]; //end of return 
    }// end of getData

  }// end of Functions
})();
