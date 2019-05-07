import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | posts', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:posts');
    assert.ok(controller);
  });
  
  test('should remove currentUser on deleteCurrentUser action', function(assert){
    assert.expect(2);
    
    let controller = this.owner.lookup('controller:posts');
    var user = {id: 1, name: test};
    
    controller.set('currentUser', user);
    
    assert.equal(controller.get('currentUser'), user);
    
    controller.send('deleteCurrentUser');
    
    assert.equal(controller.get('currentUser'), null);
  });
  
  test('should set currentUser and currentPost on getPostDetails action', function(assert){
      assert.expect(4);
      
      let controller = this.owner.lookup('controller:posts');
    
      assert.equal(controller.get('currentUser'), undefined);
      assert.equal(controller.get('currentPost'), undefined);
      
      controller.send('getPostDetails', 1);
    
      assert.equal(controller.get('currentUser').length, 1);
      assert.equal(controller.get('currentPost').length, 1);
  });
});
