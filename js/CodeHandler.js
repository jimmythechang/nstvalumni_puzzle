/**
 * Responsible for sending off clicked letters for verification.
 */

function CodeHandler() {
    this.letters = [];

    this.verifyLetters = verifyLetters;
    function verifyLetters() {
        // Hint, hint...
        if (this.letters.length != 4) {
            return;
        }
        else {
            this.validate();
        }
    }

    this.registerLetter = registerLetter;
    function registerLetter(letter) {
        var id = letter.id;
        var i = this.letters.indexOf(id);

        // Either removes the element from the array if it already
        // exists, or adds it to the end.
        if (i >= 0) {
            this.letters.splice(i, 1);
        }
        else {
            this.letters.push(id);
        }

        this.verifyLetters();
        console.log(this.letters);
    }

    this.validate = validate;
    function validate() {
        $.ajax({
            url: "Validator.php",
            type: "POST",
            data: { letterArr : this.letters },
            dataType: "JSON",
            success: function(data) {
                console.log(data);
                if (data.success) {
                    $('#canvas').fadeOut(500, function() {
                        $(this).remove()

                        $('#canvasContainer').hide();
                        MapHandler.mapInitialize(data.lat, data.lng, data.info);
                        $('#canvasContainer').fadeIn(800);
                    });
                }
                //MapHandler.mapInitialize(data.lat, data.lng);
                
            },
            error: function() {
                console.log("Errorrrr");
            }
        });
    }


}



