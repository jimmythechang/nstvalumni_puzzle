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
        
        console.log(this.letters);
    }

    this.validate = validate;
    function validate() {
        $.ajax({
            url: "/Validator.php",
            type: "POST",
            data: this.letters,
            success: function() {
                console.log("Successsss");
            },
            error: function() {
                console.log("Errorrrr");
            }
        });
    }
}



