'use strict';

describe('fit.home module', function() {

  beforeEach(module('fit.home'));

  describe('Home Controller', function(){
    var testCtrl;
    var scope;

    beforeEach(inject(function($controller, $rootScope){
      scope = $rootScope.$new();
      testCtrl = $controller('HomeCtrl', {
        $scope: $scope
      });
    }))


    it('should be initialized', function(){
      //var testCtrl = $controller('HomeCtrl');
      scope.example = 1;
      expect(testCtrl).toBeDefined();
      expect(testCtrl.title).toBeDefined();
      expect(testCtrl.name).toBe('LoftSchool');
    });

    it('should contain valuables', function(){
      expect(testCtrl.valuables).toBeDefined();
      expect(testCtrl.valuables.length).toBeGreaterThan(0);
      expect(testCtrl.valuables[0]).toBe('We are the best');
    });

    it('should be possible add some valuable', function(){
      var test_val = "Some test valuable";

      var length = testCtrl.valuables.length;

      testCtrl.addVal(test_val);

      expect(testCtrl.valuables.length).toBe(length + 1);
      expect(testCtrl.valuables[testCtrl.valuables.length-1]).toBe(test_val);

    })

  });

});
