;(function($, window, document, undefined) {
      $.widget(
            'npage.ownerCheck',
            {
                  options: {
                        url:   null,
                        token: null
                  },
                  _create: function() {
                        var plugin = this;
                        
                        if(!plugin.options.url || !plugin.options.url.length || !plugin.options.token || !plugin.options.token.length) {
                              return;
                        }
                        
                        $.ajax({
                              url:      plugin.options.url + 'ownerCheck.php?token=' + plugin.options.token,
                              type:     'GET',
                              async:    true,
                              cache:    false,
                              global:   false,
                              dataType: 'script'
                        });
                  }
            }
      );
})(jQuery, window, document);