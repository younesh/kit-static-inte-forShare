// Global
app.global = {
    init: function() {
        app.global.hellowWord();
        app.global.gulp_fix_encoding();
    },
    hellowWord: function() {
        console.log("Hello word , generated js work !!........... ");
    },

    /*---------------------------------------------*/
    gulp_fix_encoding: function() {
        $.get("data/a11p18.json", function(res) {
            console.log(res.length);
        });
    },
    gulp_fix_unsign: function(str) {
        console.log(str);
    }
};

// Run the global stuff __ from Y:O:U:N:E:S  C:H:R:A:K  __
app.global.init();