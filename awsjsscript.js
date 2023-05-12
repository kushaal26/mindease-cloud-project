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

        var moods = result.data.dynamo_data_moods;
        var sleep = result.data.dynamo_data_sleep;

        console.log("moods: "+JSON.stringify(moods));
        console.log("sleep: "+JSON.stringify(sleep));

        var data = {"moods" : moods, "sleep" : sleep};

        insertData(data);
        // insertDataSleep(sleep)

    }).catch(function (error) {
        console.log(error);
    });

}

function insertData(data){

    console.log(data);

    var apigClient = apigClientFactory.newClient({
        apiKey: "GgVonluf8j5A9hkUT2tbY2n7q3i8Rj7E2GGEMfhS",
    });
    var params = {
        
    };

    var body = data;

    var additionalParams = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    apigClient.insertrdsPost(params, body, additionalParams).then(function (result) {

        console.log(result);

    }).catch(function (error) {
        console.log(error);
    });



}

