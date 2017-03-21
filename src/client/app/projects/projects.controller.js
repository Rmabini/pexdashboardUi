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
      return {
         chart: {
          type: 'discreteBarChart',
          height: 450,
          margin : {
              top: 20,
              right: 20,
              bottom: 60,
              left: 55
          },
          x: function(d){ return d.label; },
          y: function(d){ return d.value; },
          showValues: true,
          valueFormat: function(d){
            return d3.format(',.4f')(d);
          },
          transitionDuration: 500,
          xAxis: {
            axisLabel: 'X Axis'
          },
          yAxis: {
            axisLabel: 'Y Axis',
            axisLabelDistance: 30
          }
        }
      }// emd pf chart
    }//end of Options

    function getData(){
      return [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "A" ,
                        "value" : -29.
                    } ,
                    {
                        "label" : "B" ,
                        "value" : 0
                    } ,
                    {
                        "label" : "C" ,
                        "value" : 32.
                    } ,
                    {
                        "label" : "D" ,
                        "value" : 196.
                    } ,
                    {
                        "label" : "E" ,
                        "value" : 0.
                    } ,
                    {
                        "label" : "F" ,
                        "value" : -98.
                    } ,
                    {
                        "label" : "G" ,
                        "value" : -13.
                    } ,
                    {
                        "label" : "H" ,
                        "value" : -5.
                    }
                ]
            }
        ] //end of return 
    }// end of getData

  }// end of Functions
})();
