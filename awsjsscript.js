function submitResponse() {

    event.preventDefault();

    var apigClient = apigClientFactory.newClient({
        apiKey: "GgVonluf8j5A9hkUT2tbY2n7q3i8Rj7E2GGEMfhS",
    });
    
    var user_response_text = document.getElementById("mood-text-box").value;
    console.log(user_response_text);

    var timeInput = document.getElementById("time-input-box");
    var timeValue = timeInput.value;
    var hours = timeValue.split(":")[0];
    var minutes = timeValue.split(":")[1];

    var params = {
        
    };

    // console.log(params);

    var body = {
        "inputs": user_response_text,
        "hours": hours,
        "minutes": minutes
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

