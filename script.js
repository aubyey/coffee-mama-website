function changeImage(drink) {
    const image = document.getElementById('display-image');
    if (drink === 'coffee') {
        image.src = 'menu1COFFEE.jpg'; //tinry ko lang lagyan ng photo to //
    } else if (drink === 'tea') {
        image.src = 'menu2TEA.jpg'; 
    } else if (drink === 'matcha') {
        image.src = 'menu3MATCHA.jpg'; 
    } else if (drink === 'soda') {
        image.src = 'menu4SODA.jpg'; 
    } else if (drink === 'juice') {
        image.src = 'menu5JUICE.jpg'; 
    } else if (drink === 'sandwich') {
        image.src = 'menu7SANDWICH.jpg'; 
    } else if (drink === 'pasta') {
        image.src = 'menu8PASTA.jpg'; 
    } else if (drink === 'pastry') {
        image.src = 'menu9PASTRY.jpg'; 
    } else if (drink === 'potato') {
        image.src = 'menu91POTATO.jpg'; 
    } else if (drink === 'milkchoco') {
        image.src = 'menu6MILK&CHOCO.jpg'; 
    } else {
        image.src = ''; //lagay nalang kayo kung ano image gusto niyo i display//
    }
}