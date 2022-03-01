// Run on load
$(document).ready(function() {
    // Should log: Start of script
    console.log('Start of script.');


    //Global variable
    // an array of 5 friends names

    var friends = ['Doug', 'Damon', 'Matt', 'Cole', 'Damon'];

    // 20 item name
    var items = [`ball`, `book`, `comb`, `flower pot`, `lampshade`, `magnifying glass`, `microscope`, `mug`, `newspaper`, `pencil`, `pillow`, `plunger`, `rock`, `spatula`, `spoon`, `stick`, `teapot`, `toothbrush`, `umbrella`, `watering can`]

    // 10 location name
    var locations = [`attic`, `backyard`, `baño`, `beach house`, `café`, `classroom`, `garden`, `kitchen`, `laboratory`, `park`];

    //Create/add 100 accusations to page 
    for (var i = 0; i < 100; i += 1) {
        // Create myBtn
        var myBtn = $(`<button id="accusation${i + 1}" class="accusation col-4 btn btn-lg btn-light h3 text-cneter px-3 py-4 mx-3 my-2">Accusation #${i + 1}</button>`);

        //Create friendsIndex, itemsIndex and locationsIndex
        var friendsIndex = friends[i];
        var itemsIndex = items[i];
        var locationsIndex = locations[i];

        //keeps friendIndex 0 to 4
        if (i >= 5){
            friendsIndex = friends[i % 5];
        }

        //keeps itemsIndex = 0 to 20
        if (i >= 20){
            itemsIndex = items [i % 20];
        }

        //Should log: Accusation #__: I accuse friendIndex[i], with the itemsIndex[i], in the locationIndex[i];
        console.log('Accusation #${i + 1}: I accuse ${friendIndex}, with the ${itemIndex} in the ${locationIndex}!');
        $('body').append(myBtn);
        //Creates myAccusation/returns createAccusation function with arguments...
        var myAccusation = createAccusation(friendsIndex, itemsIndex, locationsIndex);
        //Appends myAccusation to #row2
        $('#row2').append(myAccusation);

        function createAccusation(friend, item, location) {
            //When myBtn clicked...
            return myBtn.click(function(event) {
                // Should alert: Accusation#__: I accuse friend, with the item, in the location!
                alert(`${event.target.textContent}: I accuse ${friend}, with the ${item} in the ${location}!`);
            })
        };
    }
    // Should log: End of Script.
    console.log('End of Script.')
})