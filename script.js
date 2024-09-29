function changeImage(drink) {
    const image = document.getElementById('display-image');
    if (drink === 'coffee') {
        image.src = 'TCM(logo).png'; //tinry ko lang lagyan ng photo to //
    } else if (drink === 'tea') {
        image.src = 'tea.jpg'; 
    } else if (drink === 'matcha') {
        image.src = 'matcha.jpg'; 
    } else {
        image.src = ''; //lagay nalang kayo kung ano image gusto niyo i display//
    }
}