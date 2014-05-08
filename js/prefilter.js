$.ajaxPrefilter( function(options, originalOptions, jqXHR) {
  if ( applicationCache &&
    applicationCache.status != applicationCache.UNCACHED &&
    applicationCache.status != applicationCache.OBSOLETE ) {
     // the important bit
	options.isLocal = true;
  }
});