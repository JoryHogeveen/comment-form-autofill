jQuery( function( $ ) {
	var url_vars = [],
	    $window  = $( window );

	window.location.search.replace(
		/[?&]+([^=&]+)=([^&]*)/gi,
		function( m, key, value ) {
			url_vars[ key ] = value;
		}
	);

	$window.load( function () {
		$( '.comment-form' ).each( function() {
			var $this  = $( this ),
				$input    = $this.find( 'input' ),
				$select   = $this.find( 'select' ),
				$textarea = $this.find( 'textarea' );

			$input.each( function() {
				var $this     = $( this ),
					type      = $this.attr( 'type' ),
					name      = $this.attr( 'name' ),
					value     = $this.attr( 'value' )
					url_value = getUrlParam( name );

				// No url value found.
				if ( null === url_value ) {
					return true;
				}

				switch ( type ) {
					case 'radio':
						$this.prop( 'checked', ( value === url_value ) );
						break;
					case 'checkbox':
						$this.prop( 'checked', Boolean( url_value ) );
						break;
					default:
						if ( ! value ) {
							$this.val( url_value );
						}
						break;
				}
				_debug( 'input ' + type + ': ' + name + ' : ' + value );
			} );

			$select.each( function () {
				var $this = $( this ),
					name  = $this.attr( 'name' ),
					value = $this.attr( 'value' );
				if ( ! value ) {
					value = getUrlParam( name );
					if ( value ) {
						$this.val( value );
					}
				}
				_debug( 'select: ' + name + ' : ' + value );
			} );

			$textarea.each( function () {
				var $this = $( this ),
					name  = $this.attr( 'name' ),
					value = $this.html();
				if ( ! value ) {
					value = getUrlParam( name, value );
					if ( value ) {
						$this.val( value );
					}
				}
				_debug( 'textarea: ' + name + ' : ' + value );
			} );

			var rating = $this.find( '#rating' );
			if ( rating.length ) {
				var value = rating.val();
				$this.find( '.star-' + value ).click();
				_debug( 'rating: ' + value );
			}
		} );
	} );

	function getUrlParam( parameter, default_value ) {
		if ( 'undefined' !== typeof url_vars[ parameter ] ) {
			return decodeURIComponent( url_vars[ parameter ] );
		}
		if ( default_value ) {
			return default_value;
		}
		return null;
	}

	function _debug( value ) {
		if ( url_vars[ 'debug' ] ) {
			console.log( value );
		}
	}
} );
