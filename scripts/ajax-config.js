$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  if(options.url.match(/api.parse.com/)){
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'wrVA19CiMpRzDffPluaCDJNG4PwLSmDcgwFQpOWf';
    options.headers['X-Parse-REST-API-Key'] = 'XBw3AHGdqUkt4u8uQzR4zlol6Ps7hgVI2kjT3Y0W';
  }
});
