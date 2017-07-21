ACMRole = new Roles.Role('acm-user');
//ACMRole.allow('dictionary.update', true);
/**
 * This will make users only can edit this fields in the dictionary
 */
//ACMRole.helper('dictionary.allowedCategories', [ 'home', 'social' ]);



/**
 * Allow the Community user actions of the pages
 */
ACMRole.allow('pages.index', true);
ACMRole.allow('pages.insert', true);
ACMRole.allow('pages.update', true);
ACMRole.allow('pages.remove', true);