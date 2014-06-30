; Make file for base install. Installs latest version.

core = 7.x

api = 2

projects[drupal][version] = 7.14

; ***** base modules *****
projects[ctools][subdir] = "contrib"

projects[libraries][subdir] = "contrib"

projects[menu_block][subdir] = "contrib"

projects[entityreference][subdir] = "contrib"

projects[views][subdir] = "contrib"

projects[views_slideshow][subdir] = "contrib"

projects[locations][subdir] = "contrib"
projects[locations][version] = 3.x-dev

projects[conditional_styles][subdir] = "contrib"

; ***** Webform, select list & ther option *****
projects[webform][subdir] = "contrib"

projects[webform_validation][subdir] = "contrib"

projects[options_element][subdir] = "contrib"

; ***** admin functionality *****
projects[google_analytics][subdir] = "contrib"

projects[link][subdir] = "contrib"

projects[token][subdir] = "contrib"

projects[pathauto][subdir] = "contrib"

projects[backup_migrate][subdir] = "contrib"

projects[login_destination][subdir] = "contrib"

; ***** image functionality *****
projects[imce][subdir] = "contrib"

projects[imce_wysiwyg][subdir] = "contrib"

projects[imagecache_actions][subdir] = "contrib"

projects[imagecrop][subdir] = "contrib"

; ***** mobile functionality *****
projects[touch_icons][subdir] = "contrib"

; ***** text editor functionality *****
projects[wysiwyg][subdir] = "contrib"

; CKEditor
libraries[ckeditor][download][type]= "get"
libraries[ckeditor][download][url] = "http://download.cksource.com/CKEditor/CKEditor/CKEditor%203.6.2/ckeditor_3.6.2.tar.gz"
libraries[ckeditor][directory_name] = "ckeditor"
libraries[ckeditor][destination] = "libraries"

; Themes
projects[] = zen

