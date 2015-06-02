/**
 * Created by ManTran on 6/2/2015.
 */
define(['app'], function (learningBuddha) {
    'use strict';

    learningBuddha.config(function ($translateProvider) {

        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.translations('en', {
            learning_buddha: "Learning Buddha",
            Login: "Login",
            Username: "Username",
            Password: "Password"
        });
        $translateProvider.translations('vi', {
            learning_buddha: "Học Phật",
            Login: "Đăng nhập",
            Username: "Tên đăng nhập",
            Password: "Mật khẩu"
        });
        $translateProvider.preferredLanguage("en");
        $translateProvider.fallbackLanguage("en");

    });

});