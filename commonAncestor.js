/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandma = new Tree();
  * var mom = new Tree();
  * grandma.addChild(mom);
  * var me = new Tree();
  * mom.addChild(me);
  * grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

var Tree = function() {
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */
Tree.prototype.getClosestCommonAncestor = function(child1, child2) {
  var closest = null;
  if (child1 === child2) { // if same, common ancestor is themselvies
    closest = child1
  }

  // if child1 and child2 are descenants of this tree, current closest is this tree
  if (this.isDescendant(child1) && this.isDescendant(child2)) {
    closest = this;   

    // check if this tree's child tree are ancestor of child1, child2.
    for (var i = 0;  i < this.children.length; i++) {
      closest = this.children[i].getClosestCommonAncestor(child1, child2) || closest;
    }
  }

  return closest
};

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
Tree.prototype.getAncestorPath = function(child) {
  
  var path = [];
  // check if child is part of this tree
  if(this.isDescendant(child) || this === child){
    path.push(this);

  // if yes, 
  // find the children that's ancestor of this child
    for (var i = 0; i < this.children.length; i++) {
      path = path.concat(this.children[i].getAncestorPath(child))
    }
  }
  return path.length > 0? path : null;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};


/*var grandma = new Tree();
var mom = new Tree();
grandma.addChild(mom);
var me = new Tree();
mom.addChild(me);
var bro = new Tree()
var aunt = new Tree()
var cousin = new Tree();
aunt.addChild(cousin);
grandma.addChild(aunt)
mom.addChild(bro);
var greatGrandma = new Tree ()
greatGrandma.addChild(grandma)
 console.log('path' , greatGrandma.getAncestorPath(me))// -> [greatGrandma, grandma, mom, me]
 mom.getAncestorPath(me) //-> [mom, me]
 me.getAncestorPath(me) //-> [me]
 grandma.getAncestorPath(H R Giger) -> null
console.log('path', grandma.getAncestorPath(me)); // => [grandma, mom, me]
console.log('common', JSON.stringify(grandma.getClosestCommonAncestor(me, mom)))*/