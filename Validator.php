<?php

if (isset($_POST['letterArr'])) {

    $letterArr = $_POST['letterArr'];

    if (in_array("N102", $letterArr) &&
        in_array("S106", $letterArr) &&
        in_array("T107", $letterArr) &&
        in_array("V202", $letterArr)) {

        $html = generateInfoContent();

        $response = array('success' => true,
                          'lat'     => '34.09060',
                          'lng'     => '-118.3461',
                          'info' => $html);
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

function generateInfoContent() { 
    $html ='<div id="content">
                <h1>Formosa Cafe</h1>
                <div>7156 Santa Monica Blvd</div>
                <div>West Hollywood, CA 90046</div>
            </div>';
    

    return $html;
}

?>
    
