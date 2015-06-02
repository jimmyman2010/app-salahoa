/**
 * Created by ManTran on 6/2/2015.
 */
define(['app'], function (learningBuddha) {
    'use strict';

    learningBuddha.config(function ($translateProvider) {

        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.translations('en', {
            'Learning Buddha': "Learning Buddha",
            Login: "Login",
            Username: "Username",
            Password: "Password"
        });
        $translateProvider.translations('vi', {
            'Learning Buddha': "Học Phật",
            Login: "Đăng nhập",
            Username: "Tên đăng nhập",
            Password: "Mật khẩu"
        });
        $translateProvider.preferredLanguage("vi");
        $translateProvider.fallbackLanguage("en");

    });

});