# ==========================================================================
# Project:   Nextgen
# Copyright: @2012 My Company, Inc.
# ==========================================================================

# CONFIGURE YOUR APPS PAGE TITLE
config :nextgen, :title => 'Cloud NextGen' 

# CONFIGURE FRAMEWORKS
config :all, :required => [:sproutcore, :cloudos], :minify => true, :html5_history => true

# CONFIGURE THEMES
 config :all, :theme => 'cloudos_theme'
 config :cloudos_theme,  :theme_name => 'cloudos_theme'