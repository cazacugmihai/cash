
// @require collection/each.js
// @require ./after.js
// @require ./remove.js

fn.replaceWith = function ( content ) {

  return this.each ( ele => {

    const parent = ele.parentNode;

    if ( !parent ) return;

    const $eles = cash ( content );

    if ( !$eles[0] ) {
      this.remove ();
      return false;
    }

    parent.replaceChild ( $eles[0], ele );

    cash ( $eles[0] ).after ( $eles.slice ( 1 ) );

  });

};
