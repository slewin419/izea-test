import Ember from 'ember';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | posts', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:posts');
    assert.ok(controller);
  });
  
  test('should remove currentPost on deleteCurrentPost action', function(assert){
    assert.expect(2);
    
    let controller = this.owner.lookup('controller:posts');
    var post = {id: 1, title: 'test', body: 'text'};
    
    controller.set('currentPost', post);
    
    assert.equal(controller.get('currentPost'), post);
    
    controller.send('deleteCurrentPost');
    
    assert.equal(controller.get('currentPost'), null);
  });
  
  //Cannot figure out how to run asynchronous test :/
  test('should set currentUser and currentPost on getPostDetails action', function(assert){
      assert.expect(2);
      
      let controller = this.owner.lookup('controller:posts');
      
      Ember.run(function(){
	  controller.send('getPostDetails', '1');
   
	  assert.equal(controller.get('currentUser').id, 1);
	  assert.equal(controller.get('currentPost').id, 1);
      });
  });
});
