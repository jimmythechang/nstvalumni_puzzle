<?php

if (isset($_POST['letterArr'])) {

    $letterArr = $_POST['letterArr'];

    if (in_array("N102", $letterArr) &&
        in_array("S106", $letterArr) &&
        in_array("T107", $letterArr) &&
        in_array("V202", $letterArr)) {

        $response = array('success' => true,
                          'payload' => $html);
    }
    else {
        $response = array('success' => false);
    }

    echo json_encode($response);
    
}
else {
    echo "Nothing here for you, nope.";
    die();
}

function generateHtml() {
    
}

?>
