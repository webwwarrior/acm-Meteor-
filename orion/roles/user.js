userRole = new Roles.Role('user-role');
Roles.registerAction('viewManageSiteLink', true);
Roles.registerAction('viewFullCatalog', true);

userRole.allow('viewManageSiteLink', false);
userRole.allow('viewFullCatalog', false);