/**
 * Created by ManTran on 6/10/2015.
 */
var SALA = SALA || {};

SALA.helper = {
    getFilePath: function($file, $hasPrefix) {
        var path = window.location.pathname;
        path = path.substr( path, path.length - 10 );
        if($hasPrefix) {
            return 'file://' + path + $file;
        }
        return path + $file;
    }
};