function submitResponse() {

    event.preventDefault();

    var apigClient = apigClientFactory.newClient({
        apiKey: "GgVonluf8j5A9hkUT2tbY2n7q3i8Rj7E2GGEMfhS",
    });
    
    var user_response_text = document.getElementById("mood-text-box").value;
    console.log(user_response_text);

    var params = {
        
    };

    // console.log(params);

    var body = {
        "inputs": user_response_text
    };

    var additionalParams = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    apigClient.classifyPost(params, body, additionalParams).then(function (result) {
        var label = result.data.classification;
        console.log(label);

    }).catch(function (error) {
        console.log(error);
    });

}

