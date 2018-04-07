
// @require core/index.js
// @require ./helpers/compute_style_int.js

each ( ['Width', 'Height'], ( prop, index ) => {

  fn[`outer${prop}`] = function ( includeMargins ) {

    if ( !this[0] ) return;

    return this[0][`offset${prop}`] + ( includeMargins ? computeStyleInt ( this[0], `margin${ !index ? 'Left' : 'Top' }` ) + computeStyleInt ( this[0], `margin${ !index ? 'Right' : 'Bottom' }` ) : 0 );

  };

});
