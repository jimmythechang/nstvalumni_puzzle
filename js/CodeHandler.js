var validatorUrl = "Validator.php";

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
            var splicedLetter = this.letters.splice(i, 1);
        }
        else {
            this.letters.push(id);
        }

        this.verifyLetters();
    }

    this.validate = validate;
    function validate() {
        var codeHandler = this;
        
        $.ajax({
            url: validatorUrl,
            type: "POST",
            data: { letterArr : this.letters },
            dataType: "JSON",
            success: function(data) {
                if (data.success) {
                    $('#canvas').fadeOut(500, function() {
                        $('#canvasContainer').remove();
                        $('#mapContainer').css('height', '500');
                        MapHandler.mapInitialize(data.lat, data.lng, data.address);

                        // Shoot another AJAX call to get the form; 
                        // the puzzle "hangs" otherwise.
                        $('#infoContainer').html(data.info);
                        codeHandler.getForm();                        
                    });
                }                
            },
            error: function(data) {
            }
        });
    }
    
    this.getForm = getForm;
    function getForm() {
        $.ajax({
            url: validatorUrl,
            type: "POST",
            data: {letterArr: this.letters, action: 'getForm'},
            dataType: "JSON",
            success: function(data) {
                $('body').append(data.html);
            },
            error: function(data) {
                
            }
            
        })
    }


}



